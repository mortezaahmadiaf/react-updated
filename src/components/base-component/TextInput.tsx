/* eslint-disable  @typescript-eslint/no-explicit-any */

import React from 'react'
import { InputText, InputTextProps } from 'primereact/inputtext'
import { IGlobalPorps } from './interfaces'
import PCol from '../pcol'
import Condition from '../condition'
import { classNames } from 'primereact/utils'
export interface ITextInput extends InputTextProps, IGlobalPorps {
  inputClassName?: string
  id: string
  inputStyle?: any
  addOnStart?: string
  addOnEnd?: string
  requiredField?: boolean
  addOnStartClassName?: string
  addOnEndClassName?: string
}

export const TextInput = ({
  id,
  label,
  col,
  md,
  lg,
  sm,
  xl,
  style,
  className,
  inputStyle,
  error,
  inputClassName,
  addOnEnd,
  addOnStart,
  requiredField,
  addOnEndClassName = '',
  addOnStartClassName = '',
  ...res
}: ITextInput) => {
  return (
    <PCol
      md={`${md ?? ''}`}
      col={`${col ?? ''}`}
      lg={`${lg ?? ''}`}
      sm={`${sm ?? ''}`}
      xl={`${xl ?? ''}`}
      style={style}
      className={`p-field  ${className ?? ''}  `}
    >
      <Condition condition={label ? true : false}>
        <label
          className={`p-d-flex p-ai-center ${classNames({
            'p-error': !!error,
          })}`}
          htmlFor={id}
        >
          {label}
          <strong className="p-error p-mx-1 ">
            {requiredField ? '*' : ''}
          </strong>
        </label>
      </Condition>

      <div className="p-inputgroup  flex-1" style={{ direction: 'ltr' }}>
        <Condition condition={addOnEnd ? true : false}>
          <span className={`p-inputgroup-addon ${addOnEndClassName ?? ''} `}>
            {addOnEnd}
          </span>
        </Condition>
        <InputText
          style={inputStyle ?? {}}
          className={`${classNames({
            'p-invalid': !!error,
          })} ${inputClassName ?? ''} p-w-100 w-full bg-transparent `}
          name={id}
          id={id}
          {...res}
          autoComplete="off"
        />
        <Condition condition={addOnStart ? true : false}>
          <span className={` p-inputgroup-addon ${addOnStartClassName ?? ''} `}>
            {addOnStart}
          </span>
        </Condition>
      </div>
      <Condition condition={error ? true : false}>
        <div className="flex">
          <small className="p-error">{error}</small>
        </div>
      </Condition>
    </PCol>
  )
}

export default TextInput
