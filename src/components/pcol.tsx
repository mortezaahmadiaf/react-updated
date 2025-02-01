/* eslint-disable  @typescript-eslint/no-explicit-any */

import React, { CSSProperties, FC } from 'react'

export const PCol: FC<{
  sm?: string | number
  md?: string | number
  lg?: string | number
  col?: string | number
  xl?: string | number
  className?: string | number
  style?: CSSProperties
  children?: any
}> = ({ children, sm, md, lg, xl, col, className, style }) => {
  const colClass = `p-col-${col}`
  return (
    <div
      style={{ ...style }}
      className={`${col ? colClass : 'p-col'} ${md ? 'p-md-' + md : ''} ${
        xl ? 'p-xl-' + xl : ''
      } ${lg ? 'p-lg-' + lg : ''} ${sm ? 'p-sm-' + sm : ''} ${
        className ? className : ''
      }`}
    >
      {children}
    </div>
  )
}

export default PCol
