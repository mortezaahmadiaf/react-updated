/* eslint-disable  @typescript-eslint/no-explicit-any */

import React from 'react'
import { IGlobalPorps } from './interfaces'
import PCol from '../pcol'
import Condition from '../condition'
import { classNames } from 'primereact/utils'
import DatePicker, { DatePickerProps } from 'react-multi-date-picker'
import persian from 'react-date-object/calendars/persian'
import greg from 'react-date-object/calendars/gregorian'
import persian_fa from 'react-date-object/locales/persian_fa'
import g_en from 'react-date-object/locales/gregorian_en'
export interface ICalendar extends DatePickerProps, IGlobalPorps {
  inputClassName?: string
  id?: string
  addOnStart?: string
  addOnEnd?: string
  requiredField?: boolean
  onChangeDate?: (date: any) => void
  value?: any
}

export const Calendar = ({
  id = '',
  label,
  col = 12,
  md = 6,
  lg,
  sm,
  xl,
  className,
  error,
  inputClassName,
  addOnEnd,
  addOnStart,
  requiredField,
  value,
  onChange = () => {},
  onChangeDate = () => {},
  ...res
}: ICalendar) => {
  return (
    <PCol
      md={`${md ?? ''}`}
      col={`${col ?? ''}`}
      lg={`${lg ?? ''}`}
      sm={`${sm ?? ''}`}
      xl={`${xl ?? ''}`}
      className={`p-field ${className ? className : ''} `}
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

      <div className="p-inputgroup  w-full" style={{ direction: 'ltr' }}>
        <Condition condition={addOnEnd ? true : false}>
          <span className="p-inputgroup-addon">{addOnEnd} </span>
        </Condition>
        <DatePicker
          name={id}
          id={id}
          inputClass={` ${classNames({
            'p-invalid': !!error,
          })} ${inputClassName ?? ''}`}
          onChange={(d, o) => {
            onChange(d, o)
            onChangeDate(d?.convert(greg, g_en).format('YYYY-MM-DD'))
          }}
          calendar={persian}
          locale={persian_fa}
          value={value ? new Date(value) : undefined}
          {...res}
        />

        <Condition condition={addOnStart ? true : false}>
          <span className="p-inputgroup-addon">{addOnStart} </span>
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

export default Calendar
