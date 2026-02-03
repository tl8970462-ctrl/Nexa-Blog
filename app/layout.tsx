import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { SEO } from '@/components/seo'
import { getOrganizationSchema, getWebSiteSchema } from '@/components/seo'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'NexaBlog - Modern Blog Platform',
    template: '%s | NexaBlog'
  },
  description: 'A modern, scalable, informational blog website designed for creators and businesses. Clean, minimalist design with customizable branding.',
  keywords: ['blog', 'content', 'creators', 'business', 'modern design', 'minimalist'],
  authors: [{ name: 'NexaBlog Team' }],
  creator: 'NexaBlog Team',
  publisher: 'NexaBlog',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
    title: 'NexaBlog - Modern Blog Platform',
    description: 'A modern, scalable, informational blog website designed for creators and businesses.',
    siteName: 'NexaBlog',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'NexaBlog - Modern Blog Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NexaBlog - Modern Blog Platform',
    description: 'A modern, scalable, informational blog website designed for creators and businesses.',
    images: ['/og-image.jpg'],
    creator: '@nexablog',
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
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen bg-white dark:bg-gray-900">
            <Header />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}