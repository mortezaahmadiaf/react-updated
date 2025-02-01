import { useEffect, useState } from 'react'

export const useSearch = <T>(value: T, delay = 500) => {
  const [searchValue, setSearchValue] = useState<T>(value)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSearchValue(value)
    }, delay)

    return () => clearTimeout(timeout)
  }, [value, delay])

  return searchValue
}
