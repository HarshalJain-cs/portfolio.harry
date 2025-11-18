'use client'

/**
 * Tech Assets (Projects) Page
 * Comprehensive listing of all tech projects with filters and search
 * NEW DESIGN: Warmer Charcoal + Gold + Emerald + Platinum
 */

import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import ProgressBar from '@/components/layout/ProgressBar'
import CustomCursor from '@/components/layout/CustomCursor'
import GlassCard from '@/components/ui/GlassCard'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'
import { FiSearch, FiFilter, FiExternalLink, FiGithub, FiCode, FiLayers } from 'react-icons/fi'
import Link from 'next/link'
import { staggerContainer, staggerItem, fadeIn } from '@/lib/animations'

// Sample project data (replace with actual data later)
const projects = [
  {
    id: 1,
    ticker: 'FINTRACK',
    title: 'FinTrack Pro',
    tagline: 'Personal finance dashboard with real-time market data and portfolio analytics',
    category: 'FinTech',
    status: 'LIVE',
    market_cap: '$50K',
    roi: '+247%',
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'TailwindCSS', 'Chart.js'],
    github_url: 'https://github.com/HarshalJain-cs',
    live_url: '#',
  },
  {
    id: 2,
    ticker: 'TRADEALGO',
    title: 'Trading Algorithm Engine',
    tagline: 'Backtesting platform for algorithmic trading strategies with ML predictions',
    category: 'AI/ML',
    status: 'BETA',
    market_cap: '$30K',
    roi: '+180%',
    technologies: ['Python', 'TensorFlow', 'Pandas', 'FastAPI', 'Redis'],
    github_url: 'https://github.com/HarshalJain-cs',
  },
  {
    id: 3,
    ticker: 'DEFISWAP',
    title: 'DeFi Swap Protocol',
    tagline: 'Decentralized exchange aggregator for optimal token swap rates',
    category: 'Blockchain',
    status: 'DEVELOPMENT',
    market_cap: '$25K',
    roi: '+95%',
    technologies: ['Solidity', 'Hardhat', 'React', 'Ethers.js', 'Web3'],
    github_url: 'https://github.com/HarshalJain-cs',
  },
  {
    id: 4,
    ticker: 'TASKFLOW',
    title: 'TaskFlow SaaS',
    tagline: 'Project management tool with kanban boards and team collaboration',
    category: 'Productivity',
    status: 'LIVE',
    market_cap: '$40K',
    roi: '+165%',
    technologies: ['Next.js', 'Prisma', 'tRPC', 'NextAuth', 'Stripe'],
    github_url: 'https://github.com/HarshalJain-cs',
    live_url: '#',
  },
  {
    id: 5,
    ticker: 'AIWRITE',
    title: 'AI Writing Assistant',
    tagline: 'GPT-powered content generation tool for blogs and marketing copy',
    category: 'AI/ML',
    status: 'LIVE',
    market_cap: '$35K',
    roi: '+220%',
    technologies: ['OpenAI', 'Next.js', 'MongoDB', 'Stripe', 'Vercel'],
    github_url: 'https://github.com/HarshalJain-cs',
    live_url: '#',
  },
  {
    id: 6,
    ticker: 'CRYPTOPORTAL',
    title: 'Crypto Portfolio Tracker',
    tagline: 'Multi-chain crypto portfolio dashboard with tax reporting',
    category: 'FinTech',
    status: 'BETA',
    market_cap: '$28K',
    roi: '+140%',
    technologies: ['React', 'Node.js', 'CoinGecko API', 'PostgreSQL'],
    github_url: 'https://github.com/HarshalJain-cs',
  },
]

