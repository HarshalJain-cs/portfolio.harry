'use client'

/**
 * Investor Prospectus (About) Page
 * Comprehensive overview of Harshal Jain's background, skills, and philosophy
 * NEW DESIGN: Warmer Charcoal + Gold + Emerald + Platinum
 */

import { motion } from 'framer-motion'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import ProgressBar from '@/components/layout/ProgressBar'
import CustomCursor from '@/components/layout/CustomCursor'
import GlassCard from '@/components/ui/GlassCard'
import MetricCard from '@/components/ui/MetricCard'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'
import Link from 'next/link'
import { FiCode, FiTrendingUp, FiAward, FiTarget, FiGithub, FiBookOpen, FiCpu, FiDollarSign, FiBriefcase, FiUsers } from 'react-icons/fi'
import { staggerContainer, staggerItem, fadeIn } from '@/lib/animations'

export default function ProspectusPage() {
  return (
    <>
      <CustomCursor />
      <ProgressBar />
      <Navigation />

      <div className="min-h-screen bg-bg-primary text-platinum-main">
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-bg-primary via-bg-secondary to-bg-elevated opacity-90" />

          {/* Animated grid */}
          <div className="absolute inset-0 opacity-10">
            <div className="w-full h-full" style={{
              backgroundImage: 'linear-gradient(rgba(201,169,97,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,169,97,0.1) 1px, transparent 1px)',
              backgroundSize: '50px 50px',
            }} />
          </div>

          {/* Content */}
          <motion.div
            className="relative z-10 container-custom text-center space-y-8 py-16"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
          >
            <Badge variant="achievement">Investor Prospectus</Badge>

            <h1 className="text-h1 font-heading font-bold text-platinum-bright uppercase">
              About <span className="text-gold-bright">$HARSHAL</span>
            </h1>

            <p className="text-2xl md:text-3xl text-platinum-main font-heading">
              Engineering Degree Holder | Finance Mind at Heart 💰
            </p>

            <p className="text-lg text-platinum-muted max-w-3xl mx-auto leading-relaxed">
              An engineering student with a deep passion for financial markets, technology innovation, and building scalable solutions. Combining technical expertise with financial acumen to create value at the intersection of code and capital.
            </p>
          </motion.div>
        </section>

        {/* Quick Stats */}
        <section className="section-padding bg-bg-secondary">
          <div className="container-custom">
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-6"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
            >
              <motion.div variants={staggerItem}>
                <MetricCard
                  icon={<FiCode />}
                  value="50+"
                  label="Technical Skills"
                  variant="platinum"
                  animate={false}
                />
              </motion.div>

              <motion.div variants={staggerItem}>
                <MetricCard
                  icon={<FiTrendingUp />}
                  value="3+"
                  label="Years Experience"
                  variant="emerald"
                  animate={false}
                />
              </motion.div>

              <motion.div variants={staggerItem}>
                <MetricCard
                  icon={<FiBriefcase />}
                  value="150+"
                  label="Projects Built"
                  variant="gold"
                  animate={false}
                />
              </motion.div>

              <motion.div variants={staggerItem}>
                <MetricCard
                  icon={<FiGithub />}
                  value="500+"
                  label="GitHub Stars"
                  variant="platinum"
                  animate={false}
                />
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Executive Summary */}
        <section className="section-padding bg-bg-primary">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Profile */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-h3 font-heading text-platinum-bright mb-6 gold-underline inline-block">
                  Executive Summary
                </h2>

                <div className="space-y-4 text-platinum-muted leading-relaxed">
                  <p>
                    I'm <span className="text-gold-bright font-bold">Harshal Jain</span>, an engineering student with an entrepreneurial mindset and a finance-focused outlook. My journey began with curiosity about how systems work—from code to markets—and evolved into a mission to build products that solve real problems.
                  </p>

                  <p>
                    While my degree is in engineering, my heart beats for{' '}
                    <span className="text-emerald-bright font-semibold">
                      financial markets, trading strategies, and economic systems
                    </span>
                    . I spend my days building with TypeScript and my nights analyzing charts, studying market psychology, and exploring DeFi protocols.
                  </p>

                  <p>
                    I believe the best innovations happen at intersections—where technology meets finance, where theory meets execution, where ambition meets discipline. That's the space I operate in.
                  </p>
                </div>
              </motion.div>

              {/* Core Competencies */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-h3 font-heading text-platinum-bright mb-6 gold-underline inline-block">
                  Core Competencies
                </h2>

                <div className="space-y-4">
                  <GlassCard variant="luxury" hover>
                    <div className="flex items-start gap-4">
                      <FiCode className="text-gold-bright text-3xl flex-shrink-0" />
                      <div>
                        <h3 className="text-xl font-heading text-platinum-bright mb-2">
                          Full-Stack Development
                        </h3>
                        <p className="text-sm text-platinum-muted mb-3">
                          Proficient in modern web technologies—React, Next.js, TypeScript, Node.js, and PostgreSQL. Building scalable, performant applications with clean architecture.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {['React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL'].map(tech => (
                            <Badge key={tech} variant="tech">{tech}</Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </GlassCard>

                  <GlassCard variant="success" hover>
                    <div className="flex items-start gap-4">
                      <FiTrendingUp className="text-emerald-bright text-3xl flex-shrink-0" />
                      <div>
                        <h3 className="text-xl font-heading text-platinum-bright mb-2">
                          Financial Analysis
                        </h3>
                        <p className="text-sm text-platinum-muted mb-3">
                          Deep understanding of markets, valuation models, trading strategies, and DeFi protocols. Experienced with technical and fundamental analysis.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {['Trading', 'Valuation', 'DeFi', 'Portfolio Mgmt', 'Risk Analysis'].map(skill => (
                            <Badge key={skill} variant="tech">{skill}</Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </GlassCard>

                  <GlassCard variant="luxury" hover>
                    <div className="flex items-start gap-4">
                      <FiCpu className="text-gold-bright text-3xl flex-shrink-0" />
                      <div>
                        <h3 className="text-xl font-heading text-platinum-bright mb-2">
                          AI & Blockchain
                        </h3>
                        <p className="text-sm text-platinum-muted mb-3">
                          Exploring emerging technologies—LLMs, smart contracts, and decentralized systems. Building with Claude AI, OpenAI, and Solidity.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {['Claude AI', 'OpenAI', 'Blockchain', 'Solidity', 'Web3'].map(tech => (
                            <Badge key={tech} variant="tech">{tech}</Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </GlassCard>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Philosophy */}
        <section className="section-padding bg-bg-secondary">
          <div className="container-custom">
            <motion.div
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-h3 font-heading text-platinum-bright mb-12 text-center gold-underline inline-block mx-auto flex items-center justify-center gap-3">
                <FiBookOpen className="text-gold-bright" />
                Investment Philosophy
              </h2>

              <div className="grid md:grid-cols-3 gap-6">
                <GlassCard variant="luxury" hover className="border-l-4 border-gold-main">
                  <h3 className="text-xl font-heading text-gold-bright mb-3">
                    Build &gt; Talk
                  </h3>
                  <p className="text-sm text-platinum-muted">
                    Actions speak louder than words. I focus on shipping products, writing code, and creating tangible value rather than endless planning and theorizing.
                  </p>
                </GlassCard>

                <GlassCard variant="success" hover className="border-l-4 border-emerald-main">
                  <h3 className="text-xl font-heading text-emerald-bright mb-3">
                    Learn Fast
                  </h3>
                  <p className="text-sm text-platinum-muted">
                    Markets move fast, technology evolves faster. Continuous learning is non-negotiable. I invest heavily in knowledge—books, courses, and hands-on experimentation.
                  </p>
                </GlassCard>

                <GlassCard variant="luxury" hover className="border-l-4 border-gold-main">
                  <h3 className="text-xl font-heading text-gold-bright mb-3">
                    Think Long-Term
                  </h3>
                  <p className="text-sm text-platinum-muted">
                    Quick wins are nice, but compounding returns are better. I build systems, not hacks. I focus on fundamentals, not shortcuts.
                  </p>
                </GlassCard>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-bg-primary">
          <div className="container-custom">
            <GlassCard variant="luxury" className="max-w-4xl mx-auto text-center">
              <div className="space-y-6 py-8">
                <h2 className="text-h2 font-heading text-platinum-bright">
                  Let's Build Something Great
                </h2>
                <p className="text-lg text-platinum-muted max-w-2xl mx-auto">
                  Whether it's a tech project, financial analysis, or an innovative idea—I'm always open to collaborating with like-minded builders.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                  <Link href="/investor-relations">
                    <Button variant="gold" size="lg">
                      Get In Touch
                    </Button>
                  </Link>
                  <a
                    href="https://github.com/HarshalJain-cs"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="platinum" size="lg">
                      <FiGithub className="mr-2" />
                      GitHub Profile
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
