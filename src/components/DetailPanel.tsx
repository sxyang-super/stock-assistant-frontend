import { X, Loader2 } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import type { AnalyseStatusDetail } from '../types/api'

interface DetailPanelProps {
  isOpen: boolean
  data: AnalyseStatusDetail | null
  loading: boolean
  onClose: () => void
}

export function DetailPanel({ isOpen, data, loading, onClose }: DetailPanelProps) {
  const { t } = useLanguage()
  if (!isOpen) return null

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity"
        onClick={onClose}
      />
      
      {/* Side Panel */}
      <div className={`fixed top-0 right-0 h-full w-96 bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">{t('detailTitle')}</h2>
            <button
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-gray-500 hover:bg-gray-100 rounded-md"
              title={t('close')}
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          
          {/* Content Area */}
          <div className="flex-1 overflow-y-auto p-6">
            {loading ? (
              <div className="flex items-center justify-center py-12">
                <Loader2 className="h-6 w-6 animate-spin text-gray-400" />
                <span className="ml-2 text-gray-500">{t('loadingData')}</span>
              </div>
            ) : data ? (
              <div className="space-y-6">
                {/* Basic Information */}
                <div>
                  <h3 className="text-sm font-medium text-gray-900 mb-4">{t('basicInfo')}</h3>
                  <dl className="grid grid-cols-1 gap-4">
                    <div>
                      <dt className="text-sm font-medium text-gray-500">{t('type')}</dt>
                      <dd className="mt-1 text-sm text-gray-900">{data.stock.type}</dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-gray-500">{t('code')}</dt>
                      <dd className="mt-1 text-sm text-gray-900">{data.stock.code}</dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-gray-500">{t('dayKDate')}</dt>
                      <dd className="mt-1 text-sm text-gray-900">{data.dayKDate}</dd>
                    </div>
                  </dl>
                </div>

                {/* Price Change Information */}
                <div>
                  <h3 className="text-sm font-medium text-gray-900 mb-4">{t('analysisData')}</h3>
                  <dl className="grid grid-cols-1 gap-4">
                    <div>
                      <dt className="text-sm font-medium text-gray-500">{t('currentChange')}</dt>
                      <dd className="mt-1">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                          data.change >= 0 
                            ? 'bg-green-100 text-green-800'
                            : 'bg-red-100 text-red-800'
                        }`}>
                          {data.change >= 0 ? '+' : ''}{(data.change * 100).toFixed(2)}%
                        </span>
                      </dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-gray-500">{t('maxChangeAnalysis')}</dt>
                      <dd className="mt-1 text-sm text-green-600">
                        +{(data.maxChange * 100).toFixed(2)}%
                      </dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-gray-500">{t('minChangeAnalysis')}</dt>
                      <dd className="mt-1 text-sm text-red-600">
                        {(data.minChange * 100).toFixed(2)}%
                      </dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-gray-500">{t('tierPercentAnalysis')}</dt>
                      <dd className="mt-1 text-sm text-gray-900">
                        {(data.tierPercent * 100).toFixed(1)}%
                      </dd>
                    </div>
                  </dl>
                </div>

                {/* Aggregation Information */}
                <div>
                  <h3 className="text-sm font-medium text-gray-900 mb-4">{t('statistics')}</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-medium text-gray-700 mb-2">上涨聚合</h4>
                      <div className="bg-green-50 rounded-lg p-3">
                        {data.increaseAggregations.map((item, index) => (
                          <div key={index} className="flex justify-between text-sm">
                            <span className="text-gray-600">层级 {item.tier}</span>
                            <span className="text-gray-900">
                              {item.count} 次 ({(item.percent * 100).toFixed(1)}%)
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-700 mb-2">下跌聚合</h4>
                      <div className="bg-red-50 rounded-lg p-3">
                        {data.decreaseAggregations.map((item, index) => (
                          <div key={index} className="flex justify-between text-sm">
                            <span className="text-gray-600">层级 {item.tier}</span>
                            <span className="text-gray-900">
                              {item.count} 次 ({(item.percent * 100).toFixed(1)}%)
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Other Information */}
                <div>
                  <h3 className="text-sm font-medium text-gray-900 mb-4">其他信息</h3>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <pre className="text-xs text-gray-600 overflow-x-auto">
                      {JSON.stringify(data, null, 2)}
                    </pre>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-center py-12">
                <div className="text-gray-500">{t('noData')}</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}