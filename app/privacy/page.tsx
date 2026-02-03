'use client'

import * as React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Shield, Lock, User, Globe, Zap, Clock } from 'lucide-react'

export default function PrivacyPolicyPage() {
  const sections = [
    {
      id: 'introduction',
      title: 'Introduction',
      icon: <Shield className="w-6 h-6" />
    },
    {
      id: 'information-collected',
      title: 'Information We Collect',
      icon: <User className="w-6 h-6" />
    },
    {
      id: 'how-we-use',
      title: 'How We Use Your Information',
      icon: <Globe className="w-6 h-6" />
    },
    {
      id: 'data-sharing',
      title: 'Data Sharing and Disclosure',
      icon: <Zap className="w-6 h-6" />
    },
    {
      id: 'your-rights',
      title: 'Your Rights and Choices',
      icon: <Lock className="w-6 h-6" />
    },
    {
      id: 'data-security',
      title: 'Data Security',
      icon: <Shield className="w-6 h-6" />
    },
    {
      id: 'international',
      title: 'International Data Transfers',
      icon: <Globe className="w-6 h-6" />
    },
    {
      id: 'children-privacy',
      title: 'Children\'s Privacy',
      icon: <User className="w-6 h-6" />
    },
    {
      id: 'changes-policy',
      title: 'Changes to This Policy',
      icon: <Clock className="w-6 h-6" />
    },
    {
      id: 'contact-us',
      title: 'Contact Us',
      icon: <Shield className="w-6 h-6" />
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-transparent to-primary-600/10"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-block mb-6"
              >
                <span className="bg-gradient-to-r from-primary-500 to-primary-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                  Your Privacy Matters
                </span>
              </motion.div>
              
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                Privacy Policy
              </h1>
              
              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
                We are committed to protecting your privacy and ensuring the security of your personal information. 
                This policy explains how we collect, use, and safeguard your data.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary px-8 py-3 rounded-lg font-semibold text-lg"
                >
                  Download PDF
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-secondary px-8 py-3 rounded-lg font-semibold text-lg"
                >
                  Contact Privacy Team
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Table of Contents</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {sections.map((section, index) => (
                <motion.div
                  key={section.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                >
                  <div className="w-10 h-10 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center text-primary-600 dark:text-primary-400">
                    {section.icon}
                  </div>
                  <Link
                    href={`#${section.id}`}
                    className="text-gray-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors font-medium"
                  >
                    {section.title}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-12">
            
            {/* Introduction */}
            <motion.div
              id="introduction"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="card p-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-xl flex items-center justify-center text-primary-600 dark:text-primary-400">
                  <Shield className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Introduction</h2>
                  <p className="text-gray-600 dark:text-gray-400">Last updated: January 2024</p>
                </div>
              </div>
              
              <div className="prose prose-lg max-w-none">
                <p>
                  At NexaBlog, we respect your privacy and are committed to protecting your personal information. 
                  This Privacy Policy explains how we collect, use, disclose, and safeguard your information when 
                  you visit our website, use our services, or interact with us.
                </p>
                <p>
                  Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, 
                  please do not access the site or use our services.
                </p>
              </div>
            </motion.div>

            {/* Information We Collect */}
            <motion.div
              id="information-collected"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="card p-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-xl flex items-center justify-center text-primary-600 dark:text-primary-400">
                  <User className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Information We Collect</h2>
                </div>
              </div>
              
              <div className="prose prose-lg max-w-none space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Personal Information</h3>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                    <li>• Name and contact information (email address, phone number)</li>
                    <li>• Account credentials (username, password)</li>
                    <li>• Payment information (credit card details, billing address)</li>
                    <li>• Profile information (bio, social media links, profile picture)</li>
                    <li>• Communication preferences and feedback</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Usage Information</h3>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                    <li>• IP address, browser type, and operating system</li>
                    <li>• Pages visited, time spent on pages, and navigation paths</li>
                    <li>• Device information and unique device identifiers</li>
                    <li>• Cookies and tracking technologies data</li>
                    <li>• Interaction with our content and features</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Content Information</h3>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                    <li>• Blog posts, comments, and other user-generated content</li>
                    <li>• Images, videos, and other media files</li>
                    <li>• Analytics data and engagement metrics</li>
                    <li>• Subscription and newsletter preferences</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* How We Use Your Information */}
            <motion.div
              id="how-we-use"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="card p-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-xl flex items-center justify-center text-primary-600 dark:text-primary-400">
                  <Globe className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">How We Use Your Information</h2>
                </div>
              </div>
              
              <div className="prose prose-lg max-w-none space-y-6">
                <p>We use the information we collect for various purposes, including:</p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Account Management</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Create and manage your account, process transactions, and provide customer support.
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Service Improvement</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Analyze usage patterns and improve our services and user experience.
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Communication</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Send updates, newsletters, and respond to your inquiries.
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Security</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Protect against fraud, unauthorized access, and other illegal activities.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Data Sharing and Disclosure */}
            <motion.div
              id="data-sharing"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="card p-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-xl flex items-center justify-center text-primary-600 dark:text-primary-400">
                  <Zap className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Data Sharing and Disclosure</h2>
                </div>
              </div>
              
              <div className="prose prose-lg max-w-none space-y-6">
                <p>We may share your information with third parties in the following circumstances:</p>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Service Providers</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      We may share your information with third-party service providers who perform services on our behalf, 
                      such as payment processing, data analysis, email delivery, hosting services, customer service, and marketing assistance.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Business Transfers</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      We may share or transfer your information in connection with, or during negotiations of, any merger, 
                      sale of company assets, financing, or acquisition of all or a portion of our business to another company.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Legal Requirements</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      We may disclose your information if we are required to do so by law or in response to valid requests 
                      by public authorities (e.g., a court or a government agency).
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">With Your Consent</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      We may disclose your personal information for any other purpose with your consent.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Your Rights and Choices */}
            <motion.div
              id="your-rights"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="card p-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-xl flex items-center justify-center text-primary-600 dark:text-primary-400">
                  <Lock className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Your Rights and Choices</h2>
                </div>
              </div>
              
              <div className="prose prose-lg max-w-none space-y-6">
                <p>Depending on your location, you may have certain rights regarding your personal information:</p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Access and Portability</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      You have the right to access and receive a copy of your personal information.
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Correction</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      You have the right to have your personal information corrected if it's inaccurate.
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Deletion</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      You have the right to request deletion of your personal information.
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Restriction</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      You have the right to restrict or object to the processing of your personal information.
                    </p>
                  </div>
                </div>
                
                <p className="mt-4 text-gray-600 dark:text-gray-400">
                  To exercise any of these rights, please contact us using the information provided in the "Contact Us" section below.
                </p>
              </div>
            </motion.div>

            {/* Contact Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 md:p-12 text-white"
            >
              <h2 className="text-2xl font-bold mb-4">Questions About Our Privacy Practices?</h2>
              <p className="text-primary-100 mb-6 max-w-2xl">
                If you have questions or comments about this Privacy Policy or our privacy practices, 
                please contact our Data Protection Officer.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Contact Privacy Team
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors"
                >
                  View Data Request Form
                </motion.button>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  )
}