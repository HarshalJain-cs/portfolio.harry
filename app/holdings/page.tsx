/**
 * Holdings (Skills) Page
 * Comprehensive skill portfolio with asset allocation breakdown
 */

'use client'

import { useMemo } from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import StockTicker from '@/components/layout/StockTicker'
import { skills } from '@/lib/data'
import { FiTarget, FiTrendingUp, FiAward } from 'react-icons/fi'
import Link from 'next/link'

export default function HoldingsPage() {
  // Group skills by category
  const skillsByCategory = useMemo(() => {
    return skills.reduce((acc, skill) => {
      if (!acc[skill.category]) {
        acc[skill.category] = []
      }
      acc[skill.category].push(skill)
      return acc
    }, {} as Record<string, typeof skills>)
  }, [])

  // Calculate category percentages
  const categoryStats = useMemo(() => {
    const total = skills.length
    return Object.entries(skillsByCategory).map(([category, categorySkills]) => ({
      category,
      count: categorySkills.length,
      percentage: Math.round((categorySkills.length / total) * 100),
      avgRating:
        categorySkills.reduce((sum, s) => sum + s.rating, 0) /
        categorySkills.length,
    }))
  }, [skillsByCategory])

  // Get top skills overall
  const topSkills = useMemo(() => {
    return [...skills].sort((a, b) => b.rating - a.rating).slice(0, 10)
  }, [])

  // Category colors
  const categoryColors: Record<string, string> = {
    programming: 'stock-cyan',
    'web-dev': 'stock-green',
    finance: 'stock-gold',
    ai: 'stock-red',
    crypto: 'text-purple-400',
    business: 'text-orange-400',
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <StockTicker />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="stock-border-bottom bg-gradient-to-br from-stock-gold/10 to-transparent py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-4">
              <div className="inline-block px-4 py-2 bg-stock-gold/10 border border-stock-gold/30 rounded-full text-stock-gold text-sm font-mono uppercase tracking-wider mb-2">
                <FiTarget className="inline mr-2 mb-1" />
                Holdings Portfolio
              </div>

              <h1 className="text-4xl md:text-5xl font-heading text-stock-gold font-black">
                Technical Holdings
              </h1>

              <p className="text-lg text-stock-text/80 max-w-2xl mx-auto">
                A diversified portfolio of {skills.length} technical skills
                across {Object.keys(skillsByCategory).length} major categories.
                Built through years of learning, practice, and real-world application.
              </p>
            </div>
          </div>
        </section>

        {/* Portfolio Summary */}
        <section className="bg-stock-board py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl font-heading text-stock-cyan mb-6 text-center">
                Asset Allocation
              </h2>

              <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
                {categoryStats.map(stat => (
                  <div
                    key={stat.category}
                    className="p-4 bg-stock-dark/50 border border-stock-navy hover:border-stock-cyan transition-colors text-center"
                  >
                    <div className="text-3xl font-heading text-stock-cyan mb-2 font-black">
                      {stat.percentage}%
                    </div>
                    <div className="text-sm text-stock-text/80 font-mono uppercase mb-1">
                      {stat.category}
                    </div>
                    <div className="text-xs text-stock-text/40">
                      {stat.count} skills
                    </div>
                    <div className="flex items-center justify-center gap-1 mt-2">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className={`w-1.5 h-1.5 rounded-full ${
                            i < Math.round(stat.avgRating)
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

        {/* Top Holdings */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-heading text-stock-gold mb-8 flex items-center gap-3">
              <FiAward />
              Top 10 Holdings
            </h2>

            <div className="grid md:grid-cols-2 gap-4">
              {topSkills.map((skill, index) => (
                <div
                  key={skill.name}
                  className="flex items-center gap-4 p-4 bg-stock-board border border-stock-navy hover:border-stock-cyan transition-colors"
                >
                  <div className="text-3xl font-heading text-stock-gold/40 w-12 text-center">
                    #{index + 1}
                  </div>
                  <div className="text-3xl">{skill.icon}</div>
                  <div className="flex-1">
                    <div className="font-heading text-stock-cyan text-lg">
                      {skill.name}
                    </div>
                    <div className="text-xs text-stock-text/40 uppercase font-mono">
                      {skill.category}
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className={`w-2.5 h-2.5 rounded-full ${
                          i < skill.rating ? 'bg-stock-green' : 'bg-stock-navy'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* All Holdings by Category */}
        <section className="stock-border-top bg-stock-board py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-heading text-stock-cyan mb-12 text-center flex items-center justify-center gap-3">
                <FiTrendingUp />
                Complete Holdings Breakdown
              </h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Object.entries(skillsByCategory).map(
                  ([category, categorySkills]) => (
                    <div key={category} className="stock-card">
                      {/* Category Header */}
                      <div className="mb-4 pb-4 border-b border-stock-navy/50">
                        <h3 className="text-xl font-heading text-stock-cyan uppercase">
                          {category}
                        </h3>
                        <div className="text-sm text-stock-text/60 font-mono mt-1">
                          {categorySkills.length} holdings •{' '}
                          {Math.round(
                            (categorySkills.reduce((sum, s) => sum + s.rating, 0) /
                              categorySkills.length /
                              5) *
                              100
                          )}
                          % avg strength
                        </div>
                      </div>

                      {/* Skills List */}
                      <div className="space-y-3">
                        {categorySkills
                          .sort((a, b) => b.rating - a.rating)
                          .map(skill => (
                            <div
                              key={skill.name}
                              className="flex items-center justify-between group hover:bg-stock-navy/30 -mx-2 px-2 py-1 rounded transition-colors"
                            >
                              <div className="flex items-center gap-2 flex-1">
                                <span className="text-lg">{skill.icon}</span>
                                <span className="text-sm text-stock-text/80 group-hover:text-stock-cyan transition-colors">
                                  {skill.name}
                                </span>
                              </div>
                              <div className="flex items-center gap-1">
                                {[...Array(5)].map((_, i) => (
                                  <div
                                    key={i}
                                    className={`w-1.5 h-1.5 rounded-full transition-colors ${
                                      i < skill.rating
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
                  )
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Skill Development Philosophy */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-heading text-stock-cyan mb-8 text-center">
              Investment Strategy
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 stock-card text-center">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-heading text-stock-cyan mb-3">
                  Depth Over Breadth
                </h3>
                <p className="text-sm text-stock-text/70">
                  Focus on mastering core technologies rather than superficial
                  knowledge of many. Deep expertise creates compounding value.
                </p>
              </div>

              <div className="p-6 stock-card text-center">
                <div className="text-4xl mb-4">📚</div>
                <h3 className="text-xl font-heading text-stock-green mb-3">
                  Continuous Learning
                </h3>
                <p className="text-sm text-stock-text/70">
                  Technology evolves rapidly. Dedicate time daily to learning new
                  tools, frameworks, and best practices. Stay ahead of the curve.
                </p>
              </div>

              <div className="p-6 stock-card text-center">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-xl font-heading text-stock-gold mb-3">
                  Build to Learn
                </h3>
                <p className="text-sm text-stock-text/70">
                  The best way to master a skill is to build real projects with it.
                  Theory is important, but practice is essential.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="stock-border-top bg-gradient-to-br from-stock-gold/10 to-transparent py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-heading text-stock-gold mb-4">
                See These Skills in Action
              </h2>
              <p className="text-lg text-stock-text/80 mb-6">
                Check out my tech assets and financial instruments to see how I've
                applied these skills in real-world projects.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/ventures/tech-assets" className="btn-primary">
                  View Tech Assets
                </Link>
                <Link
                  href="/prospectus"
                  className="px-6 py-3 border-2 border-stock-cyan text-stock-cyan font-bold rounded hover:bg-stock-cyan hover:text-stock-dark transition-all duration-200 hover:scale-105"
                >
                  Read Prospectus
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
