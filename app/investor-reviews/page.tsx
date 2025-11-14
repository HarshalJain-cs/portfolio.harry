/**
 * Investor Reviews (Testimonials) Page
 * Client and colleague testimonials and recommendations
 */

import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import StockTicker from '@/components/layout/StockTicker'
import { testimonials } from '@/lib/data'
import { FiStar, FiUser, FiLinkedin } from 'react-icons/fi'
import Link from 'next/link'

export default function InvestorReviewsPage() {
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
                <FiStar className="inline mr-2 mb-1" />
                Investor Reviews
              </div>

              <h1 className="text-4xl md:text-5xl font-heading text-stock-gold font-black">
                Client Testimonials
              </h1>

              <p className="text-lg text-stock-text/80 max-w-2xl mx-auto">
                What colleagues, clients, and collaborators say about working with
                me. {testimonials.length} reviews from professionals across various
                industries.
              </p>
            </div>
          </div>
        </section>

        {/* Rating Overview */}
        <section className="bg-stock-board py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Average Rating */}
                <div className="text-center p-8 bg-stock-dark/50 border-2 border-stock-gold">
                  <div className="text-6xl font-heading text-stock-gold mb-2 font-black">
                    5.0
                  </div>
                  <div className="flex items-center justify-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <FiStar
                        key={i}
                        className="text-stock-gold fill-stock-gold"
                        size={24}
                      />
                    ))}
                  </div>
                  <div className="text-sm text-stock-text/60 uppercase">
                    Average Rating
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-stock-dark/50 border border-stock-navy">
                    <div className="text-3xl font-heading text-stock-cyan mb-1 font-black">
                      {testimonials.length}
                    </div>
                    <div className="text-xs text-stock-text/60 uppercase">
                      Total Reviews
                    </div>
                  </div>
                  <div className="text-center p-4 bg-stock-dark/50 border border-stock-navy">
                    <div className="text-3xl font-heading text-stock-green mb-1 font-black">
                      100%
                    </div>
                    <div className="text-xs text-stock-text/60 uppercase">
                      Recommend
                    </div>
                  </div>
                  <div className="text-center p-4 bg-stock-dark/50 border border-stock-navy">
                    <div className="text-3xl font-heading text-stock-gold mb-1 font-black">
                      {new Set(testimonials.map(t => t.relationship)).size}
                    </div>
                    <div className="text-xs text-stock-text/60 uppercase">
                      Relationships
                    </div>
                  </div>
                  <div className="text-center p-4 bg-stock-dark/50 border border-stock-navy">
                    <div className="text-3xl font-heading text-stock-cyan mb-1 font-black">
                      {testimonials.filter(t => t.is_featured).length}
                    </div>
                    <div className="text-xs text-stock-text/60 uppercase">
                      Verified
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Grid */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="stock-card hover-lift flex flex-col"
              >
                {/* Quote Icon */}
                <div className="mb-4">
                  <div className="text-4xl text-stock-gold/30">"</div>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FiStar
                      key={i}
                      className={`${
                        i < (testimonial.rating || 0)
                          ? 'text-stock-gold fill-stock-gold'
                          : 'text-stock-navy'
                      }`}
                      size={16}
                    />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-sm text-stock-text/80 mb-6 leading-relaxed flex-1 italic">
                  "{testimonial.testimonial_text}"
                </p>

                {/* Author Info */}
                <div className="pt-4 border-t border-stock-navy/50">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-heading text-stock-cyan">
                          {testimonial.name}
                        </h4>
                        {testimonial.is_featured && (
                          <span className="text-stock-green" title="Verified">
                            ✓
                          </span>
                        )}
                      </div>
                      <div className="text-xs text-stock-text/60 mb-1">
                        {testimonial.designation}
                      </div>
                      {testimonial.organization && (
                        <div className="text-xs text-stock-gold">
                          {testimonial.organization}
                        </div>
                      )}
                      <div className="text-xs text-stock-text/40 mt-2 font-mono">
                        {testimonial.relationship}
                      </div>
                    </div>

                    {testimonial.linkedin_url && (
                      <a
                        href={testimonial.linkedin_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-stock-cyan hover:text-stock-gold transition-colors"
                        aria-label="LinkedIn Profile"
                      >
                        <FiLinkedin size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Add Your Review */}
        <section className="stock-border-top bg-stock-board py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-heading text-stock-cyan mb-6">
                Worked With Me?
              </h2>
              <p className="text-lg text-stock-text/80 mb-8">
                If you've collaborated with me on a project or worked together
                professionally, I'd love to hear your feedback.
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="p-6 bg-stock-dark/50 border-l-4 border-stock-green">
                  <div className="text-3xl mb-3">💼</div>
                  <h3 className="text-lg font-heading text-stock-green mb-2">
                    Professional
                  </h3>
                  <p className="text-sm text-stock-text/70">
                    Colleagues and team members I've worked with professionally
                  </p>
                </div>

                <div className="p-6 bg-stock-dark/50 border-l-4 border-stock-cyan">
                  <div className="text-3xl mb-3">🤝</div>
                  <h3 className="text-lg font-heading text-stock-cyan mb-2">
                    Clients
                  </h3>
                  <p className="text-sm text-stock-text/70">
                    Clients for whom I've delivered projects and solutions
                  </p>
                </div>

                <div className="p-6 bg-stock-dark/50 border-l-4 border-stock-gold">
                  <div className="text-3xl mb-3">🎓</div>
                  <h3 className="text-lg font-heading text-stock-gold mb-2">
                    Mentees
                  </h3>
                  <p className="text-sm text-stock-text/70">
                    Students and professionals I've mentored or collaborated with
                  </p>
                </div>
              </div>

              <a
                href="/investor-relations"
                className="btn-primary inline-flex items-center gap-2"
              >
                <FiStar />
                Share Your Feedback
              </a>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center stock-border p-12 bg-gradient-to-br from-stock-gold/10 to-transparent">
            <h2 className="text-3xl font-heading text-stock-gold mb-4">
              Let's Create Success Together
            </h2>
            <p className="text-lg text-stock-text/80 mb-6">
              Ready to start a project or explore collaboration opportunities?
              Let's discuss how we can work together.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/investor-relations" className="btn-primary">
                Get In Touch
              </Link>
              <Link
                href="/ventures/tech-assets"
                className="px-6 py-3 border-2 border-stock-cyan text-stock-cyan font-bold rounded hover:bg-stock-cyan hover:text-stock-dark transition-all duration-200 hover:scale-105"
              >
                View My Work
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
