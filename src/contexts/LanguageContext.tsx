import React, { createContext, useContext, useState, useEffect } from 'react'
import type { ReactNode } from 'react'
import { getCurrentLanguage, setCurrentLanguage, t, type TranslationKeys, type Language } from '../i18n'
import { getCurrentConfig } from '../config'

interface LanguageContextType {
  language: Language
  setLanguage: (language: Language) => void
  t: (key: keyof TranslationKeys) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

interface LanguageProviderProps {
  children: ReactNode
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const config = getCurrentConfig()
  const [language, setLanguageState] = useState<Language>(config.defaultLanguage)

  const setLanguage = (newLanguage: Language) => {
    setLanguageState(newLanguage)
    setCurrentLanguage(newLanguage)
  }

  const translate = (key: keyof TranslationKeys): string => {
    return t(key, language)
  }

  useEffect(() => {
    const storedLanguage = getCurrentLanguage()
    if (storedLanguage !== language) {
      setLanguageState(storedLanguage)
    }
  }, [])

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translate }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}