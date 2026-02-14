import React, { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { ROUTES } from '@constants/index'
import { AppLayout } from '@layouts/AppLayout'
import { HomePage, LoginPage, ServicesPage, NotFoundPage } from '@pages/index'

export const App: React.FC = () => {
  return (
    <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
      <Routes>
        <Route
          path={ROUTES.HOME}
          element={
            <AppLayout>
              <HomePage />
            </AppLayout>
          }
        />
        <Route
          path={ROUTES.SERVICES}
          element={
            <AppLayout>
              <ServicesPage />
            </AppLayout>
          }
        />
        <Route
          path={ROUTES.LOGIN}
          element={
            <AppLayout showFooter={false}>
              <LoginPage />
            </AppLayout>
          }
        />
        <Route
          path="*"
          element={
            <AppLayout>
              <NotFoundPage />
            </AppLayout>
          }
        />
      </Routes>
    </Suspense>
  )
}

export default App
