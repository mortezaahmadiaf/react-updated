import axios, {
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios'
import { BASE_URL } from './constance'
import { getSessionToken } from './session'

const TIMEOUT = 1 * 60 * 1000
axios.defaults.timeout = TIMEOUT
axios.defaults.baseURL = BASE_URL

const setupAxiosInterceptors = (onUnauthenticated: () => void) => {
  const onRequestSuccess = (
    config: InternalAxiosRequestConfig<{ headers: { Authorization: string } }>
  ) => {
    const token = getSessionToken()
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  }
  const onResponseSuccess = (response: AxiosResponse<'', ''>) => {
    return response
  }
  const onResponseError = (err: AxiosError<{ message: string }>) => {
    const status = err.status || (err.response ? err.response.status : 0)

    if (status === 403 || status === 401) {
      onUnauthenticated()
    }

    return Promise.reject({
      ...err,
      message: `${err.response?.data?.message}`,
    })
  }
  axios.interceptors.request.use(onRequestSuccess)
  axios.interceptors.response.use(onResponseSuccess, onResponseError)
}

export default setupAxiosInterceptors
