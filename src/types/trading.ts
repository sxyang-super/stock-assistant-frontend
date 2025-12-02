// Trading mode type definitions

export interface TradingMode {
  id: string
  name: string
  nameKey: string // translation key
  description: string
  descriptionKey: string // translation key
  icon: string
  path: string
  enabled: boolean
}

export interface TradingModeMenuItem {
  mode: TradingMode
  isActive: boolean
  onClick: () => void
}