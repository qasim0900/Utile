import axios, { AxiosInstance, AxiosError, AxiosResponse } from 'axios'
import { API_BASE_URL, API_ENDPOINTS } from '@constants/index'
import type { API_Response } from '@types/index'

// Create axios instance with default config
const apiClient: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Request interceptor
apiClient.interceptors.request.use(
  (config: any) => {
    const token = localStorage.getItem('auth_token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error: any) => Promise.reject(error),
)

// Response interceptor
apiClient.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: any) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('auth_token')
      window.location.href = '/login'
    }
    return Promise.reject(error)
  },
)

// Generic API response handler
const handleResponse = <T>(data: T): API_Response<T> => {
  return {
    success: true,
    data,
  }
}

const handleError = <T>(error: AxiosError): API_Response<T> => {
  return {
    success: false,
    data: null as unknown as T,
    error: error.message,
    message: (error.response?.data as any)?.message || 'An error occurred',
  }
}

// API Service Class
export class APIService {
  // Utility methods
  static async get<T>(url: string): Promise<API_Response<T>> {
    try {
      const response = await apiClient.get<T>(url)
      return handleResponse(response.data)
    } catch (error) {
      return handleError<T>(error as AxiosError)
    }
  }

  static async post<T>(url: string, data: any): Promise<API_Response<T>> {
    try {
      const response = await apiClient.post<T>(url, data)
      return handleResponse(response.data)
    } catch (error) {
      return handleError<T>(error as AxiosError)
    }
  }

  static async put<T>(url: string, data: any): Promise<API_Response<T>> {
    try {
      const response = await apiClient.put<T>(url, data)
      return handleResponse(response.data)
    } catch (error) {
      return handleError<T>(error as AxiosError)
    }
  }

  static async delete<T>(url: string): Promise<API_Response<T>> {
    try {
      const response = await apiClient.delete<T>(url)
      return handleResponse(response.data)
    } catch (error) {
      return handleError<T>(error as AxiosError)
    }
  }

  // Auth endpoints
  static async login(email: string, password: string) {
    return this.post(API_ENDPOINTS.LOGIN, { email, password })
  }

  static async register(data: any) {
    return this.post(API_ENDPOINTS.REGISTER, data)
  }

  static async getProfile() {
    return this.get(API_ENDPOINTS.PROFILE)
  }

  // Service endpoints
  static async getServices(params?: any) {
    return this.get(API_ENDPOINTS.SERVICES + (params ? '?' + new URLSearchParams(params) : ''))
  }

  static async getServiceById(id: string) {
    return this.get(API_ENDPOINTS.SERVICE_BY_ID(id))
  }

  // Order endpoints
  static async getOrders(params?: any) {
    return this.get(API_ENDPOINTS.ORDERS + (params ? '?' + new URLSearchParams(params) : ''))
  }

  static async getOrderById(id: string) {
    return this.get(API_ENDPOINTS.ORDER_BY_ID(id))
  }

  static async createOrder(data: any) {
    return this.post(API_ENDPOINTS.ORDER_CREATE, data)
  }

  // Provider endpoints
  static async getProviders(params?: any) {
    return this.get(API_ENDPOINTS.PROVIDERS + (params ? '?' + new URLSearchParams(params) : ''))
  }

  static async getProviderById(id: string) {
    return this.get(API_ENDPOINTS.PROVIDER_BY_ID(id))
  }
}

export default apiClient
