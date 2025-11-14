/**
 * Analytics Dashboard Page
 * Live GitHub statistics and developer metrics
 */

'use client'

import React, { useEffect, useState } from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import StockTicker from '@/components/layout/StockTicker'
import { fetchGitHubStats } from '@/lib/api/github'
import type { GitHubStats } from '@/types/database'
import { FiGithub, FiStar, FiGitCommit, FiFolder, FiCode, FiTrendingUp } from 'react-icons/fi'

export default function AnalyticsPage() {
  const [stats, setStats] = useState<GitHubStats | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadStats() {
      try {
        const githubStats = await fetchGitHubStats()
        setStats(githubStats)
      } catch (error) {
        console.error('Error loading GitHub stats:', error)
      } finally {
        setLoading(false)
      }
    }

    loadStats()
  }, [])

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
                <FiTrendingUp className="inline mr-2 mb-1" />
                Analytics Dashboard
              </div>

              <h1 className="text-4xl md:text-5xl font-heading text-stock-gold font-black">
                Developer Metrics
              </h1>

              <p className="text-lg text-stock-text/80 max-w-2xl mx-auto">
                Live statistics from GitHub showcasing contribution activity,
                repository metrics, and programming language distribution.
              </p>
            </div>
          </div>
        </section>

        {loading ? (
          /* Loading State */
          <section className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block w-16 h-16 border-4 border-stock-cyan border-t-transparent rounded-full animate-spin mb-4"></div>
              <div className="text-stock-cyan font-mono">
                Loading Analytics Data<span className="loading-dots"></span>
              </div>
            </div>
          </section>
        ) : stats ? (
          <>
            {/* GitHub Stats Overview */}
            <section className="bg-stock-board py-12">
              <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-6 bg-stock-dark/50 border-2 border-stock-cyan">
                    <FiFolder className="text-4xl text-stock-cyan mx-auto mb-3" />
                    <div className="text-4xl font-heading text-stock-cyan mb-2 font-black">
                      {stats.public_repos}
                    </div>
                    <div className="text-xs text-stock-text/60 uppercase">
                      Public Repos
                    </div>
                  </div>

                  <div className="text-center p-6 bg-stock-dark/50 border-2 border-stock-gold">
                    <FiStar className="text-4xl text-stock-gold mx-auto mb-3" />
                    <div className="text-4xl font-heading text-stock-gold mb-2 font-black">
                      {stats.total_stars}
                    </div>
                    <div className="text-xs text-stock-text/60 uppercase">
                      Total Stars
                    </div>
                  </div>

                  <div className="text-center p-6 bg-stock-dark/50 border-2 border-stock-green">
                    <FiGitCommit className="text-4xl text-stock-green mx-auto mb-3" />
                    <div className="text-4xl font-heading text-stock-green mb-2 font-black">
                      {stats.total_commits.toLocaleString()}
                    </div>
                    <div className="text-xs text-stock-text/60 uppercase">
                      Commits
                    </div>
                  </div>

                  <div className="text-center p-6 bg-stock-dark/50 border border-stock-navy">
                    <FiGithub className="text-4xl text-stock-cyan mx-auto mb-3" />
                    <div className="text-4xl font-heading text-stock-cyan mb-2 font-black">
                      {stats.followers}
                    </div>
                    <div className="text-xs text-stock-text/60 uppercase">
                      Followers
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Language Distribution */}
            <section className="container mx-auto px-4 py-16">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-heading text-stock-cyan mb-8 flex items-center gap-3">
                  <FiCode />
                  Language Distribution
                </h2>

                <div className="grid md:grid-cols-2 gap-8">
                  {/* Languages List */}
                  <div className="space-y-4">
                    {stats.most_used_languages.map((lang, index) => (
                      <div key={index} className="stock-card">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-3">
                            <div
                              className="w-3 h-3 rounded-full"
                              style={{ backgroundColor: lang.color }}
                            ></div>
                            <span className="font-heading text-stock-cyan">
                              {lang.language}
                            </span>
                          </div>
                          <span className="font-mono text-stock-gold font-bold">
                            {lang.percentage.toFixed(1)}%
                          </span>
                        </div>
                        <div className="w-full bg-stock-navy h-2 rounded-full overflow-hidden">
                          <div
                            className="h-full transition-all duration-500"
                            style={{
                              width: `${lang.percentage}%`,
                              backgroundColor: lang.color,
                            }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Pie Chart Visual */}
                  <div className="stock-card flex items-center justify-center">
                    <div className="relative w-64 h-64">
                      <svg viewBox="0 0 100 100" className="transform -rotate-90">
                        {stats.most_used_languages.reduce((acc, lang, index) => {
                          const prevPercentage = stats.most_used_languages
                            .slice(0, index)
                            .reduce((sum, l) => sum + l.percentage, 0)
                          const strokeDasharray = `${lang.percentage} ${100 - lang.percentage}`
                          const strokeDashoffset = -prevPercentage

                          acc.push(
                            <circle
                              key={index}
                              cx="50"
                              cy="50"
                              r="15.9"
                              fill="transparent"
                              stroke={lang.color}
                              strokeWidth="31.8"
                              strokeDasharray={strokeDasharray}
                              strokeDashoffset={strokeDashoffset}
                              opacity="0.9"
                            />
                          )
                          return acc
                        }, [] as React.ReactElement[])}
                      </svg>
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <div className="text-3xl font-heading text-stock-cyan font-black">
                          {stats.most_used_languages.length}
                        </div>
                        <div className="text-xs text-stock-text/60 uppercase">
                          Languages
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Activity Stats */}
            <section className="stock-border-top bg-stock-board py-16">
              <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                  <h2 className="text-3xl font-heading text-stock-cyan mb-8 text-center">
                    Activity Overview
                  </h2>

                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="p-6 stock-card text-center">
                      <div className="text-4xl mb-4">⏱️</div>
                      <div className="text-2xl font-heading text-stock-cyan mb-2 font-black">
                        {(stats.account_age_days / 365).toFixed(1)} yrs
                      </div>
                      <div className="text-sm text-stock-text/60">
                        Account Age
                      </div>
                    </div>

                    <div className="p-6 stock-card text-center">
                      <div className="text-4xl mb-4">📊</div>
                      <div className="text-2xl font-heading text-stock-green mb-2 font-black">
                        {(stats.total_commits / stats.account_age_days).toFixed(1)}
                      </div>
                      <div className="text-sm text-stock-text/60">
                        Commits / Day Avg
                      </div>
                    </div>

                    <div className="p-6 stock-card text-center">
                      <div className="text-4xl mb-4">🎯</div>
                      <div className="text-2xl font-heading text-stock-gold mb-2 font-black">
                        {(stats.total_stars / stats.public_repos).toFixed(1)}
                      </div>
                      <div className="text-sm text-stock-text/60">
                        Stars / Repo Avg
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* GitHub Profile Link */}
            <section className="container mx-auto px-4 py-16">
              <div className="max-w-4xl mx-auto text-center stock-border p-12 bg-gradient-to-br from-stock-cyan/10 to-transparent">
                <h2 className="text-3xl font-heading text-stock-cyan mb-4">
                  View Full GitHub Profile
                </h2>
                <p className="text-lg text-stock-text/80 mb-6">
                  Explore my repositories, contributions, and open source work on
                  GitHub.
                </p>
                <a
                  href="https://github.com/HarshalJain-cs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center gap-2"
                >
                  <FiGithub size={20} />
                  Visit GitHub Profile
                </a>
              </div>
            </section>
          </>
        ) : (
          /* Error State */
          <section className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto text-center stock-card p-12">
              <div className="text-6xl mb-4">📊</div>
              <h2 className="text-2xl font-heading text-stock-red mb-4">
                Failed to Load Analytics
              </h2>
              <p className="text-stock-text/70 mb-6">
                Unable to fetch GitHub statistics. Please check back later.
              </p>
              <button
                onClick={() => window.location.reload()}
                className="btn-primary"
              >
                Retry
              </button>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  )
}
