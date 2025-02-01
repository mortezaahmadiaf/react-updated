/* eslint-disable   */
/* eslint-disable */
import React, { CSSProperties, FC, useEffect, useState } from 'react'
import { classNames } from 'primereact/utils'
import { decimalDigits as decimaldigits } from 'app/utilities/constance'
import Condition from '../condition'
import PCol from '../pcol'
import { IGlobalPorps } from './interfaces'

// Function to convert Persian numbers and decimals to English
const convertPersianToEnglish = (value: string): string => {
  const persianNumbers = [
    /۰/g,
    /۱/g,
    /۲/g,
    /۳/g,
    /۴/g,
    /۵/g,
    /۶/g,
    /۷/g,
    /۸/g,
    /۹/g,
  ]
  const englishNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
  let convertedValue = value

  // Replace Persian digits with English digits
  for (let i = 0; i < persianNumbers.length; i++) {
    convertedValue = convertedValue.replace(
      persianNumbers[i],
      englishNumbers[i]
    )
  }

  // Replace Persian decimal separator with English `.`
  return convertedValue.replace(/٬/g, ',').replace(/٫/g, '.')
}

// Format numbers with commas
const formatNumberWithCommas = (value: string): string => {
  const [integer, decimal] = value.split('.') // Separate integer and decimal parts
  const formattedInteger = integer.replace(/\B(?=(\d{3})+(?!\d))/g, ',') // Add commas to integer part
  return decimal ? `${formattedInteger}.${decimal}` : formattedInteger
}

interface NumericInputProps extends IGlobalPorps {
  value: number | null
  onChange: (rawValue: number | null) => void
  placeholder?: string
  className?: string
  decimalDigits?: number
  format?: boolean
  id: string
  style?: CSSProperties
  label?: string
  isDecimal?: boolean
  error?: string
  addOnStart?: string
  addOnEnd?: string
  addOnStartClassName?: string
  addOnEndClassName?: string
}

export const NumberInput: FC<NumericInputProps> = ({
  value,
  onChange,
  placeholder = '',
  className = '',
  decimalDigits = decimaldigits, // Default to 2 decimal places
  format = true,
  style,
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
  addOnEndClassName = '',
  addOnStartClassName = '',
  isDecimal = false,
}) => {
  const [formattedValue, setFormattedValue] = useState<string>('')

  // Round or truncate the number based on decimalDigits prop
  const roundToDecimalDigits = (value: number | null): number | null => {
    if (value === null) return null
    const factor = Math.pow(10, decimalDigits)
    return Math.round(value * factor) / factor
  }

  // Update the formatted value when value or format changes
  useEffect(() => {
    if (value !== null) {
      const roundedValue = roundToDecimalDigits(value)
      const stringValue = roundedValue !== null ? roundedValue.toString() : ''
      setFormattedValue(
        format ? formatNumberWithCommas(stringValue) : stringValue
      )
    } else {
      setFormattedValue('')
    }
  }, [value, format, decimalDigits])

  const handleKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
    let rawInput = ''
    if (
      isDecimal &&
      (event.nativeEvent.key.toLowerCase() === 'unidentified' ||
        event.nativeEvent.key === '.')
    ) {
      rawInput = event.currentTarget.value + '.'
    } else if (
      event.nativeEvent.key.toLowerCase() !== 'unidentified' &&
      event.nativeEvent.key !== '.'
    ) {
      if (event.nativeEvent.key.toLowerCase() === 'backspace') {
        rawInput = event.currentTarget.value.slice(0, -1)
      } else {
        rawInput = event.currentTarget.value + event.nativeEvent.key
      } // Directly get the current value of the input
    } else {
      rawInput = event.currentTarget.value
    }

    // Convert Persian digits and separators to English
    rawInput = convertPersianToEnglish(rawInput)

    // Remove commas for processing
    const cleanedInput = rawInput.replace(/,/g, '')

    // Allow empty input and reset the value to null
    if (cleanedInput === '') {
      setFormattedValue('')
      onChange(null)
      return
    }

    // Handle decimal addition: Ensure there is only one decimal and no more than `decimalDigits` decimals
    if (
      isDecimal &&
      cleanedInput.includes('.') &&
      cleanedInput.split('.')[1]?.length > decimalDigits
    ) {
      return // Don't allow more decimals than allowed
    }

    // Validate input pattern for numbers and decimals
    const regex = new RegExp(`^\\d*(\\.\\d{0,${decimalDigits}})?$`)
    if (regex.test(cleanedInput)) {
      setFormattedValue(rawInput) // Update displayed value as user types

      const floatValue = parseFloat(cleanedInput)
      if (!isNaN(floatValue)) {
        onChange(floatValue) // Pass the raw value to parent
      }
    }
  }

  return (
    <PCol
      md={`${md ?? ''}`}
      col={`${col ?? ''}`}
      lg={`${lg ?? ''}`}
      sm={`${sm ?? ''}`}
      xl={`${xl ?? ''}`}
      className={`p-field ${className ?? ''}`}
    >
      <Condition condition={!!label}>
        <label
          className={classNames('p-d-flex', {
            'p-error': !!error,
          })}
          htmlFor={id}
        >
          {label}
        </label>
      </Condition>
      <div className="p-inputgroup flex" style={{ direction: 'ltr' }}>
        {addOnStart && (
          <span className={`p-inputgroup-addon ${addOnStartClassName}`}>
            {addOnStart}
          </span>
        )}
        <input
          style={style}
          type="text"
          id={id}
          inputMode="decimal"
          value={formattedValue}
          onChange={() => {}}
          onKeyDown={handleKeyUp}
          placeholder={placeholder}
          className={classNames(
            'border border-gray-900 w-full p-w-100 h-[45px] px-2 numeric-input',
            className,
            { 'p-invalid': !!error }
          )}
          autoComplete="off"
        />
        {addOnEnd && (
          <span className={`p-inputgroup-addon ${addOnEndClassName}`}>
            {addOnEnd}
          </span>
        )}
      </div>
      {error && (
        <div className="p-d-flex">
          <small className="p-error">{error}</small>
        </div>
      )}
    </PCol>
  )
}

export default NumberInput
