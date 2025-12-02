import axios from 'axios'
import type { AnalyseStatusDetail, PageResponse } from '../types/api'

// Create axios instance
const api = axios.create({
  baseURL: 'http://localhost:8080',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Request interceptor
api.interceptors.request.use(
  (config) => {
    // You can add token here
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// Response interceptor
api.interceptors.response.use(
  (response) => {
    return response.data
  },
  (error) => {
    console.error('API Error:', error)
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