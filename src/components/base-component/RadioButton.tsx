/* eslint-disable  @typescript-eslint/no-explicit-any */

import React from 'react'
import {
  RadioButton as Radiobutton,
  RadioButtonProps,
} from 'primereact/radiobutton'
import { IGlobalPorps } from './interfaces'
import PCol from '../pcol'
import Condition from '../condition'

export interface IRadioButton extends RadioButtonProps, IGlobalPorps {
  id: string
  radiobuttonClassName?: string
  radiobuttonStyle?: any
}

export const RadioButton = (props: IRadioButton) => {
  return (
    <PCol
      md={`${props.md ?? ''}`}
      col={`${props.col ?? ''}`}
      lg={`${props.lg ?? ''}`}
      sm={`${props.sm ?? ''}`}
      xl={`${props.xl ?? ''}`}
      style={props.style}
      className={`p-field-radiobutton ${
        props.className ? props.className : ''
      }`}
    >
      <Radiobutton
        {...props}
        name={props.id}
        id={props.id as any}
        className={`mt-6 ${props.radiobuttonClassName ?? ''}`}
        style={props.radiobuttonStyle ?? {}}
      />
      <Condition condition={props.label ? true : false}>
        <label className="mt-6 mx-2" htmlFor={props.id}>
          {props.label}
        </label>
      </Condition>
    </PCol>
  )
}

export default RadioButton
