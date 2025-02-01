/* eslint-disable  @typescript-eslint/no-explicit-any */

import React from 'react'
import { InputTextarea, InputTextareaProps } from 'primereact/inputtextarea'
import { IGlobalPorps } from './interfaces'
import PCol from '../pcol'
import Condition from '../condition'
import { classNames } from 'primereact/utils'
export interface ITextarea extends InputTextareaProps, IGlobalPorps {
  inputClassName?: string
  id: string
  inputStyle?: any
}

export const Textarea = (props: ITextarea) => {
  return (
    <PCol
      md={`${props.md ?? ''}`}
      col={`${props.col ?? ''}`}
      lg={`${props.lg ?? ''}`}
      sm={`${props.sm ?? ''}`}
      xl={`${props.xl ?? ''}`}
      style={props.style}
      className={`p-field ${props.className ?? ''}  `}
    >
      <Condition condition={props.label ? true : false}>
        <label htmlFor={props.id}> {props.label}</label>
      </Condition>
      <InputTextarea
        style={props.inputStyle ?? {}}
        className={`${classNames({ 'p-invalid': !!props.error })} ${
          props.inputClassName ?? ''
        } w-100 `}
        name={props.id}
        id={props.id}
        value={props.value}
        {...(props as any)}
        autoComplete="off"
      />
      <Condition condition={props.error ? true : false}>
        <div className="p-d-flex">
          <small className="p-error">{props.error}</small>
        </div>
      </Condition>
    </PCol>
  )
}

export default Textarea
