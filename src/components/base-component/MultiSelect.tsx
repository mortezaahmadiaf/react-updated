/* eslint-disable  @typescript-eslint/no-explicit-any */

import React from 'react'
import {
  MultiSelect as Multiselect,
  MultiSelectProps,
} from 'primereact/multiselect'
import { IGlobalPorps } from './interfaces'
import PCol from '../pcol'
import Condition from '../condition'
import { classNames } from 'primereact/utils'

export interface IMultiSelect extends MultiSelectProps, IGlobalPorps {
  id: string
  multiselectClassName?: string
  multiselectStyle?: any
  addOnStart?: string
  addOnEnd?: string
}

export const MultiSelect = (props: IMultiSelect) => {
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

      <div className="p-inputgroup  flex-1" style={{ direction: 'ltr' }}>
        <Condition condition={props.addOnEnd ? true : false}>
          <span className="p-inputgroup-addon">{props.addOnEnd} </span>
        </Condition>
        <Multiselect
          {...props}
          style={props.multiselectStyle ?? {}}
          className={`w-100 ${classNames({ 'p-invalid': !!props.error })} ${
            props.multiselectClassName ?? ''
          }`}
          showClear={props.showClear && (props.value ? true : false)}
          name={props.id}
          id={props.id}
          display={props.display ?? 'chip'}
        />
        <Condition condition={props.addOnStart ? true : false}>
          <span className="p-inputgroup-addon">{props.addOnStart} </span>
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

export default MultiSelect
