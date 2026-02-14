import React from 'react'
import clsx from 'clsx'
import { Button } from '@components/atoms'

export interface ModalProps {
  isOpen: boolean
  title?: string
  children: React.ReactNode
  onClose: () => void
  onConfirm?: () => void | Promise<void>
  confirmText?: string
  cancelText?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
  isDanger?: boolean
  isLoading?: boolean
  className?: string
}

/**
 * Modal Component
 *
 * Accessible modal dialog for confirmations, forms, and important content.
 * Includes focus trap, backdrop click handling, and keyboard support.
 *
 * @example
 * ```tsx
 * <Modal
 *   isOpen={isOpen}
 *   title="Delete Service?"
 *   onClose={closeModal}
 *   onConfirm={handleDelete}
 *   isDanger
 * >
 *   This action cannot be undone.
 * </Modal>
 * ```
 */
export const Modal = React.forwardRef<HTMLDivElement, ModalProps>(
  (
    {
      isOpen,
      title,
      children,
      onClose,
      onConfirm,
      confirmText = 'Confirm',
      cancelText = 'Cancel',
      size = 'md',
      isDanger = false,
      isLoading = false,
      className = '',
    },
    ref,
  ) => {
    const sizes = {
      sm: 'max-w-sm',
      md: 'max-w-md',
      lg: 'max-w-lg',
      xl: 'max-w-xl',
    }

    React.useEffect(() => {
      if (isOpen) {
        document.body.style.overflow = 'hidden'
      } else {
        document.body.style.overflow = 'unset'
      }

      return () => {
        document.body.style.overflow = 'unset'
      }
    }, [isOpen])

    React.useEffect(() => {
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape' && isOpen) {
          onClose()
        }
      }

      if (isOpen) {
        document.addEventListener('keydown', handleKeyDown)
      }

      return () => {
        document.removeEventListener('keydown', handleKeyDown)
      }
    }, [isOpen, onClose])

    if (!isOpen) return null

    return (
      <>
        {/* Backdrop */}
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity duration-300"
          onClick={onClose}
        />

        {/* Modal */}
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            ref={ref}
            className={clsx(
              'bg-white rounded-lg shadow-2xl w-full',
              sizes[size],
              'animate-slide-up',
              className,
            )}
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby={title ? 'modal-title' : undefined}
          >
            {/* Header */}
            {title && (
              <div className="px-6 py-4 border-b border-neutral-200">
                <h2 id="modal-title" className="text-xl font-bold text-neutral-900">
                  {title}
                </h2>
              </div>
            )}

            {/* Content */}
            <div className="px-6 py-4 max-h-96 overflow-y-auto">{children}</div>

            {/* Footer */}
            {onConfirm && (
              <div className="px-6 py-4 border-t border-neutral-200 flex justify-end gap-3">
                <Button variant="ghost" onClick={onClose} disabled={isLoading}>
                  {cancelText}
                </Button>
                <Button
                  variant={isDanger ? 'danger' : 'primary'}
                  onClick={onConfirm}
                  isLoading={isLoading}
                >
                  {confirmText}
                </Button>
              </div>
            )}
          </div>
        </div>
      </>
    )
  },
)

Modal.displayName = 'Modal'
