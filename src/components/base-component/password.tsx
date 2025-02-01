import React, { memo } from 'react'
import { Password as InputText, PasswordProps } from 'primereact/password'
import { IGlobalPorps } from './interfaces'
import PCol from '../pcol'
import Condition from '../condition'
import { classNames } from 'primereact/utils'

export interface IPasswordInput extends PasswordProps, IGlobalPorps {
  inputClassName?: string
  id: string
  inputStyle?: any
  requiredField?: boolean
}

export const PasswordInput = memo(
  ({
    md,
    col,
    lg,
    sm,
    xl,
    style,
    className,
    label,
    error,
    id,
    value,
    inputStyle,
    inputClassName,
    requiredField = false,
    ...res
  }: IPasswordInput) => {
    return (
      <PCol
        md={`${md ?? ''}`}
        col={`${col ?? ''}`}
        lg={`${lg ?? ''}`}
        sm={`${sm ?? ''}`}
        xl={`${xl ?? ''}`}
        style={style}
        className={`p-field ${className ?? ''}  `}
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
        <InputText
          style={inputStyle ?? {}}
          className={`${classNames({ 'p-invalid': !!error })} ${
            inputClassName ?? ''
          } p-w-100`}
          name={id}
          id={id}
          value={value}
          {...(res as any)}
        />
        <Condition condition={error ? true : false}>
          <div className="p-d-flex">
            <small className="p-error">{error}</small>
          </div>
        </Condition>
      </PCol>
    )
  }
)

export default PasswordInput
