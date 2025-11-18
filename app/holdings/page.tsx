'use client'

/**
 * Holdings (Skills) Page
 * Comprehensive skill portfolio with asset allocation breakdown
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
import MetricCard from '@/components/ui/MetricCard'
import { FiTarget, FiCode, FiDatabase, FiCloud, FiLayers, FiCpu, FiDollarSign, FiTrendingUp } from 'react-icons/fi'
import { staggerContainer, staggerItem, fadeIn } from '@/lib/animations'

// Sample skills data (replace with actual data later)
const skills = [
  // Frontend
  { name: 'React', category: 'Frontend', proficiency: 5, icon: '⚛️', years: 3 },
  { name: 'Next.js', category: 'Frontend', proficiency: 5, icon: '▲', years: 2 },
  { name: 'TypeScript', category: 'Frontend', proficiency: 5, icon: '💙', years: 3 },
  { name: 'Tailwind CSS', category: 'Frontend', proficiency: 5, icon: '🎨', years: 2 },
  { name: 'Framer Motion', category: 'Frontend', proficiency: 4, icon: '✨', years: 1 },
  { name: 'Redux', category: 'Frontend', proficiency: 4, icon: '🔄', years: 2 },

  // Backend
  { name: 'Node.js', category: 'Backend', proficiency: 5, icon: '🟢', years: 3 },
  { name: 'Python', category: 'Backend', proficiency: 4, icon: '🐍', years: 2 },
  { name: 'PostgreSQL', category: 'Backend', proficiency: 4, icon: '🐘', years: 2 },
  { name: 'MongoDB', category: 'Backend', proficiency: 4, icon: '🍃', years: 2 },
  { name: 'REST APIs', category: 'Backend', proficiency: 5, icon: '🔌', years: 3 },
  { name: 'GraphQL', category: 'Backend', proficiency: 3, icon: '◈', years: 1 },

  // Cloud & DevOps
  { name: 'AWS', category: 'Cloud', proficiency: 3, icon: '☁️', years: 1 },
  { name: 'Docker', category: 'Cloud', proficiency: 4, icon: '🐳', years: 2 },
  { name: 'Git', category: 'Cloud', proficiency: 5, icon: '📚', years: 3 },
  { name: 'CI/CD', category: 'Cloud', proficiency: 3, icon: '🔄', years: 1 },

  // Blockchain
  { name: 'Solidity', category: 'Blockchain', proficiency: 3, icon: '⬢', years: 1 },
  { name: 'Web3.js', category: 'Blockchain', proficiency: 3, icon: '🌐', years: 1 },
  { name: 'Smart Contracts', category: 'Blockchain', proficiency: 3, icon: '📝', years: 1 },

  // AI/ML
  { name: 'OpenAI API', category: 'AI', proficiency: 4, icon: '🤖', years: 1 },
  { name: 'Claude AI', category: 'AI', proficiency: 4, icon: '🧠', years: 1 },
  { name: 'TensorFlow', category: 'AI', proficiency: 2, icon: '🔮', years: 1 },

  // Finance
  { name: 'Trading Strategies', category: 'Finance', proficiency: 4, icon: '📈', years: 2 },
  { name: 'Financial Modeling', category: 'Finance', proficiency: 4, icon: '💹', years: 2 },
  { name: 'DeFi Protocols', category: 'Finance', proficiency: 3, icon: '💰', years: 1 },
  { name: 'Risk Analysis', category: 'Finance', proficiency: 4, icon: '⚖️', years: 2 },
]

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

  // Calculate category stats
  const categoryStats = useMemo(() => {
    const total = skills.length
    return Object.entries(skillsByCategory).map(([category, categorySkills]) => ({
      category,
      count: categorySkills.length,
      percentage: Math.round((categorySkills.length / total) * 100),
      avgProficiency: (categorySkills.reduce((sum, s) => sum + s.proficiency, 0) / categorySkills.length).toFixed(1),
    }))
  }, [skillsByCategory])

  // Get top skills
  const topSkills = useMemo(() => {
    return [...skills].sort((a, b) => b.proficiency - a.proficiency).slice(0, 8)
  }, [])

  // Category icons and colors
  const categoryMeta: Record<string, { icon: React.ReactNode; color: string }> = {
    Frontend: { icon: <FiCode />, color: 'gold' },
    Backend: { icon: <FiDatabase />, color: 'emerald' },
    Cloud: { icon: <FiCloud />, color: 'platinum' },
    Blockchain: { icon: <FiLayers />, color: 'gold' },
    AI: { icon: <FiCpu />, color: 'emerald' },
    Finance: { icon: <FiDollarSign />, color: 'gold' },
  }

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
              <FiTarget className="inline mr-2" />
              Holdings Portfolio
            </Badge>

            <h1 className="text-h1 font-heading font-bold text-platinum-bright uppercase">
              Technical <span className="text-gold-bright">Holdings</span>
            </h1>

            <p className="text-lg text-platinum-muted max-w-2xl mx-auto">
              A diversified portfolio of {skills.length} technical skills across {Object.keys(skillsByCategory).length} major categories. Built through years of learning, practice, and real-world application.
            </p>
          </motion.div>
        </section>

        {/* Asset Allocation */}
        <section className="section-padding bg-bg-secondary">
          <div className="container-custom">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-h2 font-heading text-platinum-bright mb-12 text-center">
                Asset Allocation
              </h2>

              <motion.div
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
              >
                {categoryStats.map((stat, index) => (
                  <motion.div key={stat.category} variants={staggerItem}>
                    <GlassCard variant="luxury" hover className="text-center h-full">
                      <div className="text-gold-bright text-2xl mb-2">
                        {categoryMeta[stat.category]?.icon}
                      </div>
                      <div className="text-3xl font-heading text-gold-bright mb-2 font-black font-mono">
                        {stat.percentage}%
                      </div>
                      <div className="text-sm text-platinum-main font-medium mb-1">
                        {stat.category}
                      </div>
                      <div className="text-xs text-platinum-dark">
                        {stat.count} skills
                      </div>
                      <div className="mt-2 pt-2 border-t border-glass-platinum">
                        <div className="text-xs text-platinum-dark mb-1">Avg Proficiency</div>
                        <div className="flex justify-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <div
                              key={i}
                              className={`w-1.5 h-1.5 rounded-full ${
                                i < parseFloat(stat.avgProficiency)
                                  ? 'bg-emerald-bright'
                                  : 'bg-platinum-dark'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    </GlassCard>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Top Skills */}
        <section className="section-padding bg-bg-primary">
          <div className="container-custom">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-h2 font-heading text-platinum-bright mb-12 text-center">
                Top Holdings
              </h2>

              <motion.div
                className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
              >
                {topSkills.map((skill, index) => (
                  <motion.div key={skill.name} variants={staggerItem}>
                    <GlassCard variant="luxury" hover className="h-full">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-3xl">{skill.icon}</span>
                        <Badge variant="achievement">TOP {index + 1}</Badge>
                      </div>
                      <h3 className="text-xl font-heading text-platinum-bright mb-2">
                        {skill.name}
                      </h3>
                      <div className="text-sm text-platinum-muted mb-3">
                        {skill.category}
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-platinum-dark">Proficiency</span>
                          <span className="text-emerald-bright font-mono font-bold">
                            {skill.proficiency}/5
                          </span>
                        </div>
                        <div className="flex gap-1">
                          {[...Array(5)].map((_, i) => (
                            <div
                              key={i}
                              className={`flex-1 h-2 rounded-full ${
                                i < skill.proficiency
                                  ? 'bg-emerald-bright'
                                  : 'bg-platinum-dark/30'
                              }`}
                            />
                          ))}
                        </div>
                        <div className="text-xs text-platinum-dark pt-2 border-t border-glass-platinum">
                          {skill.years} {skill.years === 1 ? 'year' : 'years'} experience
                        </div>
                      </div>
                    </GlassCard>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Skills by Category */}
        <section className="section-padding bg-bg-secondary">
          <div className="container-custom">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-h2 font-heading text-platinum-bright mb-12 text-center">
                Complete Holdings Breakdown
              </h2>

              <div className="space-y-12">
                {Object.entries(skillsByCategory).map(([category, categorySkills]) => (
                  <motion.div
                    key={category}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <div className="text-gold-bright text-3xl">
                        {categoryMeta[category]?.icon}
                      </div>
                      <h3 className="text-h3 font-heading text-platinum-bright gold-underline inline-block">
                        {category}
                      </h3>
                      <Badge variant="tech">
                        {categorySkills.length} skills
                      </Badge>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {categorySkills.map((skill) => (
                        <GlassCard key={skill.name} variant="data" hover>
                          <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center gap-3">
                              <span className="text-2xl">{skill.icon}</span>
                              <div>
                                <div className="font-heading text-platinum-bright">
                                  {skill.name}
                                </div>
                                <div className="text-xs text-platinum-dark">
                                  {skill.years}yr{skill.years !== 1 && 's'}
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex gap-1">
                            {[...Array(5)].map((_, i) => (
                              <div
                                key={i}
                                className={`flex-1 h-1.5 rounded-full ${
                                  i < skill.proficiency
                                    ? 'bg-emerald-bright'
                                    : 'bg-platinum-dark/30'
                                }`}
                              />
                            ))}
                          </div>
                        </GlassCard>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Stats Summary */}
        <section className="section-padding bg-bg-primary">
          <div className="container-custom">
            <GlassCard variant="luxury" className="max-w-4xl mx-auto">
              <div className="text-center space-y-6 py-8">
                <FiTrendingUp className="text-gold-bright text-5xl mx-auto" />
                <h2 className="text-h2 font-heading text-platinum-bright">
                  Continuous Growth Portfolio
                </h2>
                <p className="text-lg text-platinum-muted max-w-2xl mx-auto">
                  This portfolio represents an ongoing investment in learning and mastery. Every skill is actively maintained and expanded through real-world projects and continuous learning.
                </p>
                <div className="grid grid-cols-3 gap-6 pt-6">
                  <div>
                    <div className="text-3xl font-heading text-emerald-bright font-mono mb-2">
                      {skills.length}+
                    </div>
                    <div className="text-sm text-platinum-dark">Total Skills</div>
                  </div>
                  <div>
                    <div className="text-3xl font-heading text-gold-bright font-mono mb-2">
                      {Object.keys(skillsByCategory).length}
                    </div>
                    <div className="text-sm text-platinum-dark">Categories</div>
                  </div>
                  <div>
                    <div className="text-3xl font-heading text-platinum-bright font-mono mb-2">
                      {topSkills.filter(s => s.proficiency === 5).length}
                    </div>
                    <div className="text-sm text-platinum-dark">Expert Level</div>
                  </div>
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
