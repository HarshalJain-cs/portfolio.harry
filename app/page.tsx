/**
 * Trading Floor (Homepage)
 * Main landing page with stock exchange theme
 */

export default function TradingFloorPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8">
      {/* Stock Exchange Board Header */}
      <div className="stock-border w-full max-w-6xl p-8 mb-8">
        <div className="text-center space-y-4">
          <h1 className="font-heading text-stock-cyan uppercase tracking-wider">
            $HARSHAL
          </h1>
          <div className="stock-border-top stock-border-bottom py-4">
            <p className="font-mono text-xl">PERSONAL STOCK EXCHANGE</p>
            <p className="text-sm text-stock-text/60 mt-2">
              [Live] {new Date().toLocaleTimeString('en-US')} IST
            </p>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="w-full max-w-4xl text-center space-y-6">
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-heading text-stock-gold">
          HARSHAL JAIN
        </h2>

        <p className="text-2xl md:text-3xl text-stock-cyan font-heading">
          Engineering Degree Holder | Finance Mind at Heart 💰
        </p>

        <p className="text-lg md:text-xl text-stock-text/80 max-w-2xl mx-auto leading-relaxed">
          Scaling businesses and establishing ventures at the intersection of
          technology and financial markets.
        </p>

        {/* Status Board */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
          <div className="stock-card">
            <div className="text-stock-green text-3xl font-mono mb-2">
              ↑ ACTIVE
            </div>
            <div className="text-sm text-stock-text/60">Portfolio Status</div>
          </div>

          <div className="stock-card">
            <div className="text-stock-cyan text-3xl font-mono mb-2">
              🚀 BUILDING
            </div>
            <div className="text-sm text-stock-text/60">Current Phase</div>
          </div>

          <div className="stock-card">
            <div className="text-stock-gold text-3xl font-mono mb-2">
              ∞ GROWTH
            </div>
            <div className="text-sm text-stock-text/60">Trajectory</div>
          </div>
        </div>

        {/* Coming Soon Notice */}
        <div className="mt-16 p-6 glass rounded-lg">
          <h3 className="text-2xl font-heading text-stock-cyan mb-4">
            🏗️ MARKET OPENING SOON
          </h3>
          <p className="text-stock-text/80">
            Full portfolio website with 16 pages featuring:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6 text-sm">
            <div>✅ Tech Projects</div>
            <div>✅ Finance Analysis</div>
            <div>✅ Live Stock Ticker</div>
            <div>✅ GitHub Stats</div>
            <div>✅ Certifications</div>
            <div>✅ Blog Posts</div>
            <div>✅ Experience Timeline</div>
            <div>✅ Contact Form</div>
          </div>
        </div>

        {/* Footer Info */}
        <div className="mt-12 text-sm text-stock-text/40 font-mono">
          <p>NASDAQ OF PORTFOLIOS™</p>
          <p>© 2025 HARSHAL JAIN. ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </main>
  )
}
