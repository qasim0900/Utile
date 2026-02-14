import React, { ReactNode } from 'react'
import { designTokens } from './tokens'

type DesignTokens = typeof designTokens

interface ThemeContextType {
  tokens: DesignTokens
  isDark: boolean
  toggleDarkMode: () => void
}

const ThemeContext = React.createContext<ThemeContextType | undefined>(undefined)

interface ThemeProviderProps {
  children: ReactNode
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [isDark, setIsDark] = React.useState(() => {
    if (typeof window === 'undefined') return false
    return window.localStorage.getItem('theme-dark') === 'true'
  })

  React.useEffect(() => {
    window.localStorage.setItem('theme-dark', isDark.toString())
    document.documentElement.classList.toggle('dark', isDark)
  }, [isDark])

  const toggleDarkMode = React.useCallback(() => {
    setIsDark((prev: boolean) => !prev)
  }, [])

  const value: ThemeContextType = {
    tokens: designTokens,
    isDark,
    toggleDarkMode,
  }

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export const useTheme = (): ThemeContextType => {
  const context = React.useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider')
  }
  return context
}