export default function TechAssetsPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [selectedStatus, setSelectedStatus] = useState<string>('all')

  // Get unique categories and statuses
  const categories = ['all', ...new Set(projects.map(p => p.category))]
  const statuses = ['all', 'LIVE', 'BETA', 'DEVELOPMENT']

  // Filter projects
  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      const matchesSearch =
        searchQuery === '' ||
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.technologies.some(tech =>
          tech.toLowerCase().includes(searchQuery.toLowerCase())
        )

      const matchesCategory =
        selectedCategory === 'all' || project.category === selectedCategory

      const matchesStatus =
        selectedStatus === 'all' || project.status === selectedStatus

      return matchesSearch && matchesCategory && matchesStatus
    })
  }, [searchQuery, selectedCategory, selectedStatus])

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
              <FiCode className="inline mr-2" />
              Tech Assets Portfolio
            </Badge>

            <h1 className="text-h1 font-heading font-bold text-platinum-bright uppercase">
              Technology <span className="text-gold-bright">Ventures</span>
            </h1>

            <p className="text-lg text-platinum-muted max-w-2xl mx-auto">
              A comprehensive collection of {projects.length} tech projects spanning web development, finance, AI, and blockchain. Each asset represents hours of learning, building, and shipping.
            </p>
          </motion.div>
        </section>

        {/* Filters & Search */}
        <section className="sticky top-20 z-30 bg-bg-secondary/95 backdrop-blur-glass-md border-y border-glass-platinum py-6">
          <div className="container-custom">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col md:flex-row gap-4">
                {/* Search Bar */}
                <div className="flex-1 relative">
                  <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-platinum-muted" />
                  <input
                    type="text"
                    placeholder="Search projects, technologies..."
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 bg-glass-medium backdrop-blur-glass border border-glass-platinum rounded-lg text-platinum-main placeholder:text-platinum-dark focus:outline-none focus:border-gold-main transition-colors font-mono text-sm"
                  />
                </div>

                {/* Category Filter */}
                <div className="relative">
                  <FiFilter className="absolute left-4 top-1/2 -translate-y-1/2 text-platinum-muted pointer-events-none z-10" />
                  <select
                    value={selectedCategory}
                    onChange={e => setSelectedCategory(e.target.value)}
                    className="pl-12 pr-8 py-3 bg-glass-medium backdrop-blur-glass border border-glass-platinum rounded-lg text-platinum-main focus:outline-none focus:border-gold-main transition-colors font-mono text-sm appearance-none cursor-pointer min-w-[180px]"
                  >
                    {categories.map(cat => (
                      <option key={cat} value={cat} className="bg-bg-elevated">
                        {cat === 'all' ? 'All Categories' : cat}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Status Filter */}
                <div className="relative">
                  <select
                    value={selectedStatus}
                    onChange={e => setSelectedStatus(e.target.value)}
                    className="pl-4 pr-8 py-3 bg-glass-medium backdrop-blur-glass border border-glass-platinum rounded-lg text-platinum-main focus:outline-none focus:border-gold-main transition-colors font-mono text-sm appearance-none cursor-pointer min-w-[180px]"
                  >
                    {statuses.map(status => (
                      <option key={status} value={status} className="bg-bg-elevated">
                        {status === 'all' ? 'All Status' : status}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Results Count */}
              <div className="mt-4 text-sm text-platinum-dark font-mono">
                Showing {filteredProjects.length} of {projects.length} assets
              </div>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="section-padding bg-bg-primary">
          <div className="container-custom">
            <div className="max-w-6xl mx-auto">
              {filteredProjects.length === 0 ? (
                <motion.div
                  className="text-center py-16"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <div className="text-6xl mb-4">📊</div>
                  <h3 className="text-2xl font-heading text-platinum-bright mb-2">
                    No Assets Found
                  </h3>
                  <p className="text-platinum-muted">
                    Try adjusting your filters or search query
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.1 }}
                >
                  {filteredProjects.map((project, index) => (
                    <motion.div key={project.id} variants={staggerItem}>
                      <GlassCard variant="luxury" hover className="h-full">
                        {/* Header */}
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <div className="text-gold-bright font-mono text-xl font-bold">
                              ${project.ticker}
                            </div>
                            <div className="text-xs text-platinum-dark uppercase mt-1">
                              {project.category}
                            </div>
                          </div>
                          <Badge variant={
                            project.status === 'LIVE' ? 'live' :
                            project.status === 'BETA' ? 'tech' : 'neutral'
                          }>
                            {project.status}
                          </Badge>
                        </div>

                        {/* Title */}
                        <h3 className="text-xl font-heading text-platinum-bright mb-3">
                          {project.title}
                        </h3>

                        {/* Description */}
                        <p className="text-sm text-platinum-muted mb-4 line-clamp-3">
                          {project.tagline}
                        </p>

                        {/* Metrics */}
                        <div className="grid grid-cols-2 gap-3 mb-4 pb-4 border-b border-glass-platinum">
                          <div>
                            <div className="text-xs text-platinum-dark mb-1">
                              Market Cap
                            </div>
                            <div className="text-gold-bright font-mono text-sm font-bold">
                              {project.market_cap}
                            </div>
                          </div>
                          <div>
                            <div className="text-xs text-platinum-dark mb-1">ROI</div>
                            <div className="text-emerald-bright font-mono text-sm font-bold">
                              {project.roi}
                            </div>
                          </div>
                        </div>

                        {/* Technologies */}
                        <div className="mb-4">
                          <div className="text-xs text-platinum-dark mb-2 uppercase">
                            Tech Stack
                          </div>
                          <div className="flex flex-wrap gap-1.5">
                            {project.technologies.slice(0, 4).map(tech => (
                              <Badge key={tech} variant="tech">{tech}</Badge>
                            ))}
                            {project.technologies.length > 4 && (
                              <span className="px-2 py-1 text-gold-bright text-xs font-mono">
                                +{project.technologies.length - 4}
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Links */}
                        <div className="flex gap-2">
                          {project.github_url && (
                            <a
                              href={project.github_url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex-1"
                            >
                              <Button variant="platinum" size="sm" className="w-full">
                                <FiGithub className="mr-2" />
                                Code
                              </Button>
                            </a>
                          )}
                          {project.live_url && (
                            <a
                              href={project.live_url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex-1"
                            >
                              <Button variant="gold" size="sm" className="w-full">
                                <FiExternalLink className="mr-2" />
                                Live
                              </Button>
                            </a>
                          )}
                        </div>
                      </GlassCard>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-bg-secondary">
          <div className="container-custom">
            <GlassCard variant="luxury" className="max-w-4xl mx-auto text-center">
              <div className="space-y-6 py-8">
                <FiLayers className="text-gold-bright text-5xl mx-auto" />
                <h2 className="text-h2 font-heading text-platinum-bright">
                  Interested in Collaboration?
                </h2>
                <p className="text-lg text-platinum-muted max-w-2xl mx-auto">
                  I'm always open to working on innovative projects and building great products together.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                  <Link href="/investor-relations">
                    <Button variant="gold" size="lg">
                      Get In Touch
                    </Button>
                  </Link>
                  <Link href="/prospectus">
                    <Button variant="platinum" size="lg">
                      View Profile
                    </Button>
                  </Link>
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
