/**
 * Trading History (Timeline) Page
 * Professional timeline showing education, experience, and milestones
 */

import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import StockTicker from '@/components/layout/StockTicker'
import { experiences } from '@/lib/data'
import { FiBriefcase, FiCalendar, FiMapPin, FiTrendingUp } from 'react-icons/fi'

export default function TradingHistoryPage() {
  // Sort experiences by start date (most recent first)
  const sortedExperiences = [...experiences].sort(
    (a, b) => new Date(b.start_date).getTime() - new Date(a.start_date).getTime()
  )

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
                <FiBriefcase className="inline mr-2 mb-1" />
                Trading History
              </div>

              <h1 className="text-4xl md:text-5xl font-heading text-stock-gold font-black">
                Professional Timeline
              </h1>

              <p className="text-lg text-stock-text/80 max-w-2xl mx-auto">
                My career journey from education to professional experience.
                Building products, solving problems, and growing with every role.
              </p>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="bg-stock-board py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-6 bg-stock-dark/50 border border-stock-navy">
                <div className="text-4xl font-heading text-stock-cyan mb-2 font-black">
                  {experiences.length}
                </div>
                <div className="text-xs text-stock-text/60 uppercase">
                  Positions
                </div>
              </div>
              <div className="text-center p-6 bg-stock-dark/50 border border-stock-navy">
                <div className="text-4xl font-heading text-stock-green mb-2 font-black">
                  {experiences.filter(e => e.employment_type === 'Full-time').length}
                </div>
                <div className="text-xs text-stock-text/60 uppercase">
                  Full-Time
                </div>
              </div>
              <div className="text-center p-6 bg-stock-dark/50 border border-stock-navy">
                <div className="text-4xl font-heading text-stock-gold mb-2 font-black">
                  {new Set(experiences.map(e => e.company)).size}
                </div>
                <div className="text-xs text-stock-text/60 uppercase">
                  Companies
                </div>
              </div>
              <div className="text-center p-6 bg-stock-dark/50 border border-stock-navy">
                <div className="text-4xl font-heading text-stock-cyan mb-2 font-black">
                  {experiences.filter(e => !e.end_date).length}
                </div>
                <div className="text-xs text-stock-text/60 uppercase">
                  Current
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-stock-cyan/30 hidden md:block"></div>

              {/* Timeline Items */}
              <div className="space-y-12">
                {sortedExperiences.map((exp, index) => (
                  <div key={index} className="relative">
                    {/* Timeline Dot */}
                    <div className="absolute left-6 w-5 h-5 bg-stock-cyan rounded-full border-4 border-stock-dark hidden md:block"></div>

                    {/* Content Card */}
                    <div className="md:ml-20 stock-card hover-lift">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2 flex-wrap">
                            <h3 className="text-2xl font-heading text-stock-cyan">
                              {exp.title}
                            </h3>
                            {!exp.end_date && (
                              <span className="px-2 py-1 bg-stock-green/20 text-stock-green text-xs font-mono rounded border border-stock-green/50">
                                CURRENT
                              </span>
                            )}
                          </div>
                          <div className="text-lg text-stock-gold mb-2">
                            {exp.company}
                          </div>
                          <div className="flex flex-wrap items-center gap-3 text-sm text-stock-text/60">
                            <span className="px-2 py-1 bg-stock-navy/50 rounded font-mono">
                              {exp.employment_type}
                            </span>
                            {exp.location && (
                              <div className="flex items-center gap-1">
                                <FiMapPin size={14} className="text-stock-cyan" />
                                {exp.location}
                              </div>
                            )}
                          </div>
                        </div>
                        <FiBriefcase className="text-4xl text-stock-cyan/40 flex-shrink-0 ml-4" />
                      </div>

                      {/* Duration */}
                      <div className="flex items-center gap-2 mb-4 text-sm text-stock-text/70">
                        <FiCalendar className="text-stock-cyan" />
                        <span className="font-mono">
                          {exp.start_date} - {exp.end_date || 'Present'}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-sm text-stock-text/80 mb-6 leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Key Achievements */}
                      {exp.key_achievements && exp.key_achievements.length > 0 && (
                        <div className="mb-6 p-4 bg-stock-green/10 border-l-4 border-stock-green rounded">
                          <h4 className="text-sm font-mono text-stock-green mb-3 uppercase flex items-center gap-2">
                            <FiTrendingUp size={16} />
                            Key Achievements
                          </h4>
                          <ul className="space-y-2">
                            {exp.key_achievements.map((achievement, i) => (
                              <li
                                key={i}
                                className="text-sm text-stock-text/80 flex items-start gap-2"
                              >
                                <span className="text-stock-green mt-1">▸</span>
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Technologies */}
                      {exp.technologies && exp.technologies.length > 0 && (
                        <div>
                          <div className="text-xs text-stock-text/40 mb-2 uppercase">
                            Technologies Used
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map(tech => (
                              <span
                                key={tech}
                                className="px-3 py-1 bg-stock-navy/50 text-stock-text/60 text-xs rounded-full font-mono"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Career Philosophy */}
        <section className="stock-border-top bg-stock-board py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-heading text-stock-cyan mb-8 text-center">
                Career Philosophy
              </h2>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-6 bg-stock-dark/50 border-l-4 border-stock-cyan text-center">
                  <div className="text-4xl mb-4">🎯</div>
                  <h3 className="text-lg font-heading text-stock-cyan mb-3">
                    Impact First
                  </h3>
                  <p className="text-sm text-stock-text/70">
                    I choose roles where I can make meaningful contributions and
                    solve real problems, not just collect paychecks.
                  </p>
                </div>

                <div className="p-6 bg-stock-dark/50 border-l-4 border-stock-green text-center">
                  <div className="text-4xl mb-4">📈</div>
                  <h3 className="text-lg font-heading text-stock-green mb-3">
                    Always Learning
                  </h3>
                  <p className="text-sm text-stock-text/70">
                    Every role is an opportunity to grow. I seek challenges that
                    push me beyond my comfort zone.
                  </p>
                </div>

                <div className="p-6 bg-stock-dark/50 border-l-4 border-stock-gold text-center">
                  <div className="text-4xl mb-4">🤝</div>
                  <h3 className="text-lg font-heading text-stock-gold mb-3">
                    Team Player
                  </h3>
                  <p className="text-sm text-stock-text/70">
                    Great products are built by great teams. I value collaboration,
                    mentorship, and knowledge sharing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center stock-border p-12 bg-gradient-to-br from-stock-cyan/10 to-transparent">
            <h2 className="text-3xl font-heading text-stock-cyan mb-4">
              Let's Work Together
            </h2>
            <p className="text-lg text-stock-text/80 mb-6">
              Looking for someone with my skills and experience? I'm open to new
              opportunities and exciting challenges.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/investor-relations"
                className="btn-primary"
              >
                Get In Touch
              </a>
              <a
                href="/downloads"
                className="px-6 py-3 border-2 border-stock-cyan text-stock-cyan font-bold rounded hover:bg-stock-cyan hover:text-stock-dark transition-all duration-200 hover:scale-105"
              >
                Download Resume
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
