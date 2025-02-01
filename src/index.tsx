import ReactDOM from 'react-dom/client'
import { App } from './App'
import 'primeicons/primeicons.css'
import './styles/index.css'
import './styles/index.scss'
import axiosInterceptor from './utilities/axios-interceptor'
import ErrorBoundary from './components/error-boundary'

axiosInterceptor(() => {})
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
)
