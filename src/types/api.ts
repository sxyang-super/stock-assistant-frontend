// API response type definitions

export interface Stock {
  type: string
  code: string
}

export interface AnalyseStatusItem {
  stock: Stock
  dayKDate: string
  change: number
  maxChange: number
  minChange: number
  tierPercent: number
}

export interface TierInfo {
  tier: number
  count: number
  percent: number
}

export interface AnalyseStatusDetail {
  stock: Stock
  dayKDate: string
  change: number
  maxChange: number
  minChange: number
  tierPercent: number
  increaseAggregations: TierInfo[]
  decreaseAggregations: TierInfo[]
}

export interface PageResponse {
  records: AnalyseStatusItem[]
  total: number
  size: number
  current: number
  pages: number
}

export interface ApiResponse<T> {
  code: number
  message: string
  data: T
  success: boolean
}