/**
 * Market Commentary (Blog) Page
 * Blog posts and articles about tech, finance, and markets
 */

import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import StockTicker from '@/components/layout/StockTicker'
import { blogPosts } from '@/lib/data'
import { FiBookOpen, FiCalendar, FiClock, FiTag, FiArrowRight } from 'react-icons/fi'
import Link from 'next/link'

export default function MarketCommentaryPage() {
  // Calculate reading time (approx 200 words per minute)
  const calculateReadingTime = (content: string) => {
    const words = content.split(' ').length
    const minutes = Math.ceil(words / 200)
    return `${minutes} min read`
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <StockTicker />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="stock-border-bottom bg-gradient-to-br from-stock-cyan/10 to-transparent py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-4">
              <div className="inline-block px-4 py-2 bg-stock-cyan/10 border border-stock-cyan/30 rounded-full text-stock-cyan text-sm font-mono uppercase tracking-wider mb-2">
                <FiBookOpen className="inline mr-2 mb-1" />
                Market Commentary
              </div>

              <h1 className="text-4xl md:text-5xl font-heading text-stock-gold font-black">
                Insights & Analysis
              </h1>

              <p className="text-lg text-stock-text/80 max-w-2xl mx-auto">
                Deep dives into technology trends, financial markets, and the
                intersection of code and capital. Thoughts on building, investing,
                and innovating.
              </p>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="bg-stock-board py-8">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-stock-dark/50 border border-stock-navy">
                <div className="text-3xl font-heading text-stock-cyan mb-1 font-black">
                  {blogPosts.length}
                </div>
                <div className="text-xs text-stock-text/60 uppercase">
                  Articles
                </div>
              </div>
              <div className="text-center p-4 bg-stock-dark/50 border border-stock-navy">
                <div className="text-3xl font-heading text-stock-green mb-1 font-black">
                  {new Set(blogPosts.map(p => p.category)).size}
                </div>
                <div className="text-xs text-stock-text/60 uppercase">
                  Topics
                </div>
              </div>
              <div className="text-center p-4 bg-stock-dark/50 border border-stock-navy">
                <div className="text-3xl font-heading text-stock-gold mb-1 font-black">
                  ~{Math.round(blogPosts.reduce((sum, p) => sum + p.content.split(' ').length, 0) / 200)}
                </div>
                <div className="text-xs text-stock-text/60 uppercase">
                  Min Read
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Article */}
        {blogPosts.length > 0 && (
          <section className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto">
              <div className="mb-8">
                <h2 className="text-2xl font-heading text-stock-cyan mb-2">
                  Featured Article
                </h2>
                <div className="h-1 w-20 bg-stock-gold"></div>
              </div>

              <div className="stock-card hover-lift border-2 border-stock-gold">
                <div className="flex items-start gap-2 mb-4">
                  <span className="px-3 py-1 bg-stock-gold/20 text-stock-gold text-xs font-mono rounded uppercase border border-stock-gold/50">
                    {blogPosts[0].category}
                  </span>
                  {blogPosts[0].featured && (
                    <span className="px-3 py-1 bg-stock-cyan/20 text-stock-cyan text-xs font-mono rounded uppercase border border-stock-cyan/50">
                      ⭐ FEATURED
                    </span>
                  )}
                </div>

                <h3 className="text-3xl md:text-4xl font-heading text-stock-gold mb-4">
                  {blogPosts[0].title}
                </h3>

                <p className="text-lg text-stock-text/80 mb-6 leading-relaxed">
                  {blogPosts[0].excerpt}
                </p>

                <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-stock-text/60">
                  <div className="flex items-center gap-2">
                    <FiCalendar size={14} className="text-stock-cyan" />
                    {new Date(blogPosts[0].published_date).toLocaleDateString('en-US', {
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </div>
                  <div className="flex items-center gap-2">
                    <FiClock size={14} className="text-stock-green" />
                    {calculateReadingTime(blogPosts[0].content)}
                  </div>
                  <div className="flex items-center gap-2">
                    <FiBookOpen size={14} className="text-stock-gold" />
                    {blogPosts[0].views?.toLocaleString() || 0} views
                  </div>
                </div>

                {blogPosts[0].tags && blogPosts[0].tags.length > 0 && (
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {blogPosts[0].tags.map(tag => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-stock-navy/50 text-stock-text/60 text-xs rounded-full font-mono"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <Link
                  href={`#`}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-stock-gold text-stock-dark font-bold rounded hover:bg-stock-gold/90 transition-all duration-200 hover:scale-105"
                >
                  Read Full Article
                  <FiArrowRight />
                </Link>
              </div>
            </div>
          </section>
        )}

        {/* Recent Articles */}
        <section className="container mx-auto px-4 pb-16">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <h2 className="text-2xl font-heading text-stock-cyan mb-2">
                Recent Posts
              </h2>
              <div className="h-1 w-20 bg-stock-cyan"></div>
            </div>

            <div className="space-y-6">
              {blogPosts.slice(1).map((post, index) => (
                <div
                  key={index}
                  className="stock-card hover-lift group"
                >
                  <div className="flex items-start gap-2 mb-3">
                    <span className="px-3 py-1 bg-stock-cyan/20 text-stock-cyan text-xs font-mono rounded uppercase border border-stock-cyan/50">
                      {post.category}
                    </span>
                  </div>

                  <h3 className="text-2xl font-heading text-stock-cyan mb-3 group-hover:text-stock-gold transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-sm text-stock-text/70 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>

                  <div className="flex flex-wrap items-center gap-4 mb-4 text-xs text-stock-text/60">
                    <div className="flex items-center gap-2">
                      <FiCalendar size={12} className="text-stock-cyan" />
                      {new Date(post.published_date).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                    </div>
                    <div className="flex items-center gap-2">
                      <FiClock size={12} className="text-stock-green" />
                      {calculateReadingTime(post.content)}
                    </div>
                    <div className="flex items-center gap-2">
                      <FiBookOpen size={12} className="text-stock-gold" />
                      {post.views?.toLocaleString() || 0} views
                    </div>
                  </div>

                  {post.tags && post.tags.length > 0 && (
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {post.tags.slice(0, 4).map(tag => (
                          <span
                            key={tag}
                            className="px-2 py-1 bg-stock-navy/50 text-stock-text/60 text-xs rounded-full font-mono"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  <Link
                    href={`#`}
                    className="inline-flex items-center gap-2 text-stock-cyan hover:text-stock-gold transition-colors text-sm font-mono"
                  >
                    Read More
                    <FiArrowRight size={14} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="stock-border-top bg-gradient-to-br from-stock-cyan/10 to-transparent py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center stock-border p-12 bg-stock-board">
              <h2 className="text-3xl font-heading text-stock-cyan mb-4">
                Stay Updated
              </h2>
              <p className="text-lg text-stock-text/80 mb-6">
                Get notified when I publish new articles about tech, finance,
                markets, and building products.
              </p>
              <div className="max-w-md mx-auto">
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="flex-1 px-4 py-3 bg-stock-dark border border-stock-navy text-stock-text rounded focus:outline-none focus:border-stock-cyan transition-colors font-mono text-sm"
                  />
                  <button className="px-6 py-3 bg-stock-cyan text-stock-dark font-bold rounded hover:bg-stock-cyan/90 transition-all duration-200 hover:scale-105">
                    Subscribe
                  </button>
                </div>
                <p className="text-xs text-stock-text/40 mt-3 font-mono">
                  No spam. Unsubscribe anytime.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Topics */}
        <section className="bg-stock-board py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-heading text-stock-cyan mb-8 text-center">
                Topics I Write About
              </h2>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-6 bg-stock-dark/50 border-l-4 border-stock-cyan text-center">
                  <div className="text-3xl mb-3">💻</div>
                  <h3 className="text-lg font-heading text-stock-cyan mb-2">
                    Technology
                  </h3>
                  <p className="text-sm text-stock-text/70">
                    Web dev, AI/ML, blockchain, and emerging tech trends
                  </p>
                </div>

                <div className="p-6 bg-stock-dark/50 border-l-4 border-stock-gold text-center">
                  <div className="text-3xl mb-3">📈</div>
                  <h3 className="text-lg font-heading text-stock-gold mb-2">
                    Finance
                  </h3>
                  <p className="text-sm text-stock-text/70">
                    Markets, trading, DeFi, and financial analysis
                  </p>
                </div>

                <div className="p-6 bg-stock-dark/50 border-l-4 border-stock-green text-center">
                  <div className="text-3xl mb-3">🚀</div>
                  <h3 className="text-lg font-heading text-stock-green mb-2">
                    Building
                  </h3>
                  <p className="text-sm text-stock-text/70">
                    Product development, startups, and entrepreneurship
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
