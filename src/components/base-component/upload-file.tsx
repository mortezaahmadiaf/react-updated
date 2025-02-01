/* eslint-disable  @typescript-eslint/no-explicit-any */

import React, { memo } from 'react'
import { IGlobalPorps } from './interfaces'
import PCol from '../pcol'
import Condition from '../condition'
import { classNames } from 'primereact/utils'
export interface ITextInput extends IGlobalPorps {
  id: string
  inputStyle?: any
  addOnStart?: string
  addOnEnd?: string
  requiredField?: boolean
  onChange: (filename: string) => void
}

export const UploadFile = memo(
  ({
    id,
    label,
    col,
    md,
    lg,
    sm,
    xl,
    error,
    addOnEnd,
    addOnStart,
    requiredField,
  }: // onChange,
  ITextInput) => {
    return (
      <PCol
        md={`${md ?? ''}`}
        col={`${col ?? ''}`}
        lg={`${lg ?? ''}`}
        sm={`${sm ?? ''}`}
        xl={`${xl ?? ''}`}
        className={'p-field'}
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
            <span className="p-inputgroup-addon">{addOnEnd} </span>
          </Condition>
          {/* <label
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            htmlFor="large_size"
          >
            Large file input
          </label> */}
          <input
            onChange={(event) => {
              if (event.target?.files?.[0]) {
                const formData = new FormData()
                formData.append('name', event.target.files[0].name)
                formData.append('file', event.target.files[0])

                // upload(formData)
              }
            }}
            className="block w-full text-lg py-2 text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none  dark:placeholder-gray-400"
            id="large_size"
            type="file"
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
)

export default UploadFile
