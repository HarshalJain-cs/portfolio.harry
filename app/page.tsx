'use client'

/**
 * HARSHAL JAIN - LUXURY FINANCE PORTFOLIO
 * Main Landing Page
 * NEW DESIGN: Warmer Charcoal + Gold + Emerald + Platinum
 */

import { motion } from 'framer-motion'
import Logo from '@/components/ui/Logo'
import Button from '@/components/ui/Button'
import GlassCard from '@/components/ui/GlassCard'
import Badge from '@/components/ui/Badge'
import MetricCard from '@/components/ui/MetricCard'
import { FiDollarSign, FiCode, FiTrendingUp, FiAward, FiGithub, FiBriefcase } from 'react-icons/fi'
import { fadeIn, scrollReveal, staggerContainer, staggerItem } from '@/lib/animations'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-bg-primary text-platinum-main">
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-bg-primary via-bg-secondary to-bg-elevated opacity-90" />

        {/* Animated grid background */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full" style={{
            backgroundImage: 'linear-gradient(rgba(201,169,97,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,169,97,0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }} />
        </div>

        {/* Content */}
        <motion.div
          className="relative z-10 container-custom text-center space-y-12"
          variants={fadeIn}
          initial="hidden"
          animate="visible"
        >
          {/* Logo */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Logo size="lg" animated glowOnHover />
          </motion.div>

          {/* Market Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Badge variant="live">
              <span className="inline-block w-2 h-2 bg-emerald-bright rounded-full mr-2 animate-pulse" />
              Market Status: LIVE
            </Badge>
          </motion.div>

          {/* $HARSHAL Heading with Glitch Effect */}
          <motion.h1
            className="text-hero font-heading font-bold text-platinum-bright uppercase tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            whileHover={{
              textShadow: [
                '0 0 0px rgba(201,169,97,0)',
                '0 0 20px rgba(201,169,97,0.6)',
                '0 0 0px rgba(201,169,97,0)',
              ],
              transition: { duration: 0.5, repeat: Infinity, repeatType: 'reverse' },
            }}
          >
            $HARSHAL
          </motion.h1>

          {/* Tagline */}
          <motion.p
            className="text-2xl md:text-3xl text-platinum-main font-heading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            Personal Stock Exchange
          </motion.p>

          <motion.p
            className="text-xl md:text-2xl text-platinum-muted max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            Tech Entrepreneur & Trader |{' '}
            <span className="text-gold-bright font-semibold">Finance Mind at Heart 💰</span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
          >
            <Button variant="gold" size="lg">
              Explore Portfolio
            </Button>
            <Button variant="platinum" size="lg">
              Get In Touch
            </Button>
            <Button variant="emerald" size="lg">
              Download Resume
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-gold-main rounded-full flex items-start justify-center p-2">
            <motion.div
              className="w-1.5 h-1.5 bg-gold-main rounded-full"
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* METRICS DASHBOARD */}
      <section className="section-padding bg-bg-secondary">
        <div className="container-custom">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.25 }}
          >
            <motion.div variants={staggerItem}>
              <MetricCard
                icon={<FiDollarSign />}
                value={247}
                label="Portfolio ROI"
                variant="emerald"
                prefix="+"
                suffix="%"
                animate
              />
            </motion.div>

            <motion.div variants={staggerItem}>
              <MetricCard
                icon={<FiCode />}
                value={95}
                label="Technical Proficiency"
                variant="platinum"
                suffix="%"
                animate
              />
            </motion.div>

            <motion.div variants={staggerItem}>
              <MetricCard
                icon={<FiBriefcase />}
                value="150+"
                label="Total Projects"
                variant="platinum"
                animate={false}
              />
            </motion.div>

            <motion.div variants={staggerItem}>
              <MetricCard
                icon={<FiAward />}
                value="15+"
                label="Certifications"
                variant="gold"
                animate={false}
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FEATURED SECTION */}
      <section className="section-padding bg-bg-primary">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.25 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-h3 font-heading text-platinum-bright mb-4 gold-underline inline-block">
              Featured Assets
            </h2>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-6 mt-12"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.25 }}
          >
            {/* Project Card 1 */}
            <motion.div variants={staggerItem}>
              <GlassCard variant="luxury" hover>
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="text-gold-bright font-mono text-lg font-bold">$PROJ1</div>
                      <div className="text-xs text-platinum-dark uppercase mt-1">Tech Asset</div>
                    </div>
                    <Badge variant="live">Live</Badge>
                  </div>

                  <h3 className="text-xl font-heading text-platinum-bright">
                    AI Trading Platform
                  </h3>

                  <p className="text-sm text-platinum-muted line-clamp-2">
                    Machine learning-powered algorithmic trading system with real-time market analysis and automated execution.
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-glass-platinum">
                    <div className="text-sm">
                      <span className="text-platinum-dark">Market Cap:</span>{' '}
                      <span className="text-gold-bright font-mono">$1.2M</span>
                    </div>
                    <div className="text-sm">
                      <span className="text-platinum-dark">ROI:</span>{' '}
                      <span className="text-emerald-bright font-mono">+247%</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-4">
                    <Badge variant="tech">Python</Badge>
                    <Badge variant="tech">TensorFlow</Badge>
                    <Badge variant="tech">React</Badge>
                  </div>
                </div>
              </GlassCard>
            </motion.div>

            {/* Project Card 2 */}
            <motion.div variants={staggerItem}>
              <GlassCard variant="luxury" hover>
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="text-gold-bright font-mono text-lg font-bold">$PROJ2</div>
                      <div className="text-xs text-platinum-dark uppercase mt-1">Financial Instrument</div>
                    </div>
                    <Badge variant="live">Live</Badge>
                  </div>

                  <h3 className="text-xl font-heading text-platinum-bright">
                    Portfolio Analytics Dashboard
                  </h3>

                  <p className="text-sm text-platinum-muted line-clamp-2">
                    Real-time portfolio tracking with advanced analytics, risk assessment, and performance visualization.
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-glass-platinum">
                    <div className="text-sm">
                      <span className="text-platinum-dark">Market Cap:</span>{' '}
                      <span className="text-gold-bright font-mono">$800K</span>
                    </div>
                    <div className="text-sm">
                      <span className="text-platinum-dark">ROI:</span>{' '}
                      <span className="text-emerald-bright font-mono">+180%</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-4">
                    <Badge variant="tech">Next.js</Badge>
                    <Badge variant="tech">D3.js</Badge>
                    <Badge variant="tech">TypeScript</Badge>
                  </div>
                </div>
              </GlassCard>
            </motion.div>

            {/* Project Card 3 */}
            <motion.div variants={staggerItem}>
              <GlassCard variant="luxury" hover>
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="text-gold-bright font-mono text-lg font-bold">$PROJ3</div>
                      <div className="text-xs text-platinum-dark uppercase mt-1">Research</div>
                    </div>
                    <Badge variant="achievement">Published</Badge>
                  </div>

                  <h3 className="text-xl font-heading text-platinum-bright">
                    Blockchain Finance Research
                  </h3>

                  <p className="text-sm text-platinum-muted line-clamp-2">
                    Published research on decentralized finance protocols and smart contract security in financial applications.
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-glass-platinum">
                    <div className="text-sm">
                      <span className="text-platinum-dark">Citations:</span>{' '}
                      <span className="text-gold-bright font-mono">42</span>
                    </div>
                    <div className="text-sm">
                      <span className="text-platinum-dark">Impact:</span>{' '}
                      <span className="text-emerald-bright font-mono">High</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-4">
                    <Badge variant="tech">Blockchain</Badge>
                    <Badge variant="tech">Solidity</Badge>
                    <Badge variant="tech">DeFi</Badge>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="section-padding bg-bg-secondary">
        <div className="container-custom">
          <GlassCard variant="luxury" className="max-w-4xl mx-auto text-center">
            <div className="space-y-6 py-8">
              <h2 className="text-h2 font-heading text-platinum-bright">
                Ready to Invest in Innovation?
              </h2>
              <p className="text-lg text-platinum-muted max-w-2xl mx-auto">
                Explore my portfolio of tech assets, financial instruments, and market insights. Let's discuss how we can create value together.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <Button variant="gold" size="lg">
                  View Full Portfolio
                </Button>
                <Button variant="platinum" size="lg">
                  <FiGithub className="mr-2" />
                  View on GitHub
                </Button>
              </div>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* SIMPLE FOOTER */}
      <footer className="bg-bg-elevated border-t border-glass-platinum py-12">
        <div className="container-custom text-center space-y-6">
          <Logo size="md" />
          <p className="text-platinum-muted">
            Tech Entrepreneur & Trader | Building at the intersection of Technology & Financial Markets
          </p>
          <div className="flex items-center justify-center space-x-6">
            <a href="https://github.com/HarshalJain-cs" className="text-platinum-muted hover:text-gold-bright transition-colors">
              <FiGithub size={24} />
            </a>
            {/* Add more social links */}
          </div>
          <div className="text-sm text-platinum-dark pt-6 border-t border-glass-platinum">
            © 2025 Harshal Jain. All rights reserved. | Built with ❤️ and ☕
          </div>
        </div>
      </footer>
    </div>
  )
}
