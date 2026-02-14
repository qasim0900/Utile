import React from 'react'
import clsx from 'clsx'
import { Button } from '@components/atoms'

export interface AlertProps {
  variant?: 'success' | 'error' | 'warning' | 'info'
  title?: string
  message: string
  onClose?: () => void
  isDismissible?: boolean
  className?: string
}

/**
 * Alert Component
 *
 * Status messages for notifications, errors, and important information.
 * Appears inline with contextual styling based on the alert type.
 *
 * @example
 * ```tsx
 * <Alert variant="success" message="Order placed successfully!" />
 * <Alert variant="error" title="Error" message="Failed to process payment" isDismissible />
 * ```
 */
export const Alert: React.FC<AlertProps> = ({
  variant = 'info',
  title,
  message,
  onClose,
  isDismissible = true,
  className = '',
}) => {
  const [isVisible, setIsVisible] = React.useState(true)

  const handleClose = () => {
    setIsVisible(false)
    onClose?.()
  }

  if (!isVisible) return null

  const variants = {
    success: {
      bg: 'bg-green-50',
      border: 'border-green-200',
      text: 'text-green-800',
      icon: '✓',
      iconBg: 'bg-green-100',
    },
    error: {
      bg: 'bg-red-50',
      border: 'border-red-200',
      text: 'text-red-800',
      icon: '✕',
      iconBg: 'bg-red-100',
    },
    warning: {
      bg: 'bg-yellow-50',
      border: 'border-yellow-200',
      text: 'text-yellow-800',
      icon: '!',
      iconBg: 'bg-yellow-100',
    },
    info: {
      bg: 'bg-blue-50',
      border: 'border-blue-200',
      text: 'text-blue-800',
      icon: 'ℹ',
      iconBg: 'bg-blue-100',
    },
  }

  const style = variants[variant]

  return (
    <div
      className={clsx(
        'flex items-start gap-4 p-4 rounded-lg border flex-wrap',
        style.bg,
        style.border,
        style.text,
        className,
      )}
      role="alert"
    >
      <div className={clsx('flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold', style.iconBg)}>
        {style.icon}
      </div>
      <div className="flex-grow">
        {title && <h4 className="font-semibold mb-1">{title}</h4>}
        <p className="text-sm">{message}</p>
      </div>
      {isDismissible && (
        <button
          onClick={handleClose}
          className="flex-shrink-0 p-1 hover:opacity-70 transition-opacity"
          aria-label="Close alert"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      )}
    </div>
  )
}

Alert.displayName = 'Alert'
