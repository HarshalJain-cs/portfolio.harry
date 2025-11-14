/**
 * Financial Instruments (Finance Projects) Page
 * Showcases finance-related projects and analysis work
 */

'use client'

import { useState } from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import StockTicker from '@/components/layout/StockTicker'
import { projects, financialAnalyses } from '@/lib/data'
import { FiTrendingUp, FiExternalLink, FiFileText, FiDollarSign } from 'react-icons/fi'
import Link from 'next/link'

export default function FinancialInstrumentsPage() {
  // Filter finance-related projects
  const financeProjects = projects.filter(p => p.category === 'finance')

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <StockTicker />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="stock-border-bottom bg-gradient-to-br from-stock-green/10 to-transparent py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-4">
              <div className="inline-block px-4 py-2 bg-stock-green/10 border border-stock-green/30 rounded-full text-stock-green text-sm font-mono uppercase tracking-wider mb-2">
                <FiTrendingUp className="inline mr-2 mb-1" />
                Financial Instruments
              </div>

              <h1 className="text-4xl md:text-5xl font-heading text-stock-gold font-black">
                Finance & Market Analysis
              </h1>

              <p className="text-lg text-stock-text/80 max-w-2xl mx-auto">
                Finance-focused projects, market analysis tools, trading platforms,
                and investment research. Where technology meets capital markets.
              </p>
            </div>
          </div>
        </section>

        {/* Financial Projects */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-heading text-stock-green mb-8 flex items-center gap-3">
              <FiDollarSign />
              Financial Technology Projects
            </h2>

            {financeProjects.length === 0 ? (
              <div className="text-center py-12 stock-card">
                <div className="text-6xl mb-4">📈</div>
                <h3 className="text-xl font-heading text-stock-cyan mb-2">
                  Coming Soon
                </h3>
                <p className="text-stock-text/60">
                  Financial instruments are being prepared for launch
                </p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 gap-6 mb-16">
                {financeProjects.map(project => (
                  <div
                    key={project.ticker}
                    className="stock-card hover-lift group"
                  >
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="text-stock-green font-mono text-xl font-bold">
                          ${project.ticker}
                        </div>
                        <div className="text-xs text-stock-text/40 uppercase mt-1">
                          {project.category}
                        </div>
                      </div>
                      <div
                        className={`px-3 py-1 rounded border text-xs font-mono ${
                          project.status === 'LIVE'
                            ? 'bg-stock-green/20 text-stock-green border-stock-green/50'
                            : 'bg-stock-cyan/20 text-stock-cyan border-stock-cyan/50'
                        }`}
                      >
                        {project.status}
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-heading mb-3 group-hover:text-stock-green transition-colors">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-stock-text/70 mb-4">
                      {project.description}
                    </p>

                    {/* Problem & Solution */}
                    <div className="space-y-3 mb-4 pb-4 border-b border-stock-navy/50">
                      <div>
                        <div className="text-xs text-stock-red/80 mb-1 uppercase font-mono">
                          Problem
                        </div>
                        <p className="text-sm text-stock-text/70">
                          {project.problem}
                        </p>
                      </div>
                      <div>
                        <div className="text-xs text-stock-green/80 mb-1 uppercase font-mono">
                          Solution
                        </div>
                        <p className="text-sm text-stock-text/70">
                          {project.solution}
                        </p>
                      </div>
                    </div>

                    {/* Metrics */}
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      <div>
                        <div className="text-xs text-stock-text/40 mb-1">
                          Market Cap
                        </div>
                        <div className="text-stock-green font-mono text-sm font-bold">
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
                        {project.technologies.map(tech => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-stock-navy/50 text-stock-text/60 text-xs rounded font-mono"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Impact */}
                    {project.impact && (
                      <div className="mb-4 p-3 bg-stock-green/10 border-l-2 border-stock-green">
                        <div className="text-xs text-stock-green mb-1 uppercase font-mono">
                          Impact
                        </div>
                        <p className="text-sm text-stock-text/80">
                          {project.impact}
                        </p>
                      </div>
                    )}

                    {/* Links */}
                    <div className="flex gap-2">
                      {project.live_url && (
                        <a
                          href={project.live_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 px-4 py-2 bg-stock-green/20 hover:bg-stock-green/30 text-stock-green text-sm rounded transition-colors flex items-center justify-center gap-2 font-mono"
                        >
                          <FiExternalLink size={16} />
                          Launch Platform
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Financial Analyses Section */}
            <h2 className="text-3xl font-heading text-stock-cyan mb-8 flex items-center gap-3 mt-16">
              <FiFileText />
              Market Analysis & Research
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {financialAnalyses.map((analysis, index) => (
                <div
                  key={index}
                  className="stock-card hover-lift"
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-heading text-stock-cyan mb-2">
                        {analysis.company_name}
                      </h3>
                      <div className="text-sm text-stock-text/60 font-mono">
                        {analysis.ticker} • {analysis.sector}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-stock-text/40">
                        {new Date(analysis.analysis_date).toLocaleDateString()}
                      </div>
                      <div
                        className={`mt-1 text-lg font-mono font-bold ${
                          analysis.recommendation === 'BUY'
                            ? 'text-stock-green'
                            : analysis.recommendation === 'SELL'
                            ? 'text-stock-red'
                            : 'text-stock-cyan'
                        }`}
                      >
                        {analysis.recommendation}
                      </div>
                    </div>
                  </div>

                  {/* Summary */}
                  <p className="text-sm text-stock-text/70 mb-4">
                    {analysis.summary}
                  </p>

                  {/* Valuation Metrics */}
                  <div className="grid grid-cols-3 gap-4 mb-4 pb-4 border-b border-stock-navy/50">
                    <div>
                      <div className="text-xs text-stock-text/40 mb-1">
                        Current
                      </div>
                      <div className="text-stock-cyan font-mono text-sm font-bold">
                        ${analysis.current_price}
                      </div>
                    </div>
                    <div>
                      <div className="text-xs text-stock-text/40 mb-1">
                        Target
                      </div>
                      <div className="text-stock-green font-mono text-sm font-bold">
                        ${analysis.target_price}
                      </div>
                    </div>
                    <div>
                      <div className="text-xs text-stock-text/40 mb-1">
                        Upside
                      </div>
                      <div className="text-stock-gold font-mono text-sm font-bold">
                        {(
                          ((analysis.target_price - analysis.current_price) /
                            analysis.current_price) *
                          100
                        ).toFixed(1)}
                        %
                      </div>
                    </div>
                  </div>

                  {/* Key Insights */}
                  <div>
                    <div className="text-xs text-stock-text/40 mb-2 uppercase">
                      Key Insights
                    </div>
                    <ul className="space-y-1.5">
                      {analysis.key_insights.slice(0, 3).map((insight, i) => (
                        <li
                          key={i}
                          className="text-sm text-stock-text/70 flex items-start gap-2"
                        >
                          <span className="text-stock-cyan mt-0.5">•</span>
                          <span>{insight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="stock-border-top bg-gradient-to-br from-stock-green/10 to-transparent py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-heading text-stock-green mb-4">
                Explore More Ventures
              </h2>
              <p className="text-lg text-stock-text/80 mb-6">
                Discover tech projects, research papers, and other assets in the
                portfolio.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/ventures/tech-assets" className="btn-primary">
                  Tech Assets
                </Link>
                <Link
                  href="/ventures/research-papers"
                  className="px-6 py-3 border-2 border-stock-cyan text-stock-cyan font-bold rounded hover:bg-stock-cyan hover:text-stock-dark transition-all duration-200 hover:scale-105"
                >
                  Research Papers
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
