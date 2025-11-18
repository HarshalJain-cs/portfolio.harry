'use client'

/**
 * Downloads (Resume & Documents) Page
 * Download center for resumes, portfolios, and certifications
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
import { FiDownload, FiFile, FiFileText, FiAward, FiFolder, FiCalendar, FiCheckCircle, FiAlertCircle } from 'react-icons/fi'
import Link from 'next/link'
import { staggerContainer, staggerItem, fadeIn } from '@/lib/animations'

// Sample download categories data
const downloadCategories = [
  {
    id: 1,
    title: 'Resume & CV',
    description: 'Professional resume and curriculum vitae in multiple formats',
    icon: <FiFileText className="text-4xl text-gold-bright" />,
    items: [
      {
        name: 'Resume - Software Engineer',
        format: 'PDF',
        size: '245 KB',
        lastUpdated: '2025-01-15',
        downloadUrl: '#',
      },
      {
        name: 'Resume - Finance Analyst',
        format: 'PDF',
        size: '238 KB',
        lastUpdated: '2025-01-15',
        downloadUrl: '#',
      },
      {
        name: 'Full CV - Academic',
        format: 'PDF',
        size: '312 KB',
        lastUpdated: '2025-01-10',
        downloadUrl: '#',
      },
    ],
  },
  {
    id: 2,
    title: 'Portfolio Documents',
    description: 'Comprehensive portfolio showcasing all projects and achievements',
    icon: <FiFolder className="text-4xl text-platinum-bright" />,
    items: [
      {
        name: 'Complete Portfolio',
        format: 'PDF',
        size: '5.2 MB',
        lastUpdated: '2025-01-12',
        downloadUrl: '#',
      },
      {
        name: 'Project Showcase',
        format: 'PDF',
        size: '3.8 MB',
        lastUpdated: '2025-01-08',
        downloadUrl: '#',
      },
    ],
  },
  {
    id: 3,
    title: 'Certifications',
    description: 'All professional certifications and credentials',
    icon: <FiAward className="text-4xl text-emerald-bright" />,
    items: [
      {
        name: 'All Certificates (Zip)',
        format: 'ZIP',
        size: '12.5 MB',
        lastUpdated: '2025-01-10',
        downloadUrl: '#',
      },
      {
        name: 'Technical Certifications',
        format: 'PDF',
        size: '4.2 MB',
        lastUpdated: '2025-01-10',
        downloadUrl: '#',
      },
      {
        name: 'Finance Certifications',
        format: 'PDF',
        size: '2.8 MB',
        lastUpdated: '2025-01-10',
        downloadUrl: '#',
      },
    ],
  },
  {
    id: 4,
    title: 'Research Papers',
    description: 'Published research papers and academic publications',
    icon: <FiFile className="text-4xl text-gold-bright" />,
    items: [
      {
        name: 'Blockchain & Financial Systems',
        format: 'PDF',
        size: '1.8 MB',
        lastUpdated: '2024-11-20',
        downloadUrl: '#',
      },
      {
        name: 'ML in Market Prediction',
        format: 'PDF',
        size: '2.1 MB',
        lastUpdated: '2024-09-15',
        downloadUrl: '#',
      },
    ],
  },
]

export default function DownloadsPage() {
  // Calculate total files
  const totalFiles = useMemo(() => {
    return downloadCategories.reduce((acc, cat) => acc + cat.items.length, 0)
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
              <FiDownload className="inline mr-2 mb-1" />
              Download Center
            </Badge>

            <h1 className="text-h1 font-heading font-bold text-platinum-bright uppercase">
              Resources & <span className="text-gold-bright">Documents</span>
            </h1>

            <p className="text-lg text-platinum-muted max-w-2xl mx-auto">
              Download resumes, portfolios, certifications, and research papers. All documents are up-to-date and available in PDF format.
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
                      {totalFiles}
                    </div>
                    <div className="text-xs text-platinum-dark uppercase">
                      Total Files
                    </div>
                  </GlassCard>
                </motion.div>

                <motion.div variants={staggerItem}>
                  <GlassCard variant="luxury" className="text-center">
                    <div className="text-4xl font-heading text-platinum-bright mb-2 font-mono font-black">
                      {downloadCategories.length}
                    </div>
                    <div className="text-xs text-platinum-dark uppercase">
                      Categories
                    </div>
                  </GlassCard>
                </motion.div>

                <motion.div variants={staggerItem}>
                  <GlassCard variant="success" className="text-center">
                    <div className="text-4xl font-heading text-emerald-bright mb-2 font-mono font-black">
                      100%
                    </div>
                    <div className="text-xs text-platinum-dark uppercase">
                      Up-to-Date
                    </div>
                  </GlassCard>
                </motion.div>

                <motion.div variants={staggerItem}>
                  <GlassCard variant="success" className="text-center">
                    <div className="text-4xl font-heading text-emerald-bright mb-2 font-mono font-black">
                      FREE
                    </div>
                    <div className="text-xs text-platinum-dark uppercase">
                      All Downloads
                    </div>
                  </GlassCard>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Download Categories */}
        <section className="section-padding bg-bg-primary">
          <div className="container-custom">
            <div className="max-w-6xl mx-auto space-y-12">
              {downloadCategories.map((category, categoryIndex) => (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                >
                  {/* Category Header */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className="flex-shrink-0">
                      {category.icon}
                    </div>
                    <div className="flex-1">
                      <h2 className="text-h3 font-heading text-platinum-bright mb-2 gold-underline inline-block">
                        {category.title}
                      </h2>
                      <p className="text-sm text-platinum-muted">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  {/* Files Grid */}
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {category.items.map((item, itemIndex) => (
                      <GlassCard key={itemIndex} variant="luxury" hover className="group">
                        {/* File Info */}
                        <div className="mb-4">
                          <h3 className="text-lg font-heading text-platinum-bright mb-2 group-hover:text-gold-bright transition-colors">
                            {item.name}
                          </h3>
                          <div className="flex items-center gap-3 text-xs">
                            <Badge variant="tech">{item.format}</Badge>
                            <span className="text-platinum-dark">{item.size}</span>
                          </div>
                        </div>

                        {/* Metadata */}
                        <div className="mb-4 pb-4 border-b border-glass-platinum">
                          <div className="flex items-center gap-2 text-xs text-platinum-muted">
                            <FiCalendar size={12} className="text-gold-bright" />
                            <span className="font-mono">
                              Updated {new Date(item.lastUpdated).toLocaleDateString('en-US', {
                                month: 'short',
                                day: 'numeric',
                                year: 'numeric',
                              })}
                            </span>
                          </div>
                        </div>

                        {/* Download Button */}
                        <a
                          href={item.downloadUrl}
                          download
                          className="block"
                        >
                          <Button variant="gold" size="sm" className="w-full">
                            <FiDownload className="mr-2" size={18} />
                            Download {item.format}
                          </Button>
                        </a>
                      </GlassCard>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Usage Guidelines */}
        <section className="section-padding bg-bg-secondary">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-h2 font-heading text-platinum-bright mb-12 text-center">
                Usage Guidelines
              </h2>

              <motion.div
                className="grid md:grid-cols-2 gap-6 mb-8"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
              >
                <motion.div variants={staggerItem}>
                  <GlassCard variant="success" className="h-full border-l-4 border-emerald-main">
                    <div className="flex items-center gap-2 mb-4">
                      <FiCheckCircle className="text-emerald-bright text-xl" />
                      <h3 className="text-lg font-heading text-emerald-bright">
                        Allowed Uses
                      </h3>
                    </div>
                    <ul className="space-y-2 text-sm text-platinum-muted">
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-bright mt-1">▸</span>
                        <span>Job applications and recruitment</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-bright mt-1">▸</span>
                        <span>Academic references and citations</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-bright mt-1">▸</span>
                        <span>Portfolio reviews and assessments</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-bright mt-1">▸</span>
                        <span>Verification of credentials</span>
                      </li>
                    </ul>
                  </GlassCard>
                </motion.div>

                <motion.div variants={staggerItem}>
                  <GlassCard variant="data" className="h-full border-l-4 border-platinum-dark">
                    <div className="flex items-center gap-2 mb-4">
                      <FiAlertCircle className="text-platinum-muted text-xl" />
                      <h3 className="text-lg font-heading text-platinum-main">
                        Prohibited Uses
                      </h3>
                    </div>
                    <ul className="space-y-2 text-sm text-platinum-muted">
                      <li className="flex items-start gap-2">
                        <span className="text-platinum-dark mt-1">✕</span>
                        <span>Commercial redistribution</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-platinum-dark mt-1">✕</span>
                        <span>Plagiarism or claiming as your own</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-platinum-dark mt-1">✕</span>
                        <span>Unauthorized modifications</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-platinum-dark mt-1">✕</span>
                        <span>Resale or monetization</span>
                      </li>
                    </ul>
                  </GlassCard>
                </motion.div>
              </motion.div>

              <GlassCard variant="data" className="text-center">
                <p className="text-sm text-platinum-muted mb-4">
                  All documents are provided for informational purposes. For collaborations, job opportunities, or custom requests, please get in touch.
                </p>
                <Link href="/investor-relations">
                  <Button variant="platinum" size="lg">
                    Contact Me
                  </Button>
                </Link>
              </GlassCard>
            </div>
          </div>
        </section>

        {/* CTA - Custom Document */}
        <section className="section-padding bg-bg-primary">
          <div className="container-custom">
            <GlassCard variant="luxury" className="max-w-4xl mx-auto text-center">
              <div className="space-y-6 py-8">
                <div className="text-5xl">📄</div>
                <h2 className="text-h2 font-heading text-platinum-bright">
                  Need a Custom Document?
                </h2>
                <p className="text-lg text-platinum-muted max-w-2xl mx-auto">
                  Looking for a tailored resume, project showcase, or specific certification bundle? I can prepare custom documents for your needs.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                  <Link href="/investor-relations">
                    <Button variant="gold" size="lg">
                      Request Custom Document
                    </Button>
                  </Link>
                  <Link href="/prospectus">
                    <Button variant="platinum" size="lg">
                      View Full Prospectus
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
