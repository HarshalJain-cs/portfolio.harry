'use client'

/**
 * FOOTER - 4 ROW COMPREHENSIVE
 * Row 1: Brand + Newsletter
 * Row 2: Navigation Grid (4 columns)
 * Row 3: Live Stats (4 metric cards)
 * Row 4: Legal + Back to Top
 */

import Logo from '@/components/ui/Logo'
import MetricCard from '@/components/ui/MetricCard'
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiInstagram, FiArrowUp, FiCode, FiAward, FiTrendingUp, FiBriefcase } from 'react-icons/fi'
import Link from 'next/link'

const footerLinks = {
  explore: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/prospectus' },
    { label: 'Projects', href: '/ventures/tech-assets' },
    { label: 'Skills', href: '/holdings' },
  ],
  ventures: [
    { label: 'Tech Assets', href: '/ventures/tech-assets' },
    { label: 'Financial Instruments', href: '/ventures/financial-instruments' },
    { label: 'Research', href: '/ventures/research-papers' },
    { label: 'Blog', href: '/market-commentary' },
  ],
  resources: [
    { label: 'Resume', href: '/downloads' },
    { label: 'Certifications', href: '/credentials' },
    { label: 'Analytics', href: '/analytics' },
    { label: 'Downloads', href: '/downloads' },
  ],
  connect: [
    { label: 'Contact', href: '/investor-relations' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/harshaljain', external: true },
    { label: 'GitHub', href: 'https://github.com/HarshalJain-cs', external: true },
    { label: 'Email', href: 'mailto:harshaljaincs@gmail.com' },
  ],
}

const socialLinks = [
  { icon: FiLinkedin, href: 'https://linkedin.com/in/harshaljain', label: 'LinkedIn' },
  { icon: FiGithub, href: 'https://github.com/HarshalJain-cs', label: 'GitHub' },
  { icon: FiTwitter, href: 'https://twitter.com/harshaljain', label: 'Twitter' },
  { icon: FiMail, href: 'mailto:harshaljaincs@gmail.com', label: 'Email' },
  { icon: FiInstagram, href: 'https://instagram.com/harshaljain', label: 'Instagram' },
]

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-bg-secondary border-t border-glass-platinum">
      {/* Row 1: Brand + Newsletter */}
      <div className="container-custom py-12 border-b border-glass-platinum">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left: Branding + Socials */}
          <div>
            <Logo size="md" />
            <p className="mt-4 text-platinum-muted max-w-md">
              Tech Entrepreneur & Trader | Building at the intersection of Technology & Financial Markets
            </p>
            <div className="flex items-center space-x-4 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-platinum-muted hover:text-gold-bright transition-colors"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Right: Newsletter */}
          <div>
            <h3 className="text-platinum-bright font-heading font-semibold mb-4">
              Subscribe for Updates
            </h3>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-4 py-2 bg-glass-medium backdrop-blur-glass border border-glass-platinum rounded-lg text-platinum-main placeholder:text-platinum-dark focus:outline-none focus:border-gold-main transition-colors"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-gold-main text-bg-primary font-semibold rounded-lg hover:bg-gold-bright transition-colors"
              >
                Join
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Row 2: Navigation Grid (4 columns) */}
      <div className="container-custom py-12 border-b border-glass-platinum">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Column 1: Explore */}
          <div>
            <h4 className="text-platinum-bright font-heading font-semibold mb-4">Explore</h4>
            <ul className="space-y-2">
              {footerLinks.explore.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-platinum-muted hover:text-gold-bright transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Ventures */}
          <div>
            <h4 className="text-platinum-bright font-heading font-semibold mb-4">Ventures</h4>
            <ul className="space-y-2">
              {footerLinks.ventures.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-platinum-muted hover:text-gold-bright transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div>
            <h4 className="text-platinum-bright font-heading font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-platinum-muted hover:text-gold-bright transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Connect */}
          <div>
            <h4 className="text-platinum-bright font-heading font-semibold mb-4">Connect</h4>
            <ul className="space-y-2">
              {footerLinks.connect.map((link) => (
                <li key={link.label}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-platinum-muted hover:text-gold-bright transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-platinum-muted hover:text-gold-bright transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Row 3: Live Stats (4 metric cards) */}
      <div className="container-custom py-12 border-b border-glass-platinum">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <MetricCard
            icon={<FiGithub />}
            value="500+"
            label="GitHub Stars"
            variant="platinum"
            animate={false}
          />
          <MetricCard
            icon={<FiBriefcase />}
            value="150+"
            label="Total Projects"
            variant="platinum"
            animate={false}
          />
          <MetricCard
            icon={<FiAward />}
            value="15+"
            label="Certifications"
            variant="gold"
            animate={false}
          />
          <MetricCard
            icon={<FiTrendingUp />}
            value={247}
            label="Portfolio ROI"
            variant="emerald"
            prefix="+"
            suffix="%"
            animate={false}
          />
        </div>
      </div>

      {/* Row 4: Legal + Back to Top */}
      <div className="container-custom py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Left: Copyright */}
          <div className="text-platinum-dark text-sm">
            © 2025 Harshal Jain. All rights reserved.
          </div>

          {/* Center: Built with love */}
          <div className="text-platinum-dark text-sm">
            Built with ❤️ and ☕
          </div>

          {/* Right: Back to Top + Sitemap */}
          <div className="flex items-center gap-4">
            <Link href="/sitemap" className="text-platinum-dark hover:text-gold-bright text-sm transition-colors">
              Sitemap
            </Link>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 px-4 py-2 text-platinum-main hover:text-gold-bright transition-colors group"
            >
              <span className="text-sm">Back to Top</span>
              <FiArrowUp size={16} className="group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
