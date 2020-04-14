import React from 'react'

function usePrevious<T>(value: T): T | null {
  const ref = React.useRef<T | null>(null)
  React.useEffect((): void => {
    ref.current = value
  }, [value])
  return ref.current
}

export default usePrevious
