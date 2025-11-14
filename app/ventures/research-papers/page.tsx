/**
 * Research Papers Page
 * Academic research and publications
 */

import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import StockTicker from '@/components/layout/StockTicker'
import { researchPapers } from '@/lib/data'
import { FiFileText, FiExternalLink, FiDownload, FiUsers, FiCalendar } from 'react-icons/fi'
import Link from 'next/link'

export default function ResearchPapersPage() {
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
                <FiFileText className="inline mr-2 mb-1" />
                Research Publications
              </div>

              <h1 className="text-4xl md:text-5xl font-heading text-stock-gold font-black">
                Academic Research
              </h1>

              <p className="text-lg text-stock-text/80 max-w-2xl mx-auto">
                Original research papers exploring the intersection of technology,
                finance, and innovation. {researchPapers.length} publications
                contributing to academic discourse.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Overview */}
        <section className="bg-stock-board py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-6 bg-stock-dark/50 border border-stock-navy">
                <div className="text-4xl font-heading text-stock-cyan mb-2 font-black">
                  {researchPapers.length}
                </div>
                <div className="text-xs text-stock-text/60 uppercase">
                  Publications
                </div>
              </div>
              <div className="text-center p-6 bg-stock-dark/50 border border-stock-navy">
                <div className="text-4xl font-heading text-stock-green mb-2 font-black">
                  {new Set(researchPapers.flatMap(p => p.coauthors || [])).size + researchPapers.length}
                </div>
                <div className="text-xs text-stock-text/60 uppercase">
                  Collaborators
                </div>
              </div>
              <div className="text-center p-6 bg-stock-dark/50 border border-stock-navy">
                <div className="text-4xl font-heading text-stock-gold mb-2 font-black">
                  {new Set(researchPapers.map(p => p.category).filter(Boolean)).size}
                </div>
                <div className="text-xs text-stock-text/60 uppercase">
                  Research Fields
                </div>
              </div>
              <div className="text-center p-6 bg-stock-dark/50 border border-stock-navy">
                <div className="text-4xl font-heading text-stock-cyan mb-2 font-black">
                  {researchPapers.reduce((sum, p) => sum + (p.citation_count || 0), 0)}
                </div>
                <div className="text-xs text-stock-text/60 uppercase">
                  Citations
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Research Papers */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto space-y-8">
            {researchPapers.map((paper, index) => (
              <div
                key={index}
                className="stock-card hover-lift"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    {paper.category && (
                      <div className="inline-block px-3 py-1 rounded mb-3 text-xs font-mono uppercase bg-stock-cyan/20 text-stock-cyan border border-stock-cyan/50">
                        {paper.category}
                      </div>
                    )}
                    <h2 className="text-2xl md:text-3xl font-heading text-stock-cyan mb-3">
                      {paper.title}
                    </h2>
                    {paper.publication_date && (
                      <div className="text-sm text-stock-text/60">
                        {new Date(paper.publication_date).getFullYear()}
                      </div>
                    )}
                  </div>
                  <FiFileText className="text-4xl text-stock-gold/40 flex-shrink-0 ml-4" />
                </div>

                {/* Authors */}
                <div className="mb-4 pb-4 border-b border-stock-navy/50">
                  <div className="flex items-center gap-2 mb-2">
                    <FiUsers className="text-stock-cyan" />
                    <span className="text-sm font-mono text-stock-text/80">Authors</span>
                  </div>
                  <div className="text-sm text-stock-text/90">
                    <span className="font-bold text-stock-gold">Harshal Jain</span>
                    {paper.coauthors && paper.coauthors.length > 0 && (
                      <>
                        {', '}
                        {paper.coauthors.join(', ')}
                      </>
                    )}
                  </div>
                </div>

                {/* Abstract */}
                <div className="mb-6">
                  <h3 className="text-sm font-mono text-stock-cyan mb-3 uppercase">
                    Abstract
                  </h3>
                  <p className="text-sm text-stock-text/80 leading-relaxed">
                    {paper.abstract}
                  </p>
                </div>

                {/* Metadata */}
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  {paper.publication_date && (
                    <div>
                      <div className="text-xs text-stock-text/40 mb-1 uppercase">
                        Publication Date
                      </div>
                      <div className="text-sm text-stock-text/80 flex items-center gap-2">
                        <FiCalendar size={14} className="text-stock-cyan" />
                        {new Date(paper.publication_date).toLocaleDateString('en-US', {
                          month: 'long',
                          day: 'numeric',
                          year: 'numeric',
                        })}
                      </div>
                    </div>
                  )}
                  {paper.doi && (
                    <div>
                      <div className="text-xs text-stock-text/40 mb-1 uppercase">
                        DOI
                      </div>
                      <div className="text-sm text-stock-cyan font-mono break-all">
                        {paper.doi}
                      </div>
                    </div>
                  )}
                  {paper.citation_count !== undefined && (
                    <div>
                      <div className="text-xs text-stock-text/40 mb-1 uppercase">
                        Citations
                      </div>
                      <div className="text-sm text-stock-gold font-mono">
                        {paper.citation_count} citations
                      </div>
                    </div>
                  )}
                </div>

                {/* Keywords */}
                {paper.keywords && paper.keywords.length > 0 && (
                  <div className="mb-6">
                    <div className="text-xs text-stock-text/40 mb-2 uppercase">
                      Keywords
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {paper.keywords.map(keyword => (
                        <span
                          key={keyword}
                          className="px-3 py-1 bg-stock-navy/50 text-stock-text/60 text-xs rounded-full font-mono"
                        >
                          {keyword}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Actions */}
                <div className="flex gap-3">
                  {paper.paper_url && (
                    <a
                      href={paper.paper_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-3 bg-stock-cyan/20 hover:bg-stock-cyan/30 text-stock-cyan text-sm rounded transition-colors flex items-center justify-center gap-2 font-mono font-bold"
                    >
                      <FiExternalLink size={16} />
                      Read Full Paper
                    </a>
                  )}
                  {paper.pdf_url && (
                    <a
                      href={paper.pdf_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-3 bg-stock-gold/20 hover:bg-stock-gold/30 text-stock-gold text-sm rounded transition-colors flex items-center justify-center gap-2 font-mono"
                    >
                      <FiDownload size={16} />
                      PDF
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="stock-border-top bg-gradient-to-br from-stock-cyan/10 to-transparent py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-heading text-stock-cyan mb-4">
                Interested in Collaboration?
              </h2>
              <p className="text-lg text-stock-text/80 mb-6">
                I'm open to research collaborations, paper reviews, and academic
                discussions. Let's push the boundaries of knowledge together.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/investor-relations" className="btn-primary">
                  Get In Touch
                </Link>
                <Link
                  href="/ventures/tech-assets"
                  className="px-6 py-3 border-2 border-stock-cyan text-stock-cyan font-bold rounded hover:bg-stock-cyan hover:text-stock-dark transition-all duration-200 hover:scale-105"
                >
                  View Tech Projects
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
