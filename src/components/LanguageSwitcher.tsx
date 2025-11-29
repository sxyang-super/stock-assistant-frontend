import React from 'react'
import { Globe } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'

export const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage, t } = useLanguage()

  const toggleLanguage = () => {
    const newLanguage = language === 'zh-CN' ? 'en-US' : 'zh-CN'
    setLanguage(newLanguage)
  }

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center space-x-2 px-3 py-2 text-sm rounded-lg hover:bg-gray-100 transition-colors"
      title={t('appTitle')}
    >
      <Globe className="h-4 w-4" />
      <span className="font-medium">
        {language === 'zh-CN' ? '中文' : 'English'}
      </span>
    </button>
  )
}