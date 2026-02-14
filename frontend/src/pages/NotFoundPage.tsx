import React from 'react'
import { Link } from 'react-router-dom'
import { ROUTES } from '@constants/index'
import { Button } from '@components'

/**
 * Not Found Page
 *
 * 404 error page with navigation back to home.
 */
export const NotFoundPage: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-neutral-50">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-neutral-900 mb-4">404</h1>
        <h2 className="text-3xl font-bold text-neutral-700 mb-2">Page Not Found</h2>
        <p className="text-neutral-600 mb-8 max-w-md">
          Sorry, the page you're looking for doesn't exist. It might have been moved or deleted.
        </p>
        <Link to={ROUTES.HOME}>
          <Button variant="primary">Back to Home</Button>
        </Link>
      </div>
    </div>
  )
}

NotFoundPage.displayName = 'NotFoundPage'
