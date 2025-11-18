'use client'

/**
 * Community Dividends (Volunteering) Page
 * Community contributions and open source work
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
import { FiHeart, FiUsers, FiCalendar, FiMapPin, FiGithub } from 'react-icons/fi'
import Link from 'next/link'
import { staggerContainer, staggerItem, fadeIn } from '@/lib/animations'

// Sample community contributions
const contributions = [
  {
    id: 1,
    organization: 'Code for Good Initiative',
    role: 'Volunteer Developer',
    description: 'Built and maintained web applications for non-profit organizations, helping them digitize their operations and reach more people.',
    start_date: '2023-01-01',
    end_date: null,
    hours_contributed: 120,
    location: 'Remote',
    impact: 'Helped 3 NGOs build their digital presence, reaching 10,000+ beneficiaries',
  },
  {
    id: 2,
    organization: 'Open Source Community',
    role: 'Contributor',
    description: 'Active contributor to various open source projects on GitHub, including libraries for React, Node.js, and blockchain development.',
    start_date: '2022-06-01',
    end_date: null,
    hours_contributed: 200,
    location: 'Online',
    impact: '50+ pull requests merged, 15+ issues resolved across multiple repositories',
  },
  {
    id: 3,
    organization: 'Tech Mentorship Program',
    role: 'Mentor',
    description: 'Mentoring aspiring developers through one-on-one sessions, code reviews, and career guidance.',
    start_date: '2022-03-01',
    end_date: null,
    hours_contributed: 80,
    location: 'Remote',
    impact: 'Mentored 12 junior developers, 8 of whom secured their first tech jobs',
  },
]

export default function CommunityDividendsPage() {
  // Calculate total hours
  const totalHours = useMemo(() => {
    return contributions.reduce((sum, c) => sum + c.hours_contributed, 0)
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
              <FiHeart className="inline mr-2 mb-1" />
              Community Dividends
            </Badge>

            <h1 className="text-h1 font-heading font-bold text-platinum-bright uppercase">
              Giving <span className="text-gold-bright">Back</span>
            </h1>

            <p className="text-lg text-platinum-muted max-w-2xl mx-auto">
              Community contributions, open source work, and volunteering. Using technology to create positive impact and help others grow.
            </p>
          </motion.div>
        </section>

        {/* Stats */}
        <section className="section-padding bg-bg-secondary">
          <div className="container-custom">
            <div className="max-w-6xl mx-auto">
              <motion.div
                className="grid grid-cols-2 md:grid-cols-3 gap-4"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
              >
                <motion.div variants={staggerItem}>
                  <GlassCard variant="success" className="text-center border-2 border-emerald-main">
                    <div className="text-4xl font-heading text-emerald-bright mb-2 font-mono font-black">
                      {totalHours}+
                    </div>
                    <div className="text-xs text-platinum-dark uppercase">
                      Hours Contributed
                    </div>
                  </GlassCard>
                </motion.div>

                <motion.div variants={staggerItem}>
                  <GlassCard variant="luxury" className="text-center">
                    <div className="text-4xl font-heading text-gold-bright mb-2 font-mono font-black">
                      {contributions.length}
                    </div>
                    <div className="text-xs text-platinum-dark uppercase">
                      Organizations
                    </div>
                  </GlassCard>
                </motion.div>

                <motion.div variants={staggerItem}>
                  <GlassCard variant="success" className="text-center">
                    <div className="text-4xl font-heading text-emerald-bright mb-2 font-mono font-black">
                      20+
                    </div>
                    <div className="text-xs text-platinum-dark uppercase">
                      Lives Impacted
                    </div>
                  </GlassCard>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contributions List */}
        <section className="section-padding bg-bg-primary">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-h2 font-heading text-platinum-bright mb-12 text-center">
                Community Involvement
              </h2>

              <motion.div
                className="space-y-6"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
              >
                {contributions.map((contrib) => (
                  <motion.div key={contrib.id} variants={staggerItem}>
                    <GlassCard variant="luxury" hover>
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="text-xl font-heading text-platinum-bright">
                              {contrib.role}
                            </h3>
                            {!contrib.end_date && (
                              <Badge variant="live">ACTIVE</Badge>
                            )}
                          </div>
                          <div className="text-lg text-gold-bright mb-2">
                            {contrib.organization}
                          </div>
                        </div>
                        <FiHeart className="text-emerald-bright text-2xl" />
                      </div>

                      <p className="text-sm text-platinum-main mb-6 leading-relaxed">
                        {contrib.description}
                      </p>

                      <div className="grid md:grid-cols-2 gap-4 mb-4 pb-4 border-b border-glass-platinum">
                        <div className="flex items-center gap-2 text-sm text-platinum-muted">
                          <FiCalendar className="text-gold-bright" />
                          <span>
                            {new Date(contrib.start_date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })} - {contrib.end_date ? new Date(contrib.end_date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' }) : 'Present'}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-platinum-muted">
                          <FiMapPin className="text-gold-bright" />
                          <span>{contrib.location}</span>
                        </div>
                      </div>

                      <div className="p-4 bg-emerald-main/5 border-l-4 border-emerald-main rounded mb-4">
                        <div className="text-xs text-emerald-bright mb-2 uppercase font-mono">
                          Impact
                        </div>
                        <p className="text-sm text-platinum-main">
                          {contrib.impact}
                        </p>
                      </div>

                      <div className="flex items-center gap-4">
                        <Badge variant="achievement">
                          {contrib.hours_contributed}+ hours
                        </Badge>
                      </div>
                    </GlassCard>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-bg-secondary">
          <div className="container-custom">
            <GlassCard variant="luxury" className="max-w-4xl mx-auto text-center">
              <div className="space-y-6 py-8">
                <FiUsers className="text-gold-bright text-5xl mx-auto" />
                <h2 className="text-h2 font-heading text-platinum-bright">
                  Open Source Contributions
                </h2>
                <p className="text-lg text-platinum-muted max-w-2xl mx-auto">
                  Check out my open source work and contributions on GitHub.
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
