import type { TradingMode } from '../types/trading'

export const tradingModes: TradingMode[] = [
  {
    id: 'low-frequency-active-quant',
    name: '低频主动量化交易',
    nameKey: 'tradingModes.lowFrequencyActiveQuant.name',
    description: '基于低频分析的主动量化交易策略',
    descriptionKey: 'tradingModes.lowFrequencyActiveQuant.description',
    icon: 'TrendingUp',
    path: '/trading/low-frequency-active-quant',
    enabled: true
  },
  // 可以在这里添加更多交易模式
  // {
  //   id: 'high-frequency-arbitrage',
  //   name: '高频套利交易',
  //   nameKey: 'tradingModes.highFrequencyArbitrage.name',
  //   description: '基于高频数据的套利交易策略',
  //   descriptionKey: 'tradingModes.highFrequencyArbitrage.description',
  //   icon: 'Zap',
  //   path: '/trading/high-frequency-arbitrage',
  //   enabled: false // 暂未启用
  // }
]

export const getTradingModeById = (id: string): TradingMode | undefined => {
  return tradingModes.find(mode => mode.id === id)
}

export const getEnabledTradingModes = (): TradingMode[] => {
  return tradingModes.filter(mode => mode.enabled)
}