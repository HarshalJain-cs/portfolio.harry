'use client'

/**
 * Market Commentary (Blog) Page
 * Articles about technology, finance, and building products
 * NEW DESIGN: Warmer Charcoal + Gold + Emerald + Platinum
 */

import { useMemo } from 'react'
import { motion } from 'framer-motion'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import ProgressBar from '@/components/layout/ProgressBar'
import CustomCursor from '@/components/layout/CustomCursor'
import GlassCard from '@/components/ui/GlassCard'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'
import { FiBookOpen, FiCalendar, FiClock, FiArrowRight, FiTrendingUp } from 'react-icons/fi'
import Link from 'next/link'
import { staggerContainer, staggerItem, fadeIn } from '@/lib/animations'

// Sample blog posts data (replace with CMS or database later)
const blogPosts = [
  {
    id: 1,
    title: 'Building Scalable Web Applications with Next.js and TypeScript',
    excerpt: 'A deep dive into architecting modern web applications that can handle millions of users. Learn about static generation, server-side rendering, and edge computing strategies.',
    content: 'Full article content here... ' + 'Lorem ipsum dolor sit amet. '.repeat(150), // ~300 words
    category: 'Technology',
    tags: ['Next.js', 'TypeScript', 'Performance', 'Architecture'],
    published_date: '2024-11-15',
    views_count: 2847,
    featured: true,
  },
  {
    id: 2,
    title: 'Understanding DeFi: The Future of Finance',
    excerpt: 'Decentralized Finance is transforming how we think about money. Explore the key protocols, risks, and opportunities in the DeFi ecosystem.',
    content: 'Full article content here... ' + 'Lorem ipsum dolor sit amet. '.repeat(120), // ~240 words
    category: 'Finance',
    tags: ['DeFi', 'Blockchain', 'Web3', 'Cryptocurrency'],
    published_date: '2024-11-10',
    views_count: 1923,
  },
  {
    id: 3,
    title: 'From Idea to MVP: A 30-Day Product Development Sprint',
    excerpt: 'How I built and launched a SaaS product in one month. Lessons learned, mistakes made, and strategies that worked.',
    content: 'Full article content here... ' + 'Lorem ipsum dolor sit amet. '.repeat(180), // ~360 words
    category: 'Building',
    tags: ['Startup', 'Product', 'SaaS', 'MVP'],
    published_date: '2024-11-05',
    views_count: 3156,
  },
  {
    id: 4,
    title: 'AI Integration in Modern Web Apps: Practical Guide',
    excerpt: 'Implementing AI features doesn\'t have to be complicated. Learn how to integrate OpenAI, Claude, and other AI APIs into your applications.',
    content: 'Full article content here... ' + 'Lorem ipsum dolor sit amet. '.repeat(140), // ~280 words
    category: 'Technology',
    tags: ['AI', 'OpenAI', 'Integration', 'API'],
    published_date: '2024-10-28',
    views_count: 2641,
  },
  {
    id: 5,
    title: 'Trading Algorithms: Backtesting Strategies with Python',
    excerpt: 'Build and backtest your own trading strategies using Python, Pandas, and machine learning. A practical tutorial with real market data.',
    content: 'Full article content here... ' + 'Lorem ipsum dolor sit amet. '.repeat(200), // ~400 words
    category: 'Finance',
    tags: ['Trading', 'Python', 'Algorithms', 'Data Science'],
    published_date: '2024-10-20',
    views_count: 1785,
  },
]

