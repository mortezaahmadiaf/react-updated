/* eslint-disable  @typescript-eslint/no-explicit-any */
import React, { memo } from 'react'
export interface ICondition {
  condition: boolean
  children?: any
  conditionNotTrue?: any
}

const Condition = memo((props: ICondition) => {
  // eslint-disable-next-line no-extra-boolean-cast
  if (!!props.condition) return props.children
  else {
    if (props.conditionNotTrue) return props.conditionNotTrue
    return <></>
  }
})
export default Condition
