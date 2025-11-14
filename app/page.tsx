/**
 * Trading Floor (Homepage)
 * Main landing page with stock exchange theme
 */

import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import StockTicker from '@/components/layout/StockTicker'
import Link from 'next/link'
import { projects, skills } from '@/lib/data'
import { FiArrowRight, FiGithub, FiCode, FiTrendingUp, FiDollarSign } from 'react-icons/fi'

export default function TradingFloorPage() {
  // Get featured projects (status LIVE)
  const featuredProjects = projects.filter(p => p.status === 'LIVE').slice(0, 3)

  // Get top skills by rating
  const topSkills = skills
    .sort((a, b) => (b.proficiency || 0) - (a.proficiency || 0))
    .slice(0, 8)

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <Header />

      {/* Stock Ticker */}
      <StockTicker />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-5xl mx-auto text-center space-y-8">
            {/* Main Heading */}
            <div className="space-y-4">
              <div className="inline-block px-4 py-2 bg-stock-navy/30 border border-stock-cyan/30 rounded-full text-stock-cyan text-sm font-mono uppercase tracking-wider mb-4">
                <span className="inline-block w-2 h-2 bg-stock-green rounded-full mr-2 animate-pulse"></span>
                Market Status: LIVE
              </div>

              <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading text-stock-gold font-black tracking-tight">
                $HARSHAL
              </h1>

              <div className="text-xl md:text-2xl lg:text-3xl text-stock-cyan font-heading uppercase tracking-wide">
                Personal Stock Exchange
              </div>

              <p className="text-2xl md:text-3xl lg:text-4xl font-heading mt-6">
                Engineering Degree Holder |{' '}
                <span className="text-stock-gold">Finance Mind at Heart 💰</span>
              </p>
            </div>

            {/* Description */}
            <p className="text-lg md:text-xl text-stock-text/80 max-w-3xl mx-auto leading-relaxed">
              Scaling businesses and establishing ventures at the intersection of
              technology and financial markets. Building products that matter,
              analyzing markets that move, and creating value that compounds.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
              <Link
                href="/ventures/tech-assets"
                className="btn-primary flex items-center gap-2 group"
              >
                <FiCode size={20} />
                <span>View Tech Assets</span>
                <FiArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>

              <Link
                href="/ventures/financial-instruments"
                className="px-6 py-3 bg-stock-green text-black font-bold rounded hover:bg-opacity-80 transition-all duration-200 hover:scale-105 flex items-center gap-2 group"
              >
                <FiTrendingUp size={20} />
                <span>Financial Instruments</span>
                <FiArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>

              <Link
                href="/investor-relations"
                className="px-6 py-3 border-2 border-stock-cyan text-stock-cyan font-bold rounded hover:bg-stock-cyan hover:text-stock-dark transition-all duration-200 hover:scale-105"
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </section>

        {/* Market Statistics */}
        <section className="stock-border-top stock-border-bottom bg-stock-board py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {/* Total Projects */}
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-heading text-stock-cyan mb-2 font-black">
                  {projects.length}+
                </div>
                <div className="text-sm md:text-base text-stock-text/60 font-mono uppercase">
                  Tech Assets
                </div>
              </div>

              {/* Total Skills */}
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-heading text-stock-green mb-2 font-black">
                  {skills.length}+
                </div>
                <div className="text-sm md:text-base text-stock-text/60 font-mono uppercase">
                  Holdings
                </div>
              </div>

              {/* GitHub Stars */}
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-heading text-stock-gold mb-2 font-black">
                  500+
                </div>
                <div className="text-sm md:text-base text-stock-text/60 font-mono uppercase">
                  GitHub Stars
                </div>
              </div>

              {/* ROI */}
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-heading text-stock-cyan mb-2 font-black">
                  ∞%
                </div>
                <div className="text-sm md:text-base text-stock-text/60 font-mono uppercase">
                  Growth Rate
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="container mx-auto px-4 py-16">
          <div className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl md:text-4xl font-heading text-stock-cyan uppercase">
                <FiDollarSign className="inline mr-2 mb-1" />
                Featured Assets
              </h2>
              <Link
                href="/ventures/tech-assets"
                className="text-stock-cyan hover:text-stock-gold transition-colors font-mono text-sm uppercase flex items-center gap-2"
              >
                View All
                <FiArrowRight />
              </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {featuredProjects.map(project => (
                <Link
                  key={project.ticker}
                  href={`/ventures/tech-assets`}
                  className="group stock-card hover-lift"
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="text-stock-cyan font-mono text-lg font-bold">
                        ${project.ticker}
                      </div>
                      <div className="text-xs text-stock-text/40 uppercase">
                        {project.category}
                      </div>
                    </div>
                    <div
                      className={`px-2 py-1 rounded text-xs font-mono ${
                        project.status === 'LIVE'
                          ? 'bg-stock-green/20 text-stock-green'
                          : 'bg-stock-cyan/20 text-stock-cyan'
                      }`}
                    >
                      {project.status}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-heading mb-3 group-hover:text-stock-cyan transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-stock-text/70 mb-4 line-clamp-2">
                    {project.tagline}
                  </p>

                  {/* Metrics */}
                  <div className="flex items-center justify-between pt-4 border-t border-stock-navy/50">
                    <div className="text-sm">
                      <span className="text-stock-text/40">Market Cap:</span>{' '}
                      <span className="text-stock-cyan font-mono">
                        {project.market_cap}
                      </span>
                    </div>
                    <div className="text-sm">
                      <span className="text-stock-text/40">ROI:</span>{' '}
                      <span className="text-stock-green font-mono">
                        {project.roi}
                      </span>
                    </div>
                  </div>

                  {/* Technologies */}
                  {project.technologies && (
                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.technologies.slice(0, 3).map(tech => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-stock-navy/50 text-stock-text/60 text-xs rounded font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Top Holdings */}
        <section className="bg-stock-board py-16">
          <div className="container mx-auto px-4">
            <div className="mb-12">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-3xl md:text-4xl font-heading text-stock-cyan uppercase">
                  Top Holdings
                </h2>
                <Link
                  href="/holdings"
                  className="text-stock-cyan hover:text-stock-gold transition-colors font-mono text-sm uppercase flex items-center gap-2"
                >
                  View All
                  <FiArrowRight />
                </Link>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {topSkills.map(skill => (
                  <div
                    key={skill.name}
                    className="p-4 bg-stock-dark/50 border border-stock-navy hover:border-stock-cyan transition-colors"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-lg">{skill.icon}</span>
                      <span className="text-xs text-stock-text/40 font-mono">
                        {skill.category.toUpperCase()}
                      </span>
                    </div>
                    <div className="font-heading text-stock-cyan mb-1">
                      {skill.name}
                    </div>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className={`w-2 h-2 rounded-full ${
                            i < (skill.proficiency || 0)
                              ? 'bg-stock-green'
                              : 'bg-stock-navy'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center stock-border p-12 bg-gradient-to-br from-stock-navy/20 to-transparent">
            <h2 className="text-3xl md:text-4xl font-heading text-stock-cyan mb-6">
              Ready to Invest in Innovation?
            </h2>
            <p className="text-lg text-stock-text/80 mb-8 max-w-2xl mx-auto">
              Explore my portfolio of tech assets, financial instruments, and
              market insights. Let's discuss how we can create value together.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/prospectus"
                className="btn-primary flex items-center gap-2"
              >
                Read Prospectus
                <FiArrowRight />
              </Link>
              <a
                href="https://github.com/HarshalJain-cs"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border-2 border-stock-cyan text-stock-cyan font-bold rounded hover:bg-stock-cyan hover:text-stock-dark transition-all duration-200 hover:scale-105 flex items-center gap-2"
              >
                <FiGithub size={20} />
                View on GitHub
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