export default function MarketCommentaryPage() {
  // Calculate reading time (approx 200 words per minute)
  const calculateReadingTime = (content: string) => {
    const words = content.split(' ').length
    const minutes = Math.ceil(words / 200)
    return minutes
  }

  // Get featured post and recent posts
  const featuredPost = blogPosts.find(p => p.featured) || blogPosts[0]
  const recentPosts = blogPosts.filter(p => p.id !== featuredPost.id)

  // Calculate total reading time
  const totalReadingTime = useMemo(() => {
    return blogPosts.reduce((sum, post) => sum + calculateReadingTime(post.content), 0)
  }, [])

  // Get unique categories
  const categories = useMemo(() => {
    return Array.from(new Set(blogPosts.map(p => p.category)))
  }, [])

  return (
    <>
      <CustomCursor />
      <ProgressBar />
      <Navigation />

      <div className="min-h-screen bg-bg-primary text-platinum-main">
        {/* Hero Section */}
        <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-20">
          <div className="absolute inset-0 bg-gradient-to-br from-bg-primary via-bg-secondary to-bg-elevated opacity-90" />

          <div className="absolute inset-0 opacity-10">
            <div className="w-full h-full" style={{
              backgroundImage: 'linear-gradient(rgba(201,169,97,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,169,97,0.1) 1px, transparent 1px)',
              backgroundSize: '50px 50px',
            }} />
          </div>

          <motion.div
            className="relative z-10 container-custom text-center space-y-6 py-16"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
          >
            <Badge variant="achievement">
              <FiBookOpen className="inline mr-2 mb-1" />
              Market Commentary
            </Badge>

            <h1 className="text-h1 font-heading font-bold text-platinum-bright uppercase">
              Insights & <span className="text-gold-bright">Analysis</span>
            </h1>

            <p className="text-lg text-platinum-muted max-w-2xl mx-auto">
              Deep dives into technology trends, financial markets, and the intersection of code and capital. Thoughts on building, investing, and innovating.
            </p>
          </motion.div>
        </section>

        {/* Stats */}
        <section className="section-padding bg-bg-secondary">
          <div className="container-custom">
            <div className="max-w-6xl mx-auto">
              <motion.div
                className="grid grid-cols-3 gap-4"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
              >
                <motion.div variants={staggerItem}>
                  <GlassCard variant="luxury" className="text-center">
                    <div className="text-4xl font-heading text-gold-bright mb-2 font-mono font-black">
                      {blogPosts.length}
                    </div>
                    <div className="text-xs text-platinum-dark uppercase">
                      Articles
                    </div>
                  </GlassCard>
                </motion.div>

                <motion.div variants={staggerItem}>
                  <GlassCard variant="luxury" className="text-center">
                    <div className="text-4xl font-heading text-platinum-bright mb-2 font-mono font-black">
                      {categories.length}
                    </div>
                    <div className="text-xs text-platinum-dark uppercase">
                      Topics
                    </div>
                  </GlassCard>
                </motion.div>

                <motion.div variants={staggerItem}>
                  <GlassCard variant="luxury" className="text-center">
                    <div className="text-4xl font-heading text-emerald-bright mb-2 font-mono font-black">
                      ~{totalReadingTime}
                    </div>
                    <div className="text-xs text-platinum-dark uppercase">
                      Min Read
                    </div>
                  </GlassCard>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Featured Article */}
        <section className="section-padding bg-bg-primary">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="mb-8">
                <h2 className="text-h2 font-heading text-platinum-bright mb-3">
                  Featured Article
                </h2>
                <div className="h-1 w-20 bg-gold-main rounded"></div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6 }}
              >
                <GlassCard variant="luxury" hover className="border-2 border-gold-main">
                  <div className="flex items-start gap-2 mb-4">
                    <Badge variant="achievement">{featuredPost.category}</Badge>
                    <Badge variant="live">FEATURED</Badge>
                  </div>

                  <h3 className="text-3xl md:text-4xl font-heading text-platinum-bright mb-4">
                    {featuredPost.title}
                  </h3>

                  <p className="text-lg text-platinum-muted mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>

                  <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-platinum-muted pb-6 border-b border-glass-platinum">
                    <div className="flex items-center gap-2">
                      <FiCalendar size={14} className="text-gold-bright" />
                      <span className="font-mono">
                        {new Date(featuredPost.published_date).toLocaleDateString('en-US', {
                          month: 'long',
                          day: 'numeric',
                          year: 'numeric',
                        })}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FiClock size={14} className="text-emerald-bright" />
                      <span className="font-mono">{calculateReadingTime(featuredPost.content)} min read</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FiTrendingUp size={14} className="text-emerald-bright" />
                      <span className="font-mono">{featuredPost.views_count.toLocaleString()} views</span>
                    </div>
                  </div>

                  {featuredPost.tags && featuredPost.tags.length > 0 && (
                    <div className="mb-6">
                      <div className="flex flex-wrap gap-2">
                        {featuredPost.tags.map(tag => (
                          <Badge key={tag} variant="tech">#{tag}</Badge>
                        ))}
                      </div>
                    </div>
                  )}

                  <Button variant="gold" size="lg">
                    Read Full Article
                    <FiArrowRight className="ml-2" />
                  </Button>
                </GlassCard>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Recent Articles */}
        <section className="section-padding bg-bg-secondary">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="mb-8">
                <h2 className="text-h2 font-heading text-platinum-bright mb-3">
                  Recent Posts
                </h2>
                <div className="h-1 w-20 bg-emerald-main rounded"></div>
              </div>

              <motion.div
                className="space-y-6"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
              >
                {recentPosts.map((post) => (
                  <motion.div key={post.id} variants={staggerItem}>
                    <GlassCard variant="luxury" hover className="group">
                      <div className="flex items-start gap-2 mb-3">
                        <Badge variant="tech">{post.category}</Badge>
                      </div>

                      <h3 className="text-2xl font-heading text-platinum-bright mb-3 group-hover:text-gold-bright transition-colors">
                        {post.title}
                      </h3>

                      <p className="text-sm text-platinum-muted mb-4 leading-relaxed">
                        {post.excerpt}
                      </p>

                      <div className="flex flex-wrap items-center gap-4 mb-4 text-xs text-platinum-muted pb-4 border-b border-glass-platinum">
                        <div className="flex items-center gap-2">
                          <FiCalendar size={12} className="text-gold-bright" />
                          <span className="font-mono">
                            {new Date(post.published_date).toLocaleDateString('en-US', {
                              month: 'short',
                              day: 'numeric',
                              year: 'numeric',
                            })}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <FiClock size={12} className="text-emerald-bright" />
                          <span className="font-mono">{calculateReadingTime(post.content)} min read</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <FiTrendingUp size={12} className="text-emerald-bright" />
                          <span className="font-mono">{post.views_count.toLocaleString()} views</span>
                        </div>
                      </div>

                      {post.tags && post.tags.length > 0 && (
                        <div className="mb-4">
                          <div className="flex flex-wrap gap-2">
                            {post.tags.slice(0, 4).map(tag => (
                              <Badge key={tag} variant="tech">#{tag}</Badge>
                            ))}
                          </div>
                        </div>
                      )}

                      <Link
                        href={`#`}
                        className="inline-flex items-center gap-2 text-gold-bright hover:text-gold-main transition-colors text-sm font-mono"
                      >
                        Read More
                        <FiArrowRight size={14} />
                      </Link>
                    </GlassCard>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Topics */}
        <section className="section-padding bg-bg-primary">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-h2 font-heading text-platinum-bright mb-12 text-center">
                Topics I Write About
              </h2>

              <motion.div
                className="grid md:grid-cols-3 gap-6"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
              >
                <motion.div variants={staggerItem}>
                  <GlassCard variant="luxury" hover className="h-full text-center border-l-4 border-gold-main">
                    <div className="text-4xl mb-4">💻</div>
                    <h3 className="text-lg font-heading text-gold-bright mb-3">
                      Technology
                    </h3>
                    <p className="text-sm text-platinum-muted">
                      Web dev, AI/ML, blockchain, and emerging tech trends
                    </p>
                  </GlassCard>
                </motion.div>

                <motion.div variants={staggerItem}>
                  <GlassCard variant="luxury" hover className="h-full text-center border-l-4 border-platinum-main">
                    <div className="text-4xl mb-4">📈</div>
                    <h3 className="text-lg font-heading text-platinum-bright mb-3">
                      Finance
                    </h3>
                    <p className="text-sm text-platinum-muted">
                      Markets, trading, DeFi, and financial analysis
                    </p>
                  </GlassCard>
                </motion.div>

                <motion.div variants={staggerItem}>
                  <GlassCard variant="success" hover className="h-full text-center border-l-4 border-emerald-main">
                    <div className="text-4xl mb-4">🚀</div>
                    <h3 className="text-lg font-heading text-emerald-bright mb-3">
                      Building
                    </h3>
                    <p className="text-sm text-platinum-muted">
                      Product development, startups, and entrepreneurship
                    </p>
                  </GlassCard>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA - Newsletter */}
        <section className="section-padding bg-bg-secondary">
          <div className="container-custom">
            <GlassCard variant="luxury" className="max-w-4xl mx-auto text-center">
              <div className="space-y-6 py-8">
                <div className="text-5xl">📬</div>
                <h2 className="text-h2 font-heading text-platinum-bright">
                  Stay Updated
                </h2>
                <p className="text-lg text-platinum-muted max-w-2xl mx-auto">
                  Get notified when I publish new articles about tech, finance, markets, and building products.
                </p>
                <div className="max-w-md mx-auto pt-4">
                  <div className="flex gap-2">
                    <input
                      type="email"
                      placeholder="your@email.com"
                      className="flex-1 px-4 py-3 bg-glass-medium backdrop-blur-glass border border-glass-platinum rounded-lg text-platinum-main placeholder:text-platinum-dark focus:outline-none focus:border-gold-main transition-colors font-mono text-sm"
                    />
                    <Button variant="gold" size="lg">
                      Subscribe
                    </Button>
                  </div>
                  <p className="text-xs text-platinum-dark mt-3 font-mono">
                    No spam. Unsubscribe anytime.
                  </p>
                </div>
              </div>
            </GlassCard>
          </div>
        </section>
      </div>

      <Footer />
    </>
  )
}
