/**
 * Stock Ticker Component
 * Scrolling ticker bar with live market data (stocks + crypto)
 * Updates every 60 seconds
 */

'use client'

import { useEffect, useState } from 'react'
import { fetchIndianMarkets, fetchUSMarkets, getStockDisplayName } from '@/lib/api/stocks'
import { fetchCryptoPrices, formatCryptoPrice } from '@/lib/api/crypto'
import type { StockData, CryptoData } from '@/types/database'
import { getChangeColor, getChangeArrow, formatPercentage } from '@/lib/utils/format'

export default function StockTicker() {
  const [stockData, setStockData] = useState<StockData[]>([])
  const [cryptoData, setCryptoData] = useState<CryptoData[]>([])
  const [currentTime, setCurrentTime] = useState<string>('')
  const [loading, setLoading] = useState(true)

  // Fetch market data
  useEffect(() => {
    async function fetchMarketData() {
      try {
        const [indianMarkets, usMarkets, crypto] = await Promise.all([
          fetchIndianMarkets(),
          fetchUSMarkets(),
          fetchCryptoPrices(['bitcoin', 'ethereum']),
        ])

        setStockData([...indianMarkets.slice(0, 2), ...usMarkets.slice(0, 2)])
        setCryptoData(crypto)
        setLoading(false)
      } catch (error) {
        console.error('Error fetching market data:', error)
        setLoading(false)
      }
    }

    fetchMarketData()

    // Refresh every 60 seconds
    const interval = setInterval(fetchMarketData, 60000)

    return () => clearInterval(interval)
  }, [])

  // Update time every second
  useEffect(() => {
    function updateTime() {
      const now = new Date()
      setCurrentTime(
        now.toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
        })
      )
    }

    updateTime()
    const interval = setInterval(updateTime, 1000)

    return () => clearInterval(interval)
  }, [])

  if (loading) {
    return (
      <div className="stock-border-bottom bg-stock-board py-3">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center">
            <div className="text-stock-text/60 font-mono text-sm">
              Loading market data...
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Combine all ticker items
  const allTickerItems = [
    ...stockData.map(stock => ({
      type: 'stock' as const,
      symbol: getStockDisplayName(stock.symbol),
      price: stock.price.toFixed(2),
      change: stock.changePercent,
    })),
    ...cryptoData.map(crypto => ({
      type: 'crypto' as const,
      symbol: crypto.symbol,
      price: formatCryptoPrice(crypto.current_price),
      change: crypto.price_change_percentage_24h,
    })),
  ]

  return (
    <div className="stock-border-bottom bg-stock-board py-3 overflow-hidden relative">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-8">
          {/* Live Indicator */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <div className="w-2 h-2 bg-stock-green rounded-full animate-pulse" />
            <span className="text-stock-text/60 font-mono text-xs uppercase">
              Live
            </span>
            <span className="text-stock-text/80 font-mono text-xs">
              {currentTime} IST
            </span>
          </div>

          {/* Scrolling Ticker */}
          <div className="flex-1 overflow-hidden">
            <div className="flex gap-8 animate-ticker-scroll">
              {/* Duplicate items for seamless scroll */}
              {[...allTickerItems, ...allTickerItems].map((item, index) => (
                <TickerItem
                  key={`${item.symbol}-${index}`}
                  symbol={item.symbol}
                  price={item.price}
                  change={item.change}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

/**
 * Individual Ticker Item Component
 */
function TickerItem({
  symbol,
  price,
  change,
}: {
  symbol: string
  price: string
  change: number
}) {
  const changeColor = getChangeColor(change)
  const arrow = getChangeArrow(change)

  return (
    <div className="flex items-center gap-2 flex-shrink-0 ticker-item">
      <span className="text-stock-text font-mono font-bold text-sm">
        {symbol}
      </span>
      <span className="text-stock-text/90 font-mono text-sm">{price}</span>
      <span className={`${changeColor} font-mono text-xs font-bold`}>
        {arrow} {formatPercentage(change)}
      </span>
    </div>
  )
}

/**
 * Static Ticker (for server-side rendering)
 * Shows placeholder data without animations
 */
export function StaticStockTicker() {
  const placeholderData = [
    { symbol: 'NIFTY 50', price: '21,450', change: 1.2 },
    { symbol: 'SENSEX', price: '70,800', change: 0.8 },
    { symbol: 'BTC', price: '$43,200', change: 2.3 },
    { symbol: 'ETH', price: '$2,245', change: 1.8 },
    { symbol: 'NASDAQ', price: '15,200', change: 0.5 },
  ]

  return (
    <div className="stock-border-bottom bg-stock-board py-3">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-8 flex-wrap">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-stock-green rounded-full" />
            <span className="text-stock-text/60 font-mono text-xs">LIVE</span>
          </div>

          {placeholderData.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <span className="text-stock-text font-mono font-bold text-sm">
                {item.symbol}
              </span>
              <span className="text-stock-text/90 font-mono text-sm">
                {item.price}
              </span>
              <span className="text-stock-green font-mono text-xs font-bold">
                ↑ +{item.change}%
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
