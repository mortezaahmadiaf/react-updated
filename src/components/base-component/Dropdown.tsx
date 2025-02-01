/* eslint-disable  @typescript-eslint/no-explicit-any */

import React, { CSSProperties, memo, useEffect, useState } from 'react'

import { Dropdown as DropdDown, DropdownProps } from 'primereact/dropdown'
import { IGlobalPorps } from './interfaces'
import PCol from '../pcol'
import Condition from '../condition'
import { classNames } from 'primereact/utils'
import { useSearch } from 'app/utilities/hook'
export interface IDropdown extends DropdownProps, IGlobalPorps {
  id: string
  dropDownClassName?: string
  dropDownStyle?: CSSProperties
  requiredField?: boolean
  addOnStart?: string
  addOnEnd?: string
}

export const Dropdown = memo(
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
    requiredField,
    disabled,
    dropDownClassName,
    dropDownStyle,
    showClear,
    value,
    onChange = () => {},
    optionLabel,
    options,
    optionValue,
    filter,
    filterBy,
    onFilter,
    placeholder,
    addOnEnd,
    addOnStart,
    ...res
  }: IDropdown) => {
    const [search, setSearch] = useState<any>()
    const searchDealy = useSearch(search, 500)

    useEffect(() => {
      if (searchDealy && onFilter) {
        onFilter(searchDealy)
      }
    }, [searchDealy])

    return (
      <PCol
        md={`${md ?? ''}`}
        col={`${col ?? ''}`}
        lg={`${lg ?? ''}`}
        sm={`${sm ?? ''}`}
        xl={`${xl ?? ''}`}
        style={style}
        className={`p-field ${
          className ? className : ` ${placeholder ? 'p-mt-2' : ''}`
        }`}
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

        <div className="p-inputgroup  flex-1" style={{ height: 45 }}>
          <Condition condition={addOnEnd ? true : false}>
            <span className="p-inputgroup-addon">{addOnEnd} </span>
          </Condition>

          <DropdDown
            placeholder={placeholder}
            disabled={disabled}
            style={dropDownStyle ?? {}}
            className={`p-col-12 m-0 p-0 ${classNames({
              'p-invalid': !!error,
            })} ${dropDownClassName ?? ''}`}
            showClear={showClear && (value ? true : false)}
            emptyMessage={'general.dtEmptymessage'}
            name={id}
            id={id}
            optionLabel={optionLabel}
            optionValue={optionValue}
            options={
              options?.length
                ? optionValue
                  ? options.map((item) => {
                      const t = { ...item, value: item?.[optionValue] }
                      return t
                    })
                  : options
                : ['']
            }
            value={value}
            filter={filter}
            filterBy={filterBy}
            onFilter={(e) => {
              if (onFilter) setSearch(e)
            }}
            onChange={(e) => {
              const tmp = {
                ...e,
                value: e.value ? e.value : null,
                target: {
                  ...e.target,
                  value: e.target.value ? e.target.value : null,
                },
              }

              onChange(tmp)
            }}
            {...res}
          />
          <Condition condition={addOnStart ? true : false}>
            <span className="p-inputgroup-addon">{addOnStart} </span>
          </Condition>
        </div>
        <Condition condition={error ? true : false}>
          <div className="p-d-flex">
            <small className="p-error">{error}</small>
          </div>
        </Condition>
      </PCol>
    )
  }
)

export default Dropdown
