import { decimalDigits } from './constance'

function NumberFormatter(num: number | string | null, digit = decimalDigits) {
  const number = Number(num)

  if (num && num !== 0) {
    return new Intl.NumberFormat('en-US', {
      minimumFractionDigits: 0,
      maximumFractionDigits: digit || 0,
    }).format(number)
  } else {
    return '0'
  }
}

export default NumberFormatter
