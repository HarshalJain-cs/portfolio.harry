'use client'

/**
 * Financial Instruments (Finance Projects) Page
 * Finance-focused projects and market analysis
 * NEW DESIGN: Warmer Charcoal + Gold + Emerald + Platinum
 */

import { motion } from 'framer-motion'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import ProgressBar from '@/components/layout/ProgressBar'
import CustomCursor from '@/components/layout/CustomCursor'
import GlassCard from '@/components/ui/GlassCard'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'
import { FiTrendingUp, FiDollarSign, FiBarChart2, FiPieChart } from 'react-icons/fi'
import Link from 'next/link'
import { staggerContainer, staggerItem, fadeIn } from '@/lib/animations'

// Sample finance projects
const financeProjects = [
  {
    id: 1,
    name: 'Portfolio Tracker Pro',
    description: 'Real-time cryptocurrency and stock portfolio tracking with advanced analytics, profit/loss calculations, and market insights.',
    category: 'FinTech',
    status: 'LIVE',
    tech: ['React', 'Node.js', 'PostgreSQL', 'CoinGecko API'],
    link: '#',
  },
  {
    id: 2,
    name: 'Algorithmic Trading Bot',
    description: 'Automated trading system using technical indicators and machine learning to execute trades on cryptocurrency exchanges.',
    category: 'Trading',
    status: 'BETA',
    tech: ['Python', 'TensorFlow', 'ccxt', 'Redis'],
    link: '#',
  },
  {
    id: 3,
    name: 'DeFi Yield Aggregator',
    description: 'Decentralized finance platform that finds and optimizes yield farming opportunities across multiple protocols.',
    category: 'DeFi',
    status: 'LIVE',
    tech: ['Solidity', 'Web3.js', 'The Graph', 'Hardhat'],
    link: '#',
  },
]

export default function FinancialInstrumentsPage() {
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
              <FiTrendingUp className="inline mr-2 mb-1" />
              Financial Instruments
            </Badge>

            <h1 className="text-h1 font-heading font-bold text-platinum-bright uppercase">
              Finance & <span className="text-gold-bright">Market Analysis</span>
            </h1>

            <p className="text-lg text-platinum-muted max-w-2xl mx-auto">
              Finance-focused projects, market analysis tools, trading platforms, and investment research. Where technology meets capital markets.
            </p>
          </motion.div>
        </section>

        {/* Projects Grid */}
        <section className="section-padding bg-bg-secondary">
          <div className="container-custom">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-h2 font-heading text-platinum-bright mb-12 flex items-center gap-3 justify-center">
                <FiDollarSign />
                Finance Projects
              </h2>

              <motion.div
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
              >
                {financeProjects.map((project) => (
                  <motion.div key={project.id} variants={staggerItem}>
                    <GlassCard variant="luxury" hover className="h-full flex flex-col">
                      <div className="flex items-center justify-between mb-4">
                        <Badge variant="tech">{project.category}</Badge>
                        <Badge variant={project.status === 'LIVE' ? 'live' : 'tech'}>
                          {project.status}
                        </Badge>
                      </div>

                      <h3 className="text-xl font-heading text-platinum-bright mb-3">
                        {project.name}
                      </h3>

                      <p className="text-sm text-platinum-muted mb-6 flex-1">
                        {project.description}
                      </p>

                      <div className="mb-4">
                        <div className="text-xs text-platinum-dark mb-2 uppercase">
                          Tech Stack
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.slice(0, 3).map(tech => (
                            <Badge key={tech} variant="tech">{tech}</Badge>
                          ))}
                          {project.tech.length > 3 && (
                            <span className="text-gold-bright text-xs">+{project.tech.length - 3}</span>
                          )}
                        </div>
                      </div>

                      <a href={project.link}>
                        <Button variant="gold" size="sm" className="w-full">
                          View Project
                        </Button>
                      </a>
                    </GlassCard>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-bg-primary">
          <div className="container-custom">
            <GlassCard variant="luxury" className="max-w-4xl mx-auto text-center">
              <div className="space-y-6 py-8">
                <FiBarChart2 className="text-gold-bright text-5xl mx-auto" />
                <h2 className="text-h2 font-heading text-platinum-bright">
                  Explore All Projects
                </h2>
                <p className="text-lg text-platinum-muted max-w-2xl mx-auto">
                  View my complete portfolio of tech projects across all categories.
                </p>
                <div className="pt-4">
                  <Link href="/ventures/tech-assets">
                    <Button variant="gold" size="lg">
                      View All Tech Assets
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
