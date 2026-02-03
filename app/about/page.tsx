'use client'

import * as React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  Sparkles, 
  Users, 
  Globe, 
  Shield, 
  Zap, 
  Heart,
  ArrowRight,
  Star,
  Target,
  Lightbulb,
  Rocket
} from 'lucide-react'

const teamMembers = [
  {
    name: "Sarah Johnson",
    role: "Founder & CEO",
    image: "/avatars/sarah.jpg",
    bio: "Visionary leader with 15 years of experience in digital innovation and content strategy.",
    expertise: ["Strategy", "Product", "Leadership"]
  },
  {
    name: "Michael Chen",
    role: "CTO",
    image: "/avatars/michael.jpg",
    bio: "Technology expert specializing in scalable architectures and modern web technologies.",
    expertise: ["Architecture", "Engineering", "Innovation"]
  },
  {
    name: "Emily Rodriguez",
    role: "Head of Design",
    image: "/avatars/emily.jpg",
    bio: "Creative director passionate about user-centered design and brand experiences.",
    expertise: ["Design", "UX", "Branding"]
  },
  {
    name: "David Kim",
    role: "Lead Developer",
    image: "/avatars/david.jpg",
    bio: "Full-stack developer with expertise in modern frameworks and performance optimization.",
    expertise: ["Development", "Performance", "APIs"]
  }
]

const values = [
  {
    icon: <Sparkles className="w-8 h-8" />,
    title: "Innovation",
    description: "We embrace cutting-edge technologies and creative solutions to stay ahead of industry trends."
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Community",
    description: "We believe in building strong relationships and fostering a supportive creator ecosystem."
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Global Impact",
    description: "Our mission is to empower creators worldwide to share their stories and ideas."
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Integrity",
    description: "We operate with transparency, honesty, and ethical practices in everything we do."
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Excellence",
    description: "We strive for the highest quality in our products, services, and customer experience."
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: "Passion",
    description: "We're driven by our love for technology, design, and helping creators succeed."
  }
]

const milestones = [
  { year: "2024", event: "Company Founded", description: "NexaBlog was born with a vision to revolutionize content creation." },
  { year: "2024", event: "Beta Launch", description: "Our platform went live with early adopters and received overwhelming feedback." },
  { year: "2025", event: "10K Users", description: "We reached our first major milestone with 10,000 active creators on our platform." },
  { year: "2025", event: "Series A", description: "Secured funding to accelerate our mission and expand our team." },
  { year: "2026", event: "50K Users", description: "Continued growth with creators from over 100 countries." },
  { year: "2026", event: "Global Expansion", description: "Launched localized versions and expanded our global presence." }
]

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-transparent to-primary-600/10"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
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
                  Since 2024
                </span>
              </motion.div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                Building the Future of
                <br />
                <span className="gradient-text">Content Creation</span>
              </h1>
              
              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed max-w-2xl">
                We're on a mission to empower creators, businesses, and visionaries to share their stories 
                with the world through beautiful, modern, and powerful blog platforms.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary px-8 py-3 rounded-lg font-semibold text-lg flex items-center justify-center gap-2"
                >
                  Join Our Mission
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-secondary px-8 py-3 rounded-lg font-semibold text-lg"
                >
                  Meet the Team
                </motion.button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative"
            >
              <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden border border-gray-100 dark:border-gray-700">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-transparent"></div>
                <div className="p-8">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary-600">50K+</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Happy Creators</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary-600">100+</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Countries</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary-600">50K+</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Articles Published</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary-600">4.9/5</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">User Rating</div>
                    </div>
                  </div>
                  
                  <div className="mt-8 grid grid-cols-3 gap-4">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="aspect-square bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg"></div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4"
            >
              Our Story
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg text-gray-600 dark:text-gray-400"
            >
              From a simple idea to a global platform, our journey has been driven by a passion 
              for empowering creators and making content creation accessible to everyone.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card p-6 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center text-primary-600 dark:text-primary-400 group-hover:scale-110 transition-transform duration-200">
                    <Star className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">{milestone.year}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">{milestone.event}</div>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {milestone.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4"
            >
              Our Core Values
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg text-gray-600 dark:text-gray-400"
            >
              These principles guide everything we do and help us build a better future for content creation.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card p-6 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-xl flex items-center justify-center text-primary-600 dark:text-primary-400 mb-4 group-hover:scale-110 transition-transform duration-200">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4"
            >
              Meet Our Team
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg text-gray-600 dark:text-gray-400"
            >
              A diverse team of passionate individuals working together to make content creation 
              accessible and beautiful for everyone.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card p-6 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex items-center gap-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center text-white text-2xl font-bold group-hover:scale-110 transition-transform duration-200">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                      {member.name}
                    </h3>
                    <p className="text-primary-600 dark:text-primary-400 font-medium mb-3">
                      {member.role}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                      {member.bio}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map((exp) => (
                        <span key={exp} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full">
                          {exp}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-3xl p-8 md:p-12 text-white text-center"
          >
            <Rocket className="w-12 h-12 mx-auto mb-4 text-white/80" />
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Ready to Join Our Journey?
            </h2>
            <p className="text-lg text-primary-100 mb-8 max-w-2xl mx-auto">
              Whether you're a creator looking for the perfect platform or a developer wanting to 
              build something amazing, we'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-200"
              >
                Get Started
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary-600 transition-colors duration-200"
              >
                Contact Us
              </motion.button>
            </div>
            <p className="text-sm text-primary-200 mt-4">
              Let's build the future of content creation together
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}