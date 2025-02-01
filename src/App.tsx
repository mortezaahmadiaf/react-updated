import Routes from './entities'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { ConfirmPopup } from 'primereact/confirmpopup'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from './utilities/queryClient'
import ErrorBoundary from './components/error-boundary'
export const App = () => {
  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <ToastContainer />
        <ConfirmPopup />
        <Routes />
      </QueryClientProvider>
    </ErrorBoundary>
  )
}
