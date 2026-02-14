import React from 'react'
import clsx from 'clsx'

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  className?: string
  hoverable?: boolean
}

/**
 * Card Component
 *
 * Reusable card wrapper with consistent styling and optional hover effects.
 * Foundation for building layouts and service listings.
 *
 * @example
 * ```tsx
 * <Card hoverable>
 *   <h3>Service Title</h3>
 *   <p>Service description</p>
 * </Card>
 * ```
 */
export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ children, className = '', hoverable = false, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={clsx(
          'bg-white rounded-3xl border border-neutral-100 shadow-sm overflow-hidden',
          hoverable && 'transition-all duration-500 hover:shadow-2xl hover:shadow-primary-500/10 hover:-translate-y-2 cursor-pointer',
          className,
        )}
        {...props}
      >
        {children}
      </div>
    )
  },
)

Card.displayName = 'Card'
