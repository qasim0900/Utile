import React from 'react'
import clsx from 'clsx'

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'primary' | 'success' | 'warning' | 'error' | 'info' | 'default'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
}

/**
 * Badge Component
 *
 * Displays small labeled status pills or categories.
 * Used for order status, service categories, and tags.
 *
 * @example
 * ```tsx
 * <Badge variant="success">Completed</Badge>
 * <Badge variant="warning" size="sm">Pending</Badge>
 * ```
 */
export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  (
    {
      variant = 'default',
      size = 'md',
      className = '',
      children,
      ...props
    }: BadgeProps,
    ref,
  ) => {
    const variants: Record<string, string> = {
      primary: 'bg-cyan-100 text-cyan-800',
      success: 'bg-green-100 text-green-800',
      warning: 'bg-yellow-100 text-yellow-800',
      error: 'bg-red-100 text-red-800',
      info: 'bg-blue-100 text-blue-800',
      default: 'bg-neutral-100 text-neutral-800',
    }

    const sizes: Record<string, string> = {
      sm: 'px-2 py-0.5 text-xs font-medium',
      md: 'px-3 py-1 text-sm font-semibold',
      lg: 'px-4 py-1.5 text-base font-semibold',
    }

    return (
      <span
        ref={ref}
        className={clsx('inline-flex items-center rounded-full', variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </span>
    )
  },
)

Badge.displayName = 'Badge'
