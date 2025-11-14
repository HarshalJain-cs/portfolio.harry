/**
 * Footer Component
 * Stock exchange themed footer with navigation and social links
 */

import Link from 'next/link'
import { FiGithub, FiLinkedin, FiMail, FiTwitter } from 'react-icons/fi'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'Trading Floor', href: '/' },
    { name: 'Prospectus', href: '/prospectus' },
    { name: 'Holdings', href: '/holdings' },
    { name: 'Investor Relations', href: '/investor-relations' },
  ]

  const ventureLinks = [
    { name: 'Tech Assets', href: '/ventures/tech-assets' },
    { name: 'Financial Instruments', href: '/ventures/financial-instruments' },
    { name: 'Research Papers', href: '/ventures/research-papers' },
    { name: 'Community Dividends', href: '/ventures/community-dividends' },
  ]

  const resourceLinks = [
    { name: 'Market Commentary', href: '/market-commentary' },
    { name: 'Analytics Dashboard', href: '/analytics' },
    { name: 'Download Center', href: '/downloads' },
    { name: 'Trading History', href: '/trading-history' },
  ]

  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/HarshalJain-cs',
      icon: FiGithub,
    },
    {
      name: 'LinkedIn',
      href: '#',
      icon: FiLinkedin,
    },
    {
      name: 'Twitter',
      href: '#',
      icon: FiTwitter,
    },
    {
      name: 'Email',
      href: 'mailto:harshaljaincs@gmail.com',
      icon: FiMail,
    },
  ]

  return (
    <footer className="stock-border-top bg-stock-board mt-auto">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <Link
              href="/"
              className="inline-block text-stock-cyan text-2xl font-heading font-black tracking-wider mb-4 hover:opacity-80 transition-opacity"
            >
              $HARSHAL
            </Link>
            <p className="text-stock-text/60 text-sm font-mono mb-4">
              Personal Stock Exchange
            </p>
            <p className="text-stock-text/40 text-xs leading-relaxed">
              Engineering degree holder with a finance mind at heart. Trading
              in technology, investing in knowledge, and delivering innovation
              dividends.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-stock-text font-mono text-xs uppercase tracking-wider mb-4 text-stock-cyan">
              Quick Navigation
            </h3>
            <ul className="space-y-2">
              {quickLinks.map(link => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-stock-text/60 hover:text-stock-cyan text-sm transition-colors inline-block hover:translate-x-1 transform duration-200"
                  >
                    → {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Ventures */}
          <div>
            <h3 className="text-stock-text font-mono text-xs uppercase tracking-wider mb-4 text-stock-cyan">
              Ventures
            </h3>
            <ul className="space-y-2">
              {ventureLinks.map(link => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-stock-text/60 hover:text-stock-cyan text-sm transition-colors inline-block hover:translate-x-1 transform duration-200"
                  >
                    → {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-stock-text font-mono text-xs uppercase tracking-wider mb-4 text-stock-cyan">
              Resources
            </h3>
            <ul className="space-y-2 mb-6">
              {resourceLinks.map(link => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-stock-text/60 hover:text-stock-cyan text-sm transition-colors inline-block hover:translate-x-1 transform duration-200"
                  >
                    → {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Social Links */}
            <div>
              <h4 className="text-stock-text/40 font-mono text-xs uppercase tracking-wider mb-3">
                Connect
              </h4>
              <div className="flex items-center gap-3">
                {socialLinks.map(social => (
                  <a
                    key={social.name}
                    href={social.href}
                    target={social.href.startsWith('mailto:') ? undefined : '_blank'}
                    rel={social.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                    className="text-stock-text/60 hover:text-stock-cyan transition-colors p-2 hover:bg-stock-navy/30 rounded"
                    aria-label={social.name}
                  >
                    <social.icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-stock-text/10 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="text-stock-text/40 text-xs font-mono text-center md:text-left">
              <span className="text-stock-cyan">©</span> {currentYear} Harshal
              Jain. All rights reserved.
              <span className="hidden md:inline text-stock-text/20 mx-2">
                |
              </span>
              <span className="block md:inline mt-1 md:mt-0">
                MARKET STATUS:{' '}
                <span className="text-stock-green">● LIVE</span>
              </span>
            </div>

            {/* Market Info */}
            <div className="text-stock-text/30 text-xs font-mono text-center md:text-right">
              <div className="flex items-center gap-2">
                <span className="hidden md:inline">EXCHANGE ID: $HARSHAL</span>
                <span className="text-stock-text/20">|</span>
                <span>ESTABLISHED 2025</span>
              </div>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-4 text-center">
            <p className="text-stock-text/20 text-xs font-mono italic">
              Built with Next.js, TypeScript & Tailwind CSS • Deployed on
              Vercel • Powered by Supabase
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
