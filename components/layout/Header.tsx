/**
 * Header Component with Navigation
 * Stock exchange themed navigation with $HARSHAL branding
 */

'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils/cn'
import { FiMenu, FiX, FiGithub, FiLinkedin } from 'react-icons/fi'
import ThemeToggle from '@/components/ui/ThemeToggle'
import SoundToggle from '@/components/ui/SoundToggle'
import AnimationToggle from '@/components/ui/AnimationToggle'

const navigation = [
  {
    name: 'TRADING FLOOR',
    href: '/',
    description: 'Homepage',
  },
  {
    name: 'PROSPECTUS',
    href: '/prospectus',
    description: 'About Me',
  },
  {
    name: 'VENTURES',
    href: '#',
    description: 'Projects & Work',
    submenu: [
      { name: 'Tech Assets', href: '/ventures/tech-assets' },
      { name: 'Financial Instruments', href: '/ventures/financial-instruments' },
      { name: 'Research Papers', href: '/ventures/research-papers' },
      { name: 'Community Dividends', href: '/ventures/community-dividends' },
    ],
  },
  {
    name: 'HOLDINGS',
    href: '/holdings',
    description: 'Skills & Expertise',
  },
  {
    name: 'PORTFOLIO',
    href: '#',
    description: 'Experience & Achievements',
    submenu: [
      { name: 'Trading History', href: '/trading-history' },
      { name: 'Credentials & Securities', href: '/credentials' },
      { name: 'Market Tournaments', href: '/tournaments' },
      { name: 'Investor Reviews', href: '/investor-reviews' },
    ],
  },
  {
    name: 'INSIGHTS',
    href: '#',
    description: 'Content & Analytics',
    submenu: [
      { name: 'Market Commentary', href: '/market-commentary' },
      { name: 'Analytics Dashboard', href: '/analytics' },
      { name: 'Download Center', href: '/downloads' },
    ],
  },
  {
    name: 'INVESTOR RELATIONS',
    href: '/investor-relations',
    description: 'Contact',
  },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const pathname = usePathname()

  const isActive = (href: string) => {
    if (href === '/') return pathname === href
    return pathname?.startsWith(href)
  }

  return (
    <header className="stock-border-bottom bg-stock-board sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Top Bar with Logo and Time */}
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <div className="text-stock-cyan text-2xl md:text-3xl font-heading font-black tracking-wider">
              $HARSHAL
            </div>
            <div className="hidden md:block text-stock-text/40 text-xs font-mono uppercase border-l border-stock-text/20 pl-3">
              Personal Stock Exchange
            </div>
          </Link>

          {/* Right Side: Settings + Social + Mobile Menu Button */}
          <div className="flex items-center gap-4">
            {/* Settings Toggles */}
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <SoundToggle />
              <AnimationToggle />
            </div>

            {/* Social Links (Desktop) */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href="https://github.com/HarshalJain-cs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-stock-text/60 hover:text-stock-cyan transition-colors p-2"
                aria-label="GitHub"
              >
                <FiGithub size={20} />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-stock-text/60 hover:text-stock-cyan transition-colors p-2"
                aria-label="LinkedIn"
              >
                <FiLinkedin size={20} />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-stock-text p-2 hover:text-stock-cyan transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:block pb-3">
          <ul className="flex items-center gap-6 font-mono text-xs uppercase">
            {navigation.map(item => (
              <li
                key={item.name}
                className="relative"
                onMouseEnter={() => item.submenu && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {item.submenu ? (
                  <>
                    <button
                      className={cn(
                        'text-stock-text/80 hover:text-stock-cyan transition-colors py-2 px-1',
                        'border-b-2 border-transparent hover:border-stock-cyan'
                      )}
                    >
                      {item.name} ▼
                    </button>

                    {/* Dropdown Menu */}
                    {activeDropdown === item.name && (
                      <div className="absolute top-full left-0 mt-2 w-56 bg-stock-board border-2 border-stock-navy shadow-stock-glow z-50">
                        {item.submenu.map(subitem => (
                          <Link
                            key={subitem.href}
                            href={subitem.href}
                            className={cn(
                              'block px-4 py-3 text-stock-text/80 hover:bg-stock-navy hover:text-stock-cyan transition-colors',
                              isActive(subitem.href) && 'bg-stock-navy text-stock-cyan'
                            )}
                          >
                            {subitem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className={cn(
                      'text-stock-text/80 hover:text-stock-cyan transition-colors py-2 px-1',
                      'border-b-2 transition-all',
                      isActive(item.href)
                        ? 'border-stock-cyan text-stock-cyan'
                        : 'border-transparent hover:border-stock-cyan'
                    )}
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[73px] bg-stock-dark/95 backdrop-blur-sm z-40">
          <nav className="container mx-auto px-4 py-6">
            <ul className="space-y-1">
              {navigation.map(item => (
                <li key={item.name}>
                  {item.submenu ? (
                    <div>
                      <div className="text-stock-cyan font-mono text-xs uppercase px-4 py-2">
                        {item.name}
                      </div>
                      <ul className="ml-4 space-y-1">
                        {item.submenu.map(subitem => (
                          <li key={subitem.href}>
                            <Link
                              href={subitem.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className={cn(
                                'block px-4 py-3 font-mono text-sm text-stock-text/80 hover:text-stock-cyan hover:bg-stock-navy/50 transition-colors',
                                isActive(subitem.href) &&
                                  'text-stock-cyan bg-stock-navy/50'
                              )}
                            >
                              {subitem.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={cn(
                        'block px-4 py-3 font-mono text-sm text-stock-text/80 hover:text-stock-cyan hover:bg-stock-navy/50 transition-colors',
                        isActive(item.href) && 'text-stock-cyan bg-stock-navy/50'
                      )}
                    >
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>

            {/* Mobile Social Links */}
            <div className="flex items-center gap-4 mt-8 px-4">
              <a
                href="https://github.com/HarshalJain-cs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-stock-text/60 hover:text-stock-cyan transition-colors p-2"
              >
                <FiGithub size={24} />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-stock-text/60 hover:text-stock-cyan transition-colors p-2"
              >
                <FiLinkedin size={24} />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
