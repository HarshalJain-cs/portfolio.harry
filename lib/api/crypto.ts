/**
 * CoinGecko API Integration
 * Fetches real-time cryptocurrency prices
 */

import type { CryptoData } from '@/types/database'

const COINGECKO_API_BASE = 'https://api.coingecko.com/api/v3'

/**
 * Fetch cryptocurrency prices from CoinGecko
 */
export async function fetchCryptoPrices(
  coinIds: string[] = ['bitcoin', 'ethereum', 'binancecoin', 'solana']
): Promise<CryptoData[]> {
  try {
    const idsParam = coinIds.join(',')
    const response = await fetch(
      `${COINGECKO_API_BASE}/coins/markets?vs_currency=usd&ids=${idsParam}&order=market_cap_desc&sparkline=false`,
      {
        headers: {
          Accept: 'application/json',
          ...(process.env.NEXT_PUBLIC_COINGECKO_API_KEY && {
            'x-cg-pro-api-key': process.env.NEXT_PUBLIC_COINGECKO_API_KEY,
          }),
        },
        next: { revalidate: 60 }, // Cache for 60 seconds
      }
    )

    if (!response.ok) {
      throw new Error('Failed to fetch crypto prices')
    }

    const data = await response.json()

    return data.map((coin: any) => ({
      id: coin.id,
      symbol: coin.symbol.toUpperCase(),
      name: coin.name,
      current_price: coin.current_price,
      price_change_percentage_24h: coin.price_change_percentage_24h,
      market_cap: coin.market_cap,
      total_volume: coin.total_volume,
    }))
  } catch (error) {
    console.error('Error fetching crypto prices:', error)
    return getFallbackCryptoData()
  }
}

/**
 * Fetch specific cryptocurrency by ID
 */
export async function fetchCrypto(coinId: string): Promise<CryptoData | null> {
  try {
    const response = await fetch(
      `${COINGECKO_API_BASE}/coins/${coinId}?localization=false&tickers=false&community_data=false&developer_data=false`,
      {
        headers: {
          Accept: 'application/json',
        },
        next: { revalidate: 60 },
      }
    )

    if (!response.ok) {
      throw new Error(`Failed to fetch ${coinId}`)
    }

    const coin = await response.json()

    return {
      id: coin.id,
      symbol: coin.symbol.toUpperCase(),
      name: coin.name,
      current_price: coin.market_data.current_price.usd,
      price_change_percentage_24h:
        coin.market_data.price_change_percentage_24h,
      market_cap: coin.market_data.market_cap.usd,
      total_volume: coin.market_data.total_volume.usd,
    }
  } catch (error) {
    console.error(`Error fetching ${coinId}:`, error)
    return null
  }
}

/**
 * Fetch trending cryptocurrencies
 */
export async function fetchTrendingCrypto(): Promise<CryptoData[]> {
  try {
    const response = await fetch(`${COINGECKO_API_BASE}/search/trending`, {
      headers: {
        Accept: 'application/json',
      },
      next: { revalidate: 300 }, // Cache for 5 minutes
    })

    if (!response.ok) {
      throw new Error('Failed to fetch trending crypto')
    }

    const data = await response.json()
    const trendingIds = data.coins
      .slice(0, 4)
      .map((item: any) => item.item.id)

    return fetchCryptoPrices(trendingIds)
  } catch (error) {
    console.error('Error fetching trending crypto:', error)
    return getFallbackCryptoData()
  }
}

/**
 * Fallback crypto data when API fails
 */
function getFallbackCryptoData(): CryptoData[] {
  return [
    {
      id: 'bitcoin',
      symbol: 'BTC',
      name: 'Bitcoin',
      current_price: 43200,
      price_change_percentage_24h: 2.3,
      market_cap: 850000000000,
      total_volume: 25000000000,
    },
    {
      id: 'ethereum',
      symbol: 'ETH',
      name: 'Ethereum',
      current_price: 2245,
      price_change_percentage_24h: 1.8,
      market_cap: 270000000000,
      total_volume: 15000000000,
    },
    {
      id: 'binancecoin',
      symbol: 'BNB',
      name: 'BNB',
      current_price: 310,
      price_change_percentage_24h: -0.5,
      market_cap: 48000000000,
      total_volume: 1200000000,
    },
    {
      id: 'solana',
      symbol: 'SOL',
      name: 'Solana',
      current_price: 98,
      price_change_percentage_24h: 4.2,
      market_cap: 42000000000,
      total_volume: 2500000000,
    },
  ]
}

/**
 * Format crypto price for display
 */
export function formatCryptoPrice(price: number): string {
  if (price >= 1000) return `$${price.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`
  if (price >= 1) return `$${price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
  if (price >= 0.01) return `$${price.toFixed(4)}`
  return `$${price.toFixed(6)}`
}

/**
 * Format market cap for crypto
 */
export function formatCryptoMarketCap(marketCap: number): string {
  if (marketCap >= 1e12) return `$${(marketCap / 1e12).toFixed(2)}T`
  if (marketCap >= 1e9) return `$${(marketCap / 1e9).toFixed(2)}B`
  if (marketCap >= 1e6) return `$${(marketCap / 1e6).toFixed(2)}M`
  return `$${marketCap.toLocaleString()}`
}
