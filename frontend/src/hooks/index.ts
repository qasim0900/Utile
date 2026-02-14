import { useState, useCallback } from 'react'

interface UseAsyncState<T> {
  data: T | null
  loading: boolean
  error: Error | null
}

export const useAsync = <T,>(
  asyncFunction: () => Promise<T>,
  immediate = true,
) => {
  const [state, setState] = useState<UseAsyncState<T>>({
    data: null,
    loading: immediate,
    error: null,
  })

  const execute = useCallback(async () => {
    setState({ data: null, error: null, loading: true })
    try {
      const result = await asyncFunction()
      setState({ data: result, error: null, loading: false })
      return result
    } catch (error) {
      setState({
        data: null,
        error: error instanceof Error ? error : new Error('Unknown error'),
        loading: false,
      })
      throw error
    }
  }, [asyncFunction])

  // Execute on mount if immediate
  React.useEffect(() => {
    if (immediate) {
      execute()
    }
  }, [execute, immediate])

  return { ...state, execute }
}

import React from 'react'

interface UseLocalStorageState<T> {
  value: T
  setValue: (value: T) => void
  removeValue: () => void
}

export const useLocalStorage = <T,>(key: string, initialValue: T): UseLocalStorageState<T> => {
  const [storedValue, setStoredValue] = React.useState<T>(() => {
    try {
      if (typeof window === 'undefined') return initialValue
      const item = window.localStorage.getItem(key)
      return item ? (JSON.parse(item) as T) : initialValue
    } catch (error) {
      console.error(error)
      return initialValue
    }
  })

  const setValue = (value: T) => {
    try {
      setStoredValue(value)
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, JSON.stringify(value))
      }
    } catch (error) {
      console.error(error)
    }
  }

  const removeValue = () => {
    try {
      setStoredValue(initialValue)
      if (typeof window !== 'undefined') {
        window.localStorage.removeItem(key)
      }
    } catch (error) {
      console.error(error)
    }
  }

  return { value: storedValue, setValue, removeValue }
}

export const useDebounce = <T,>(value: T, delay: number): T => {
  const [debouncedValue, setDebouncedValue] = React.useState<T>(value)

  React.useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    return () => clearTimeout(handler)
  }, [value, delay])

  return debouncedValue
}

export const usePrevious = <T,>(value: T): T | undefined => {
  const ref = React.useRef<T>()

  React.useEffect(() => {
    ref.current = value
  }, [value])

  return ref.current
}

export const useIsMounted = (): boolean => {
  const [isMounted, setIsMounted] = React.useState(false)

  React.useEffect(() => {
    setIsMounted(true)
  }, [])

  return isMounted
}

export const useToggle = (initialValue = false): [boolean, () => void] => {
  const [value, setValue] = React.useState(initialValue)

  const toggle = useCallback(() => {
    setValue((prev: boolean) => !prev)
  }, [])

  return [value, toggle]
}
