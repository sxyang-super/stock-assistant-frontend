export interface TranslationKeys {
  // Header
  appTitle: string
  appSubtitle: string
  
  // Page titles
  analysisStatusList: string
  analysisStatusDescription: string
  
  // Table
  stockCode: string
  stockName: string
  stockType: string
  dayKDate: string
  change: string
  maxChangeTable: string
  minChangeTable: string
  tierPercentTable: string
  actions: string
  viewDetail: string
  
  // Pagination
  previous: string
  next: string
  page: string
  of: string
  totalItems: string
  
  // Detail Panel
  detailTitle: string
  close: string
  basicInfo: string
  code: string
  name: string
  type: string
  industry: string
  market: string
  
  // Analysis Data
  analysisData: string
  latestDate: string
  changeDays: string
  currentChange: string
  maxChangeAnalysis: string
  minChangeAnalysis: string
  tierPercentAnalysis: string
  
  // Statistics
  statistics: string
  totalRecords: string
  avgChange: string
  maxChangeRecord: string
  minChangeRecord: string
  
  // Loading
  loading: string
  loadingData: string
  noData: string
  
  // Error
  error: string
  fetchError: string
  retry: string
  
  // Trading Modes
  tradingModes: string
  tradingModeList: string
  tradingModeDescription: string
  selectTradingMode: string
  selectTradingModePrompt: string
  tradingModeNotAvailable: string
  tradingModeInDevelopment: string
  noTradingModes: string
  lowFrequencyActiveQuant: {
    name: string
    description: string
  }
  highFrequencyArbitrage: {
    name: string
    description: string
  }
}

export const zhCN: TranslationKeys = {
  // Header
  appTitle: '分析状态管理',
  appSubtitle: '数据分析状态监控平台',
  
  // Page titles
  analysisStatusList: '分析状态列表',
  analysisStatusDescription: '查看和管理所有数据分析任务状态',
  
  // Table
  stockCode: '股票代码',
  stockName: '股票名称',
  stockType: '股票类型',
  dayKDate: '日K日期',
  change: '涨跌幅',
  maxChangeTable: '最大涨跌幅',
  minChangeTable: '最小涨跌幅',
  tierPercentTable: '分层百分比',
  actions: '操作',
  viewDetail: '查看详情',
  
  // Pagination
  previous: '上一页',
  next: '下一页',
  page: '第',
  of: '页，共',
  totalItems: '条记录',
  
  // Detail Panel
  detailTitle: '详细信息',
  close: '关闭',
  basicInfo: '基本信息',
  code: '代码',
  name: '名称',
  type: '类型',
  industry: '行业',
  market: '市场',
  
  // Analysis Data
  analysisData: '分析数据',
  latestDate: '最新日期',
  changeDays: '变动天数',
  currentChange: '当前涨跌幅',
  maxChangeAnalysis: '最大涨跌幅',
  minChangeAnalysis: '最小涨跌幅',
  tierPercentAnalysis: '分层百分比',
  
  // Statistics
  statistics: '统计信息',
  totalRecords: '总记录数',
  avgChange: '平均涨跌幅',
  maxChangeRecord: '最大涨跌幅记录',
  minChangeRecord: '最小涨跌幅记录',
  
  // Loading
  loading: '加载中...',
  loadingData: '正在加载数据...',
  noData: '暂无数据',
  
  // Error
  error: '错误',
  fetchError: '获取数据失败',
  retry: '重试',
  
  // Trading Modes
  tradingModes: '交易模式',
  tradingModeList: '交易模式列表',
  tradingModeDescription: '选择不同的交易模式进行数据分析和管理',
  selectTradingMode: '请选择交易模式',
  selectTradingModePrompt: '请从左侧选择一个交易模式开始使用',
  tradingModeNotAvailable: '该交易模式暂未开放，敬请期待',
  tradingModeInDevelopment: '该交易模式正在开发中',
  noTradingModes: '暂无可用交易模式',
  lowFrequencyActiveQuant: {
    name: '低频主动量化交易',
    description: '基于低频分析的主动量化交易策略'
  },
  highFrequencyArbitrage: {
    name: '高频套利交易',
    description: '基于高频数据的套利交易策略'
  }
}

export const enUS: TranslationKeys = {
  // Header
  appTitle: 'Analysis Status Management',
  appSubtitle: 'Data Analysis Status Monitoring Platform',
  
  // Page titles
  analysisStatusList: 'Analysis Status List',
  analysisStatusDescription: 'View and manage all data analysis task status',
  
  // Table
  stockCode: 'Stock Code',
  stockName: 'Stock Name',
  stockType: 'Stock Type',
  dayKDate: 'Day K Date',
  change: 'Change',
  maxChangeTable: 'Max Change',
  minChangeTable: 'Min Change',
  tierPercentTable: 'Tier Percent',
  actions: 'Actions',
  viewDetail: 'View Detail',
  
  // Pagination
  previous: 'Previous',
  next: 'Next',
  page: 'Page',
  of: 'of',
  totalItems: 'total items',
  
  // Detail Panel
  detailTitle: 'Detail Information',
  close: 'Close',
  basicInfo: 'Basic Information',
  code: 'Code',
  name: 'Name',
  type: 'Type',
  industry: 'Industry',
  market: 'Market',
  
  // Analysis Data
  analysisData: 'Analysis Data',
  latestDate: 'Latest Date',
  changeDays: 'Change Days',
  currentChange: 'Current Change',
  maxChangeAnalysis: 'Max Change',
  minChangeAnalysis: 'Min Change',
  tierPercentAnalysis: 'Tier Percent',
  
  // Statistics
  statistics: 'Statistics',
  totalRecords: 'Total Records',
  avgChange: 'Average Change',
  maxChangeRecord: 'Max Change Record',
  minChangeRecord: 'Min Change Record',
  
  // Loading
  loading: 'Loading...',
  loadingData: 'Loading data...',
  noData: 'No Data',
  
  // Error
  error: 'Error',
  fetchError: 'Failed to fetch data',
  retry: 'Retry',
  
  // Trading Modes
  tradingModes: 'Trading Modes',
  tradingModeList: 'Trading Mode List',
  tradingModeDescription: 'Select different trading modes for data analysis and management',
  selectTradingMode: 'Please select a trading mode',
  selectTradingModePrompt: 'Please select a trading mode from the left to get started',
  tradingModeNotAvailable: 'This trading mode is not yet available, stay tuned',
  tradingModeInDevelopment: 'This trading mode is under development',
  noTradingModes: 'No trading modes available',
  lowFrequencyActiveQuant: {
    name: 'Low Frequency Active Quantitative Trading',
    description: 'Active quantitative trading strategy based on low frequency analysis'
  },
  highFrequencyArbitrage: {
    name: 'High Frequency Arbitrage Trading',
    description: 'Arbitrage trading strategy based on high frequency data'
  }
}