'use client'

import * as React from 'react'
import Head from 'next/head'

interface SEOProps {
  title?: string
  description?: string
  keywords?: string[]
  canonical?: string
  ogImage?: string
  ogType?: 'website' | 'article'
  twitterCard?: 'summary' | 'summary_large_image'
  noIndex?: boolean
  structuredData?: any
}

export function SEO({
  title,
  description,
  keywords = [],
  canonical,
  ogImage = '/og-image.jpg',
  ogType = 'website',
  twitterCard = 'summary_large_image',
  noIndex = false,
  structuredData
}: SEOProps) {
  const defaultTitle = 'NexaBlog - Modern Blog Platform'
  const defaultDescription = 'A modern, scalable, informational blog website designed for creators and businesses. Clean, minimalist design with customizable branding.'
  const defaultKeywords = ['blog', 'content', 'creators', 'business', 'modern design', 'minimalist', 'SEO', 'responsive']

  const pageTitle = title ? `${title} | NexaBlog` : defaultTitle
  const pageDescription = description || defaultDescription
  const pageKeywords = keywords.length > 0 ? [...defaultKeywords, ...keywords] : defaultKeywords
  const pageCanonical = canonical || `https://nexablog-platform.vercel.app${typeof window !== 'undefined' ? window.location.pathname : ''}`

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta name="keywords" content={pageKeywords.join(', ')} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#3b82f6" />
      <meta name="author" content="NexaBlog Team" />
      <meta name="robots" content={noIndex ? "noindex, nofollow" : "index, follow"} />
      
      {/* Open Graph */}
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={pageCanonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="NexaBlog" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:creator" content="@nexablog" />
      <meta name="twitter:site" content="@nexablog" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={pageCanonical} />
      
      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />
      
      {/* Preload critical resources */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* Structured Data */}
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData)
          }}
        />
      )}
      
      {/* Performance optimizations */}
      <meta name="msapplication-TileColor" content="#3b82f6" />
      <meta name="msapplication-config" content="/browserconfig.xml" />
      
      {/* Security headers */}
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
      <meta httpEquiv="X-Frame-Options" content="DENY" />
      <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
    </Head>
  )
}

// Common structured data types
export const getBlogPostingSchema = (props: {
  headline: string
  description: string
  author: string
  datePublished: string
  dateModified?: string
  image?: string
  url: string
}) => ({
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: props.headline,
  description: props.description,
  author: {
    "@type": "Person",
    name: props.author
  },
  datePublished: props.datePublished,
  dateModified: props.dateModified || props.datePublished,
  image: props.image,
  url: props.url,
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": props.url
  }
})

export const getOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "NexaBlog",
  description: "A modern, scalable blog platform designed for creators and businesses.",
  url: "https://nexablog-platform.vercel.app",
  logo: "https://nexablog-platform.vercel.app/logo.png",
  foundingDate: "2024",
  founders: [
    {
      "@type": "Person",
      name: "Sarah Johnson"
    }
  ],
  sameAs: [
    "https://twitter.com/nexablog",
    "https://facebook.com/nexablog",
    "https://instagram.com/nexablog"
  ]
})

export const getWebSiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "NexaBlog",
  url: "https://nexablog-platform.vercel.app",
  description: "A modern, scalable blog platform for creators and businesses.",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://nexablog-platform.vercel.app/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
})