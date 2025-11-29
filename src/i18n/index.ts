import { zhCN, enUS, type TranslationKeys } from './translations'

export type { TranslationKeys }

export type Language = 'zh-CN' | 'en-US'

export const translations = {
  'zh-CN': zhCN,
  'en-US': enUS
} as const

// Default language is Chinese
export const defaultLanguage: Language = 'zh-CN'

// Get current language from localStorage or use default
export const getCurrentLanguage = (): Language => {
  if (typeof window === 'undefined') return defaultLanguage
  
  const stored = localStorage.getItem('language') as Language
  if (stored && (stored === 'zh-CN' || stored === 'en-US')) {
    return stored
  }
  
  return defaultLanguage
}

// Set current language
export const setCurrentLanguage = (language: Language): void => {
  if (typeof window === 'undefined') return
  
  localStorage.setItem('language', language)
}

// Get translation by key
export const t = (key: keyof TranslationKeys, language?: Language): string => {
  const lang = language || getCurrentLanguage()
  return translations[lang][key] || key
}