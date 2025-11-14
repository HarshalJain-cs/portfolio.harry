/**
 * Market Closed (404) Page
 * Custom 404 error page with stock exchange theme
 */

import Link from 'next/link'
import { FiHome, FiSearch, FiTrendingUp } from 'react-icons/fi'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        {/* Stock Board Style Error */}
        <div className="stock-border p-8 mb-8 bg-stock-board">
          <div className="text-stock-red text-7xl md:text-9xl font-heading font-black mb-4 font-mono">
            404
          </div>
          <div className="text-2xl md:text-3xl font-heading text-stock-cyan uppercase tracking-wider mb-2">
            Market Closed
          </div>
          <div className="text-sm text-stock-text/60 font-mono uppercase">
            Trading Halted • Asset Not Found
          </div>
        </div>

        {/* Error Message */}
        <div className="mb-8 space-y-4">
          <p className="text-xl md:text-2xl text-stock-text/80 font-heading">
            The asset you're looking for has been{' '}
            <span className="text-stock-red">delisted</span> or never existed.
          </p>

          <p className="text-stock-text/60">
            This page might have been moved, removed, or never created. Let's get
            you back to trading.
          </p>
        </div>

        {/* Status Board */}
        <div className="grid grid-cols-3 gap-4 mb-8 p-6 bg-stock-board border-2 border-stock-red/50">
          <div>
            <div className="text-stock-red text-2xl font-mono font-bold">
              ↓ ERROR
            </div>
            <div className="text-xs text-stock-text/40 mt-1 uppercase">
              Page Status
            </div>
          </div>
          <div>
            <div className="text-stock-cyan text-2xl font-mono font-bold">
              404
            </div>
            <div className="text-xs text-stock-text/40 mt-1 uppercase">
              Error Code
            </div>
          </div>
          <div>
            <div className="text-stock-gold text-2xl font-mono font-bold">
              N/A
            </div>
            <div className="text-xs text-stock-text/40 mt-1 uppercase">
              Market Cap
            </div>
          </div>
        </div>

        {/* Navigation Options */}
        <div className="space-y-4">
          <h3 className="text-lg font-heading text-stock-cyan mb-4">
            Suggested Trading Options:
          </h3>

          <div className="grid md:grid-cols-3 gap-4">
            <Link
              href="/"
              className="p-4 bg-stock-navy/50 border border-stock-cyan hover:bg-stock-navy transition-colors group"
            >
              <FiHome className="text-3xl text-stock-cyan mx-auto mb-2 group-hover:scale-110 transition-transform" />
              <div className="font-heading text-stock-cyan mb-1">
                Trading Floor
              </div>
              <div className="text-xs text-stock-text/60">
                Return to homepage
              </div>
            </Link>

            <Link
              href="/ventures/tech-assets"
              className="p-4 bg-stock-navy/50 border border-stock-green hover:bg-stock-navy transition-colors group"
            >
              <FiTrendingUp className="text-3xl text-stock-green mx-auto mb-2 group-hover:scale-110 transition-transform" />
              <div className="font-heading text-stock-green mb-1">
                Tech Assets
              </div>
              <div className="text-xs text-stock-text/60">View projects</div>
            </Link>

            <Link
              href="/prospectus"
              className="p-4 bg-stock-navy/50 border border-stock-gold hover:bg-stock-navy transition-colors group"
            >
              <FiSearch className="text-3xl text-stock-gold mx-auto mb-2 group-hover:scale-110 transition-transform" />
              <div className="font-heading text-stock-gold mb-1">
                Prospectus
              </div>
              <div className="text-xs text-stock-text/60">Learn about me</div>
            </Link>
          </div>
        </div>

        {/* Market Quote */}
        <div className="mt-12 p-4 glass rounded-lg">
          <div className="text-stock-cyan font-mono text-sm italic">
            "In investing, what is comfortable is rarely profitable."
          </div>
          <div className="text-stock-text/40 text-xs mt-2">
            — Robert Arnott
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-xs text-stock-text/40 font-mono">
          <Link href="/" className="hover:text-stock-cyan transition-colors">
            ← Return to $HARSHAL Exchange
          </Link>
        </div>
      </div>
    </div>
  )
}
