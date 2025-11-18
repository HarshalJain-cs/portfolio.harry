'use client'

/**
 * Analytics Dashboard Page
 * Developer metrics and GitHub statistics
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
import { FiGithub, FiStar, FiGitCommit, FiFolder, FiCode, FiTrendingUp, FiActivity } from 'react-icons/fi'
import Link from 'next/link'
import { staggerContainer, staggerItem, fadeIn } from '@/lib/animations'

// Sample GitHub stats data
const githubStats = {
  public_repos: 42,
  total_stars: 328,
  total_commits: 2847,
  followers: 156,
  following: 89,
  account_age_days: 1825, // ~5 years
  most_used_languages: [
    { language: 'TypeScript', percentage: 35.8, color: '#3178c6' },
    { language: 'JavaScript', percentage: 28.2, color: '#f7df1e' },
    { language: 'Python', percentage: 15.4, color: '#3776ab' },
    { language: 'Solidity', percentage: 8.6, color: '#363636' },
    { language: 'CSS', percentage: 6.3, color: '#1572b6' },
    { language: 'HTML', percentage: 5.7, color: '#e34f26' },
  ],
}

export default function AnalyticsPage() {
  // Calculate average commits per day
  const commitsPerDay = useMemo(() => {
    return (githubStats.total_commits / githubStats.account_age_days).toFixed(1)
  }, [])

  // Calculate average stars per repo
  const starsPerRepo = useMemo(() => {
    return (githubStats.total_stars / githubStats.public_repos).toFixed(1)
  }, [])

  // Calculate account age in years
  const accountAgeYears = useMemo(() => {
    return (githubStats.account_age_days / 365).toFixed(1)
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
              <FiTrendingUp className="inline mr-2" />
              Analytics Dashboard
            </Badge>

            <h1 className="text-h1 font-heading font-bold text-platinum-bright uppercase">
              Developer <span className="text-gold-bright">Metrics</span>
            </h1>

            <p className="text-lg text-platinum-muted max-w-2xl mx-auto">
              Live statistics showcasing contribution activity, repository metrics, and programming language distribution across GitHub.
            </p>
          </motion.div>
        </section>

        {/* GitHub Stats Overview */}
        <section className="section-padding bg-bg-secondary">
          <div className="container-custom">
            <div className="max-w-6xl mx-auto">
              <motion.div
                className="grid grid-cols-2 md:grid-cols-4 gap-4"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
              >
                <motion.div variants={staggerItem}>
                  <GlassCard variant="luxury" className="text-center border-2 border-gold-main">
                    <FiFolder className="text-4xl text-gold-bright mx-auto mb-3" />
                    <div className="text-4xl font-heading text-gold-bright mb-2 font-mono font-black">
                      {githubStats.public_repos}
                    </div>
                    <div className="text-xs text-platinum-dark uppercase">
                      Public Repos
                    </div>
                  </GlassCard>
                </motion.div>

                <motion.div variants={staggerItem}>
                  <GlassCard variant="luxury" className="text-center border-2 border-platinum-main">
                    <FiStar className="text-4xl text-platinum-bright mx-auto mb-3" />
                    <div className="text-4xl font-heading text-platinum-bright mb-2 font-mono font-black">
                      {githubStats.total_stars}
                    </div>
                    <div className="text-xs text-platinum-dark uppercase">
                      Total Stars
                    </div>
                  </GlassCard>
                </motion.div>

                <motion.div variants={staggerItem}>
                  <GlassCard variant="success" className="text-center border-2 border-emerald-main">
                    <FiGitCommit className="text-4xl text-emerald-bright mx-auto mb-3" />
                    <div className="text-4xl font-heading text-emerald-bright mb-2 font-mono font-black">
                      {githubStats.total_commits.toLocaleString()}
                    </div>
                    <div className="text-xs text-platinum-dark uppercase">
                      Commits
                    </div>
                  </GlassCard>
                </motion.div>

                <motion.div variants={staggerItem}>
                  <GlassCard variant="luxury" className="text-center">
                    <FiGithub className="text-4xl text-gold-bright mx-auto mb-3" />
                    <div className="text-4xl font-heading text-gold-bright mb-2 font-mono font-black">
                      {githubStats.followers}
                    </div>
                    <div className="text-xs text-platinum-dark uppercase">
                      Followers
                    </div>
                  </GlassCard>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Language Distribution */}
        <section className="section-padding bg-bg-primary">
          <div className="container-custom">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-h2 font-heading text-platinum-bright mb-12 flex items-center gap-3 justify-center">
                <FiCode />
                Language Distribution
              </h2>

              <motion.div
                className="grid md:grid-cols-2 gap-8"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
              >
                {/* Languages List */}
                <motion.div variants={staggerItem} className="space-y-4">
                  {githubStats.most_used_languages.map((lang, index) => (
                    <GlassCard key={index} variant="luxury" hover>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <div
                            className="w-3 h-3 rounded-full"
                            style={{ backgroundColor: lang.color }}
                          ></div>
                          <span className="font-heading text-platinum-bright">
                            {lang.language}
                          </span>
                        </div>
                        <span className="font-mono text-gold-bright font-bold">
                          {lang.percentage.toFixed(1)}%
                        </span>
                      </div>
                      <div className="w-full bg-glass-subtle h-2 rounded-full overflow-hidden">
                        <div
                          className="h-full transition-all duration-500"
                          style={{
                            width: `${lang.percentage}%`,
                            backgroundColor: lang.color,
                          }}
                        ></div>
                      </div>
                    </GlassCard>
                  ))}
                </motion.div>

                {/* Pie Chart Visual */}
                <motion.div variants={staggerItem}>
                  <GlassCard variant="luxury" className="h-full flex items-center justify-center">
                    <div className="relative w-64 h-64">
                      <svg viewBox="0 0 100 100" className="transform -rotate-90">
                        {githubStats.most_used_languages.reduce((acc, lang, index) => {
                          const prevPercentage = githubStats.most_used_languages
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
                        <div className="text-3xl font-heading text-gold-bright font-black">
                          {githubStats.most_used_languages.length}
                        </div>
                        <div className="text-xs text-platinum-dark uppercase">
                          Languages
                        </div>
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Activity Stats */}
        <section className="section-padding bg-bg-secondary">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-h2 font-heading text-platinum-bright mb-12 text-center">
                Activity Overview
              </h2>

              <motion.div
                className="grid md:grid-cols-3 gap-6"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
              >
                <motion.div variants={staggerItem}>
                  <GlassCard variant="luxury" hover className="text-center">
                    <div className="text-4xl mb-4">⏱️</div>
                    <div className="text-2xl font-heading text-gold-bright mb-2 font-black">
                      {accountAgeYears} yrs
                    </div>
                    <div className="text-sm text-platinum-muted">
                      Account Age
                    </div>
                  </GlassCard>
                </motion.div>

                <motion.div variants={staggerItem}>
                  <GlassCard variant="success" hover className="text-center">
                    <div className="text-4xl mb-4">📊</div>
                    <div className="text-2xl font-heading text-emerald-bright mb-2 font-black">
                      {commitsPerDay}
                    </div>
                    <div className="text-sm text-platinum-muted">
                      Commits / Day Avg
                    </div>
                  </GlassCard>
                </motion.div>

                <motion.div variants={staggerItem}>
                  <GlassCard variant="luxury" hover className="text-center">
                    <div className="text-4xl mb-4">🎯</div>
                    <div className="text-2xl font-heading text-platinum-bright mb-2 font-black">
                      {starsPerRepo}
                    </div>
                    <div className="text-sm text-platinum-muted">
                      Stars / Repo Avg
                    </div>
                  </GlassCard>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA - GitHub Profile */}
        <section className="section-padding bg-bg-primary">
          <div className="container-custom">
            <GlassCard variant="luxury" className="max-w-4xl mx-auto text-center">
              <div className="space-y-6 py-8">
                <FiGithub className="text-gold-bright text-5xl mx-auto" />
                <h2 className="text-h2 font-heading text-platinum-bright">
                  View Full GitHub Profile
                </h2>
                <p className="text-lg text-platinum-muted max-w-2xl mx-auto">
                  Explore my repositories, contributions, and open source work on GitHub.
                </p>
                <div className="pt-4">
                  <a
                    href="https://github.com/HarshalJain-cs"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="gold" size="lg">
                      <FiGithub className="mr-2" size={20} />
                      Visit GitHub Profile
                    </Button>
                  </a>
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
