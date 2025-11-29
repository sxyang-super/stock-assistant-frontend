import type { Language } from '../i18n'

export interface AppConfig {
  defaultLanguage: Language
  supportedLanguages: Language[]
  apiBaseUrl: string
  pageSize: number
  theme: 'light' | 'dark'
}

export const appConfig: AppConfig = {
  defaultLanguage: 'zh-CN', // 默认中文环境
  supportedLanguages: ['zh-CN', 'en-US'],
  apiBaseUrl: import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080',
  pageSize: 10,
  theme: 'light'
}

// Environment specific configurations
export const environments = {
  development: {
    ...appConfig,
    apiBaseUrl: 'http://localhost:8080'
  },
  production: {
    ...appConfig,
    apiBaseUrl: import.meta.env.VITE_API_BASE_URL || 'https://api.example.com'
  },
  test: {
    ...appConfig,
    apiBaseUrl: 'http://localhost:8080'
  }
} as const

export type Environment = keyof typeof environments

export const getCurrentEnvironment = (): Environment => {
  const mode = import.meta.env.MODE
  return (mode as Environment) || 'development'
}

export const getCurrentConfig = (): AppConfig => {
  const env = getCurrentEnvironment()
  return environments[env]
}