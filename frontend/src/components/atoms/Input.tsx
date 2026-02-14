import React from 'react'
import clsx from 'clsx'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  helperText?: string
  className?: string
  containerClassName?: string
}

/**
 * Input Component
 *
 * Accessible form input with label, error handling, and helper text.
 * Uses semantic HTML for better accessibility and SEO.
 *
 * @example
 * ```tsx
 * <Input 
 *   label="Email" 
 *   type="email" 
 *   placeholder="your@email.com"
 *   error="Invalid email"
 * />
 * ```
 */
export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      error,
      helperText,
      className = '',
      containerClassName = '',
      type = 'text',
      ...props
    },
    ref,
  ) => {
    const baseInputClasses =
      'w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 transition-all duration-200'
    const inputClasses = clsx(
      baseInputClasses,
      error
        ? 'border-red-500 focus:ring-red-500 focus:border-red-500'
        : 'border-neutral-300 focus:ring-cyan-500 focus:ring-opacity-50 focus:border-cyan-500',
      className,
    )

    return (
      <div className={clsx('flex flex-col', containerClassName)}>
        {label && (
          <label className="mb-2 text-sm font-semibold text-neutral-900">
            {label}
            {props.required && <span className="text-red-500 ml-1">*</span>}
          </label>
        )}
        <input ref={ref} type={type} className={inputClasses} {...props} />
        {error && <p className="mt-1 text-sm font-medium text-red-500">{error}</p>}
        {helperText && !error && <p className="mt-1 text-sm text-neutral-500">{helperText}</p>}
      </div>
    )
  },
)

Input.displayName = 'Input'
