/**
 * Investor Prospectus (About) Page
 * Comprehensive overview of Harshal Jain's background, skills, and philosophy
 */

import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import StockTicker from '@/components/layout/StockTicker'
import Link from 'next/link'
import { skills } from '@/lib/data'
import {
  FiCode,
  FiTrendingUp,
  FiAward,
  FiTarget,
  FiGithub,
  FiBookOpen,
  FiCpu,
  FiDollarSign,
} from 'react-icons/fi'

export default function ProspectusPage() {
  // Group skills by category
  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = []
    }
    acc[skill.category].push(skill)
    return acc
  }, {} as Record<string, typeof skills>)

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <StockTicker />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="stock-border-bottom bg-gradient-to-br from-stock-navy/30 to-transparent py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <div className="inline-block px-4 py-2 bg-stock-cyan/10 border border-stock-cyan/30 rounded-full text-stock-cyan text-sm font-mono uppercase tracking-wider mb-4">
                Investor Prospectus
              </div>

              <h1 className="text-4xl md:text-6xl font-heading text-stock-gold font-black">
                About $HARSHAL
              </h1>

              <p className="text-xl md:text-2xl text-stock-cyan font-heading">
                Engineering Degree Holder | Finance Mind at Heart 💰
              </p>

              <p className="text-lg text-stock-text/80 max-w-3xl mx-auto leading-relaxed">
                An engineering student with a deep passion for financial markets,
                technology innovation, and building scalable solutions. Combining
                technical expertise with financial acumen to create value at the
                intersection of code and capital.
              </p>
            </div>
          </div>
        </section>

        {/* Executive Summary */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Profile Card */}
              <div>
                <h2 className="text-3xl font-heading text-stock-cyan mb-6 flex items-center gap-3">
                  <FiTarget className="text-stock-gold" />
                  Executive Summary
                </h2>

                <div className="space-y-4 text-stock-text/80">
                  <p>
                    I'm <span className="text-stock-gold font-bold">Harshal Jain</span>,
                    an engineering student with an entrepreneurial mindset and a
                    finance-focused outlook. My journey began with curiosity about
                    how systems work—from code to markets—and evolved into a mission
                    to build products that solve real problems.
                  </p>

                  <p>
                    While my degree is in engineering, my heart beats for{' '}
                    <span className="text-stock-green font-semibold">
                      financial markets, trading strategies, and economic systems
                    </span>
                    . I spend my days building with TypeScript and my nights
                    analyzing charts, studying market psychology, and exploring
                    DeFi protocols.
                  </p>

                  <p>
                    I believe the best innovations happen at intersections—where
                    technology meets finance, where theory meets execution, where
                    ambition meets discipline. That's the space I operate in.
                  </p>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="p-4 bg-stock-board border border-stock-navy">
                    <div className="text-2xl font-heading text-stock-cyan mb-1">
                      {skills.length}+
                    </div>
                    <div className="text-sm text-stock-text/60">Technical Skills</div>
                  </div>
                  <div className="p-4 bg-stock-board border border-stock-navy">
                    <div className="text-2xl font-heading text-stock-green mb-1">
                      3+
                    </div>
                    <div className="text-sm text-stock-text/60">Years Experience</div>
                  </div>
                  <div className="p-4 bg-stock-board border border-stock-navy">
                    <div className="text-2xl font-heading text-stock-gold mb-1">
                      15+
                    </div>
                    <div className="text-sm text-stock-text/60">Projects Built</div>
                  </div>
                  <div className="p-4 bg-stock-board border border-stock-navy">
                    <div className="text-2xl font-heading text-stock-cyan mb-1">
                      500+
                    </div>
                    <div className="text-sm text-stock-text/60">GitHub Stars</div>
                  </div>
                </div>
              </div>

              {/* Core Competencies */}
              <div>
                <h2 className="text-3xl font-heading text-stock-cyan mb-6 flex items-center gap-3">
                  <FiAward className="text-stock-gold" />
                  Core Competencies
                </h2>

                <div className="space-y-4">
                  {/* Full-Stack Development */}
                  <div className="p-4 stock-card">
                    <div className="flex items-start gap-4">
                      <div className="text-3xl">
                        <FiCode className="text-stock-cyan" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-heading text-stock-cyan mb-2">
                          Full-Stack Development
                        </h3>
                        <p className="text-sm text-stock-text/70 mb-3">
                          Proficient in modern web technologies—React, Next.js,
                          TypeScript, Node.js, and PostgreSQL. Building scalable,
                          performant applications with clean architecture.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {['React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL'].map(
                            tech => (
                              <span
                                key={tech}
                                className="px-2 py-1 bg-stock-navy/50 text-stock-text/60 text-xs rounded font-mono"
                              >
                                {tech}
                              </span>
                            )
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Financial Analysis */}
                  <div className="p-4 stock-card">
                    <div className="flex items-start gap-4">
                      <div className="text-3xl">
                        <FiTrendingUp className="text-stock-green" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-heading text-stock-green mb-2">
                          Financial Analysis
                        </h3>
                        <p className="text-sm text-stock-text/70 mb-3">
                          Deep understanding of markets, valuation models, trading
                          strategies, and DeFi protocols. Experienced with technical
                          and fundamental analysis.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {['Trading', 'Valuation', 'DeFi', 'Portfolio Mgmt', 'Risk Analysis'].map(
                            skill => (
                              <span
                                key={skill}
                                className="px-2 py-1 bg-stock-navy/50 text-stock-text/60 text-xs rounded font-mono"
                              >
                                {skill}
                              </span>
                            )
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* AI & Blockchain */}
                  <div className="p-4 stock-card">
                    <div className="flex items-start gap-4">
                      <div className="text-3xl">
                        <FiCpu className="text-stock-gold" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-heading text-stock-gold mb-2">
                          AI & Blockchain
                        </h3>
                        <p className="text-sm text-stock-text/70 mb-3">
                          Exploring emerging technologies—LLMs, smart contracts,
                          and decentralized systems. Building with Claude AI, OpenAI,
                          and Solidity.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {['Claude AI', 'OpenAI', 'Blockchain', 'Solidity', 'Web3'].map(
                            tech => (
                              <span
                                key={tech}
                                className="px-2 py-1 bg-stock-navy/50 text-stock-text/60 text-xs rounded font-mono"
                              >
                                {tech}
                              </span>
                            )
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy & Approach */}
        <section className="stock-border-top stock-border-bottom bg-stock-board py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-heading text-stock-cyan mb-8 text-center flex items-center justify-center gap-3">
                <FiBookOpen className="text-stock-gold" />
                Investment Philosophy
              </h2>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-6 bg-stock-dark/50 border-l-4 border-stock-cyan">
                  <h3 className="text-xl font-heading text-stock-cyan mb-3">
                    Build {'>'}Talk
                  </h3>
                  <p className="text-sm text-stock-text/70">
                    Actions speak louder than words. I focus on shipping products,
                    writing code, and creating tangible value rather than endless
                    planning and theorizing.
                  </p>
                </div>

                <div className="p-6 bg-stock-dark/50 border-l-4 border-stock-green">
                  <h3 className="text-xl font-heading text-stock-green mb-3">
                    Learn Fast
                  </h3>
                  <p className="text-sm text-stock-text/70">
                    Markets move fast, technology evolves faster. Continuous
                    learning is non-negotiable. I invest heavily in knowledge—books,
                    courses, and hands-on experimentation.
                  </p>
                </div>

                <div className="p-6 bg-stock-dark/50 border-l-4 border-stock-gold">
                  <h3 className="text-xl font-heading text-stock-gold mb-3">
                    Think Long-Term
                  </h3>
                  <p className="text-sm text-stock-text/70">
                    Quick wins are nice, but compounding returns are better. I build
                    systems, not hacks. I focus on fundamentals, not shortcuts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Breakdown */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-heading text-stock-cyan mb-12 text-center">
              Holdings Portfolio
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Object.entries(skillsByCategory).map(([category, categorySkills]) => (
                <div key={category} className="stock-card">
                  <h3 className="text-xl font-heading text-stock-cyan mb-4 uppercase border-b border-stock-navy/50 pb-2">
                    {category}
                  </h3>
                  <div className="space-y-3">
                    {categorySkills.map(skill => (
                      <div key={skill.name} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="text-lg">{skill.icon}</span>
                          <span className="text-sm text-stock-text/80">
                            {skill.name}
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <div
                              key={i}
                              className={`w-1.5 h-1.5 rounded-full ${
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
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                href="/holdings"
                className="btn-primary inline-flex items-center gap-2"
              >
                View Complete Holdings
                <FiDollarSign />
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="stock-border-top bg-gradient-to-br from-stock-navy/20 to-transparent py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-heading text-stock-cyan mb-6">
                Let's Build Something Great
              </h2>
              <p className="text-lg text-stock-text/80 mb-8">
                Whether it's a tech project, financial analysis, or an innovative
                idea—I'm always open to collaborating with like-minded builders.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/investor-relations" className="btn-primary">
                  Get In Touch
                </Link>
                <a
                  href="https://github.com/HarshalJain-cs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 border-2 border-stock-cyan text-stock-cyan font-bold rounded hover:bg-stock-cyan hover:text-stock-dark transition-all duration-200 hover:scale-105 flex items-center gap-2"
                >
                  <FiGithub size={20} />
                  GitHub Profile
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
