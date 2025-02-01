/* eslint-disable  @typescript-eslint/no-explicit-any */
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { UserAccessLayout } from 'app/layout/user-access-layout'
import ErrorBoundary from './error-boundary'

export const checkAuthorities = (
  authorities: Array<string | undefined> = [],
  hasAuthorties: Array<string> = []
) => {
  if (authorities?.length) {
    if (hasAuthorties?.length === 0) {
      return true
    }

    return hasAuthorties.some((auth) => authorities.includes(auth))
  }
  return false
}

export const PrivateRoute = ({
  element,
  authorities = [],
}: {
  element?: any
  authorities: Array<string>
}) => {
  const isAuthenticated = true
  const location = useLocation()

  if (isAuthenticated) {
    if (element && checkAuthorities([], authorities)) {
      return <ErrorBoundary>{element}</ErrorBoundary>
    }

    return (
      <ErrorBoundary>
        <Outlet />
      </ErrorBoundary>
    )
  }
  return (
    <Navigate
      to={{ pathname: 'auth/authentication' }}
      state={{ pathname: location.pathname }}
    />
  )
}

export const PrivateLayout = ({ element }: { element?: any }) => {
  const location = useLocation()

  const isAuthenticated = true

  if (isAuthenticated) {
    if (element) {
      return <ErrorBoundary>{element}</ErrorBoundary>
    }
    return (
      <ErrorBoundary>
        <UserAccessLayout />
      </ErrorBoundary>
    )
  }
  return (
    <Navigate
      to={{ pathname: 'auth/authentication' }}
      state={{ pathname: location.pathname }}
    />
  )
}
