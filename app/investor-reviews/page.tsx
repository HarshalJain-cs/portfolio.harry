'use client'

/**
 * Investor Reviews (Testimonials) Page
 * Client and colleague testimonials and recommendations
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
import { FiStar, FiLinkedin, FiCheckCircle } from 'react-icons/fi'
import Link from 'next/link'
import { staggerContainer, staggerItem, fadeIn } from '@/lib/animations'

// Sample testimonials data
const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    designation: 'Senior Product Manager',
    organization: 'TechCorp Solutions',
    relationship: 'Former Colleague',
    rating: 5,
    testimonial_text: 'Working with this developer was an absolute pleasure. Their technical expertise, combined with excellent communication skills, made our project a huge success. They consistently delivered high-quality code ahead of schedule.',
    linkedin_url: 'https://linkedin.com',
    is_featured: true,
    date: '2024-11-10',
  },
  {
    id: 2,
    name: 'Michael Chen',
    designation: 'CTO',
    organization: 'StartupXYZ',
    relationship: 'Client',
    rating: 5,
    testimonial_text: 'Exceptional full-stack developer who transformed our MVP into a production-ready application. Strong problem-solving skills and deep understanding of modern web technologies. Highly recommended!',
    linkedin_url: 'https://linkedin.com',
    is_featured: true,
    date: '2024-10-25',
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    designation: 'Lead Developer',
    organization: 'FinTech Innovations',
    relationship: 'Team Lead',
    rating: 5,
    testimonial_text: 'One of the most talented developers I\'ve had the privilege to work with. Their ability to tackle complex financial algorithms while maintaining clean, maintainable code is impressive.',
    linkedin_url: 'https://linkedin.com',
    is_featured: true,
    date: '2024-10-15',
  },
  {
    id: 4,
    name: 'David Park',
    designation: 'Founder & CEO',
    organization: 'Digital Ventures',
    relationship: 'Client',
    rating: 5,
    testimonial_text: 'Built our entire platform from scratch with incredible attention to detail. Not only a skilled developer but also a great collaborator who understands business needs.',
    linkedin_url: 'https://linkedin.com',
    is_featured: true,
    date: '2024-09-30',
  },
  {
    id: 5,
    name: 'Jennifer Williams',
    designation: 'Engineering Manager',
    organization: 'CloudTech Inc',
    relationship: 'Former Manager',
    rating: 5,
    testimonial_text: 'A self-motivated professional who takes ownership of their work. Excellent at mentoring junior developers and always willing to go the extra mile to ensure project success.',
    linkedin_url: 'https://linkedin.com',
    is_featured: true,
    date: '2024-09-12',
  },
  {
    id: 6,
    name: 'Alex Thompson',
    designation: 'Full-Stack Developer',
    organization: 'Startup Labs',
    relationship: 'Mentee',
    rating: 5,
    testimonial_text: 'As a junior developer, I learned so much from their mentorship. They have a gift for explaining complex concepts in simple terms and always made time to help me grow.',
    linkedin_url: 'https://linkedin.com',
    is_featured: false,
    date: '2024-08-20',
  },
]

export default function InvestorReviewsPage() {
  // Calculate average rating
  const averageRating = useMemo(() => {
    const total = testimonials.reduce((sum, t) => sum + t.rating, 0)
    return (total / testimonials.length).toFixed(1)
  }, [])

  // Count unique relationships
  const uniqueRelationships = useMemo(() => {
    return new Set(testimonials.map(t => t.relationship)).size
  }, [])

  // Count verified testimonials
  const verifiedCount = useMemo(() => {
    return testimonials.filter(t => t.is_featured).length
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
              <FiStar className="inline mr-2 mb-1" />
              Investor Reviews
            </Badge>

            <h1 className="text-h1 font-heading font-bold text-platinum-bright uppercase">
              Client <span className="text-gold-bright">Testimonials</span>
            </h1>

            <p className="text-lg text-platinum-muted max-w-2xl mx-auto">
              What colleagues, clients, and collaborators say about working with me. {testimonials.length} reviews from professionals across various industries.
            </p>
          </motion.div>
        </section>

        {/* Rating Overview */}
        <section className="section-padding bg-bg-secondary">
          <div className="container-custom">
            <div className="max-w-6xl mx-auto">
              <motion.div
                className="grid md:grid-cols-2 gap-8"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
              >
                {/* Average Rating */}
                <motion.div variants={staggerItem}>
                  <GlassCard variant="luxury" className="text-center border-2 border-gold-main">
                    <div className="text-6xl font-heading text-gold-bright mb-2 font-black">
                      {averageRating}
                    </div>
                    <div className="flex items-center justify-center gap-1 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <FiStar
                          key={i}
                          className="text-gold-bright fill-gold-bright"
                          size={24}
                        />
                      ))}
                    </div>
                    <div className="text-sm text-platinum-dark uppercase font-mono">
                      Average Rating
                    </div>
                  </GlassCard>
                </motion.div>

                {/* Stats Grid */}
                <motion.div variants={staggerItem} className="grid grid-cols-2 gap-4">
                  <GlassCard variant="luxury" className="text-center">
                    <div className="text-3xl font-heading text-platinum-bright mb-1 font-mono font-black">
                      {testimonials.length}
                    </div>
                    <div className="text-xs text-platinum-dark uppercase">
                      Total Reviews
                    </div>
                  </GlassCard>

                  <GlassCard variant="success" className="text-center">
                    <div className="text-3xl font-heading text-emerald-bright mb-1 font-mono font-black">
                      100%
                    </div>
                    <div className="text-xs text-platinum-dark uppercase">
                      Recommend
                    </div>
                  </GlassCard>

                  <GlassCard variant="luxury" className="text-center">
                    <div className="text-3xl font-heading text-gold-bright mb-1 font-mono font-black">
                      {uniqueRelationships}
                    </div>
                    <div className="text-xs text-platinum-dark uppercase">
                      Relationships
                    </div>
                  </GlassCard>

                  <GlassCard variant="success" className="text-center">
                    <div className="text-3xl font-heading text-emerald-bright mb-1 font-mono font-black">
                      {verifiedCount}
                    </div>
                    <div className="text-xs text-platinum-dark uppercase">
                      Verified
                    </div>
                  </GlassCard>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Testimonials Grid */}
        <section className="section-padding bg-bg-primary">
          <div className="container-custom">
            <div className="max-w-6xl mx-auto">
              <motion.div
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
              >
                {testimonials.map((testimonial) => (
                  <motion.div key={testimonial.id} variants={staggerItem}>
                    <GlassCard variant="luxury" hover className="h-full flex flex-col">
                      {/* Quote Icon */}
                      <div className="mb-4">
                        <div className="text-4xl text-gold-bright/30 font-serif">"</div>
                      </div>

                      {/* Rating */}
                      <div className="flex items-center gap-1 mb-4">
                        {[...Array(5)].map((_, i) => (
                          <FiStar
                            key={i}
                            className={`${
                              i < testimonial.rating
                                ? 'text-gold-bright fill-gold-bright'
                                : 'text-platinum-dark'
                            }`}
                            size={16}
                          />
                        ))}
                      </div>

                      {/* Testimonial Text */}
                      <p className="text-sm text-platinum-main mb-6 leading-relaxed flex-1 italic">
                        "{testimonial.testimonial_text}"
                      </p>

                      {/* Author Info */}
                      <div className="pt-4 border-t border-glass-platinum">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <h4 className="font-heading text-platinum-bright">
                                {testimonial.name}
                              </h4>
                              {testimonial.is_featured && (
                                <FiCheckCircle className="text-emerald-bright" size={14} title="Verified" />
                              )}
                            </div>
                            <div className="text-xs text-platinum-muted mb-1">
                              {testimonial.designation}
                            </div>
                            {testimonial.organization && (
                              <div className="text-xs text-gold-bright">
                                {testimonial.organization}
                              </div>
                            )}
                            <Badge variant="tech" className="mt-2">{testimonial.relationship}</Badge>
                          </div>

                          {testimonial.linkedin_url && (
                            <a
                              href={testimonial.linkedin_url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-gold-bright hover:text-gold-main transition-colors"
                              aria-label="LinkedIn Profile"
                            >
                              <FiLinkedin size={20} />
                            </a>
                          )}
                        </div>
                      </div>
                    </GlassCard>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Add Your Review Section */}
        <section className="section-padding bg-bg-secondary">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-h2 font-heading text-platinum-bright mb-6 text-center">
                Worked With Me?
              </h2>
              <p className="text-lg text-platinum-muted mb-12 text-center">
                If you've collaborated with me on a project or worked together professionally, I'd love to hear your feedback.
              </p>

              <motion.div
                className="grid md:grid-cols-3 gap-6 mb-8"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
              >
                <motion.div variants={staggerItem}>
                  <GlassCard variant="success" hover className="text-center border-l-4 border-emerald-main h-full">
                    <div className="text-4xl mb-3">💼</div>
                    <h3 className="text-lg font-heading text-emerald-bright mb-2">
                      Professional
                    </h3>
                    <p className="text-sm text-platinum-muted">
                      Colleagues and team members I've worked with professionally
                    </p>
                  </GlassCard>
                </motion.div>

                <motion.div variants={staggerItem}>
                  <GlassCard variant="luxury" hover className="text-center border-l-4 border-gold-main h-full">
                    <div className="text-4xl mb-3">🤝</div>
                    <h3 className="text-lg font-heading text-gold-bright mb-2">
                      Clients
                    </h3>
                    <p className="text-sm text-platinum-muted">
                      Clients for whom I've delivered projects and solutions
                    </p>
                  </GlassCard>
                </motion.div>

                <motion.div variants={staggerItem}>
                  <GlassCard variant="luxury" hover className="text-center border-l-4 border-platinum-main h-full">
                    <div className="text-4xl mb-3">🎓</div>
                    <h3 className="text-lg font-heading text-platinum-bright mb-2">
                      Mentees
                    </h3>
                    <p className="text-sm text-platinum-muted">
                      Students and professionals I've mentored or collaborated with
                    </p>
                  </GlassCard>
                </motion.div>
              </motion.div>

              <div className="text-center">
                <Link href="/investor-relations">
                  <Button variant="gold" size="lg">
                    <FiStar className="mr-2" />
                    Share Your Feedback
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-bg-primary">
          <div className="container-custom">
            <GlassCard variant="luxury" className="max-w-4xl mx-auto text-center">
              <div className="space-y-6 py-8">
                <div className="text-5xl">🤝</div>
                <h2 className="text-h2 font-heading text-platinum-bright">
                  Let's Create Success Together
                </h2>
                <p className="text-lg text-platinum-muted max-w-2xl mx-auto">
                  Ready to start a project or explore collaboration opportunities? Let's discuss how we can work together.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                  <Link href="/investor-relations">
                    <Button variant="gold" size="lg">
                      Get In Touch
                    </Button>
                  </Link>
                  <Link href="/ventures/tech-assets">
                    <Button variant="platinum" size="lg">
                      View My Work
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
