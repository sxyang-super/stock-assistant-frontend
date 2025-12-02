import { useState, useEffect, useCallback } from 'react'
import { DataTable } from '../DataTable'
import { DetailPanel } from '../DetailPanel'
import { analyseStatusApi } from '../../services/api'
import { useLanguage } from '../../contexts/LanguageContext'
import type { AnalyseStatusItem, AnalyseStatusDetail } from '../../types/api'

export function LowFrequencyActiveQuant() {
  const { t } = useLanguage()
  const [data, setData] = useState<AnalyseStatusItem[]>([])
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)
  const [pageSize] = useState(10)
  const [isInitialized, setIsInitialized] = useState(false)
  
  const [detailData, setDetailData] = useState<AnalyseStatusDetail | null>(null)
  const [detailLoading, setDetailLoading] = useState(false)
  const [isDetailPanelOpen, setIsDetailPanelOpen] = useState(false)

  // Fetch list data
  const fetchData = useCallback(async (page: number) => {
    setLoading(true)
    try {
      const response = await analyseStatusApi.getListByPage(page, pageSize)
      // 为每个股票项添加名称
      const dataWithNames = await Promise.all(
        response.records.map(async (item) => {
          try {
            const stockInfo = await analyseStatusApi.getStockInfo(item.stock.type, item.stock.code)
            return {
              ...item,
              stock: {
                ...item.stock,
                name: stockInfo.name
              }
            }
          } catch (error) {
            console.warn(`Failed to fetch stock name for ${item.stock.type}:${item.stock.code}`, error)
            return item
          }
        })
      )
      setData(dataWithNames)
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

  // Fetch data on component mount
  useEffect(() => {
    if (!isInitialized) {
      fetchData(1).catch(console.error)
      setIsInitialized(true)
    }
  }, [fetchData, isInitialized])

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
    <div className="flex-1 p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">
          {t('analysisStatusList')}
        </h1>
        <p className="mt-2 text-gray-600">
          {t('analysisStatusDescription')}
        </p>
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