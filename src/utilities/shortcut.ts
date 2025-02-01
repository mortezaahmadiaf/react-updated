/* eslint-disable  @typescript-eslint/no-explicit-any */

import { useCallback, useEffect, useLayoutEffect, useRef } from 'react'

export const useKeyPress = (
  keys: Array<string>,
  callback: () => void,
  node = null
) => {
  let shortkey: Array<string> = []
  // implement the callback ref pattern
  const callbackRef: any = useRef(callback)
  useLayoutEffect(() => {
    callbackRef.current = callback
  })

  // handle what happens on key press
  const handleKeyPress = useCallback(
    (event: any) => {
      if (event.key === 'Control') shortkey[0] = 'Control'
      else shortkey.push(event.key)

      // check if one of the key is part of the ones we want
      if (
        keys.some((key) => event.code === key) &&
        shortkey[0] === 'Control' &&
        shortkey.length === 2
      ) {
        callbackRef.current(event)
        shortkey = [] // clear shortkey after use
      }
    },
    [keys]
  )

  // handle what happens on key press
  const handleKeyup = useCallback(() => {
    shortkey.pop()
  }, [keys])

  useEffect(() => {
    // target is either the provided node or the document
    const targetNode = node ?? document
    // attach the event listener
    targetNode && targetNode.addEventListener('keydown', handleKeyPress)
    targetNode && targetNode.addEventListener('keyup', handleKeyup)

    // remove the event listener
    return () => {
      targetNode && targetNode.removeEventListener('keydown', handleKeyPress)
      targetNode && targetNode.removeEventListener('keyup', handleKeyPress)
    }
  }, [handleKeyPress, node])
}
