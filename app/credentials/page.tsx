'use client'

/**
 * Credentials (Certifications) Page
 * Professional certifications and industry credentials
 * NEW DESIGN: Warmer Charcoal + Gold + Emerald + Platinum
 */

import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import ProgressBar from '@/components/layout/ProgressBar'
import CustomCursor from '@/components/layout/CustomCursor'
import GlassCard from '@/components/ui/GlassCard'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'
import { FiAward, FiExternalLink, FiDownload, FiCalendar, FiCheckCircle, FiClock } from 'react-icons/fi'
import Link from 'next/link'
import { staggerContainer, staggerItem, fadeIn } from '@/lib/animations'

// Sample certifications data (replace with actual data later)
const certifications = [
  {
    id: 1,
    credential_id: 'AWS-2024-SAA-C03-12345',
    title: 'AWS Certified Solutions Architect - Associate',
    issuing_organization: 'Amazon Web Services',
    category: 'Cloud Computing',
    issue_date: '2024-06-15',
    expiry_date: '2027-06-15',
    skills_gained: ['AWS', 'Cloud Architecture', 'EC2', 'S3', 'VPC', 'Lambda'],
    credential_url: 'https://aws.amazon.com/verification',
    certificate_file_url: '#',
  },
  {
    id: 2,
    credential_id: 'META-FE-DEV-2024-67890',
    title: 'Meta Front-End Developer Professional Certificate',
    issuing_organization: 'Meta (Facebook)',
    category: 'Web Development',
    issue_date: '2024-03-10',
    expiry_date: null, // Lifetime valid
    skills_gained: ['React', 'JavaScript', 'HTML/CSS', 'UI/UX', 'Git'],
    credential_url: 'https://www.coursera.org/verify',
    certificate_file_url: '#',
  },
  {
    id: 3,
    credential_id: 'CFA-LEVEL-1-2023-ABC123',
    title: 'CFA Level I Candidate',
    issuing_organization: 'CFA Institute',
    category: 'Finance',
    issue_date: '2023-12-05',
    expiry_date: null,
    skills_gained: ['Financial Analysis', 'Portfolio Management', 'Economics', 'Ethics'],
    credential_url: 'https://www.cfainstitute.org',
    certificate_file_url: '#',
  },
  {
    id: 4,
    credential_id: 'GCP-PCA-2024-XYZ789',
    title: 'Google Cloud Professional Cloud Architect',
    issuing_organization: 'Google Cloud',
    category: 'Cloud Computing',
    issue_date: '2024-01-20',
    expiry_date: '2026-01-20',
    skills_gained: ['GCP', 'Cloud Infrastructure', 'Kubernetes', 'BigQuery'],
    credential_url: 'https://www.credential.net',
    certificate_file_url: '#',
  },
  {
    id: 5,
    credential_id: 'SOLIDITY-DEV-2023-456DEF',
    title: 'Certified Solidity Developer',
    issuing_organization: 'Blockchain Council',
    category: 'Blockchain',
    issue_date: '2023-09-15',
    expiry_date: null,
    skills_gained: ['Solidity', 'Smart Contracts', 'Ethereum', 'Web3', 'DApps'],
    credential_url: 'https://www.blockchain-council.org',
    certificate_file_url: '#',
  },
  {
    id: 6,
    credential_id: 'TENSORFLOW-DEV-2024-789GHI',
    title: 'TensorFlow Developer Certificate',
    issuing_organization: 'Google Developers',
    category: 'AI/Machine Learning',
    issue_date: '2024-04-01',
    expiry_date: '2027-04-01',
    skills_gained: ['TensorFlow', 'Deep Learning', 'Neural Networks', 'Python', 'Keras'],
    credential_url: 'https://developers.google.com/certification',
    certificate_file_url: '#',
  },
]

