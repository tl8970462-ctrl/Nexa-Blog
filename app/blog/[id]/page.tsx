'use client'

import * as React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  Calendar, 
  User, 
  Clock, 
  Eye, 
  Share2, 
  Heart, 
  MessageCircle,
  ArrowLeft,
  Tag,
  ExternalLink,
  Twitter,
  Facebook,
  Linkedin
} from 'lucide-react'

// Mock data for blog post
const mockPost = {
  id: 1,
  title: "The Future of Web Development: Trends to Watch in 2024",
  content: `
    <h2>The Rise of AI-Powered Development</h2>
    <p>Artificial intelligence is revolutionizing the way we build websites. From code generation to design assistance, AI tools are becoming indispensable in the developer's toolkit. Tools like GitHub Copilot and ChatGPT are helping developers write code faster and with fewer errors.</p>
    
    <h3>Code Generation and Assistance</h3>
    <p>AI-powered code assistants can now understand context and generate entire functions, components, and even complete pages based on natural language descriptions. This dramatically reduces development time and allows developers to focus on more complex problem-solving tasks.</p>
    
    <h3>Design and Layout Automation</h3>
    <p>AI is also making waves in design automation. Tools can now analyze existing designs and generate new layouts, color schemes, and typography combinations that maintain brand consistency while exploring new creative directions.</p>

    <h2>WebAssembly and Performance</h2>
    <p>WebAssembly (WASM) continues to gain traction as a way to run high-performance applications directly in the browser. This opens up new possibilities for complex applications like video editing, 3D rendering, and scientific computing.</p>
    
    <h3>Gaming and Interactive Experiences</h3>
    <p>The gaming industry is particularly benefiting from WebAssembly, allowing for console-quality games to run directly in web browsers without plugins or downloads. This democratizes game development and distribution.</p>
    
    <h3>Enterprise Applications</h3>
    <p>Enterprise software is also embracing WebAssembly for performance-critical applications. Complex data analysis, real-time collaboration tools, and sophisticated visualization dashboards are now possible in web environments.</p>

    <h2>Progressive Web Apps Evolution</h2>
    <p>Progressive Web Apps (PWAs) are becoming more sophisticated, blurring the lines between web and native applications. With improved offline capabilities, push notifications, and hardware access, PWAs are becoming a viable alternative to traditional mobile apps.</p>
    
    <h3>Offline-First Architecture</h3>
    <p>Modern PWAs are designed with offline functionality as a core feature, not an afterthought. This ensures users can continue working even with unreliable internet connections, syncing data when connectivity is restored.</p>
    
    <h3>Native-Like Experiences</h3>
    <p>With access to device hardware like cameras, GPS, and sensors, PWAs can now offer experiences that rival native applications. This reduces development costs while maintaining high performance and user engagement.</p>

    <h2>Component-Driven Development</h2>
    <p>The component-based architecture popularized by frameworks like React, Vue, and Angular continues to evolve. Design systems and component libraries are becoming more sophisticated, enabling consistent user experiences across entire product ecosystems.</p>
    
    <h3>Micro-Frontends</h3>
    <p>Large organizations are adopting micro-frontend architectures, where different teams can work on separate parts of a web application independently. This improves development velocity and allows for more scalable team structures.</p>
    
    <h3>Component Marketplaces</h3>
    <p>The rise of component marketplaces and design system tools is making it easier than ever to build professional-looking applications quickly. Developers can now assemble complex interfaces from pre-built, tested components.</p>

    <h2>Accessibility and Inclusive Design</h2>
    <p>Web accessibility is no longer an afterthought but a fundamental requirement. Modern frameworks and tools are making it easier to build accessible applications from the ground up, ensuring that digital experiences are inclusive for all users.</p>
    
    <h3>Automated Accessibility Testing</h3>
    <p>Tools for automated accessibility testing are becoming more sophisticated, catching potential issues early in the development process. This proactive approach to accessibility reduces the need for costly retrofits and ensures better user experiences.</p>
    
    <h3>Inclusive Design Principles</h3>
    <p>Designers and developers are increasingly adopting inclusive design principles that consider users with various abilities, devices, and contexts. This leads to more robust and user-friendly applications that work well for everyone.</p>

    <h2>Serverless and Edge Computing</h2>
    <p>The shift toward serverless architectures and edge computing is transforming how we think about web application deployment and performance. By distributing computation closer to users, we can achieve faster load times and better user experiences.</p>
    
    <h3>Global Performance</h3>
    <p>Edge computing allows content to be served from locations closer to users, reducing latency and improving performance for global audiences. This is particularly important for media-rich applications and real-time interactions.</p>
    
    <h3>Cost Efficiency</h3>
    <p>Serverless architectures offer cost benefits by only charging for actual usage rather than maintaining always-on servers. This makes it easier for startups and small businesses to deploy scalable applications without significant upfront infrastructure costs.</p>

    <h2>Conclusion</h2>
    <p>The future of web development is exciting and full of possibilities. As these trends continue to evolve, we can expect to see more powerful, accessible, and user-friendly web applications that push the boundaries of what's possible in a browser. Developers who stay current with these trends will be well-positioned to create the next generation of web experiences.</p>
    
    <p>Whether you're a seasoned developer or just starting your journey, embracing these trends and continuously learning will be key to success in the ever-evolving world of web development.</p>
  `,
  author: {
    name: "Sarah Johnson",
    avatar: "/avatars/sarah.jpg",
    role: "Senior Developer",
    bio: "Sarah is a passionate web developer with over 10 years of experience in building scalable web applications. She specializes in frontend development and is always exploring the latest technologies."
  },
  date: "2024-01-15",
  readTime: "5 min read",
  category: "Technology",
  tags: ["Web Development", "Trends", "JavaScript", "AI", "WebAssembly"],
  image: "/images/tech-1.jpg",
  views: 1234,
  likes: 45,
  comments: 12,
  featured: true,
  relatedPosts: [
    {
      id: 2,
      title: "Minimalist Design Principles for Modern Websites",
      category: "Design",
      date: "2024-01-12"
    },
    {
      id: 4,
      title: "Building Scalable Applications with Microservices",
      category: "Technology",
      date: "2024-01-08"
    },
    {
      id: 6,
      title: "SEO Best Practices for 2024 and Beyond",
      category: "Marketing",
      date: "2024-01-03"
    }
  ]
}

