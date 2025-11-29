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
}

export default api