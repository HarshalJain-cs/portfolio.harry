/**
 * Root Layout Component
 * Defines the overall structure and metadata for the portfolio
 */

import type { Metadata } from 'next'
import '../styles/globals.css'

// SEO Metadata
export const metadata: Metadata = {
  title: {
    default: 'Harshal Jain | Engineering × Finance Portfolio',
    template: '%s | Harshal Jain',
  },
  description:
    'Stock exchange themed portfolio showcasing tech projects and financial analysis by Harshal Jain. Engineering student with finance expertise, exploring the intersection of technology and markets.',
  keywords: [
    'Harshal Jain',
    'Portfolio',
    'Engineering',
    'Finance',
    'Stock Market',
    'Trading',
    'FinTech',
    'Full Stack Developer',
    'Financial Analysis',
    'Investment',
  ],
  authors: [{ name: 'Harshal Jain', url: 'https://github.com/HarshalJain-cs' }],
  creator: 'Harshal Jain',
  publisher: 'Harshal Jain',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    title: 'Harshal Jain | Engineering × Finance Portfolio',
    description:
      'Stock exchange themed portfolio showcasing tech projects and financial analysis',
    siteName: 'Harshal Jain Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Harshal Jain Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Harshal Jain | Engineering × Finance Portfolio',
    description:
      'Stock exchange themed portfolio showcasing tech projects and financial analysis',
    images: ['/og-image.jpg'],
    creator: '@HarshalJain',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        {/* Google Analytics */}
        {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}');
                `,
              }}
            />
          </>
        )}
      </head>
      <body className="min-h-screen">
        {children}
      </body>
    </html>
  )
}
