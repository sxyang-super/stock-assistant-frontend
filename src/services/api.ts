import axios from 'axios'
import type { AnalyseStatusDetail, PageResponse } from '../types/api'

// Get API configuration from environment variables
const getApiBaseUrl = () => {
  return import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080';
};

const getApiTimeout = () => {
  const timeout = import.meta.env.VITE_API_TIMEOUT;
  return timeout ? parseInt(timeout, 10) : 10000;
};

const isDebugMode = () => {
  return import.meta.env.VITE_API_DEBUG === 'true';
};

// Create axios instance
const api = axios.create({
  baseURL: getApiBaseUrl(),
  timeout: getApiTimeout(),
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    // Add token if available
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    
    // Debug mode logging
    if (isDebugMode()) {
      console.log(`[API Request] ${config.method?.toUpperCase()} ${config.url}`, {
        baseURL: config.baseURL,
        params: config.params,
        data: config.data,
      });
    }
    
    return config
  },
  (error) => {
    console.error('Request Error:', error)
    return Promise.reject(error)
  }
)

// Response interceptor
api.interceptors.response.use(
  (response) => {
    // Debug mode logging
    if (isDebugMode()) {
      console.log(`[API Response] ${response.config.method?.toUpperCase()} ${response.config.url}`, {
        status: response.status,
        data: response.data,
      });
    }
    
    return response.data
  },
  (error) => {
    console.error('API Error:', error)
    
    // Handle specific error cases
    if (error.response?.status === 401) {
      // Handle unauthorized error
      console.warn('Unauthorized access, redirecting to login...');
      // window.location.href = '/login';
    }
    
    return Promise.reject(error)
  }
)

// API interface definitions
export const analyseStatusApi = {
  // Get paginated list
  getListByPage: (page: number = 1, pageSize: number = 10): Promise<PageResponse> => {
    return api.get(`/lfaqt-analyse-status/list-by-page?page=${page}&pageSize=${pageSize}`)
  },

  // Get details
  getDetail: (type: string, code: string): Promise<AnalyseStatusDetail> => {
    return api.get(`/lfaqt-analyse-status/${type}/${code}`)
  },

  // Get stock info with name
  getStockInfo: async (type: string, code: string): Promise<{ name: string }> => {
    try {
      // 尝试获取股票名称的API端点
      return await api.get(`/stock-info/${type}/${code}`)
    } catch (error) {
      console.warn('Failed to fetch stock name:', error)
      // 如果获取失败，返回空名称
      return { name: '' }
    }
  },
}

export default api