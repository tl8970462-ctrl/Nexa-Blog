'use client'

import * as React from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Search, 
  Filter, 
  Calendar, 
  User, 
  Tag,
  ChevronLeft,
  ChevronRight,
  Clock,
  Eye,
  ArrowUp,
  ArrowDown
} from 'lucide-react'

// Mock data for blog posts
const mockPosts = [
  {
    id: 1,
    title: "The Future of Web Development: Trends to Watch in 2024",
    excerpt: "Explore the latest trends shaping the future of web development, from AI integration to new frameworks and technologies.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    author: {
      name: "Sarah Johnson",
      avatar: "/avatars/sarah.jpg",
      role: "Senior Developer"
    },
    date: "2024-01-15",
    readTime: "5 min read",
    category: "Technology",
    tags: ["Web Development", "Trends", "JavaScript"],
    image: "/images/tech-1.jpg",
    views: 1234,
    featured: true
  },
  {
    id: 2,
    title: "Minimalist Design Principles for Modern Websites",
    excerpt: "Learn how to apply minimalist design principles to create clean, effective, and user-friendly websites.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    author: {
      name: "Michael Chen",
      avatar: "/avatars/michael.jpg",
      role: "UI/UX Designer"
    },
    date: "2024-01-12",
    readTime: "8 min read",
    category: "Design",
    tags: ["Minimalism", "UI/UX", "Web Design"],
    image: "/images/design-1.jpg",
    views: 892,
    featured: false
  },
  {
    id: 3,
    title: "Content Marketing Strategies That Actually Work",
    excerpt: "Discover proven content marketing strategies that drive engagement, build authority, and convert readers into customers.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    author: {
      name: "Emily Rodriguez",
      avatar: "/avatars/emily.jpg",
      role: "Content Strategist"
    },
    date: "2024-01-10",
    readTime: "6 min read",
    category: "Marketing",
    tags: ["Content Marketing", "SEO", "Strategy"],
    image: "/images/marketing-1.jpg",
    views: 1567,
    featured: true
  },
  {
    id: 4,
    title: "Building Scalable Applications with Microservices",
    excerpt: "A comprehensive guide to designing and implementing microservices architecture for scalable web applications.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    author: {
      name: "David Kim",
      avatar: "/avatars/david.jpg",
      role: "Backend Engineer"
    },
    date: "2024-01-08",
    readTime: "12 min read",
    category: "Technology",
    tags: ["Microservices", "Architecture", "Scalability"],
    image: "/images/tech-2.jpg",
    views: 2145,
    featured: false
  },
  {
    id: 5,
    title: "The Psychology of Color in Branding",
    excerpt: "Understanding how colors influence emotions and decision-making in brand identity and marketing.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    author: {
      name: "Lisa Thompson",
      avatar: "/avatars/lisa.jpg",
      role: "Brand Consultant"
    },
    date: "2024-01-05",
    readTime: "4 min read",
    category: "Branding",
    tags: ["Branding", "Color Theory", "Psychology"],
    image: "/images/branding-1.jpg",
    views: 789,
    featured: false
  },
  {
    id: 6,
    title: "SEO Best Practices for 2024 and Beyond",
    excerpt: "Stay ahead of the curve with the latest SEO strategies and best practices for improved search rankings.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    author: {
      name: "Alex Morgan",
      avatar: "/avatars/alex.jpg",
      role: "SEO Specialist"
    },
    date: "2024-01-03",
    readTime: "7 min read",
    category: "Marketing",
    tags: ["SEO", "Search Engine Optimization", "Digital Marketing"],
    image: "/images/seo-1.jpg",
    views: 1890,
    featured: true
  }
]

