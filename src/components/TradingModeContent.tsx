
import { useLanguage } from '../contexts/LanguageContext'
import { tn } from '../i18n'
import { LowFrequencyActiveQuant } from './trading/LowFrequencyActiveQuant'
import type { TradingMode } from '../types/trading'

interface TradingModeContentProps {
  selectedMode: TradingMode | null
}

export function TradingModeContent({ selectedMode }: TradingModeContentProps) {
  const { t } = useLanguage()

  if (!selectedMode) {
    return (
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center">
          <div className="text-gray-400 mb-4">
            <svg className="mx-auto h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            {t('selectTradingMode')}
          </h3>
          <p className="text-gray-600">
            {t('selectTradingModePrompt')}
          </p>
        </div>
      </div>
    )
  }

  // 根据选择的交易模式渲染对应的内容
  const renderContent = () => {
    switch (selectedMode.id) {
      case 'low-frequency-active-quant':
        return <LowFrequencyActiveQuant />
      
      case 'high-frequency-arbitrage':
        return (
          <div className="flex-1 flex items-center justify-center">
            <div className="text-center">
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                {tn(selectedMode.nameKey)}
              </h3>
              <p className="text-gray-600">
                {t('tradingModeNotAvailable')}
              </p>
            </div>
          </div>
        )
      
      default:
        return (
          <div className="flex-1 flex items-center justify-center">
            <div className="text-center">
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                {tn(selectedMode.nameKey)}
              </h3>
              <p className="text-gray-600">
                {t('tradingModeInDevelopment')}
              </p>
            </div>
          </div>
        )
    }
  }

  return (
    <div className="flex-1 bg-gray-50">
      {renderContent()}
    </div>
  )
}