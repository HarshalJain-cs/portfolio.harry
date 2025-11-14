/**
 * Utility function for conditionally joining classNames
 * Combines clsx and tailwind-merge for optimal className handling
 */

import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Merge Tailwind CSS classes without conflicts
 * @param inputs - Class values to merge
 * @returns Merged class string
 * @example cn('px-2 py-1', 'px-4') // Returns 'py-1 px-4'
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
