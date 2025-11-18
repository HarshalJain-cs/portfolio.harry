'use client'

/**
 * Trading History (Experience) Page
 * Professional career timeline with achievements and technologies
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
import { FiBriefcase, FiCalendar, FiMapPin, FiTrendingUp, FiCode, FiAward } from 'react-icons/fi'
import Link from 'next/link'
import { staggerContainer, staggerItem, fadeIn } from '@/lib/animations'

// Sample experience data (replace with actual data later)
const experiences = [
  {
    id: 1,
    position_title: 'Senior Full-Stack Developer',
    company_name: 'FinTech Innovations Inc.',
    employment_type: 'Full-time',
    location: 'Remote, India',
    start_date: '2023-01',
    end_date: null, // Current position
    description: 'Leading development of a comprehensive financial analytics platform serving 10K+ users. Architecting scalable microservices and implementing real-time data processing systems.',
    achievements: [
      'Reduced API response times by 60% through optimization and caching strategies',
      'Led migration from monolith to microservices architecture (Node.js + Docker)',
      'Mentored 3 junior developers and established code review best practices',
      'Implemented CI/CD pipeline reducing deployment time from 2 hours to 15 minutes',
    ],
    skills_used: ['Next.js', 'TypeScript', 'PostgreSQL', 'Redis', 'Docker', 'AWS', 'GraphQL'],
  },
  {
    id: 2,
    position_title: 'Full-Stack Developer',
    company_name: 'StartupXYZ',
    employment_type: 'Full-time',
    location: 'Bangalore, India',
    start_date: '2021-06',
    end_date: '2022-12',
    description: 'Built and shipped multiple web applications from 0 to 1. Worked directly with founders to define product requirements and deliver MVPs in fast-paced startup environment.',
    achievements: [
      'Shipped 3 production applications serving 5K+ combined active users',
      'Integrated payment systems (Stripe, Razorpay) processing $50K+ monthly',
      'Reduced bundle size by 40% through code splitting and lazy loading',
      'Implemented real-time collaboration features using WebSockets',
    ],
    skills_used: ['React', 'Node.js', 'MongoDB', 'Express', 'TailwindCSS', 'Socket.io'],
  },
  {
    id: 3,
    position_title: 'Frontend Developer',
    company_name: 'Digital Solutions Ltd.',
    employment_type: 'Full-time',
    location: 'Mumbai, India',
    start_date: '2020-01',
    end_date: '2021-05',
    description: 'Developed responsive web interfaces for enterprise clients. Collaborated with design teams to implement pixel-perfect UIs and ensure cross-browser compatibility.',
    achievements: [
      'Built component library used across 8 different client projects',
      'Improved lighthouse performance scores from 65 to 95 average',
      'Implemented accessibility features achieving WCAG 2.1 AA compliance',
      'Trained team on modern React patterns and TypeScript best practices',
    ],
    skills_used: ['React', 'JavaScript', 'SASS', 'Webpack', 'Jest', 'Figma'],
  },
  {
    id: 4,
    position_title: 'Software Development Intern',
    company_name: 'Tech Innovators',
    employment_type: 'Internship',
    location: 'Delhi, India',
    start_date: '2019-05',
    end_date: '2019-12',
    description: 'Summer internship focused on web development and database design. Worked on internal tools and dashboards while learning industry best practices.',
    achievements: [
      'Developed employee attendance tracking system used by 200+ employees',
      'Automated reporting workflows saving 10+ hours of manual work weekly',
      'Contributed to company blog with technical articles on React and Node.js',
    ],
    skills_used: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL', 'Bootstrap'],
  },
]

export default function TradingHistoryPage() {
  // Sort experiences by start date (most recent first)
  const sortedExperiences = useMemo(() => {
    return [...experiences].sort((a, b) => {
      const dateA = new Date(a.start_date)
      const dateB = new Date(b.start_date)
      return dateB.getTime() - dateA.getTime()
    })
  }, [])

  // Calculate total years of experience
  const totalYears = useMemo(() => {
    const firstJob = experiences[experiences.length - 1]
    const startYear = parseInt(firstJob.start_date.split('-')[0])
    const currentYear = new Date().getFullYear()
    return currentYear - startYear
  }, [])

  // Count current positions
  const currentPositions = experiences.filter(e => !e.end_date).length

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
              <FiBriefcase className="inline mr-2" />
              Trading History
            </Badge>

            <h1 className="text-h1 font-heading font-bold text-platinum-bright uppercase">
              Career <span className="text-gold-bright">Timeline</span>
            </h1>

            <p className="text-lg text-platinum-muted max-w-2xl mx-auto">
              {totalYears}+ years of professional experience building scalable web applications, leading teams, and delivering impactful solutions. Every role has been an opportunity to learn, grow, and create value.
            </p>
          </motion.div>
        </section>

        {/* Stats */}
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
                  <GlassCard variant="luxury" className="text-center">
                    <div className="text-4xl font-heading text-gold-bright mb-2 font-mono font-black">
                      {totalYears}+
                    </div>
                    <div className="text-xs text-platinum-dark uppercase">
                      Years Experience
                    </div>
                  </GlassCard>
                </motion.div>

                <motion.div variants={staggerItem}>
                  <GlassCard variant="luxury" className="text-center">
                    <div className="text-4xl font-heading text-emerald-bright mb-2 font-mono font-black">
                      {experiences.length}
                    </div>
                    <div className="text-xs text-platinum-dark uppercase">
                      Positions
                    </div>
                  </GlassCard>
                </motion.div>

                <motion.div variants={staggerItem}>
                  <GlassCard variant="luxury" className="text-center">
                    <div className="text-4xl font-heading text-platinum-bright mb-2 font-mono font-black">
                      {new Set(experiences.map(e => e.company_name)).size}
                    </div>
                    <div className="text-xs text-platinum-dark uppercase">
                      Companies
                    </div>
                  </GlassCard>
                </motion.div>

                <motion.div variants={staggerItem}>
                  <GlassCard variant="success" className="text-center">
                    <div className="text-4xl font-heading text-emerald-bright mb-2 font-mono font-black">
                      {currentPositions}
                    </div>
                    <div className="text-xs text-platinum-dark uppercase">
                      Current Role
                    </div>
                  </GlassCard>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="section-padding bg-bg-primary">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-h2 font-heading text-platinum-bright mb-12 text-center">
                Professional Journey
              </h2>

              <div className="relative">
                {/* Timeline Line (Desktop) */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gold-main/30 hidden md:block"></div>

                {/* Timeline Items */}
                <div className="space-y-12">
                  {sortedExperiences.map((exp, index) => (
                    <motion.div
                      key={exp.id}
                      className="relative"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.1 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      {/* Timeline Dot */}
                      <div className="absolute left-6 w-5 h-5 bg-gold-bright rounded-full border-4 border-bg-primary hidden md:block z-10"></div>

                      {/* Content Card */}
                      <div className="md:ml-20">
                        <GlassCard variant="luxury" hover>
                          {/* Header */}
                          <div className="flex items-start justify-between mb-4">
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-2 flex-wrap">
                                <h3 className="text-2xl font-heading text-platinum-bright">
                                  {exp.position_title}
                                </h3>
                                {!exp.end_date && (
                                  <Badge variant="live">CURRENT</Badge>
                                )}
                              </div>
                              <div className="text-lg text-gold-bright mb-3 font-heading">
                                {exp.company_name}
                              </div>
                              <div className="flex flex-wrap items-center gap-3 text-sm text-platinum-muted">
                                <Badge variant="tech">{exp.employment_type}</Badge>
                                {exp.location && (
                                  <div className="flex items-center gap-1">
                                    <FiMapPin size={14} className="text-gold-bright" />
                                    {exp.location}
                                  </div>
                                )}
                              </div>
                            </div>
                            <FiBriefcase className="text-4xl text-gold-bright/40 flex-shrink-0 ml-4" />
                          </div>

                          {/* Duration */}
                          <div className="flex items-center gap-2 mb-4 text-sm text-platinum-muted pb-4 border-b border-glass-platinum">
                            <FiCalendar className="text-gold-bright" />
                            <span className="font-mono">
                              {new Date(exp.start_date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })} - {exp.end_date ? new Date(exp.end_date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' }) : 'Present'}
                            </span>
                          </div>

                          {/* Description */}
                          <p className="text-sm text-platinum-main mb-6 leading-relaxed">
                            {exp.description}
                          </p>

                          {/* Key Achievements */}
                          {exp.achievements && exp.achievements.length > 0 && (
                            <div className="mb-6 p-4 bg-emerald-main/5 border-l-4 border-emerald-main rounded">
                              <h4 className="text-sm font-mono text-emerald-bright mb-3 uppercase flex items-center gap-2">
                                <FiTrendingUp size={16} />
                                Key Achievements
                              </h4>
                              <ul className="space-y-2">
                                {exp.achievements.map((achievement, i) => (
                                  <li
                                    key={i}
                                    className="text-sm text-platinum-main flex items-start gap-2"
                                  >
                                    <span className="text-emerald-bright mt-1">▸</span>
                                    <span>{achievement}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {/* Technologies */}
                          {exp.skills_used && exp.skills_used.length > 0 && (
                            <div>
                              <div className="flex items-center gap-2 text-xs text-platinum-dark mb-3 uppercase">
                                <FiCode size={14} />
                                Technologies Used
                              </div>
                              <div className="flex flex-wrap gap-2">
                                {exp.skills_used.map(tech => (
                                  <Badge key={tech} variant="tech">{tech}</Badge>
                                ))}
                              </div>
                            </div>
                          )}
                        </GlassCard>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Career Philosophy */}
        <section className="section-padding bg-bg-secondary">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-h2 font-heading text-platinum-bright mb-12 text-center">
                Career Philosophy
              </h2>

              <motion.div
                className="grid md:grid-cols-3 gap-6"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
              >
                <motion.div variants={staggerItem}>
                  <GlassCard variant="luxury" hover className="h-full text-center border-l-4 border-gold-main">
                    <div className="text-4xl mb-4">🎯</div>
                    <h3 className="text-lg font-heading text-gold-bright mb-3">
                      Impact First
                    </h3>
                    <p className="text-sm text-platinum-muted">
                      I choose roles where I can make meaningful contributions and solve real problems, not just collect paychecks.
                    </p>
                  </GlassCard>
                </motion.div>

                <motion.div variants={staggerItem}>
                  <GlassCard variant="success" hover className="h-full text-center border-l-4 border-emerald-main">
                    <div className="text-4xl mb-4">📈</div>
                    <h3 className="text-lg font-heading text-emerald-bright mb-3">
                      Always Learning
                    </h3>
                    <p className="text-sm text-platinum-muted">
                      Every role is an opportunity to grow. I seek challenges that push me beyond my comfort zone.
                    </p>
                  </GlassCard>
                </motion.div>

                <motion.div variants={staggerItem}>
                  <GlassCard variant="luxury" hover className="h-full text-center border-l-4 border-platinum-main">
                    <div className="text-4xl mb-4">🤝</div>
                    <h3 className="text-lg font-heading text-platinum-bright mb-3">
                      Team Player
                    </h3>
                    <p className="text-sm text-platinum-muted">
                      Great products are built by great teams. I value collaboration, mentorship, and knowledge sharing.
                    </p>
                  </GlassCard>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-bg-primary">
          <div className="container-custom">
            <GlassCard variant="luxury" className="max-w-4xl mx-auto text-center">
              <div className="space-y-6 py-8">
                <FiAward className="text-gold-bright text-5xl mx-auto" />
                <h2 className="text-h2 font-heading text-platinum-bright">
                  Let's Work Together
                </h2>
                <p className="text-lg text-platinum-muted max-w-2xl mx-auto">
                  Looking for someone with my skills and experience? I'm open to new opportunities and exciting challenges.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                  <Link href="/investor-relations">
                    <Button variant="gold" size="lg">
                      Get In Touch
                    </Button>
                  </Link>
                  <Link href="/downloads">
                    <Button variant="platinum" size="lg">
                      Download Resume
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
