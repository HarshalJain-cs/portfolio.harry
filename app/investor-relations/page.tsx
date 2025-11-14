/**
 * Investor Relations (Contact) Page
 * Contact form with Supabase integration
 */

'use client'

import { useState } from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import StockTicker from '@/components/layout/StockTicker'
import { supabase } from '@/lib/supabase/client'
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiSend } from 'react-icons/fi'

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
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    setErrorMessage('')

    try {
      const { error } = await supabase.from('contact_submissions').insert([
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          inquiry_type: formData.inquiry_type,
        },
      ])

      if (error) throw error

      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        inquiry_type: 'general',
      })
    } catch (error: any) {
      console.error('Error submitting form:', error)
      setSubmitStatus('error')
      setErrorMessage(
        error.message || 'Failed to submit form. Please try again.'
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

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
                <FiMail className="inline mr-2 mb-1" />
                Investor Relations
              </div>

              <h1 className="text-4xl md:text-5xl font-heading text-stock-gold font-black">
                Get In Touch
              </h1>

              <p className="text-lg text-stock-text/80 max-w-2xl mx-auto">
                Interested in collaboration, hiring, or just want to connect?
                I'd love to hear from you. Let's discuss how we can create value together.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info & Form */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-12">
            {/* Left: Contact Info */}
            <div className="space-y-8">
              {/* Contact Details */}
              <div>
                <h2 className="text-2xl font-heading text-stock-cyan mb-6">
                  Contact Information
                </h2>

                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 bg-stock-board border border-stock-navy">
                    <FiMail className="text-stock-cyan text-xl mt-1" />
                    <div>
                      <div className="text-sm text-stock-text/40 mb-1">Email</div>
                      <a
                        href="mailto:harshaljaincs@gmail.com"
                        className="text-stock-cyan hover:text-stock-gold transition-colors"
                      >
                        harshaljaincs@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-stock-board border border-stock-navy">
                    <FiMapPin className="text-stock-cyan text-xl mt-1" />
                    <div>
                      <div className="text-sm text-stock-text/40 mb-1">
                        Location
                      </div>
                      <div className="text-stock-text/80">India</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-stock-board border border-stock-navy">
                    <FiPhone className="text-stock-cyan text-xl mt-1" />
                    <div>
                      <div className="text-sm text-stock-text/40 mb-1">
                        Availability
                      </div>
                      <div className="text-stock-text/80">
                        Mon - Fri, 9AM - 6PM IST
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-xl font-heading text-stock-cyan mb-4">
                  Connect Online
                </h3>
                <div className="space-y-3">
                  <a
                    href="https://github.com/HarshalJain-cs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 bg-stock-board border border-stock-navy hover:border-stock-cyan transition-colors group"
                  >
                    <FiGithub className="text-stock-cyan text-xl" />
                    <div>
                      <div className="text-sm text-stock-cyan group-hover:text-stock-gold transition-colors">
                        GitHub
                      </div>
                      <div className="text-xs text-stock-text/60 font-mono">
                        @HarshalJain-cs
                      </div>
                    </div>
                  </a>

                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 bg-stock-board border border-stock-navy hover:border-stock-cyan transition-colors group"
                  >
                    <FiLinkedin className="text-stock-cyan text-xl" />
                    <div>
                      <div className="text-sm text-stock-cyan group-hover:text-stock-gold transition-colors">
                        LinkedIn
                      </div>
                      <div className="text-xs text-stock-text/60 font-mono">
                        Connect with me
                      </div>
                    </div>
                  </a>
                </div>
              </div>

              {/* Response Time */}
              <div className="p-4 bg-stock-navy/30 border-l-4 border-stock-green">
                <div className="text-sm font-heading text-stock-green mb-2">
                  ⚡ Quick Response Time
                </div>
                <p className="text-xs text-stock-text/70">
                  I typically respond to inquiries within 24-48 hours during
                  business days.
                </p>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="lg:col-span-2">
              <div className="stock-card">
                <h2 className="text-2xl font-heading text-stock-cyan mb-6">
                  Send a Message
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-mono text-stock-text/80 mb-2 uppercase"
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
                      className="w-full px-4 py-3 bg-stock-dark border border-stock-navy text-stock-text rounded focus:outline-none focus:border-stock-cyan transition-colors"
                      placeholder="John Doe"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-mono text-stock-text/80 mb-2 uppercase"
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
                      className="w-full px-4 py-3 bg-stock-dark border border-stock-navy text-stock-text rounded focus:outline-none focus:border-stock-cyan transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>

                  {/* Inquiry Type */}
                  <div>
                    <label
                      htmlFor="inquiry_type"
                      className="block text-sm font-mono text-stock-text/80 mb-2 uppercase"
                    >
                      Inquiry Type *
                    </label>
                    <select
                      id="inquiry_type"
                      name="inquiry_type"
                      required
                      value={formData.inquiry_type}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-stock-dark border border-stock-navy text-stock-text rounded focus:outline-none focus:border-stock-cyan transition-colors"
                    >
                      <option value="general">General Inquiry</option>
                      <option value="collaboration">Collaboration</option>
                      <option value="job">Job Opportunity</option>
                      <option value="consulting">Consulting</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* Subject */}
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-mono text-stock-text/80 mb-2 uppercase"
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
                      className="w-full px-4 py-3 bg-stock-dark border border-stock-navy text-stock-text rounded focus:outline-none focus:border-stock-cyan transition-colors"
                      placeholder="Let's work together on..."
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-mono text-stock-text/80 mb-2 uppercase"
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
                      className="w-full px-4 py-3 bg-stock-dark border border-stock-navy text-stock-text rounded focus:outline-none focus:border-stock-cyan transition-colors resize-none"
                      placeholder="Tell me about your project, opportunity, or idea..."
                    />
                  </div>

                  {/* Success Message */}
                  {submitStatus === 'success' && (
                    <div className="p-4 bg-stock-green/20 border-l-4 border-stock-green">
                      <div className="flex items-center gap-2 text-stock-green mb-1">
                        <span className="text-lg">✓</span>
                        <span className="font-mono text-sm font-bold">
                          Message Sent Successfully!
                        </span>
                      </div>
                      <p className="text-sm text-stock-text/80">
                        Thank you for reaching out. I'll get back to you soon.
                      </p>
                    </div>
                  )}

                  {/* Error Message */}
                  {submitStatus === 'error' && (
                    <div className="p-4 bg-stock-red/20 border-l-4 border-stock-red">
                      <div className="flex items-center gap-2 text-stock-red mb-1">
                        <span className="text-lg">✕</span>
                        <span className="font-mono text-sm font-bold">
                          Submission Failed
                        </span>
                      </div>
                      <p className="text-sm text-stock-text/80">
                        {errorMessage ||
                          'Something went wrong. Please try again or email me directly.'}
                      </p>
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="inline-block w-4 h-4 border-2 border-stock-text border-t-transparent rounded-full animate-spin"></span>
                        Sending...
                      </>
                    ) : (
                      <>
                        <FiSend size={18} />
                        Send Message
                      </>
                    )}
                  </button>

                  <p className="text-xs text-stock-text/40 text-center font-mono">
                    By submitting this form, you agree to be contacted regarding
                    your inquiry.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ / Additional Info */}
        <section className="stock-border-top bg-stock-board py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-heading text-stock-cyan mb-8 text-center">
                Frequently Asked Questions
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 bg-stock-dark/50 border-l-4 border-stock-cyan">
                  <h3 className="text-lg font-heading text-stock-cyan mb-2">
                    What services do you offer?
                  </h3>
                  <p className="text-sm text-stock-text/70">
                    Full-stack development, financial analysis, blockchain/Web3
                    projects, AI integration, and technical consulting.
                  </p>
                </div>

                <div className="p-6 bg-stock-dark/50 border-l-4 border-stock-green">
                  <h3 className="text-lg font-heading text-stock-green mb-2">
                    Are you available for freelance work?
                  </h3>
                  <p className="text-sm text-stock-text/70">
                    Yes! I'm open to interesting projects and collaborations.
                    Reach out with details about your project.
                  </p>
                </div>

                <div className="p-6 bg-stock-dark/50 border-l-4 border-stock-gold">
                  <h3 className="text-lg font-heading text-stock-gold mb-2">
                    What's your typical response time?
                  </h3>
                  <p className="text-sm text-stock-text/70">
                    I aim to respond within 24-48 hours during business days. Urgent
                    inquiries may receive faster responses.
                  </p>
                </div>

                <div className="p-6 bg-stock-dark/50 border-l-4 border-stock-red">
                  <h3 className="text-lg font-heading text-stock-red mb-2">
                    Do you work with startups?
                  </h3>
                  <p className="text-sm text-stock-text/70">
                    Absolutely! I love working with early-stage startups on
                    innovative products, especially in fintech and Web3.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
