import React, { FC, memo, ReactNode } from 'react'
import PCol from './pcol'
import PRow from './prow'
import Condition from './condition'

const OutPutPair: FC<{
  label: string
  value?: string | number | ReactNode
  labelSizeCol?: string
  valueSizeCol?: string
  labelSizeSm?: string
  valueSizeSm?: string

  labelSizeMd?: string
  valueSizeMd?: string

  labelSizeLg?: string
  valueSizeLg?: string

  labelSizeXl?: string
  valueSizeXl?: string
  className?: string
  valueClassName?: string
  row?: boolean
}> = memo(
  ({
    label,
    value,
    labelSizeCol,
    valueSizeCol,

    labelSizeMd,
    valueSizeMd,

    labelSizeLg,
    valueSizeLg,

    labelSizeXl,
    valueSizeXl,
    labelSizeSm,
    valueSizeSm,
    className,
    valueClassName,
    row = false,
  }) => {
    return (
      <>
        <Condition
          condition={!row}
          conditionNotTrue={
            <PRow className="mb-2">
              <PCol
                className={className ?? ''}
                col={labelSizeCol}
                md={labelSizeMd}
                lg={labelSizeLg}
                xl={labelSizeXl}
                sm={labelSizeSm}
              >
                <PRow>
                  <PCol
                    col="9"
                    style={{
                      backgroundColor: '#e4e4e4',
                      borderBottom: '1px solid #ccc',
                      borderTopRightRadius: '4px',
                      borderTopLeftRadius: '4px',
                    }}
                  >
                    <p>
                      <strong> {label}</strong>
                    </p>
                  </PCol>
                </PRow>
              </PCol>
              <PCol
                className={valueClassName ?? ''}
                col={valueSizeCol}
                lg={valueSizeLg}
                md={valueSizeMd}
                xl={valueSizeXl}
                sm={valueSizeSm}
              >
                <PRow>
                  <PCol
                    col="10"
                    style={{
                      borderBottom: '1px solid #ccc',
                      paddingInlineEnd: '20px',
                    }}
                  >
                    <p className="break"> {value ? value : ''} </p>
                  </PCol>
                </PRow>
              </PCol>
            </PRow>
          }
        >
          <PCol
            className={className ?? ''}
            col={labelSizeCol}
            md={labelSizeMd}
            lg={labelSizeLg}
            xl={labelSizeXl}
            sm={labelSizeSm}
          >
            <PRow>
              <PCol
                col="9"
                style={{
                  backgroundColor: '#e4e4e4',
                  borderBottom: '1px solid #ccc',
                  borderTopRightRadius: '4px',
                  borderTopLeftRadius: '4px',
                }}
              >
                <p>
                  <strong> {label}</strong>
                </p>
              </PCol>
            </PRow>
          </PCol>
          <PCol
            className={valueClassName ?? ''}
            col={valueSizeCol}
            lg={valueSizeLg}
            md={valueSizeMd}
            xl={valueSizeXl}
            sm={valueSizeSm}
          >
            <PRow>
              <PCol
                col="10"
                style={{
                  borderBottom: '1px solid #ccc',
                  paddingInlineEnd: '20px',
                }}
              >
                <p className="break"> {value ? value : ''} </p>
              </PCol>
            </PRow>
          </PCol>
        </Condition>
      </>
    )
  }
)

export default OutPutPair
