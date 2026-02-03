'use client'

import * as React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  FileText, 
  Scale, 
  Shield, 
  UserCheck, 
  Lock, 
  AlertTriangle,
  Clock,
  Zap
} from 'lucide-react'

export default function TermsOfServicePage() {
  const sections = [
    {
      id: 'acceptance',
      title: 'Acceptance of Terms',
      icon: <FileText className="w-6 h-6" />
    },
    {
      id: 'account-creation',
      title: 'Account Creation',
      icon: <UserCheck className="w-6 h-6" />
    },
    {
      id: 'user-conduct',
      title: 'User Conduct',
      icon: <Scale className="w-6 h-6" />
    },
    {
      id: 'intellectual-property',
      title: 'Intellectual Property',
      icon: <Shield className="w-6 h-6" />
    },
    {
      id: 'content-ownership',
      title: 'Content Ownership',
      icon: <Lock className="w-6 h-6" />
    },
    {
      id: 'prohibited-activities',
      title: 'Prohibited Activities',
      icon: <AlertTriangle className="w-6 h-6" />
    },
    {
      id: 'termination',
      title: 'Termination',
      icon: <Clock className="w-6 h-6" />
    },
    {
      id: 'disclaimer',
      title: 'Disclaimer of Warranties',
      icon: <Zap className="w-6 h-6" />
    },
    {
      id: 'limitation-liability',
      title: 'Limitation of Liability',
      icon: <Scale className="w-6 h-6" />
    },
    {
      id: 'governing-law',
      title: 'Governing Law',
      icon: <FileText className="w-6 h-6" />
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
                  Legal Agreement
                </span>
              </motion.div>
              
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                Terms of Service
              </h1>
              
              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
                Please read these Terms of Service carefully before using our platform. 
                By accessing or using our services, you agree to be bound by these terms.
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
                  Legal Support
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

      {/* Terms Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-12">
            
            {/* Acceptance of Terms */}
            <motion.div
              id="acceptance"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="card p-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-xl flex items-center justify-center text-primary-600 dark:text-primary-400">
                  <FileText className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Acceptance of Terms</h2>
                  <p className="text-gray-600 dark:text-gray-400">Last updated: January 2024</p>
                </div>
              </div>
              
              <div className="prose prose-lg max-w-none">
                <p>
                  These Terms of Service ("Terms") govern your access to and use of NexaBlog's services, 
                  including our website, mobile applications, and any other products or services we provide 
                  (collectively, the "Services").
                </p>
                <p>
                  By accessing or using our Services, you agree to be bound by these Terms. If you do not 
                  agree to all of the terms and conditions of this agreement, you may not access the Services 
                  or use any content available therein.
                </p>
                <p>
                  We reserve the right to modify these Terms at any time. Your continued use of the Services 
                  after any such changes constitutes your acceptance of the new Terms. We will notify users 
                  of material changes through our Services or by other means.
                </p>
              </div>
            </motion.div>

            {/* Account Creation */}
            <motion.div
              id="account-creation"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="card p-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-xl flex items-center justify-center text-primary-600 dark:text-primary-400">
                  <UserCheck className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Account Creation</h2>
                </div>
              </div>
              
              <div className="prose prose-lg max-w-none space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Account Requirements</h3>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                    <li>• You must be at least 13 years old to use our Services</li>
                    <li>• You must provide accurate and complete information when creating an account</li>
                    <li>• You are responsible for maintaining the confidentiality of your account credentials</li>
                    <li>• You agree to notify us immediately of any unauthorized use of your account</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Account Responsibilities</h3>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                    <li>• You are solely responsible for all activities that occur under your account</li>
                    <li>• You agree to use the Services only for lawful purposes</li>
                    <li>• You agree not to interfere with or disrupt the Services</li>
                    <li>• You agree to comply with all applicable laws and regulations</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Account Termination</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    We reserve the right to suspend or terminate your account at our sole discretion, 
                    without prior notice, for conduct that we believe violates these Terms or is harmful 
                    to other users, us, or third parties, or for any other reason.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* User Conduct */}
            <motion.div
              id="user-conduct"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="card p-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-xl flex items-center justify-center text-primary-600 dark:text-primary-400">
                  <Scale className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">User Conduct</h2>
                </div>
              </div>
              
              <div className="prose prose-lg max-w-none space-y-6">
                <p>When using our Services, you agree not to:</p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 p-4 rounded-lg">
                    <h4 className="font-semibold text-red-800 dark:text-red-400 mb-2">Prohibited Content</h4>
                    <ul className="space-y-1 text-red-700 dark:text-red-300 text-sm">
                      <li>• Post content that is unlawful, harmful, or offensive</li>
                      <li>• Harass, abuse, or harm other users</li>
                      <li>• Impersonate any person or entity</li>
                      <li>• Post false or misleading information</li>
                    </ul>
                  </div>
                  
                  <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 p-4 rounded-lg">
                    <h4 className="font-semibold text-red-800 dark:text-red-400 mb-2">Prohibited Activities</h4>
                    <ul className="space-y-1 text-red-700 dark:text-red-300 text-sm">
                      <li>• Violate any applicable laws or regulations</li>
                      <li>• Interfere with the operation of our Services</li>
                      <li>• Attempt to gain unauthorized access to our systems</li>
                      <li>• Use automated means to access our Services</li>
                    </ul>
                  </div>
                  
                  <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 p-4 rounded-lg">
                    <h4 className="font-semibold text-red-800 dark:text-red-400 mb-2">Intellectual Property</h4>
                    <ul className="space-y-1 text-red-700 dark:text-red-300 text-sm">
                      <li>• Infringe on any intellectual property rights</li>
                      <li>• Upload content you don't have rights to</li>
                      <li>• Remove copyright notices</li>
                      <li>• Violate any third-party rights</li>
                    </ul>
                  </div>
                  
                  <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 p-4 rounded-lg">
                    <h4 className="font-semibold text-red-800 dark:text-red-400 mb-2">Commercial Use</h4>
                    <ul className="space-y-1 text-red-700 dark:text-red-300 text-sm">
                      <li>• Use our Services for commercial purposes without permission</li>
                      <li>• Advertise or sell products/services</li>
                      <li>• Collect user information for commercial purposes</li>
                      <li>• Engage in spam or bulk messaging</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Intellectual Property */}
            <motion.div
              id="intellectual-property"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="card p-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-xl flex items-center justify-center text-primary-600 dark:text-primary-400">
                  <Shield className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Intellectual Property</h2>
                </div>
              </div>
              
              <div className="prose prose-lg max-w-none space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Our Content</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    The Services and their entire contents, features, and functionality (including but not limited to 
                    all information, software, text, displays, images, video, and audio, and the design, selection, 
                    and arrangement thereof) are owned by NexaBlog, its licensors, or other providers of such material 
                    and are protected by United States and international copyright, trademark, patent, trade secret, 
                    and other intellectual property or proprietary rights laws.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Your Content</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    You retain all ownership rights to your content. By submitting content to our Services, 
                    you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, 
                    publish, distribute, and display your content in connection with the Services.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">License Restrictions</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    You may not copy, modify, create derivative works of, publicly display, publicly perform, 
                    republish, download, store, or transmit any of the material on our Services, except as follows:
                  </p>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                    <li>• Your computer may temporarily store copies of such materials in RAM incidental to your accessing and viewing those materials</li>
                    <li>• You may store files that are automatically cached by your web browser for display enhancement purposes</li>
                    <li>• You may print or download one copy of a reasonable number of pages of the Services for your own personal, non-commercial use</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Prohibited Activities */}
            <motion.div
              id="prohibited-activities"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="card p-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-xl flex items-center justify-center text-red-600 dark:text-red-400">
                  <AlertTriangle className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Prohibited Activities</h2>
                </div>
              </div>
              
              <div className="prose prose-lg max-w-none space-y-6">
                <p>You agree not to engage in any of the following prohibited activities:</p>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Illegal Activities</h3>
                    <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                      <li>• Violating any applicable federal, state, local, or international law or regulation</li>
                      <li>• Engaging in any fraudulent, deceptive, or misleading conduct</li>
                      <li>• Engaging in any activity that infringes the intellectual property rights of others</li>
                      <li>• Engaging in any activity that violates the privacy rights of others</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">System Abuse</h3>
                    <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                      <li>• Attempting to probe, scan, or test the vulnerability of any system or network</li>
                      <li>• Attempting to access any systems or accounts you are not authorized to access</li>
                      <li>• Interfering with or disrupting the integrity or performance of the Services</li>
                      <li>• Attempting to gain unauthorized access to any portion of the Services</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Content Violations</h3>
                    <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                      <li>• Uploading, posting, or otherwise transmitting any content that is unlawful, harmful, threatening, abusive, harassing, defamatory, vulgar, obscene, or otherwise objectionable</li>
                      <li>• Impersonating any person or entity or falsely stating or otherwise misrepresenting your affiliation with a person or entity</li>
                      <li>• Uploading, posting, or otherwise transmitting any content that you do not have a right to transmit under any law or under contractual or fiduciary relationships</li>
                      <li>• Uploading, posting, or otherwise transmitting any content that infringes any patent, trademark, trade secret, copyright, or other proprietary rights of any party</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8 md:p-12 text-white"
            >
              <h2 className="text-2xl font-bold mb-4">Need Legal Assistance?</h2>
              <p className="text-red-100 mb-6 max-w-2xl">
                If you have questions about these Terms of Service or need legal assistance, 
                please contact our legal team for support.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Contact Legal Team
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors"
                >
                  View Privacy Policy
                </motion.button>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  )
}