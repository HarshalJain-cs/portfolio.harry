/**
 * Tech Assets (Projects) Page
 * Comprehensive listing of all tech projects with filters and search
 */

'use client'

import { useState, useMemo } from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import StockTicker from '@/components/layout/StockTicker'
import { projects } from '@/lib/data'
import { FiSearch, FiFilter, FiExternalLink, FiGithub, FiCode } from 'react-icons/fi'
import Link from 'next/link'

export default function TechAssetsPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [selectedStatus, setSelectedStatus] = useState<string>('all')

  // Get unique categories and statuses
  const categories = ['all', ...new Set(projects.map(p => p.category))]
  const statuses = ['all', ...new Set(projects.map(p => p.status))]

  // Filter projects
  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      const matchesSearch =
        searchQuery === '' ||
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
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

  // Get status color
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'LIVE':
        return 'bg-stock-green/20 text-stock-green border-stock-green/50'
      case 'BETA':
        return 'bg-stock-cyan/20 text-stock-cyan border-stock-cyan/50'
      case 'DEVELOPMENT':
        return 'bg-stock-gold/20 text-stock-gold border-stock-gold/50'
      case 'ARCHIVED':
        return 'bg-stock-text/20 text-stock-text/60 border-stock-text/30'
      default:
        return 'bg-stock-cyan/20 text-stock-cyan border-stock-cyan/50'
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <StockTicker />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="stock-border-bottom bg-gradient-to-br from-stock-navy/30 to-transparent py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-4">
              <div className="inline-block px-4 py-2 bg-stock-cyan/10 border border-stock-cyan/30 rounded-full text-stock-cyan text-sm font-mono uppercase tracking-wider mb-2">
                <FiCode className="inline mr-2 mb-1" />
                Tech Assets Portfolio
              </div>

              <h1 className="text-4xl md:text-5xl font-heading text-stock-gold font-black">
                Technology Ventures
              </h1>

              <p className="text-lg text-stock-text/80 max-w-2xl mx-auto">
                A comprehensive collection of {projects.length} tech projects
                spanning web development, finance, AI, and blockchain. Each asset
                represents hours of learning, building, and shipping.
              </p>
            </div>
          </div>
        </section>

        {/* Filters & Search */}
        <section className="bg-stock-board py-8 sticky top-[180px] z-30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col md:flex-row gap-4">
                {/* Search Bar */}
                <div className="flex-1 relative">
                  <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-stock-text/40" />
                  <input
                    type="text"
                    placeholder="Search projects, technologies..."
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 bg-stock-dark border border-stock-navy text-stock-text placeholder:text-stock-text/40 rounded focus:outline-none focus:border-stock-cyan transition-colors font-mono text-sm"
                  />
                </div>

                {/* Category Filter */}
                <div className="relative">
                  <FiFilter className="absolute left-4 top-1/2 -translate-y-1/2 text-stock-text/40 pointer-events-none" />
                  <select
                    value={selectedCategory}
                    onChange={e => setSelectedCategory(e.target.value)}
                    className="pl-12 pr-8 py-3 bg-stock-dark border border-stock-navy text-stock-text rounded focus:outline-none focus:border-stock-cyan transition-colors font-mono text-sm appearance-none cursor-pointer min-w-[180px]"
                  >
                    {categories.map(cat => (
                      <option key={cat} value={cat}>
                        {cat === 'all' ? 'All Categories' : cat.toUpperCase()}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Status Filter */}
                <div className="relative">
                  <select
                    value={selectedStatus}
                    onChange={e => setSelectedStatus(e.target.value)}
                    className="pl-4 pr-8 py-3 bg-stock-dark border border-stock-navy text-stock-text rounded focus:outline-none focus:border-stock-cyan transition-colors font-mono text-sm appearance-none cursor-pointer min-w-[180px]"
                  >
                    {statuses.map(status => (
                      <option key={status} value={status}>
                        {status === 'all' ? 'All Status' : status}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Results Count */}
              <div className="mt-4 text-sm text-stock-text/60 font-mono">
                Showing {filteredProjects.length} of {projects.length} assets
              </div>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-6xl mx-auto">
            {filteredProjects.length === 0 ? (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">📊</div>
                <h3 className="text-2xl font-heading text-stock-cyan mb-2">
                  No Assets Found
                </h3>
                <p className="text-stock-text/60">
                  Try adjusting your filters or search query
                </p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map(project => (
                  <div
                    key={project.ticker}
                    className="stock-card hover-lift group"
                  >
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="text-stock-cyan font-mono text-xl font-bold">
                          ${project.ticker}
                        </div>
                        <div className="text-xs text-stock-text/40 uppercase mt-1">
                          {project.category}
                        </div>
                      </div>
                      <div
                        className={`px-3 py-1 rounded border text-xs font-mono ${getStatusColor(
                          project.status
                        )}`}
                      >
                        {project.status}
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-heading mb-3 group-hover:text-stock-cyan transition-colors">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-stock-text/70 mb-4 line-clamp-3">
                      {project.tagline}
                    </p>

                    {/* Metrics */}
                    <div className="grid grid-cols-2 gap-3 mb-4 pb-4 border-b border-stock-navy/50">
                      <div>
                        <div className="text-xs text-stock-text/40 mb-1">
                          Market Cap
                        </div>
                        <div className="text-stock-cyan font-mono text-sm font-bold">
                          {project.market_cap}
                        </div>
                      </div>
                      <div>
                        <div className="text-xs text-stock-text/40 mb-1">ROI</div>
                        <div className="text-stock-green font-mono text-sm font-bold">
                          {project.roi}
                        </div>
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="mb-4">
                      <div className="text-xs text-stock-text/40 mb-2 uppercase">
                        Tech Stack
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.slice(0, 4).map(tech => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-stock-navy/50 text-stock-text/60 text-xs rounded font-mono"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 4 && (
                          <span className="px-2 py-1 text-stock-cyan text-xs font-mono">
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
                          className="flex-1 px-3 py-2 bg-stock-navy/50 hover:bg-stock-navy text-stock-cyan text-sm rounded transition-colors flex items-center justify-center gap-2 font-mono"
                        >
                          <FiGithub size={16} />
                          Code
                        </a>
                      )}
                      {project.live_url && (
                        <a
                          href={project.live_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 px-3 py-2 bg-stock-green/20 hover:bg-stock-green/30 text-stock-green text-sm rounded transition-colors flex items-center justify-center gap-2 font-mono"
                        >
                          <FiExternalLink size={16} />
                          Live
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="stock-border-top bg-gradient-to-br from-stock-navy/20 to-transparent py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-heading text-stock-cyan mb-4">
                Interested in Collaboration?
              </h2>
              <p className="text-lg text-stock-text/80 mb-6">
                I'm always open to working on innovative projects and building
                great products together.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/investor-relations" className="btn-primary">
                  Get In Touch
                </Link>
                <Link
                  href="/ventures/financial-instruments"
                  className="px-6 py-3 border-2 border-stock-cyan text-stock-cyan font-bold rounded hover:bg-stock-cyan hover:text-stock-dark transition-all duration-200 hover:scale-105"
                >
                  View Financial Instruments
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
