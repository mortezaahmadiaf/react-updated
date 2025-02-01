/* eslint-disable  @typescript-eslint/no-explicit-any */

import React from 'react'
import { Checkbox, CheckboxProps } from 'primereact/checkbox'
import { IGlobalPorps } from './interfaces'
import PCol from '../pcol'
import Condition from '../condition'
import { classNames } from 'primereact/utils'
export interface ICheckBox extends CheckboxProps, IGlobalPorps {
  checkBoxClassName?: string
  id: string
  checkboxStyle?: any
}

export const CheckBox = (props: ICheckBox) => {
  return (
    <PCol
      md={`${props.md ?? ''}`}
      col={`${props.col ?? ''}`}
      lg={`${props.lg ?? ''}`}
      sm={`${props.sm ?? ''}`}
      xl={`${props.xl ?? ''}`}
      style={props.style}
      className={` p-field-checkbox   ${
        props.className ? props.className : ''
      }`}
    >
      <div className="flex justify-center pt-8 ">
        <Checkbox
          {...props}
          style={props.checkboxStyle ?? {}}
          className={` ${classNames({ 'p-invalid': !!props.error })} ${
            props.checkBoxClassName ?? ''
          } `}
          id={props.id}
          name={props.id}
        />
        <Condition condition={props.label ? true : false}>
          <label htmlFor={props.id} className={'p-mx-1'}>
            {props.label}
          </label>
        </Condition>
      </div>
      <Condition condition={props.error ? true : false}>
        <div className="p-d-flex">
          <small className="p-error">{props.error}</small>
        </div>
      </Condition>
    </PCol>
  )
}

export default CheckBox
