/**
 * Community Dividends (Volunteering) Page
 * Showcases volunteering experiences and community contributions
 */

import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import StockTicker from '@/components/layout/StockTicker'
import { volunteering } from '@/lib/data'
import { FiHeart, FiUsers, FiCalendar, FiMapPin, FiAward } from 'react-icons/fi'
import Link from 'next/link'

export default function CommunityDividendsPage() {
  // Calculate total hours
  const totalHours = volunteering.reduce((sum, v) => sum + (v.hours_contributed || 0), 0)

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <StockTicker />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="stock-border-bottom bg-gradient-to-br from-stock-green/10 to-transparent py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-4">
              <div className="inline-block px-4 py-2 bg-stock-green/10 border border-stock-green/30 rounded-full text-stock-green text-sm font-mono uppercase tracking-wider mb-2">
                <FiHeart className="inline mr-2 mb-1" />
                Community Dividends
              </div>

              <h1 className="text-4xl md:text-5xl font-heading text-stock-gold font-black">
                Giving Back to Communities
              </h1>

              <p className="text-lg text-stock-text/80 max-w-2xl mx-auto">
                Volunteering experiences where I've contributed time, skills, and
                passion to make a positive impact. {volunteering.length} organizations
                supported with {totalHours.toLocaleString()}+ hours of service.
              </p>
            </div>
          </div>
        </section>

        {/* Impact Stats */}
        <section className="bg-stock-board py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-6 bg-stock-dark/50 border border-stock-navy">
                <div className="text-4xl font-heading text-stock-green mb-2 font-black">
                  {volunteering.length}
                </div>
                <div className="text-xs text-stock-text/60 uppercase">
                  Organizations
                </div>
              </div>
              <div className="text-center p-6 bg-stock-dark/50 border border-stock-navy">
                <div className="text-4xl font-heading text-stock-cyan mb-2 font-black">
                  {totalHours.toLocaleString()}+
                </div>
                <div className="text-xs text-stock-text/60 uppercase">
                  Hours Served
                </div>
              </div>
              <div className="text-center p-6 bg-stock-dark/50 border border-stock-navy">
                <div className="text-4xl font-heading text-stock-gold mb-2 font-black">
                  {new Set(volunteering.map(v => v.category).filter(Boolean)).size}
                </div>
                <div className="text-xs text-stock-text/60 uppercase">
                  Causes Supported
                </div>
              </div>
              <div className="text-center p-6 bg-stock-dark/50 border border-stock-navy">
                <div className="text-4xl font-heading text-stock-green mb-2 font-black">
                  {volunteering.filter(v => v.is_ongoing).length}
                </div>
                <div className="text-xs text-stock-text/60 uppercase">
                  Ongoing
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Volunteering Experiences */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto space-y-8">
            {volunteering.map((vol, index) => (
              <div
                key={index}
                className="stock-card hover-lift"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <h2 className="text-2xl font-heading text-stock-cyan">
                        {vol.organization}
                      </h2>
                      {vol.is_ongoing && (
                        <span className="px-2 py-1 bg-stock-green/20 text-stock-green text-xs font-mono rounded border border-stock-green/50">
                          ONGOING
                        </span>
                      )}
                    </div>
                    <div className="text-lg text-stock-gold mb-2">
                      {vol.role}
                    </div>
                    {vol.category && (
                      <div className="text-sm text-stock-text/60">
                        {vol.category}
                      </div>
                    )}
                  </div>
                  <FiHeart className="text-4xl text-stock-green/40 flex-shrink-0 ml-4" />
                </div>

                {/* Description */}
                <p className="text-sm text-stock-text/80 mb-6 leading-relaxed">
                  {vol.description}
                </p>

                {/* Impact */}
                {vol.impact && (
                  <div className="mb-6 p-4 bg-stock-green/10 border-l-4 border-stock-gold rounded">
                    <div className="flex items-start gap-2">
                      <FiAward className="text-stock-gold text-lg mt-0.5" />
                      <div>
                        <div className="text-xs text-stock-gold mb-1 uppercase font-mono">
                          Impact & Achievement
                        </div>
                        <p className="text-sm text-stock-text/80">
                          {vol.impact}
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Metadata */}
                <div className="grid md:grid-cols-3 gap-4 mb-4 pb-4 border-b border-stock-navy/50">
                  <div className="flex items-center gap-2 text-sm">
                    <FiCalendar className="text-stock-cyan" />
                    <div>
                      <div className="text-xs text-stock-text/40">Duration</div>
                      <div className="text-stock-text/80 font-mono">
                        {vol.start_date} - {vol.end_date || 'Present'}
                      </div>
                    </div>
                  </div>
                  {vol.hours_contributed && (
                    <div className="flex items-center gap-2 text-sm">
                      <FiUsers className="text-stock-green" />
                      <div>
                        <div className="text-xs text-stock-text/40">Hours</div>
                        <div className="text-stock-green font-mono font-bold">
                          {vol.hours_contributed.toLocaleString()} hrs
                        </div>
                      </div>
                    </div>
                  )}
                  {vol.location && (
                    <div className="flex items-center gap-2 text-sm">
                      <FiMapPin className="text-stock-gold" />
                      <div>
                        <div className="text-xs text-stock-text/40">Location</div>
                        <div className="text-stock-text/80">
                          {vol.location}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Community Values */}
        <section className="stock-border-top bg-stock-board py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-heading text-stock-green mb-8 text-center">
                Why I Volunteer
              </h2>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-6 bg-stock-dark/50 border-l-4 border-stock-green text-center">
                  <div className="text-4xl mb-4">🤝</div>
                  <h3 className="text-lg font-heading text-stock-green mb-3">
                    Give Back
                  </h3>
                  <p className="text-sm text-stock-text/70">
                    Communities and mentors helped me grow. It's my responsibility
                    to pay it forward and help others succeed.
                  </p>
                </div>

                <div className="p-6 bg-stock-dark/50 border-l-4 border-stock-cyan text-center">
                  <div className="text-4xl mb-4">📚</div>
                  <h3 className="text-lg font-heading text-stock-cyan mb-3">
                    Learn & Grow
                  </h3>
                  <p className="text-sm text-stock-text/70">
                    Volunteering teaches empathy, leadership, and problem-solving
                    in contexts you can't learn from textbooks.
                  </p>
                </div>

                <div className="p-6 bg-stock-dark/50 border-l-4 border-stock-gold text-center">
                  <div className="text-4xl mb-4">🌍</div>
                  <h3 className="text-lg font-heading text-stock-gold mb-3">
                    Make Impact
                  </h3>
                  <p className="text-sm text-stock-text/70">
                    Small actions create ripple effects. Contributing to causes
                    I believe in creates meaningful, lasting change.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center stock-border p-12 bg-gradient-to-br from-stock-green/10 to-transparent">
            <h2 className="text-3xl font-heading text-stock-green mb-4">
              Let's Create Impact Together
            </h2>
            <p className="text-lg text-stock-text/80 mb-6">
              Looking to collaborate on social impact projects, educational
              initiatives, or community programs? I'm always open to new
              opportunities to give back.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/investor-relations" className="btn-primary">
                Get In Touch
              </Link>
              <Link
                href="/prospectus"
                className="px-6 py-3 border-2 border-stock-cyan text-stock-cyan font-bold rounded hover:bg-stock-cyan hover:text-stock-dark transition-all duration-200 hover:scale-105"
              >
                Learn More About Me
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