const categories = ["All", "Technology", "Design", "Marketing", "Branding"]
const tags = ["Web Development", "Trends", "JavaScript", "Minimalism", "UI/UX", "Web Design", "Content Marketing", "SEO", "Strategy", "Microservices", "Architecture", "Scalability", "Branding", "Color Theory", "Psychology", "Digital Marketing"]

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = React.useState('')
  const [selectedCategory, setSelectedCategory] = React.useState('All')
  const [selectedTags, setSelectedTags] = React.useState<string[]>([])
  const [sortBy, setSortBy] = React.useState('date')
  const [sortOrder, setSortOrder] = React.useState('desc')
  const [currentPage, setCurrentPage] = React.useState(1)
  const [isFilterOpen, setIsFilterOpen] = React.useState(false)
  
  const postsPerPage = 6

  // Filter and sort posts
  const filteredPosts = React.useMemo(() => {
    let filtered = mockPosts.filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           post.content.toLowerCase().includes(searchQuery.toLowerCase())
      
      const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory
      
      const matchesTags = selectedTags.length === 0 || 
                         selectedTags.some(tag => post.tags.includes(tag))
      
      return matchesSearch && matchesCategory && matchesTags
    })

    // Sort posts
    filtered.sort((a, b) => {
      let aValue: any, bValue: any
      
      switch (sortBy) {
        case 'date':
          aValue = new Date(a.date).getTime()
          bValue = new Date(b.date).getTime()
          break
        case 'title':
          aValue = a.title.toLowerCase()
          bValue = b.title.toLowerCase()
          break
        case 'views':
          aValue = a.views
          bValue = b.views
          break
        default:
          aValue = new Date(a.date).getTime()
          bValue = new Date(b.date).getTime()
      }

      if (sortOrder === 'asc') {
        return aValue > bValue ? 1 : -1
      } else {
        return aValue < bValue ? 1 : -1
      }
    })

    return filtered
  }, [searchQuery, selectedCategory, selectedTags, sortBy, sortOrder])

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage)
  const currentPosts = filteredPosts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  )

  const handleTagToggle = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    )
    setCurrentPage(1)
  }

  const clearFilters = () => {
    setSearchQuery('')
    setSelectedCategory('All')
    setSelectedTags([])
    setSortBy('date')
    setSortOrder('desc')
    setCurrentPage(1)
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4"
            >
              Latest Insights & Stories
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg text-gray-600 dark:text-gray-400"
            >
              Discover the latest trends, tips, and insights from our team of experts.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 bg-white dark:bg-gray-800 border-b border-gray-100 dark:border-gray-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search Bar */}
          <div className="flex flex-col lg:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value)
                  setCurrentPage(1)
                }}
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
            
            <div className="flex gap-2">
              <button
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="flex items-center gap-2 px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"
              >
                <Filter className="w-5 h-5" />
                Filters
              </button>
              <button
                onClick={clearFilters}
                className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"
              >
                Clear
              </button>
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setSelectedCategory(category)
                  setCurrentPage(1)
                }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Sort Options */}
          <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
            <div className="flex gap-2 flex-wrap">
              {tags.slice(0, 8).map((tag) => (
                <button
                  key={tag}
                  onClick={() => handleTagToggle(tag)}
                  className={`px-3 py-1 rounded-full text-sm transition-colors ${
                    selectedTags.includes(tag)
                      ? 'bg-primary-600 text-white'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>

            <div className="flex gap-2 items-center">
              <span className="text-sm text-gray-600 dark:text-gray-400">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                <option value="date">Date</option>
                <option value="title">Title</option>
                <option value="views">Views</option>
              </select>
              <button
                onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
                className="p-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"
              >
                {sortOrder === 'asc' ? <ArrowUp className="w-4 h-4" /> : <ArrowDown className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-gray-500 dark:text-gray-400 text-lg mb-4">No articles found</div>
              <p className="text-gray-600 dark:text-gray-400 mb-8">Try adjusting your search criteria or filters.</p>
              <button
                onClick={clearFilters}
                className="btn-primary px-6 py-3 rounded-lg"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <AnimatePresence mode="wait">
                  {currentPosts.map((post, index) => (
                    <motion.article
                      key={post.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="card group hover:shadow-xl transition-all duration-300 overflow-hidden"
                    >
                      {/* Featured Badge */}
                      {post.featured && (
                        <div className="absolute top-4 left-4 z-10">
                          <span className="bg-primary-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                            Featured
                          </span>
                        </div>
                      )}

                      {/* Image */}
                      <div className="aspect-video bg-gray-200 dark:bg-gray-700 overflow-hidden">
                        <div className="w-full h-full bg-gradient-to-br from-primary-500 to-primary-600 group-hover:scale-110 transition-transform duration-300"></div>
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-3">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {new Date(post.date).toLocaleDateString()}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {post.readTime}
                          </span>
                          <span className="flex items-center gap-1">
                            <Eye className="w-4 h-4" />
                            {post.views.toLocaleString()}
                          </span>
                        </div>

                        <Link href={`/blog/${post.id}`}>
                          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 transition-colors line-clamp-2">
                            {post.title}
                          </h3>
                        </Link>

                        <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                          {post.excerpt}
                        </p>

                        {/* Author */}
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center text-white font-semibold">
                            {post.author.name.split(' ').map(n => n[0]).join('')}
                          </div>
                          <div>
                            <div className="font-medium text-gray-900 dark:text-white">{post.author.name}</div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">{post.author.role}</div>
                          </div>
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2">
                          <span className="inline-flex items-center gap-1 px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full">
                            <Tag className="w-3 h-3" />
                            {post.category}
                          </span>
                          {post.tags.slice(0, 2).map((tag) => (
                            <span key={tag} className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.article>
                  ))}
                </AnimatePresence>
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center items-center gap-4 mt-12">
                  <button
                    onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                    disabled={currentPage === 1}
                    className="flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    Previous
                  </button>

                  <div className="flex gap-2">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                      <button
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        className={`w-10 h-10 rounded-lg transition-colors ${
                          currentPage === page
                            ? 'bg-primary-600 text-white'
                            : 'border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                        }`}
                      >
                        {page}
                      </button>
                    ))}
                  </div>

                  <button
                    onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                    disabled={currentPage === totalPages}
                    className="flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    Next
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </div>
  )
}