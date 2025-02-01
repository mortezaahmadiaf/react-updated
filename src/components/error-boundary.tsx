/* eslint-disable  @typescript-eslint/no-explicit-any */

import React, { JSX } from 'react'

interface IErrorBoundaryProps {
  readonly children: JSX.Element | JSX.Element[]
}

interface IErrorBoundaryState {
  readonly error: any
  readonly errorInfo: any
}

export class ErrorBoundary extends React.Component<
  IErrorBoundaryProps,
  IErrorBoundaryState
> {
  readonly state: IErrorBoundaryState = {
    error: undefined,
    errorInfo: undefined,
  }

  componentDidCatch(error: any, errorInfo: any) {
    this.setState({
      error,
      errorInfo,
    })
  }

  render() {
    const { error, errorInfo } = this.state
    if (errorInfo) {
      const errorDetails =
        process.env.NODE_ENV === 'development' ? (
          <details className="preserve-space">
            {error && error.toString()}
            <br />
            {errorInfo.componentStack}
          </details>
        ) : undefined
      return (
        <div className="p-5">
          <h2 className="bg-red-500">خطایی رخ داده .</h2>
          <div
            onClick={() => {
              window.location.reload()
            }}
            className=" text-red-600 flex items-center px-6 py-2 hover:bg-red-200  cursor-pointer rounded-lg  underline underline-offset-8 transition-all  hover:scale-110"
          >
            بروز رسانی
          </div>
          {errorDetails}
        </div>
      )
    }
    return this.props.children
  }
}

export default ErrorBoundary