const shareLinks = {
  twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(mockPost.title)}&url=${encodeURIComponent(window.location.href)}`,
  facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`,
  linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`
}

export default function BlogPostPage() {
  const [isLiked, setIsLiked] = React.useState(false)
  const [likeCount, setLikeCount] = React.useState(mockPost.likes)

  const handleLike = () => {
    setIsLiked(!isLiked)
    setLikeCount(prev => isLiked ? prev - 1 : prev + 1)
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Article Header */}
      <article className="bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-6">
              <Link href="/blog" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                Blog
              </Link>
              <span>›</span>
              <span className="text-gray-400 dark:text-gray-500">{mockPost.category}</span>
            </nav>

            {/* Title and Meta */}
            <div className="mb-8">
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
                {mockPost.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-4 text-gray-600 dark:text-gray-400 mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center text-white font-semibold">
                    {mockPost.author.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white">{mockPost.author.name}</div>
                    <div className="text-sm">{mockPost.author.role}</div>
                  </div>
                </div>
                <div className="w-1 h-1 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {formatDate(mockPost.date)}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {mockPost.readTime}
                </div>
                <div className="flex items-center gap-1">
                  <Eye className="w-4 h-4" />
                  {mockPost.views.toLocaleString()} views
                </div>
              </div>

              {/* Featured Badge */}
              {mockPost.featured && (
                <span className="inline-flex items-center gap-2 px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-300 rounded-full text-sm font-medium mb-6">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  Featured Article
                </span>
              )}
            </div>

            {/* Hero Image */}
            <div className="aspect-[2/1] bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl mb-8 overflow-hidden shadow-2xl">
              {/* Placeholder for hero image */}
              <div className="w-full h-full bg-gradient-to-br from-primary-400/20 to-transparent"></div>
            </div>

            {/* Content */}
            <div className="prose prose-lg max-w-none">
              <div dangerouslySetInnerHTML={{ __html: mockPost.content }} />
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
              {mockPost.tags.map((tag) => (
                <span key={tag} className="inline-flex items-center gap-1 px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full">
                  <Tag className="w-3 h-3" />
                  {tag}
                </span>
              ))}
            </div>

            {/* Author Bio */}
            <div className="mt-12 p-6 bg-gray-50 dark:bg-gray-700/50 rounded-xl">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center text-white text-xl font-bold">
                  {mockPost.author.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">{mockPost.author.name}</h4>
                  <p className="text-gray-600 dark:text-gray-400">{mockPost.author.role}</p>
                </div>
              </div>
              <p className="mt-4 text-gray-700 dark:text-gray-300">{mockPost.author.bio}</p>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-4">
                <button
                  onClick={handleLike}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                    isLiked
                      ? 'bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                  }`}
                >
                  <Heart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
                  {likeCount}
                </button>
                
                <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                  <MessageCircle className="w-5 h-5" />
                  {mockPost.comments} Comments
                </button>
              </div>

              {/* Share Buttons */}
              <div className="flex items-center gap-2 ml-auto">
                <span className="text-sm text-gray-600 dark:text-gray-400 mr-2">Share:</span>
                <Link href={shareLinks.twitter} target="_blank" className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                  <Twitter className="w-5 h-5" />
                </Link>
                <Link href={shareLinks.facebook} target="_blank" className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                  <Facebook className="w-5 h-5" />
                </Link>
                <Link href={shareLinks.linkedin} target="_blank" className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </article>

      {/* Related Posts */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Related Articles</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              {mockPost.relatedPosts.map((related, index) => (
                <motion.article
                  key={related.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="card group hover:shadow-lg transition-all duration-300 overflow-hidden"
                >
                  <div className="aspect-video bg-gradient-to-br from-primary-500 to-primary-600 group-hover:scale-110 transition-transform duration-300"></div>
                  
                  <div className="p-6">
                    <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                      {formatDate(related.date)} • {related.category}
                    </div>
                    
                    <Link href={`/blog/${related.id}`}>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 transition-colors line-clamp-2">
                        {related.title}
                      </h3>
                    </Link>
                    
                    <Link href={`/blog/${related.id}`} className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors text-sm">
                      Read Article
                      <ExternalLink className="w-4 h-4" />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Back to Blog */}
      <section className="py-12 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <Link href="/blog" className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors">
              <ArrowLeft className="w-5 h-5" />
              Back to Blog
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}