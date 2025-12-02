import { useState } from 'react'
import { Database } from 'lucide-react'
import { TradingModeSidebar } from './TradingModeSidebar'
import { TradingModeContent } from './TradingModeContent'
import { LanguageSwitcher } from './LanguageSwitcher'
import { useLanguage } from '../contexts/LanguageContext'
import type { TradingMode } from '../types/trading'

export function TradingModeLayout() {
  const { t } = useLanguage()
  const [selectedMode, setSelectedMode] = useState<TradingMode | null>(null)

  const handleModeSelect = (mode: TradingMode) => {
    setSelectedMode(mode)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-full px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <Database className="h-8 w-8 text-blue-600" />
              <h1 className="text-xl font-bold text-gray-900">{t('appTitle')}</h1>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-sm text-gray-600">
                {t('appSubtitle')}
              </div>
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex h-[calc(100vh-4rem)]">
        {/* Left Sidebar - Trading Mode List */}
        <TradingModeSidebar
          selectedModeId={selectedMode?.id || null}
          onModeSelect={handleModeSelect}
        />

        {/* Right Content - Selected Trading Mode */}
        <TradingModeContent selectedMode={selectedMode} />
      </main>
    </div>
  )
}