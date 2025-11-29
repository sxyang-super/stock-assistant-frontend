import { useState, useEffect, useCallback } from 'react'
import { Database } from 'lucide-react'
import { DataTable } from './components/DataTable'
import { DetailPanel } from './components/DetailPanel'
import { LanguageSwitcher } from './components/LanguageSwitcher'
import { LanguageProvider, useLanguage } from './contexts/LanguageContext'
import { analyseStatusApi } from './services/api'
import type { AnalyseStatusItem, AnalyseStatusDetail } from './types/api'

function AppContent() {
  const { t } = useLanguage()
  const [data, setData] = useState<AnalyseStatusItem[]>([])
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)
  const [pageSize] = useState(10)
  
  const [detailData, setDetailData] = useState<AnalyseStatusDetail | null>(null)
  const [detailLoading, setDetailLoading] = useState(false)
  const [isDetailPanelOpen, setIsDetailPanelOpen] = useState(false)

  // Fetch list data
  const fetchData = useCallback(async (page: number) => {
    setLoading(true)
    try {
      const response = await analyseStatusApi.getListByPage(page, pageSize)
      setData(response.records)
      setTotalPages(response.pages)
      setCurrentPage(response.current)
    } catch (error) {
      console.error('Fetch data error:', error)
      setData([])
    } finally {
      setLoading(false)
    }
  }, [pageSize])

  // Fetch detail data
  const fetchDetail = async (item: AnalyseStatusItem) => {
    setDetailLoading(true)
    setIsDetailPanelOpen(true)
    try {
      const response = await analyseStatusApi.getDetail(item.stock.type, item.stock.code)
      setDetailData(response)
    } catch (error) {
      console.error('Fetch detail error:', error)
      setDetailData(null)
    } finally {
      setDetailLoading(false)
    }
  }

  // Fetch data on page load
  useEffect(() => {
    fetchData(1).catch(console.error)
  }, [fetchData])

  // Handle page change
  const handlePageChange = (page: number) => {
    fetchData(page).catch(console.error)
  }

  // Handle view detail
  const handleViewDetail = (item: AnalyseStatusItem) => {
    fetchDetail(item).catch(console.error)
  }

  // Close detail panel
  const handleCloseDetail = () => {
    setIsDetailPanelOpen(false)
    setDetailData(null)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
        </div>      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Title */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900">{t('analysisStatusList')}</h2>
          <p className="mt-2 text-gray-600">{t('analysisStatusDescription')}</p>
        </div>

        {/* Data Table */}
        <DataTable
          data={data}
          loading={loading}
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
          onViewDetail={handleViewDetail}
        />
      </main>

      {/* Detail Panel */}
      <DetailPanel
        isOpen={isDetailPanelOpen}
        data={detailData}
        loading={detailLoading}
        onClose={handleCloseDetail}
      />
    </div>
  )
}

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  )
}

export default App
