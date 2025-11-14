/**
 * Credentials & Securities (Certifications) Page
 * Showcases all certifications and credentials
 */

'use client'

import { useState } from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import StockTicker from '@/components/layout/StockTicker'
import { certifications } from '@/lib/data'
import { FiAward, FiExternalLink, FiDownload, FiCalendar, FiCheckCircle } from 'react-icons/fi'

export default function CredentialsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')

  // Get unique categories
  const categories = ['all', ...new Set(certifications.map(c => c.category))]

  // Filter certifications
  const filteredCerts = certifications.filter(
    cert => selectedCategory === 'all' || cert.category === selectedCategory
  )

  // Get category color
  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      technical: 'stock-cyan',
      finance: 'stock-gold',
      business: 'stock-green',
      'cloud-computing': 'text-purple-400',
      blockchain: 'text-orange-400',
    }
    return colors[category] || 'stock-cyan'
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <StockTicker />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="stock-border-bottom bg-gradient-to-br from-stock-gold/10 to-transparent py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-4">
              <div className="inline-block px-4 py-2 bg-stock-gold/10 border border-stock-gold/30 rounded-full text-stock-gold text-sm font-mono uppercase tracking-wider mb-2">
                <FiAward className="inline mr-2 mb-1" />
                Credentials & Securities
              </div>

              <h1 className="text-4xl md:text-5xl font-heading text-stock-gold font-black">
                Professional Certifications
              </h1>

              <p className="text-lg text-stock-text/80 max-w-2xl mx-auto">
                A collection of {certifications.length} industry-recognized
                certifications validating expertise across technology, finance,
                and business domains.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Overview */}
        <section className="bg-stock-board py-8">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-stock-dark/50 border border-stock-navy">
                <div className="text-3xl font-heading text-stock-gold mb-1 font-black">
                  {certifications.length}
                </div>
                <div className="text-xs text-stock-text/60 uppercase">
                  Total Certifications
                </div>
              </div>
              <div className="text-center p-4 bg-stock-dark/50 border border-stock-navy">
                <div className="text-3xl font-heading text-stock-cyan mb-1 font-black">
                  {categories.length - 1}
                </div>
                <div className="text-xs text-stock-text/60 uppercase">
                  Categories
                </div>
              </div>
              <div className="text-center p-4 bg-stock-dark/50 border border-stock-navy">
                <div className="text-3xl font-heading text-stock-green mb-1 font-black">
                  {certifications.filter(c => !c.expiry_date).length}
                </div>
                <div className="text-xs text-stock-text/60 uppercase">
                  Lifetime Valid
                </div>
              </div>
              <div className="text-center p-4 bg-stock-dark/50 border border-stock-navy">
                <div className="text-3xl font-heading text-stock-gold mb-1 font-black">
                  100%
                </div>
                <div className="text-xs text-stock-text/60 uppercase">
                  Verified
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Filter Bar */}
        <section className="container mx-auto px-4 py-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap gap-3">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded font-mono text-sm uppercase transition-all ${
                    selectedCategory === category
                      ? 'bg-stock-gold text-stock-dark'
                      : 'bg-stock-navy/50 text-stock-text/60 hover:bg-stock-navy hover:text-stock-gold'
                  }`}
                >
                  {category === 'all' ? 'All Credentials' : category}
                </button>
              ))}
            </div>

            <div className="mt-4 text-sm text-stock-text/60 font-mono">
              Showing {filteredCerts.length} of {certifications.length}{' '}
              credentials
            </div>
          </div>
        </section>

        {/* Certifications Grid */}
        <section className="container mx-auto px-4 pb-16">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCerts.map(cert => (
              <div
                key={cert.credential_id}
                className="stock-card hover-lift group"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div
                      className={`text-xs font-mono uppercase mb-2 text-${getCategoryColor(
                        cert.category
                      )}`}
                    >
                      {cert.category}
                    </div>
                    <h3 className="text-lg font-heading text-stock-cyan group-hover:text-stock-gold transition-colors">
                      {cert.name}
                    </h3>
                  </div>
                  <FiCheckCircle className="text-stock-green text-2xl flex-shrink-0 ml-2" />
                </div>

                {/* Issuer */}
                <div className="mb-4 pb-4 border-b border-stock-navy/50">
                  <div className="text-sm font-bold text-stock-text/90 mb-1">
                    {cert.issuing_organization}
                  </div>
                  <div className="flex items-center gap-2 text-xs text-stock-text/60">
                    <FiCalendar size={12} />
                    <span>Issued {new Date(cert.issue_date).toLocaleDateString()}</span>
                  </div>
                  {cert.expiry_date && (
                    <div className="text-xs text-stock-text/40 mt-1">
                      Expires {new Date(cert.expiry_date).toLocaleDateString()}
                    </div>
                  )}
                </div>

                {/* Skills */}
                {cert.skills_covered && cert.skills_covered.length > 0 && (
                  <div className="mb-4">
                    <div className="text-xs text-stock-text/40 mb-2 uppercase">
                      Skills Covered
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {cert.skills_covered.slice(0, 4).map(skill => (
                        <span
                          key={skill}
                          className="px-2 py-1 bg-stock-navy/50 text-stock-text/60 text-xs rounded font-mono"
                        >
                          {skill}
                        </span>
                      ))}
                      {cert.skills_covered.length > 4 && (
                        <span className="px-2 py-1 text-stock-cyan text-xs font-mono">
                          +{cert.skills_covered.length - 4}
                        </span>
                      )}
                    </div>
                  </div>
                )}

                {/* Credential ID */}
                <div className="mb-4 p-2 bg-stock-dark/50 rounded">
                  <div className="text-xs text-stock-text/40 mb-1">
                    Credential ID
                  </div>
                  <div className="text-xs text-stock-cyan font-mono break-all">
                    {cert.credential_id}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                  {cert.verification_url && (
                    <a
                      href={cert.verification_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-3 py-2 bg-stock-navy/50 hover:bg-stock-navy text-stock-cyan text-sm rounded transition-colors flex items-center justify-center gap-2 font-mono"
                    >
                      <FiExternalLink size={14} />
                      Verify
                    </a>
                  )}
                  {cert.certificate_url && (
                    <a
                      href={cert.certificate_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-3 py-2 bg-stock-gold/20 hover:bg-stock-gold/30 text-stock-gold text-sm rounded transition-colors flex items-center justify-center gap-2 font-mono"
                    >
                      <FiDownload size={14} />
                      View
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="stock-border-top bg-gradient-to-br from-stock-gold/10 to-transparent py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-heading text-stock-gold mb-4">
                Continuous Learning Journey
              </h2>
              <p className="text-lg text-stock-text/80 mb-6">
                These certifications represent my commitment to continuous
                learning and staying current with industry best practices.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="/downloads"
                  className="btn-primary inline-flex items-center gap-2"
                >
                  <FiDownload />
                  Download All Certificates
                </a>
                <a
                  href="/prospectus"
                  className="px-6 py-3 border-2 border-stock-cyan text-stock-cyan font-bold rounded hover:bg-stock-cyan hover:text-stock-dark transition-all duration-200 hover:scale-105"
                >
                  View Prospectus
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
