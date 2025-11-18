'use client'

/**
 * Tournaments (Competitions) Page
 * Hackathons and competitive achievements
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
import { FiAward, FiUsers, FiCalendar, FiCode } from 'react-icons/fi'
import Link from 'next/link'
import { staggerContainer, staggerItem, fadeIn } from '@/lib/animations'

// Sample competitions data
const competitions = [
  {
    id: 1,
    name: 'ETHGlobal Hackathon 2024',
    organizer: 'ETHGlobal',
    position: 'Winner',
    project_built: 'DeFi Yield Optimizer',
    achievement: 'Built a decentralized yield optimization protocol that won the Best DeFi Project award. Secured $10,000 in prize money.',
    date: '2024-09-15',
    team_size: 4,
    technologies_used: ['Solidity', 'React', 'Hardhat', 'The Graph', 'Web3.js'],
    certificate_url: '#',
  },
  {
    id: 2,
    name: 'Google Cloud Innovators Challenge',
    organizer: 'Google Cloud',
    position: 'Runner-up',
    project_built: 'AI-Powered Customer Support Bot',
    achievement: 'Developed an intelligent customer support system using Vertex AI and Cloud Functions. Achieved 95% accuracy in intent recognition.',
    date: '2024-07-20',
    team_size: 3,
    technologies_used: ['Python', 'Vertex AI', 'Cloud Functions', 'DialogFlow', 'BigQuery'],
    certificate_url: '#',
  },
  {
    id: 3,
    name: 'DevPost Global Hackathon',
    organizer: 'DevPost',
    position: 'Finalist',
    project_built: 'Real-Time Collaboration Platform',
    achievement: 'Built a WebRTC-based collaboration tool with real-time code editing and video chat. Reached top 10 out of 500+ submissions.',
    date: '2024-05-10',
    team_size: 2,
    technologies_used: ['Next.js', 'WebRTC', 'Socket.io', 'MongoDB', 'Redis'],
    certificate_url: '#',
  },
  {
    id: 4,
    name: 'HackMIT 2023',
    organizer: 'MIT',
    position: 'Finalist',
    project_built: 'Blockchain Supply Chain Tracker',
    achievement: 'Created a transparent supply chain tracking system on Ethereum. Won Best Use of Blockchain category.',
    date: '2023-11-12',
    team_size: 4,
    technologies_used: ['Solidity', 'TypeScript', 'IPFS', 'React', 'Truffle'],
    certificate_url: '#',
  },
  {
    id: 5,
    name: 'AWS AI/ML Challenge',
    organizer: 'Amazon Web Services',
    position: 'Participant',
    project_built: 'Sentiment Analysis API',
    achievement: 'Deployed a scalable sentiment analysis service using SageMaker and Lambda. Processed 10K+ requests during demo.',
    date: '2023-08-25',
    team_size: 1,
    technologies_used: ['Python', 'SageMaker', 'Lambda', 'API Gateway', 'DynamoDB'],
    certificate_url: '#',
  },
]

export default function TournamentsPage() {
  // Count placements
  const placementCounts = useMemo(() => ({
    winner: competitions.filter(c => c.position === 'Winner').length,
    runnerUp: competitions.filter(c => c.position === 'Runner-up').length,
    finalist: competitions.filter(c => c.position === 'Finalist').length,
    total: competitions.length,
  }), [])

  // Get placement style
  const getPlacementStyle = (position: string) => {
    const styles: Record<string, { icon: string; variant: 'achievement' | 'live' | 'tech' }> = {
      'Winner': { icon: '🥇', variant: 'achievement' },
      'Runner-up': { icon: '🥈', variant: 'live' },
      'Finalist': { icon: '🥉', variant: 'tech' },
      'Participant': { icon: '🎯', variant: 'tech' },
    }
    return styles[position] || styles.Participant
  }

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
              Market Tournaments
            </Badge>

            <h1 className="text-h1 font-heading font-bold text-platinum-bright uppercase">
              Competitive <span className="text-gold-bright">Achievements</span>
            </h1>

            <p className="text-lg text-platinum-muted max-w-2xl mx-auto">
              Hackathons, competitions, and tournaments where I've competed, built, and learned. {competitions.length} tournaments participated in, pushing boundaries and shipping products under pressure.
            </p>
          </motion.div>
        </section>

        {/* Stats Overview */}
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
                  <GlassCard variant="luxury" className="text-center border-2 border-gold-main">
                    <div className="text-4xl mb-2">🥇</div>
                    <div className="text-3xl font-heading text-gold-bright mb-1 font-mono font-black">
                      {placementCounts.winner}
                    </div>
                    <div className="text-xs text-platinum-dark uppercase">
                      Wins
                    </div>
                  </GlassCard>
                </motion.div>

                <motion.div variants={staggerItem}>
                  <GlassCard variant="success" className="text-center border-2 border-emerald-main">
                    <div className="text-4xl mb-2">🥈</div>
                    <div className="text-3xl font-heading text-emerald-bright mb-1 font-mono font-black">
                      {placementCounts.runnerUp}
                    </div>
                    <div className="text-xs text-platinum-dark uppercase">
                      Runner-ups
                    </div>
                  </GlassCard>
                </motion.div>

                <motion.div variants={staggerItem}>
                  <GlassCard variant="luxury" className="text-center border-2 border-platinum-main">
                    <div className="text-4xl mb-2">🥉</div>
                    <div className="text-3xl font-heading text-platinum-bright mb-1 font-mono font-black">
                      {placementCounts.finalist}
                    </div>
                    <div className="text-xs text-platinum-dark uppercase">
                      Finals
                    </div>
                  </GlassCard>
                </motion.div>

                <motion.div variants={staggerItem}>
                  <GlassCard variant="luxury" className="text-center">
                    <div className="text-4xl mb-2">🎯</div>
                    <div className="text-3xl font-heading text-gold-bright mb-1 font-mono font-black">
                      {placementCounts.total}
                    </div>
                    <div className="text-xs text-platinum-dark uppercase">
                      Total
                    </div>
                  </GlassCard>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Competitions Timeline */}
        <section className="section-padding bg-bg-primary">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-h2 font-heading text-platinum-bright mb-12 text-center">
                Tournament History
              </h2>

              <motion.div
                className="space-y-6"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
              >
                {competitions
                  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
                  .map((comp) => {
                    const style = getPlacementStyle(comp.position)
                    return (
                      <motion.div key={comp.id} variants={staggerItem}>
                        <GlassCard variant="luxury" hover className="relative overflow-hidden">
                          {/* Placement Badge Icon (Background) */}
                          <div className="absolute top-4 right-4 text-5xl opacity-10">
                            {style.icon}
                          </div>

                          {/* Header */}
                          <div className="flex items-start justify-between mb-4 relative z-10">
                            <div className="flex-1">
                              <Badge variant={style.variant}>
                                {style.icon} {comp.position}
                              </Badge>
                              <h3 className="text-2xl font-heading text-platinum-bright mb-2 mt-3">
                                {comp.name}
                              </h3>
                              <div className="text-sm text-platinum-muted font-mono">
                                {comp.organizer}
                              </div>
                            </div>
                          </div>

                          {/* Project Details */}
                          <div className="mb-4 pb-4 border-b border-glass-platinum">
                            <div className="text-lg font-heading text-gold-bright mb-2">
                              {comp.project_built}
                            </div>
                            <p className="text-sm text-platinum-muted">
                              {comp.achievement}
                            </p>
                          </div>

                          {/* Metadata */}
                          <div className="grid md:grid-cols-2 gap-4 mb-4">
                            <div className="flex items-center gap-2 text-sm text-platinum-muted">
                              <FiCalendar className="text-gold-bright" />
                              <span>
                                {new Date(comp.date).toLocaleDateString('en-US', {
                                  month: 'long',
                                  year: 'numeric',
                                })}
                              </span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-platinum-muted">
                              <FiUsers className="text-emerald-bright" />
                              <span>Team Size: {comp.team_size}</span>
                            </div>
                          </div>

                          {/* Technologies */}
                          {comp.technologies_used && comp.technologies_used.length > 0 && (
                            <div className="mb-4">
                              <div className="flex items-center gap-2 text-xs text-platinum-dark mb-2 uppercase">
                                <FiCode size={14} />
                                Technologies Used
                              </div>
                              <div className="flex flex-wrap gap-2">
                                {comp.technologies_used.map(tech => (
                                  <Badge key={tech} variant="tech">{tech}</Badge>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Certificate Link */}
                          {comp.certificate_url && (
                            <div>
                              <a
                                href={comp.certificate_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block"
                              >
                                <Button variant="gold" size="sm">
                                  <FiAward className="mr-2" size={14} />
                                  View Certificate
                                </Button>
                              </a>
                            </div>
                          )}
                        </GlassCard>
                      </motion.div>
                    )
                  })}
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-bg-secondary">
          <div className="container-custom">
            <GlassCard variant="luxury" className="max-w-4xl mx-auto text-center">
              <div className="space-y-6 py-8">
                <div className="text-5xl">🏆</div>
                <h2 className="text-h2 font-heading text-platinum-bright">
                  Built to Compete
                </h2>
                <p className="text-lg text-platinum-muted max-w-2xl mx-auto">
                  Hackathons taught me to ship fast, work under pressure, and turn ideas into working products. Check out the projects built during these tournaments.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                  <Link href="/ventures/tech-assets">
                    <Button variant="gold" size="lg">
                      View All Projects
                    </Button>
                  </Link>
                  <Link href="/credentials">
                    <Button variant="platinum" size="lg">
                      View Credentials
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
