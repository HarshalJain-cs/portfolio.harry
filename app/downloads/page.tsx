/**
 * Download Center Page
 * Centralized location for downloading resumes, portfolios, certificates
 */

import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import StockTicker from '@/components/layout/StockTicker'
import { FiDownload, FiFile, FiFileText, FiAward, FiFolder } from 'react-icons/fi'

export default function DownloadsPage() {
  const downloadCategories = [
    {
      title: 'Resume & CV',
      description: 'Professional resume and curriculum vitae in multiple formats',
      icon: <FiFileText className="text-4xl text-stock-cyan" />,
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
      title: 'Portfolio Documents',
      description: 'Comprehensive portfolio showcasing all projects and achievements',
      icon: <FiFolder className="text-4xl text-stock-gold" />,
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
      title: 'Certifications',
      description: 'All professional certifications and credentials',
      icon: <FiAward className="text-4xl text-stock-green" />,
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
      title: 'Research Papers',
      description: 'Published research papers and academic publications',
      icon: <FiFile className="text-4xl text-stock-cyan" />,
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
                <FiDownload className="inline mr-2 mb-1" />
                Download Center
              </div>

              <h1 className="text-4xl md:text-5xl font-heading text-stock-gold font-black">
                Resources & Documents
              </h1>

              <p className="text-lg text-stock-text/80 max-w-2xl mx-auto">
                Download resumes, portfolios, certifications, and research papers.
                All documents are up-to-date and available in PDF format.
              </p>
            </div>
          </div>
        </section>

        {/* Quick Stats */}
        <section className="bg-stock-board py-8">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-stock-dark/50 border border-stock-navy">
                <div className="text-3xl font-heading text-stock-cyan mb-1 font-black">
                  {downloadCategories.reduce((acc, cat) => acc + cat.items.length, 0)}
                </div>
                <div className="text-xs text-stock-text/60 uppercase">
                  Total Files
                </div>
              </div>
              <div className="text-center p-4 bg-stock-dark/50 border border-stock-navy">
                <div className="text-3xl font-heading text-stock-gold mb-1 font-black">
                  {downloadCategories.length}
                </div>
                <div className="text-xs text-stock-text/60 uppercase">
                  Categories
                </div>
              </div>
              <div className="text-center p-4 bg-stock-dark/50 border border-stock-navy">
                <div className="text-3xl font-heading text-stock-green mb-1 font-black">
                  100%
                </div>
                <div className="text-xs text-stock-text/60 uppercase">
                  Up-to-Date
                </div>
              </div>
              <div className="text-center p-4 bg-stock-dark/50 border border-stock-navy">
                <div className="text-3xl font-heading text-stock-cyan mb-1 font-black">
                  FREE
                </div>
                <div className="text-xs text-stock-text/60 uppercase">
                  All Downloads
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Download Categories */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto space-y-12">
            {downloadCategories.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                {/* Category Header */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0">
                    {category.icon}
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-heading text-stock-cyan mb-2">
                      {category.title}
                    </h2>
                    <p className="text-sm text-stock-text/70">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Files Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {category.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="stock-card hover-lift group"
                    >
                      {/* File Info */}
                      <div className="mb-4">
                        <h3 className="text-lg font-heading text-stock-cyan mb-2 group-hover:text-stock-gold transition-colors">
                          {item.name}
                        </h3>
                        <div className="flex items-center gap-3 text-xs text-stock-text/60">
                          <span className="px-2 py-1 bg-stock-navy/50 rounded font-mono">
                            {item.format}
                          </span>
                          <span>{item.size}</span>
                        </div>
                      </div>

                      {/* Metadata */}
                      <div className="mb-4 pb-4 border-b border-stock-navy/50">
                        <div className="text-xs text-stock-text/40">
                          Last Updated
                        </div>
                        <div className="text-sm text-stock-text/80 font-mono">
                          {new Date(item.lastUpdated).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric',
                          })}
                        </div>
                      </div>

                      {/* Download Button */}
                      <a
                        href={item.downloadUrl}
                        download
                        className="w-full px-4 py-3 bg-stock-cyan/20 hover:bg-stock-cyan hover:text-stock-dark text-stock-cyan font-bold rounded transition-all duration-200 flex items-center justify-center gap-2 group-hover:scale-105"
                      >
                        <FiDownload size={18} />
                        Download {item.format}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Usage Guidelines */}
        <section className="stock-border-top bg-stock-board py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-heading text-stock-cyan mb-8 text-center">
                Usage Guidelines
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 bg-stock-dark/50 border-l-4 border-stock-green">
                  <h3 className="text-lg font-heading text-stock-green mb-3">
                    ✓ Allowed Uses
                  </h3>
                  <ul className="space-y-2 text-sm text-stock-text/70">
                    <li>• Job applications and recruitment</li>
                    <li>• Academic references and citations</li>
                    <li>• Portfolio reviews and assessments</li>
                    <li>• Verification of credentials</li>
                  </ul>
                </div>

                <div className="p-6 bg-stock-dark/50 border-l-4 border-stock-red">
                  <h3 className="text-lg font-heading text-stock-red mb-3">
                    ✕ Prohibited Uses
                  </h3>
                  <ul className="space-y-2 text-sm text-stock-text/70">
                    <li>• Commercial redistribution</li>
                    <li>• Plagiarism or claiming as your own</li>
                    <li>• Unauthorized modifications</li>
                    <li>• Resale or monetization</li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 p-6 bg-stock-navy/30 rounded text-center">
                <p className="text-sm text-stock-text/70 mb-4">
                  All documents are provided for informational purposes. For
                  collaborations, job opportunities, or custom requests, please
                  get in touch.
                </p>
                <a
                  href="/investor-relations"
                  className="btn-primary inline-flex items-center gap-2"
                >
                  Contact Me
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Need Something Custom? */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center stock-border p-12 bg-gradient-to-br from-stock-cyan/10 to-transparent">
            <h2 className="text-3xl font-heading text-stock-cyan mb-4">
              Need a Custom Document?
            </h2>
            <p className="text-lg text-stock-text/80 mb-6">
              Looking for a tailored resume, project showcase, or specific
              certification bundle? I can prepare custom documents for your needs.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/investor-relations"
                className="btn-primary"
              >
                Request Custom Document
              </a>
              <a
                href="/prospectus"
                className="px-6 py-3 border-2 border-stock-cyan text-stock-cyan font-bold rounded hover:bg-stock-cyan hover:text-stock-dark transition-all duration-200 hover:scale-105"
              >
                View Full Prospectus
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
