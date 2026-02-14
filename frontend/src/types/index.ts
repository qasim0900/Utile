// Type definitions for the application
export interface ServiceCategory {
  id: string
  name: string
  icon: string
  description: string
  image?: string
  price?: number
}

export interface ServiceProvider {
  id: string
  name: string
  email: string
  phone: string
  avatar?: string
  rating: number
  reviewCount: number
  services: string[]
  verified: boolean
}

export interface Customer {
  id: string
  name: string
  email: string
  phone: string
  avatar?: string
  address: string
  city: string
  zipCode: string
}

export interface Order {
  id: string
  customerId: string
  providerId: string
  serviceId: string
  status: 'pending' | 'confirmed' | 'in-progress' | 'completed' | 'cancelled'
  scheduledDate: Date
  price: number
  description?: string
  createdAt: Date
  updatedAt: Date
}

export interface Review {
  id: string
  orderId: string
  providerId: string
  customerId: string
  rating: number
  comment: string
  createdAt: Date
}

export interface API_Response<T> {
  success: boolean
  data?: T
  error?: string
  message?: string
}

export interface PaginationParams {
  page: number
  limit: number
  sortBy?: string
  sortOrder?: 'asc' | 'desc'
}

export interface PaginatedResponse<T> {
  items: T[]
  total: number
  page: number
  limit: number
  pages: number
}
