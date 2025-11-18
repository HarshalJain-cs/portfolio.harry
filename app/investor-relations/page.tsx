'use client'

/**
 * Investor Relations (Contact) Page
 * Contact form with email integration
 * NEW DESIGN: Warmer Charcoal + Gold + Emerald + Platinum
 */

import { useState } from 'react'
import { motion } from 'framer-motion'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import ProgressBar from '@/components/layout/ProgressBar'
import CustomCursor from '@/components/layout/CustomCursor'
import GlassCard from '@/components/ui/GlassCard'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'
import { FiMail, FiMapPin, FiGithub, FiLinkedin, FiSend, FiClock, FiCheckCircle, FiAlertCircle } from 'react-icons/fi'
import { staggerContainer, staggerItem, fadeIn } from '@/lib/animations'
import { submitContactForm } from '@/lib/formHandler'

export default function InvestorRelationsPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    inquiry_type: 'general',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [statusMessage, setStatusMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    setStatusMessage('')

    try {
      const result = await submitContactForm(formData)

      if (result.success) {
        setSubmitStatus('success')
        setStatusMessage(result.message)
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
          inquiry_type: 'general',
        })
        // Auto-clear success message after 5 seconds
        setTimeout(() => setSubmitStatus('idle'), 5000)
      } else {
        setSubmitStatus('error')
        setStatusMessage(result.message)
      }
    } catch (error) {
      setSubmitStatus('error')
      setStatusMessage('An unexpected error occurred. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
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
              <FiMail className="inline mr-2 mb-1" />
              Investor Relations
            </Badge>

            <h1 className="text-h1 font-heading font-bold text-platinum-bright uppercase">
              Get In <span className="text-gold-bright">Touch</span>
            </h1>

            <p className="text-lg text-platinum-muted max-w-2xl mx-auto">
              Interested in collaboration, hiring, or just want to connect? I'd love to hear from you. Let's discuss how we can create value together.
            </p>
          </motion.div>
        </section>

        {/* Contact Info & Form */}
        <section className="section-padding bg-bg-primary">
          <div className="container-custom">
            <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-12">
              {/* Left: Contact Info */}
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.6 }}
              >
                {/* Contact Details */}
                <div>
                  <h2 className="text-h3 font-heading text-platinum-bright mb-6 gold-underline inline-block">
                    Contact Information
                  </h2>

                  <div className="space-y-4">
                    <GlassCard variant="luxury">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gold-main/10 flex-shrink-0">
                          <FiMail className="text-gold-bright text-lg" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-xs font-mono text-platinum-dark mb-1 uppercase tracking-wider">Email</div>
                          <a
                            href="mailto:harshaljaincs@gmail.com"
                            className="text-gold-bright hover:text-gold-main transition-colors text-sm font-medium break-all"
                          >
                            harshaljaincs@gmail.com
                          </a>
                        </div>
                      </div>
                    </GlassCard>

                    <GlassCard variant="luxury">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gold-main/10 flex-shrink-0">
                          <FiMapPin className="text-gold-bright text-lg" />
                        </div>
                        <div className="flex-1">
                          <div className="text-xs font-mono text-platinum-dark mb-1 uppercase tracking-wider">Location</div>
                          <div className="text-platinum-main text-sm font-medium">India</div>
                        </div>
                      </div>
                    </GlassCard>

                    <GlassCard variant="luxury">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gold-main/10 flex-shrink-0">
                          <FiClock className="text-gold-bright text-lg" />
                        </div>
                        <div className="flex-1">
                          <div className="text-xs font-mono text-platinum-dark mb-1 uppercase tracking-wider">Availability</div>
                          <div className="text-platinum-main text-sm font-medium">Mon - Fri, 9AM - 6PM IST</div>
                        </div>
                      </div>
                    </GlassCard>
                  </div>
                </div>

                {/* Social Links */}
                <div>
                  <h3 className="text-xl font-heading text-platinum-bright mb-4">
                    Connect Online
                  </h3>
                  <div className="space-y-3">
                    <a
                      href="https://github.com/HarshalJain-cs"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <GlassCard variant="interactive" hover>
                        <div className="flex items-center gap-4">
                          <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gold-main/10 flex-shrink-0">
                            <FiGithub className="text-gold-bright text-lg" />
                          </div>
                          <div className="flex-1">
                            <div className="text-sm text-platinum-bright font-medium">GitHub</div>
                            <div className="text-xs text-platinum-dark font-mono">
                              @HarshalJain-cs
                            </div>
                          </div>
                        </div>
                      </GlassCard>
                    </a>

                    <a
                      href="https://www.linkedin.com/in/harshal-jain"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <GlassCard variant="interactive" hover>
                        <div className="flex items-center gap-4">
                          <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gold-main/10 flex-shrink-0">
                            <FiLinkedin className="text-gold-bright text-lg" />
                          </div>
                          <div className="flex-1">
                            <div className="text-sm text-platinum-bright font-medium">LinkedIn</div>
                            <div className="text-xs text-platinum-dark font-mono">
                              Connect with me
                            </div>
                          </div>
                        </div>
                      </GlassCard>
                    </a>
                  </div>
                </div>

                {/* Response Time */}
                <GlassCard variant="success" className="border-l-4 border-emerald-main">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-emerald-main/10 flex-shrink-0">
                      <span className="text-xl">⚡</span>
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-heading text-emerald-bright mb-1 font-semibold">
                        Quick Response Time
                      </div>
                      <p className="text-xs text-platinum-muted leading-relaxed">
                        I typically respond to inquiries within 24-48 hours during business days.
                      </p>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>

              {/* Right: Contact Form */}
              <motion.div
                className="lg:col-span-2"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.6 }}
              >
                <GlassCard variant="luxury">
                  <h2 className="text-h3 font-heading text-platinum-bright mb-6">
                    Send a Message
                  </h2>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Name */}
                    <div className="space-y-2">
                      <label
                        htmlFor="name"
                        className="block text-xs font-mono text-platinum-main uppercase tracking-wider font-medium"
                      >
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3.5 bg-glass-medium backdrop-blur-glass border border-glass-platinum rounded-lg text-platinum-main placeholder:text-platinum-dark focus:outline-none focus:border-gold-main focus:ring-2 focus:ring-gold-main/20 transition-all"
                        placeholder="John Doe"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="block text-xs font-mono text-platinum-main uppercase tracking-wider font-medium"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3.5 bg-glass-medium backdrop-blur-glass border border-glass-platinum rounded-lg text-platinum-main placeholder:text-platinum-dark focus:outline-none focus:border-gold-main focus:ring-2 focus:ring-gold-main/20 transition-all"
                        placeholder="john@example.com"
                      />
                    </div>

                    {/* Inquiry Type */}
                    <div className="space-y-2">
                      <label
                        htmlFor="inquiry_type"
                        className="block text-xs font-mono text-platinum-main uppercase tracking-wider font-medium"
                      >
                        Inquiry Type *
                      </label>
                      <select
                        id="inquiry_type"
                        name="inquiry_type"
                        required
                        value={formData.inquiry_type}
                        onChange={handleChange}
                        className="w-full px-4 py-3.5 bg-glass-medium backdrop-blur-glass border border-glass-platinum rounded-lg text-platinum-main focus:outline-none focus:border-gold-main focus:ring-2 focus:ring-gold-main/20 transition-all appearance-none cursor-pointer"
                      >
                        <option value="general" className="bg-bg-elevated">General Inquiry</option>
                        <option value="collaboration" className="bg-bg-elevated">Collaboration</option>
                        <option value="job" className="bg-bg-elevated">Job Opportunity</option>
                        <option value="consulting" className="bg-bg-elevated">Consulting</option>
                        <option value="other" className="bg-bg-elevated">Other</option>
                      </select>
                    </div>

                    {/* Subject */}
                    <div className="space-y-2">
                      <label
                        htmlFor="subject"
                        className="block text-xs font-mono text-platinum-main uppercase tracking-wider font-medium"
                      >
                        Subject *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3.5 bg-glass-medium backdrop-blur-glass border border-glass-platinum rounded-lg text-platinum-main placeholder:text-platinum-dark focus:outline-none focus:border-gold-main focus:ring-2 focus:ring-gold-main/20 transition-all"
                        placeholder="Let's work together on..."
                      />
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                      <label
                        htmlFor="message"
                        className="block text-xs font-mono text-platinum-main uppercase tracking-wider font-medium"
                      >
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        rows={6}
                        className="w-full px-4 py-3.5 bg-glass-medium backdrop-blur-glass border border-glass-platinum rounded-lg text-platinum-main placeholder:text-platinum-dark focus:outline-none focus:border-gold-main focus:ring-2 focus:ring-gold-main/20 transition-all resize-none leading-relaxed"
                        placeholder="Tell me about your project, opportunity, or idea..."
                      />
                    </div>

                    {/* Success Message */}
                    {submitStatus === 'success' && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                      >
                        <GlassCard variant="success" className="border-l-4 border-emerald-main">
                          <div className="flex items-center gap-3">
                            <FiCheckCircle className="text-emerald-bright text-xl flex-shrink-0" />
                            <div>
                              <div className="font-mono text-sm font-bold text-emerald-bright mb-1">
                                Message Sent Successfully!
                              </div>
                              <p className="text-sm text-platinum-muted">
                                {statusMessage || "Thank you for reaching out. I'll get back to you soon."}
                              </p>
                            </div>
                          </div>
                        </GlassCard>
                      </motion.div>
                    )}

                    {/* Error Message */}
                    {submitStatus === 'error' && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                      >
                        <GlassCard variant="data" className="border-l-4 border-platinum-dark">
                          <div className="flex items-center gap-3">
                            <FiAlertCircle className="text-platinum-muted text-xl flex-shrink-0" />
                            <div>
                              <div className="font-mono text-sm font-bold text-platinum-main mb-1">
                                Submission Failed
                              </div>
                              <p className="text-sm text-platinum-muted">
                                {statusMessage}
                              </p>
                            </div>
                          </div>
                        </GlassCard>
                      </motion.div>
                    )}

                    {/* Submit Button */}
                    <Button
                      variant="gold"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="inline-block w-4 h-4 border-2 border-platinum-bright border-t-transparent rounded-full animate-spin mr-2"></span>
                          Sending...
                        </>
                      ) : (
                        <>
                          <FiSend className="mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>

                    <p className="text-xs text-platinum-dark text-center font-mono">
                      By submitting this form, you agree to be contacted regarding your inquiry.
                    </p>
                  </form>
                </GlassCard>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section-padding bg-bg-secondary">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-h2 font-heading text-platinum-bright mb-12 text-center">
                Frequently Asked Questions
              </h2>

              <motion.div
                className="grid md:grid-cols-2 gap-6"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
              >
                <motion.div variants={staggerItem}>
                  <GlassCard variant="luxury" hover className="h-full border-l-4 border-gold-main">
                    <h3 className="text-lg font-heading text-gold-bright mb-2">
                      What services do you offer?
                    </h3>
                    <p className="text-sm text-platinum-muted">
                      Full-stack development, financial analysis, blockchain/Web3 projects, AI integration, and technical consulting.
                    </p>
                  </GlassCard>
                </motion.div>

                <motion.div variants={staggerItem}>
                  <GlassCard variant="success" hover className="h-full border-l-4 border-emerald-main">
                    <h3 className="text-lg font-heading text-emerald-bright mb-2">
                      Are you available for freelance work?
                    </h3>
                    <p className="text-sm text-platinum-muted">
                      Yes! I'm open to interesting projects and collaborations. Reach out with details about your project.
                    </p>
                  </GlassCard>
                </motion.div>

                <motion.div variants={staggerItem}>
                  <GlassCard variant="luxury" hover className="h-full border-l-4 border-gold-main">
                    <h3 className="text-lg font-heading text-gold-bright mb-2">
                      What's your typical response time?
                    </h3>
                    <p className="text-sm text-platinum-muted">
                      I aim to respond within 24-48 hours during business days. Urgent inquiries may receive faster responses.
                    </p>
                  </GlassCard>
                </motion.div>

                <motion.div variants={staggerItem}>
                  <GlassCard variant="success" hover className="h-full border-l-4 border-emerald-main">
                    <h3 className="text-lg font-heading text-emerald-bright mb-2">
                      Do you work with startups?
                    </h3>
                    <p className="text-sm text-platinum-muted">
                      Absolutely! I love working with early-stage startups on innovative products, especially in fintech and Web3.
                    </p>
                  </GlassCard>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  )
}