export default function CredentialsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')

  // Get unique categories
  const categories = useMemo(() => {
    const cats = Array.from(new Set(certifications.map(c => c.category)))
    return ['all', ...cats]
  }, [])

  // Filter certifications
  const filteredCerts = useMemo(() => {
    return certifications.filter(
      cert => selectedCategory === 'all' || cert.category === selectedCategory
    )
  }, [selectedCategory])

  // Count lifetime valid certs
  const lifetimeValidCount = useMemo(() => {
    return certifications.filter(c => !c.expiry_date).length
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
              <FiAward className="inline mr-2" />
              Professional Credentials
            </Badge>

            <h1 className="text-h1 font-heading font-bold text-platinum-bright uppercase">
              Certifications & <span className="text-gold-bright">Credentials</span>
            </h1>

            <p className="text-lg text-platinum-muted max-w-2xl mx-auto">
              {certifications.length} industry-recognized certifications validating expertise across cloud computing, web development, finance, blockchain, and AI/ML.
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
                      {certifications.length}
                    </div>
                    <div className="text-xs text-platinum-dark uppercase">
                      Total Credentials
                    </div>
                  </GlassCard>
                </motion.div>

                <motion.div variants={staggerItem}>
                  <GlassCard variant="luxury" className="text-center">
                    <div className="text-4xl font-heading text-platinum-bright mb-2 font-mono font-black">
                      {categories.length - 1}
                    </div>
                    <div className="text-xs text-platinum-dark uppercase">
                      Categories
                    </div>
                  </GlassCard>
                </motion.div>

                <motion.div variants={staggerItem}>
                  <GlassCard variant="success" className="text-center">
                    <div className="text-4xl font-heading text-emerald-bright mb-2 font-mono font-black">
                      {lifetimeValidCount}
                    </div>
                    <div className="text-xs text-platinum-dark uppercase">
                      Lifetime Valid
                    </div>
                  </GlassCard>
                </motion.div>

                <motion.div variants={staggerItem}>
                  <GlassCard variant="success" className="text-center">
                    <div className="text-4xl font-heading text-emerald-bright mb-2 font-mono font-black">
                      100%
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

        {/* Filter Bar */}
        <section className="section-padding bg-bg-primary border-y border-glass-platinum">
          <div className="container-custom">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-wrap gap-3 mb-4">
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg font-mono text-sm uppercase transition-all ${
                      selectedCategory === category
                        ? 'bg-gold-main text-bg-primary border border-gold-bright'
                        : 'bg-glass-medium backdrop-blur-glass text-platinum-muted border border-glass-platinum hover:border-gold-main hover:text-gold-bright'
                    }`}
                  >
                    {category === 'all' ? 'All Credentials' : category}
                  </button>
                ))}
              </div>

              <div className="text-sm text-platinum-dark font-mono">
                Showing {filteredCerts.length} of {certifications.length} credentials
              </div>
            </div>
          </div>
        </section>

        {/* Certifications Grid */}
        <section className="section-padding bg-bg-secondary">
          <div className="container-custom">
            <div className="max-w-6xl mx-auto">
              <motion.div
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
              >
                {filteredCerts.map((cert) => (
                  <motion.div key={cert.id} variants={staggerItem}>
                    <GlassCard variant="luxury" hover className="h-full">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <Badge variant="tech">{cert.category}</Badge>
                          <h3 className="text-lg font-heading text-platinum-bright mt-2">
                            {cert.title}
                          </h3>
                        </div>
                        <FiCheckCircle className="text-emerald-bright text-2xl flex-shrink-0 ml-2" />
                      </div>

                      {/* Issuer */}
                      <div className="mb-4 pb-4 border-b border-glass-platinum">
                        <div className="text-sm font-bold text-platinum-main mb-2">
                          {cert.issuing_organization}
                        </div>
                        <div className="space-y-1">
                          <div className="flex items-center gap-2 text-xs text-platinum-muted">
                            <FiCalendar size={12} className="text-gold-bright" />
                            <span className="font-mono">
                              Issued {new Date(cert.issue_date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                            </span>
                          </div>
                          {cert.expiry_date ? (
                            <div className="flex items-center gap-2 text-xs text-platinum-dark">
                              <FiClock size={12} />
                              <span className="font-mono">
                                Expires {new Date(cert.expiry_date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                              </span>
                            </div>
                          ) : (
                            <div className="flex items-center gap-2 text-xs text-emerald-bright">
                              <FiCheckCircle size={12} />
                              <span className="font-mono">Lifetime Valid</span>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Skills */}
                      {cert.skills_gained && cert.skills_gained.length > 0 && (
                        <div className="mb-4">
                          <div className="text-xs text-platinum-dark mb-2 uppercase">
                            Skills Covered
                          </div>
                          <div className="flex flex-wrap gap-1.5">
                            {cert.skills_gained.slice(0, 4).map(skill => (
                              <Badge key={skill} variant="tech">{skill}</Badge>
                            ))}
                            {cert.skills_gained.length > 4 && (
                              <span className="px-2 py-1 text-gold-bright text-xs font-mono">
                                +{cert.skills_gained.length - 4}
                              </span>
                            )}
                          </div>
                        </div>
                      )}

                      {/* Credential ID */}
                      <div className="mb-4 p-3 bg-glass-subtle rounded">
                        <div className="text-xs text-platinum-dark mb-1 uppercase">
                          Credential ID
                        </div>
                        <div className="text-xs text-platinum-main font-mono break-all">
                          {cert.credential_id}
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex gap-2">
                        {cert.credential_url && (
                          <a
                            href={cert.credential_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1"
                          >
                            <Button variant="platinum" size="sm" className="w-full">
                              <FiExternalLink className="mr-2" size={14} />
                              Verify
                            </Button>
                          </a>
                        )}
                        {cert.certificate_file_url && (
                          <a
                            href={cert.certificate_file_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1"
                          >
                            <Button variant="gold" size="sm" className="w-full">
                              <FiDownload className="mr-2" size={14} />
                              View
                            </Button>
                          </a>
                        )}
                      </div>
                    </GlassCard>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-bg-primary">
          <div className="container-custom">
            <GlassCard variant="luxury" className="max-w-4xl mx-auto text-center">
              <div className="space-y-6 py-8">
                <div className="text-5xl">🏆</div>
                <h2 className="text-h2 font-heading text-platinum-bright">
                  Continuous Learning Journey
                </h2>
                <p className="text-lg text-platinum-muted max-w-2xl mx-auto">
                  These certifications represent my commitment to continuous learning and staying current with industry best practices across multiple domains.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                  <Link href="/downloads">
                    <Button variant="gold" size="lg">
                      <FiDownload className="mr-2" />
                      Download All Certificates
                    </Button>
                  </Link>
                  <Link href="/prospectus">
                    <Button variant="platinum" size="lg">
                      View Prospectus
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
