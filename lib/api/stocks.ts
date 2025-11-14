/**
 * Yahoo Finance API Integration
 * Fetches real-time stock market data for Indian and US markets
 */

import type { StockData } from '@/types/database'

/**
 * Fetch stock data from Yahoo Finance (via yfinance or alternative)
 * Note: This uses a fallback approach since Yahoo Finance deprecated public API
 */
export async function fetchStockPrices(
  symbols: string[]
): Promise<StockData[]> {
  try {
    // Using Yahoo Finance alternative API (query.yahooapis.com)
    // For production, consider using a paid API like Alpha Vantage or Finnhub

    const promises = symbols.map(async symbol => {
      try {
        // Yahoo Finance Quote API endpoint
        const response = await fetch(
          `https://query1.finance.yahoo.com/v8/finance/chart/${symbol}`,
          {
            headers: {
              'User-Agent': 'Mozilla/5.0',
            },
            next: { revalidate: 60 }, // Cache for 60 seconds
          }
        )

        if (!response.ok) {
          throw new Error(`Failed to fetch ${symbol}`)
        }

        const data = await response.json()
        const quote = data.chart.result[0]
        const meta = quote.meta
        const currentPrice = meta.regularMarketPrice
        const previousClose = meta.previousClose
        const change = currentPrice - previousClose
        const changePercent = (change / previousClose) * 100

        return {
          symbol,
          price: currentPrice,
          change,
          changePercent,
          volume: meta.regularMarketVolume,
          marketCap: formatMarketCap(meta.marketCap),
        }
      } catch (error) {
        console.error(`Error fetching ${symbol}:`, error)
        return getFallbackStockData(symbol)
      }
    })

    return await Promise.all(promises)
  } catch (error) {
    console.error('Error fetching stock prices:', error)
    return symbols.map(getFallbackStockData)
  }
}

/**
 * Fetch Indian market indices
 */
export async function fetchIndianMarkets(): Promise<StockData[]> {
  const symbols = ['^NSEI', '^BSESN', '^NSEBANK'] // NIFTY, SENSEX, BANKNIFTY
  return fetchStockPrices(symbols)
}

/**
 * Fetch US market indices
 */
export async function fetchUSMarkets(): Promise<StockData[]> {
  const symbols = ['^GSPC', '^IXIC', '^DJI'] // S&P 500, NASDAQ, DOW
  return fetchStockPrices(symbols)
}

/**
 * Fetch specific stocks
 */
export async function fetchStocks(symbols: string[]): Promise<StockData[]> {
  return fetchStockPrices(symbols)
}

/**
 * Format market cap for display
 */
function formatMarketCap(marketCap: number | undefined): string {
  if (!marketCap) return 'N/A'

  if (marketCap >= 1e12) return `$${(marketCap / 1e12).toFixed(2)}T`
  if (marketCap >= 1e9) return `$${(marketCap / 1e9).toFixed(2)}B`
  if (marketCap >= 1e6) return `$${(marketCap / 1e6).toFixed(2)}M`

  return `$${marketCap.toLocaleString()}`
}

/**
 * Fallback data when API fails
 */
function getFallbackStockData(symbol: string): StockData {
  const fallbackData: Record<string, Partial<StockData>> = {
    '^NSEI': {
      symbol: 'NIFTY',
      price: 21450,
      change: 250,
      changePercent: 1.18,
    },
    '^BSESN': {
      symbol: 'SENSEX',
      price: 70800,
      change: 580,
      changePercent: 0.83,
    },
    '^GSPC': {
      symbol: 'S&P 500',
      price: 5200,
      change: 45,
      changePercent: 0.87,
    },
    '^IXIC': {
      symbol: 'NASDAQ',
      price: 15200,
      change: 120,
      changePercent: 0.79,
    },
  }

  return {
    symbol: symbol,
    price: 0,
    change: 0,
    changePercent: 0,
    ...fallbackData[symbol],
  }
}

/**
 * Get display name for stock symbol
 */
export function getStockDisplayName(symbol: string): string {
  const names: Record<string, string> = {
    '^NSEI': 'NIFTY 50',
    '^BSESN': 'SENSEX',
    '^NSEBANK': 'BANKNIFTY',
    '^GSPC': 'S&P 500',
    '^IXIC': 'NASDAQ',
    '^DJI': 'DOW JONES',
  }

  return names[symbol] || symbol
}
