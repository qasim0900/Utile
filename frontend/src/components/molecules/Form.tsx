import React from 'react'
import clsx from 'clsx'
import { Input, Button } from '@components/atoms'

export interface FormFieldProps {
  name: string
  label?: string
  type?: string
  value: string
  error?: string
  onChange: (value: string) => void
  placeholder?: string
  required?: boolean
  className?: string
}

export interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
  children: React.ReactNode
  className?: string
}

/**
 * Form Component
 *
 * Wrapper for form handling with consistent styling and error management.
 * Pairs with FormField components for structured form building.
 *
 * @example
 * ```tsx
 * <Form onSubmit={handleSubmit}>
 *   <FormField name="email" label="Email" value={email} onChange={setEmail} />
 *   <FormField name="password" label="Password" type="password" value={password} onChange={setPassword} />
 *   <Button type="submit">Submit</Button>
 * </Form>
 * ```
 */
export const Form = React.forwardRef<HTMLFormElement, FormProps>(
  ({ onSubmit, children, className = '', ...props }, ref) => {
    return (
      <form ref={ref} onSubmit={onSubmit} className={clsx('space-y-4', className)} {...props}>
        {children}
      </form>
    )
  },
)

Form.displayName = 'Form'

export const FormField: React.FC<FormFieldProps> = ({
  name,
  label,
  type = 'text',
  value,
  error,
  onChange,
  placeholder,
  required = false,
  className = '',
}) => {
  return (
    <div className={clsx('flex flex-col', className)}>
      <Input
        id={name}
        name={name}
        type={type}
        label={label}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        error={error}
        required={required}
      />
    </div>
  )
}

FormField.displayName = 'FormField'
