'use client'

/**
 * NAVIGATION
 * Hide on scroll down, show on scroll up
 * Glass background when scrolled
 * 8 sections with mega dropdown for Projects
 * Mobile: Dot grid hamburger, slide from top overlay
 */

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Logo from '@/components/ui/Logo'
import Button from '@/components/ui/Button'
import { FiMenu, FiX, FiSettings, FiSearch, FiDownload } from 'react-icons/fi'
import { mobileMenuSlide } from '@/lib/animations'

const menuItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/prospectus' },
  {
    label: 'Projects',
    href: '/ventures/tech-assets',
    dropdown: [
      { label: 'Tech Assets', href: '/ventures/tech-assets' },
      { label: 'Financial Instruments', href: '/ventures/financial-instruments' },
      { label: 'Research Papers', href: '/ventures/research-papers' },
    ],
  },
  { label: 'Skills', href: '/holdings' },
  { label: 'Experience', href: '/trading-history' },
  { label: 'Blog', href: '/market-commentary' },
  { label: 'Analytics', href: '/analytics' },
  { label: 'Contact', href: '/investor-relations' },
]

export default function Navigation() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [lastScroll, setLastScroll] = useState(0)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY

      // Show/hide based on scroll direction
      if (currentScroll > lastScroll && currentScroll > 100) {
        setHidden(true)
      } else {
        setHidden(false)
      }

      setScrolled(currentScroll > 50)
      setLastScroll(currentScroll)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScroll])

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-1100 transition-all duration-300 ${
          scrolled ? 'bg-glass-light backdrop-blur-glass border-b border-glass-platinum' : ''
        }`}
        initial={{ y: 0 }}
        animate={{ y: hidden ? -100 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <Logo size="md" />
            </Link>

            {/* Desktop Menu - Center */}
            <div className="hidden lg:flex items-center space-x-8">
              {menuItems.map((item) => {
                const isActive = pathname === item.href || pathname?.startsWith(item.href)

                return (
                  <div key={item.label} className="relative group">
                    <Link
                      href={item.href}
                      className={`
                        text-sm uppercase tracking-wide font-semibold transition-all duration-200
                        ${isActive
                          ? 'text-gold-bright'
                          : 'text-platinum-main hover:text-gold-bright'
                        }
                      `}
                    >
                      {item.label}
                      {isActive && (
                        <motion.div
                          className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gold-main"
                          layoutId="activeNav"
                        />
                      )}
                    </Link>

                    {/* Dropdown if exists */}
                    {item.dropdown && (
                      <div className="absolute top-full left-0 mt-2 bg-glass-medium backdrop-blur-glass-md border border-glass-platinum rounded-lg p-4 min-w-[200px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                        <div className="space-y-2">
                          {item.dropdown.map((subItem) => (
                            <Link
                              key={subItem.label}
                              href={subItem.href}
                              className="block px-4 py-2 text-platinum-muted hover:text-gold-bright transition-colors rounded hover:bg-glass-subtle"
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>

            {/* Right Side - Desktop */}
            <div className="hidden lg:flex items-center space-x-4">
              <button className="p-2 text-platinum-main hover:text-gold-bright transition-colors">
                <FiSearch size={20} />
              </button>
              <button className="p-2 text-platinum-main hover:text-gold-bright transition-colors">
                <FiSettings size={20} />
              </button>
              <Button variant="gold" size="sm">
                <FiDownload size={16} className="mr-2" />
                Resume
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-platinum-main hover:text-gold-bright transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <FiX size={24} /> : (
                <div className="grid grid-cols-3 gap-1">
                  {[...Array(9)].map((_, i) => (
                    <div key={i} className="w-1 h-1 rounded-full bg-current" />
                  ))}
                </div>
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="lg:hidden fixed inset-0 top-20 bg-glass-heavy backdrop-blur-glass-lg z-1000"
            variants={mobileMenuSlide}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <div className="flex flex-col items-center justify-center h-full space-y-8 p-8">
              {menuItems.map((item) => (
                <div key={item.label} className="text-center">
                  <Link
                    href={item.href}
                    className="text-2xl text-platinum-bright hover:text-gold-bright transition-colors font-heading"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                  {item.dropdown && (
                    <div className="mt-4 space-y-2">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.label}
                          href={subItem.href}
                          className="block text-sm text-platinum-muted hover:text-gold-bright transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Button variant="gold" size="lg">
                <FiDownload className="mr-2" />
                Download Resume
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
