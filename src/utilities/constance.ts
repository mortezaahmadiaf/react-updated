const baseAddress = '10.31.11.90'
// const baseAddress = '192.168.0.148'
// const baseAddress = '185.129.168.122'
export const File_Server_Address = `http://${baseAddress}:4000`
export const BASE_URL = `http://${baseAddress}:4000/api`
export const order_request_time = 100
export const ROWS_PER_PAGE = 10
export const ROLES = {
  ADMIN: 'ADMIN',
  USER: 'USER',
  TRADER: 'TRADER',
}

export const apiEndPoints = {}

export const IraniianMobile = new RegExp('^(\\+98|0)?9\\d{9}$')
export const decimalDigits = 4
