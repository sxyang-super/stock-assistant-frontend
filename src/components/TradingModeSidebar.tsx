
import { TrendingUp, Zap, BarChart3 } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import { tn } from '../i18n'
import { getEnabledTradingModes } from '../config/tradingModes'
import type { TradingMode } from '../types/trading'

interface TradingModeSidebarProps {
  selectedModeId: string | null
  onModeSelect: (mode: TradingMode) => void
}

const iconMap = {
  TrendingUp,
  Zap,
  BarChart3,
} as const

export function TradingModeSidebar({ selectedModeId, onModeSelect }: TradingModeSidebarProps) {
  const { t } = useLanguage()
  const enabledModes = getEnabledTradingModes()

  const getIcon = (iconName: string) => {
    const IconComponent = iconMap[iconName as keyof typeof iconMap] || TrendingUp
    return <IconComponent className="h-5 w-5" />
  }

  return (
    <div className="w-64 bg-white border-r border-gray-200 h-full">
      <div className="p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-2">
          {t('tradingModes')}
        </h2>
        <p className="text-sm text-gray-600 mb-6">
          {t('tradingModeDescription')}
        </p>

        {enabledModes.length === 0 ? (
          <div className="text-center py-8">
            <div className="text-gray-500">{t('noTradingModes')}</div>
          </div>
        ) : (
          <div className="space-y-2">
            {enabledModes.map((mode) => (
              <button
                key={mode.id}
                onClick={() => onModeSelect(mode)}
                className={`w-full text-left p-4 rounded-lg border transition-all duration-200 ${
                  selectedModeId === mode.id
                    ? 'border-blue-500 bg-blue-50 text-blue-700'
                    : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                }`}
              >
                <div className="flex items-start space-x-3">
                  <div className={`mt-0.5 ${
                    selectedModeId === mode.id ? 'text-blue-600' : 'text-gray-400'
                  }`}>
                    {getIcon(mode.icon)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-sm mb-1">
                      {tn(mode.nameKey)}
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {tn(mode.descriptionKey)}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}