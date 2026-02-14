import React from 'react'
import clsx from 'clsx'
import { Footer } from '../components'
import { Navigation } from '../components/Navigation'

export interface AppLayoutProps {
  children: React.ReactNode
  showHeader?: boolean
  showFooter?: boolean
  withPadding?: boolean
}

export const AppLayout: React.FC<AppLayoutProps> = ({
  children,
  showHeader = true,
  showFooter = true,
}) => {
  return (
    <div className="flex flex-col min-h-screen">
      {showHeader ? <Navigation /> : null}

      <main
        className={clsx(
          'flex-grow w-full mx-auto transition-all duration-500',
        )}
      >
        {children}
      </main>

      {showFooter && <Footer />}
    </div>
  )
}

AppLayout.displayName = 'AppLayout'
