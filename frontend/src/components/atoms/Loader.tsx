import React from 'react'
import clsx from 'clsx'

export interface LoaderProps {
  variant?: 'spinner' | 'dots' | 'bar'
  size?: 'sm' | 'md' | 'lg'
  color?: string
  className?: string
}

/**
 * Loader Component
 *
 * Multiple loading state indicators for different UI contexts.
 * Use for async operations, data fetching, and state transitions.
 *
 * @example
 * ```tsx
 * <Loader variant="spinner" size="lg" />
 * <Loader variant="dots" />
 * ```
 */
export const Loader: React.FC<LoaderProps> = ({
  variant = 'spinner',
  size = 'md',
  color = 'text-cyan-500',
  className = '',
}) => {
  const sizes = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
  }

  if (variant === 'spinner') {
    return (
      <svg
        className={clsx('animate-spin', sizes[size], color, className)}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        />
      </svg>
    )
  }

  if (variant === 'dots') {
    return (
      <div className={clsx('flex space-x-1', className)}>
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className={clsx(
              'rounded-full animate-bounce',
              sizes[size],
              color,
              { 'animation-delay-100': i === 1, 'animation-delay-200': i === 2 },
            )}
          />
        ))}
      </div>
    )
  }

  return (
    <div className={clsx('w-full bg-neutral-200 rounded-full overflow-hidden', className)}>
      <div
        className={clsx('h-1 bg-gradient-primary animate-pulse', color)}
        style={{ animation: 'pulse 2s infinite' }}
      />
    </div>
  )
}

Loader.displayName = 'Loader'
