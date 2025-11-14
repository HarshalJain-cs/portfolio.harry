/**
 * Market Tournaments (Competitions) Page
 * Showcases hackathons and competitive achievements
 */

import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import StockTicker from '@/components/layout/StockTicker'
import { competitions } from '@/lib/data'
import { FiTrophy, FiAward, FiUsers, FiCalendar, FiExternalLink } from 'react-icons/fi'
import Link from 'next/link'

export default function TournamentsPage() {
  // Get placement counts
  const placementCounts = {
    winner: competitions.filter(c => c.placement === 'Winner').length,
    runner_up: competitions.filter(c => c.placement === 'Runner-up').length,
    finalist: competitions.filter(c => c.placement === 'Finalist').length,
    participant: competitions.filter(c => c.placement === 'Participant').length,
  }

  // Get placement color and icon
  const getPlacementStyle = (placement: string) => {
    const styles: Record<string, { color: string; bg: string; icon: string }> = {
      Winner: { color: 'stock-gold', bg: 'bg-stock-gold/20', icon: '🥇' },
      'Runner-up': { color: 'stock-cyan', bg: 'bg-stock-cyan/20', icon: '🥈' },
      Finalist: { color: 'stock-green', bg: 'bg-stock-green/20', icon: '🥉' },
      Participant: { color: 'stock-text/60', bg: 'bg-stock-navy/30', icon: '🎯' },
    }
    return styles[placement] || styles.Participant
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
                <FiTrophy className="inline mr-2 mb-1" />
                Market Tournaments
              </div>

              <h1 className="text-4xl md:text-5xl font-heading text-stock-gold font-black">
                Competitive Achievements
              </h1>

              <p className="text-lg text-stock-text/80 max-w-2xl mx-auto">
                Hackathons, competitions, and tournaments where I've competed,
                built, and learned. {competitions.length} tournaments participated
                in, pushing boundaries and shipping products under pressure.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Overview */}
        <section className="bg-stock-board py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-6 bg-stock-dark/50 border-2 border-stock-gold">
                <div className="text-4xl mb-2">{getPlacementStyle('Winner').icon}</div>
                <div className="text-3xl font-heading text-stock-gold mb-1 font-black">
                  {placementCounts.winner}
                </div>
                <div className="text-xs text-stock-text/60 uppercase">
                  Wins
                </div>
              </div>
              <div className="text-center p-6 bg-stock-dark/50 border-2 border-stock-cyan">
                <div className="text-4xl mb-2">{getPlacementStyle('Runner-up').icon}</div>
                <div className="text-3xl font-heading text-stock-cyan mb-1 font-black">
                  {placementCounts.runner_up}
                </div>
                <div className="text-xs text-stock-text/60 uppercase">
                  Runner-ups
                </div>
              </div>
              <div className="text-center p-6 bg-stock-dark/50 border-2 border-stock-green">
                <div className="text-4xl mb-2">{getPlacementStyle('Finalist').icon}</div>
                <div className="text-3xl font-heading text-stock-green mb-1 font-black">
                  {placementCounts.finalist}
                </div>
                <div className="text-xs text-stock-text/60 uppercase">
                  Finals
                </div>
              </div>
              <div className="text-center p-6 bg-stock-dark/50 border border-stock-navy">
                <div className="text-4xl mb-2">🎯</div>
                <div className="text-3xl font-heading text-stock-cyan mb-1 font-black">
                  {competitions.length}
                </div>
                <div className="text-xs text-stock-text/60 uppercase">
                  Total
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Competitions Timeline */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-heading text-stock-cyan mb-12 text-center">
              Tournament History
            </h2>

            <div className="space-y-6">
              {competitions
                .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
                .map((comp, index) => {
                  const style = getPlacementStyle(comp.placement)
                  return (
                    <div
                      key={index}
                      className={`stock-card hover-lift relative overflow-hidden ${style.bg}`}
                    >
                      {/* Placement Badge */}
                      <div className="absolute top-4 right-4 text-5xl opacity-20">
                        {style.icon}
                      </div>

                      {/* Header */}
                      <div className="flex items-start justify-between mb-4 relative z-10">
                        <div className="flex-1">
                          <div
                            className={`inline-block px-3 py-1 rounded mb-3 text-xs font-mono uppercase border ${
                              comp.placement === 'Winner'
                                ? 'bg-stock-gold/30 text-stock-gold border-stock-gold/50'
                                : comp.placement === 'Runner-up'
                                ? 'bg-stock-cyan/30 text-stock-cyan border-stock-cyan/50'
                                : comp.placement === 'Finalist'
                                ? 'bg-stock-green/30 text-stock-green border-stock-green/50'
                                : 'bg-stock-navy/30 text-stock-text/60 border-stock-navy'
                            }`}
                          >
                            {style.icon} {comp.placement}
                          </div>
                          <h3 className="text-2xl font-heading text-stock-cyan mb-2">
                            {comp.event_name}
                          </h3>
                          <div className="text-sm text-stock-text/60 font-mono">
                            {comp.organizer}
                          </div>
                        </div>
                      </div>

                      {/* Project Details */}
                      <div className="mb-4 pb-4 border-b border-stock-navy/50">
                        <div className="text-lg font-heading text-stock-gold mb-2">
                          {comp.project_name}
                        </div>
                        <p className="text-sm text-stock-text/70">
                          {comp.description}
                        </p>
                      </div>

                      {/* Metadata */}
                      <div className="grid md:grid-cols-2 gap-4 mb-4">
                        <div className="flex items-center gap-2 text-sm">
                          <FiCalendar className="text-stock-cyan" />
                          <span className="text-stock-text/80">
                            {new Date(comp.date).toLocaleDateString('en-US', {
                              month: 'long',
                              year: 'numeric',
                            })}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <FiUsers className="text-stock-green" />
                          <span className="text-stock-text/80">
                            Team Size: {comp.team_size}
                          </span>
                        </div>
                      </div>

                      {/* Technologies */}
                      {comp.technologies_used && comp.technologies_used.length > 0 && (
                        <div className="mb-4">
                          <div className="text-xs text-stock-text/40 mb-2 uppercase">
                            Technologies Used
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {comp.technologies_used.map(tech => (
                              <span
                                key={tech}
                                className="px-2 py-1 bg-stock-navy/50 text-stock-text/60 text-xs rounded font-mono"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Achievement Highlight */}
                      {comp.achievement && (
                        <div className="p-3 bg-stock-navy/50 border-l-2 border-stock-gold rounded mb-4">
                          <div className="flex items-start gap-2">
                            <FiAward className="text-stock-gold text-lg mt-0.5" />
                            <div>
                              <div className="text-xs text-stock-gold mb-1 uppercase font-mono">
                                Achievement
                              </div>
                              <p className="text-sm text-stock-text/80">
                                {comp.achievement}
                              </p>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Links */}
                      {(comp.project_url || comp.certificate_url) && (
                        <div className="flex gap-2">
                          {comp.project_url && (
                            <a
                              href={comp.project_url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex-1 px-4 py-2 bg-stock-navy/50 hover:bg-stock-navy text-stock-cyan text-sm rounded transition-colors flex items-center justify-center gap-2 font-mono"
                            >
                              <FiExternalLink size={14} />
                              View Project
                            </a>
                          )}
                          {comp.certificate_url && (
                            <a
                              href={comp.certificate_url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex-1 px-4 py-2 bg-stock-gold/20 hover:bg-stock-gold/30 text-stock-gold text-sm rounded transition-colors flex items-center justify-center gap-2 font-mono"
                            >
                              <FiAward size={14} />
                              Certificate
                            </a>
                          )}
                        </div>
                      )}
                    </div>
                  )
                })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="stock-border-top bg-gradient-to-br from-stock-gold/10 to-transparent py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-heading text-stock-gold mb-4">
                Built to Compete
              </h2>
              <p className="text-lg text-stock-text/80 mb-6">
                Hackathons taught me to ship fast, work under pressure, and turn
                ideas into working products. Check out the projects built during
                these tournaments.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/ventures/tech-assets" className="btn-primary">
                  View All Projects
                </Link>
                <Link
                  href="/credentials"
                  className="px-6 py-3 border-2 border-stock-cyan text-stock-cyan font-bold rounded hover:bg-stock-cyan hover:text-stock-dark transition-all duration-200 hover:scale-105"
                >
                  View Credentials
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
