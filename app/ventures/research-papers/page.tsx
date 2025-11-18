'use client'

/**
 * Research Papers Page
 * Academic publications and research work
 * NEW DESIGN: Warmer Charcoal + Gold + Emerald + Platinum
 */

import { motion } from 'framer-motion'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import ProgressBar from '@/components/layout/ProgressBar'
import CustomCursor from '@/components/layout/CustomCursor'
import GlassCard from '@/components/ui/GlassCard'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'
import { FiFileText, FiDownload, FiExternalLink, FiBookOpen } from 'react-icons/fi'
import Link from 'next/link'
import { staggerContainer, staggerItem, fadeIn } from '@/lib/animations'

// Sample research papers
const researchPapers = [
  {
    id: 1,
    title: 'Blockchain Integration in Modern Financial Systems: A Comprehensive Analysis',
    authors: ['Harshal Jain', 'Dr. Smith'],
    publication: 'Journal of Financial Technology',
    year: 2024,
    abstract: 'This paper explores the integration of blockchain technology in traditional financial systems, analyzing benefits, challenges, and future implications for global finance.',
    keywords: ['Blockchain', 'DeFi', 'Financial Systems', 'Smart Contracts'],
    pdf_url: '#',
    doi: '10.1000/example.2024.001',
  },
  {
    id: 2,
    title: 'Machine Learning Approaches to Market Prediction: A Comparative Study',
    authors: ['Harshal Jain'],
    publication: 'International Conference on AI & Finance',
    year: 2023,
    abstract: 'Comparative analysis of various machine learning algorithms for stock market prediction, including LSTM, Random Forest, and Transformer models.',
    keywords: ['Machine Learning', 'Market Prediction', 'LSTM', 'Trading'],
    pdf_url: '#',
    doi: '10.1000/example.2023.042',
  },
  {
    id: 3,
    title: 'Scalability Solutions for Ethereum: Layer 2 Protocols and Beyond',
    authors: ['Harshal Jain', 'Prof. Johnson'],
    publication: 'Blockchain Research Quarterly',
    year: 2023,
    abstract: 'An in-depth examination of Layer 2 scaling solutions for Ethereum, including rollups, sidechains, and state channels, with performance benchmarks.',
    keywords: ['Ethereum', 'Scalability', 'Layer 2', 'Rollups'],
    pdf_url: '#',
    doi: '10.1000/example.2023.028',
  },
]

export default function ResearchPapersPage() {
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
              <FiFileText className="inline mr-2" />
              Research Papers
            </Badge>

            <h1 className="text-h1 font-heading font-bold text-platinum-bright uppercase">
              Academic <span className="text-gold-bright">Publications</span>
            </h1>

            <p className="text-lg text-platinum-muted max-w-2xl mx-auto">
              Published research papers and academic publications on blockchain, AI/ML, finance, and distributed systems.
            </p>
          </motion.div>
        </section>

        {/* Papers List */}
        <section className="section-padding bg-bg-secondary">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <motion.div
                className="space-y-6"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
              >
                {researchPapers.map((paper) => (
                  <motion.div key={paper.id} variants={staggerItem}>
                    <GlassCard variant="luxury" hover>
                      <div className="flex items-start justify-between mb-4">
                        <Badge variant="achievement">{paper.year}</Badge>
                        <FiFileText className="text-gold-bright text-2xl" />
                      </div>

                      <h3 className="text-xl font-heading text-platinum-bright mb-3">
                        {paper.title}
                      </h3>

                      <div className="text-sm text-platinum-muted mb-2">
                        <span className="font-bold">Authors:</span> {paper.authors.join(', ')}
                      </div>

                      <div className="text-sm text-gold-bright mb-4 italic">
                        {paper.publication}
                      </div>

                      <p className="text-sm text-platinum-main mb-6 leading-relaxed">
                        {paper.abstract}
                      </p>

                      <div className="mb-4 pb-4 border-b border-glass-platinum">
                        <div className="text-xs text-platinum-dark mb-2 uppercase">
                          Keywords
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {paper.keywords.map(keyword => (
                            <Badge key={keyword} variant="tech">{keyword}</Badge>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="text-xs text-platinum-dark font-mono">
                          DOI: {paper.doi}
                        </div>

                        <div className="flex gap-2">
                          <a href={paper.pdf_url} download>
                            <Button variant="platinum" size="sm">
                              <FiDownload className="mr-2" size={14} />
                              PDF
                            </Button>
                          </a>
                          <a href={`https://doi.org/${paper.doi}`} target="_blank" rel="noopener noreferrer">
                            <Button variant="gold" size="sm">
                              <FiExternalLink className="mr-2" size={14} />
                              View
                            </Button>
                          </a>
                        </div>
                      </div>
                    </GlassCard>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-bg-primary">
          <div className="container-custom">
            <GlassCard variant="luxury" className="max-w-4xl mx-auto text-center">
              <div className="space-y-6 py-8">
                <FiBookOpen className="text-gold-bright text-5xl mx-auto" />
                <h2 className="text-h2 font-heading text-platinum-bright">
                  Research Collaboration
                </h2>
                <p className="text-lg text-platinum-muted max-w-2xl mx-auto">
                  Interested in collaborating on research or have questions about my publications? Let's connect.
                </p>
                <div className="pt-4">
                  <Link href="/investor-relations">
                    <Button variant="gold" size="lg">
                      Get In Touch
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
