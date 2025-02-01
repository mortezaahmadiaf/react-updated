import { useState, useEffect } from 'react'

export const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState({
    xsm: false,
    sm: false,
    md: false,
    lg: false,
    xl: false,
    xl2: false,
  })
  const handleResize = () => {
    const tmp = {
      xsm: false,
      sm: false,
      md: false,
      lg: false,
      xl: false,
      xl2: false,
    }

    if (window?.outerWidth <= 639) tmp.xsm = true
    else if (window?.outerWidth >= 640 && window?.outerWidth <= 767)
      tmp.sm = true
    else if (window?.outerWidth >= 768 && window?.outerWidth <= 1023)
      tmp.md = true
    else if (window?.outerWidth >= 1024 && window?.outerWidth <= 1279)
      tmp.lg = true
    else if (window?.outerWidth >= 1080 && window?.outerWidth <= 1535)
      tmp.xl = true
    else if (window?.outerWidth >= 1536) tmp.xl2 = true
    setScreenSize(tmp)
  }
  useEffect(() => {
    handleResize()

    window.addEventListener('resize', handleResize)

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  return screenSize
}

export default useScreenSize
