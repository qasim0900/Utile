// API Endpoints Configuration
export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3001/api'

export const API_ENDPOINTS = {
  // Auth
  LOGIN: '/auth/login',
  REGISTER: '/auth/register',
  LOGOUT: '/auth/logout',
  REFRESH: '/auth/refresh',
  PROFILE: '/auth/profile',

  // Services
  SERVICES: '/services',
  SERVICE_BY_ID: (id: string) => `/services/${id}`,
  SERVICE_CATEGORIES: '/services/categories',
  SERVICE_SEARCH: '/services/search',

  // Providers
  PROVIDERS: '/providers',
  PROVIDER_BY_ID: (id: string) => `/providers/${id}`,
  PROVIDER_SERVICES: (providerId: string) => `/providers/${providerId}/services`,
  PROVIDER_REVIEWS: (providerId: string) => `/providers/${providerId}/reviews`,

  // Orders
  ORDERS: '/orders',
  ORDER_BY_ID: (id: string) => `/orders/${id}`,
  ORDER_CREATE: '/orders',

  // Reviews
  REVIEWS: '/reviews',
  REVIEW_BY_ORDER: (orderId: string) => `/reviews/order/${orderId}`,
  REVIEW_CREATE: '/reviews',

  // Users
  USERS: '/users',
  USER_BY_ID: (id: string) => `/users/${id}`,
  UPDATE_PROFILE: '/users/profile',
}

// Routes Configuration
export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  REGISTER: '/register',
  DASHBOARD: '/dashboard',
  SERVICES: '/services',
  SERVICE_DETAIL: (id: string) => `/services/${id}`,
  PROVIDERS: '/providers',
  PROVIDER_DETAIL: (id: string) => `/providers/${id}`,
  ORDERS: '/orders',
  ORDER_DETAIL: (id: string) => `/orders/${id}`,
  PROFILE: '/profile',
  CHECKOUT: '/checkout',
  ABOUT: '/about',
  CONTACT: '/contact',
  TERMS: '/terms',
  PRIVACY: '/privacy',
  NOT_FOUND: '/404',
}

// Pagination Defaults
export const PAGINATION = {
  DEFAULT_PAGE: 1,
  DEFAULT_LIMIT: 20,
  MAX_LIMIT: 100,
}

// UI Constants
export const UI_CONSTANTS = {
  SIDEBAR_WIDTH: '280px',
  HEADER_HEIGHT: '70px',
  ANIMATION_DURATION: 300,
  DEBOUNCE_DELAY: 300,
}

// Service Categories
export const SERVICE_CATEGORIES = [
  { id: 'cleaning', label: 'Cleaning', icon: '🧹' },
  { id: 'gardening', label: 'Gardening', icon: '🌱' },
  { id: 'plumbing', label: 'Plumbing', icon: '🔧' },
  { id: 'electrical', label: 'Electrical', icon: '⚡' },
  { id: 'painting', label: 'Painting', icon: '🎨' },
]

// Order Status Labels
export const ORDER_STATUS_LABELS: Record<string, string> = {
  pending: 'Pending',
  confirmed: 'Confirmed',
  'in-progress': 'In Progress',
  completed: 'Completed',
  cancelled: 'Cancelled',
}

// Order Status Colors
export const ORDER_STATUS_COLORS: Record<string, string> = {
  pending: '#f59e0b',
  confirmed: '#3b82f6',
  'in-progress': '#8b5cf6',
  completed: '#10b981',
  cancelled: '#ef4444',
}

// Toast Position
export enum ToastPosition {
  TOP_LEFT = 'top-left',
  TOP_CENTER = 'top-center',
  TOP_RIGHT = 'top-right',
  BOTTOM_LEFT = 'bottom-left',
  BOTTOM_CENTER = 'bottom-center',
  BOTTOM_RIGHT = 'bottom-right',
}

// Modal Sizes
export enum ModalSize {
  SMALL = 'sm',
  MEDIUM = 'md',
  LARGE = 'lg',
  EXTRA_LARGE = 'xl',
}
