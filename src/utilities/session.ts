export const setSessionToken = (token: string) => {
  sessionStorage.setItem('token', token)
  localStorage.setItem('token', token)
}
export const getSessionToken = () => {
  return localStorage.getItem('token') || sessionStorage.getItem('token')
}
export const removeSessionToken = () => {
  sessionStorage.removeItem('token')
  localStorage.removeItem('token')
}
