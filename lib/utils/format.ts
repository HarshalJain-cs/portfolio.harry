/**
 * Formatting Utilities
 * Functions for formatting numbers, dates, currencies, etc.
 */

/**
 * Format number with comma separators
 * @example formatNumber(1234567) // "1,234,567"
 */
export function formatNumber(num: number): string {
  return new Intl.NumberFormat('en-US').format(num)
}

/**
 * Format currency (Indian Rupees)
 * @example formatCurrency(12345.67) // "₹12,345.67"
 */
export function formatCurrency(amount: number, currency: 'INR' | 'USD' = 'INR'): string {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(amount)
}

/**
 * Format percentage change with + or - sign
 * @example formatPercentage(2.45) // "+2.45%"
 * @example formatPercentage(-1.32) // "-1.32%"
 */
export function formatPercentage(value: number, decimals: number = 2): string {
  const sign = value >= 0 ? '+' : ''
  return `${sign}${value.toFixed(decimals)}%`
}

/**
 * Format large numbers with K, M, B suffixes
 * @example formatCompactNumber(1500) // "1.5K"
 * @example formatCompactNumber(2500000) // "2.5M"
 */
export function formatCompactNumber(num: number): string {
  if (num >= 1e9) return `${(num / 1e9).toFixed(1)}B`
  if (num >= 1e6) return `${(num / 1e6).toFixed(1)}M`
  if (num >= 1e3) return `${(num / 1e3).toFixed(1)}K`
  return num.toString()
}

/**
 * Format date in human-readable format
 * @example formatDate('2024-01-15') // "Jan 15, 2024"
 */
export function formatDate(dateString: string, format: 'short' | 'long' = 'short'): string {
  const date = new Date(dateString)

  if (format === 'long') {
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}

/**
 * Format date range
 * @example formatDateRange('2023-01-01', '2023-12-31') // "Jan 2023 - Dec 2023"
 */
export function formatDateRange(startDate: string, endDate?: string): string {
  const start = new Date(startDate)
  const startStr = start.toLocaleDateString('en-US', { year: 'numeric', month: 'short' })

  if (!endDate) {
    return `${startStr} - Present`
  }

  const end = new Date(endDate)
  const endStr = end.toLocaleDateString('en-US', { year: 'numeric', month: 'short' })

  return `${startStr} - ${endStr}`
}

/**
 * Calculate reading time based on word count
 * @param text - Text content
 * @param wordsPerMinute - Average reading speed (default: 200)
 * @returns Reading time in minutes
 */
export function calculateReadingTime(text: string, wordsPerMinute: number = 200): number {
  const wordCount = text.trim().split(/\s+/).length
  return Math.ceil(wordCount / wordsPerMinute)
}

/**
 * Truncate text with ellipsis
 * @example truncateText('Long text here', 10) // "Long text..."
 */
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text
  return text.substring(0, maxLength).trim() + '...'
}

/**
 * Generate slug from string
 * @example generateSlug('Hello World! 123') // "hello-world-123"
 */
export function generateSlug(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim()
}

/**
 * Format stock ticker symbol
 * @example formatTicker('AAPL') // "$AAPL"
 */
export function formatTicker(ticker: string): string {
  return `$${ticker.toUpperCase()}`
}

/**
 * Get color class based on value (positive/negative)
 * @param value - Numeric value
 * @returns Tailwind color class
 */
export function getChangeColor(value: number): string {
  return value >= 0 ? 'text-stock-green' : 'text-stock-red'
}

/**
 * Get arrow icon based on value
 * @param value - Numeric value
 * @returns Unicode arrow character
 */
export function getChangeArrow(value: number): string {
  return value >= 0 ? '↑' : '↓'
}
