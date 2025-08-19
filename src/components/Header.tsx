import { Link } from 'react-router-dom'
import { Heart, Menu, X, ChevronDown, BookOpen, Award, Users, Phone, Mail, HelpCircle } from 'lucide-react'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const courseDropdownItems = [
    { title: "EMT-Basic", description: "Foundation level emergency care", icon: "🚑", path: "/courses/emt-basic" },
    { title: "AEMT", description: "Advanced emergency medical technician", icon: "🏥", path: "/courses/aemt" },
    { title: "EMTI", description: "Emergency medical technician intermediate", icon: "⚕️", path: "/courses/emti" },
    { title: "EMTP", description: "Emergency medical technician paramedic", icon: "🩺", path: "/courses/emtp" },
    { title: "CCPC/FPC", description: "Critical care & flight paramedic", icon: "🚁", path: "/courses/ccpc-fpc" }
  ]

  const resourceDropdownItems = [
    { title: "Help Center", description: "Get answers to common questions", icon: HelpCircle, path: "/help" },
    { title: "Contact Support", description: "Reach our support team", icon: Mail, path: "/support" },
    { title: "Schedule Demo", description: "See RescuEd in action", icon: Phone, path: "/demo" }
  ]

  return (
    <header className="bg-gray-900/95 backdrop-blur-md border-b border-gray-800/50 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <motion.div 
              className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center shadow-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Heart className="w-5 h-5 text-white" />
            </motion.div>
            <span className="text-xl font-bold text-white group-hover:text-primary-300 transition-colors">
              Rescu<span className="text-primary-400">Ed</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {/* Courses Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('courses')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1 text-gray-300 hover:text-white transition-colors font-medium px-4 py-2 rounded-lg hover:bg-white/5">
                Courses
                <ChevronDown className="w-4 h-4" />
              </button>
              
              <AnimatePresence>
                {activeDropdown === 'courses' && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.96 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-0 mt-2 w-80 bg-gray-800/95 backdrop-blur-xl border border-gray-700/50 rounded-2xl shadow-2xl overflow-hidden"
                  >
                    <div className="p-3">
                      <div className="text-xs font-semibold text-gray-400 uppercase tracking-wide px-3 py-2">
                        Education by Certification Level
                      </div>
                      {courseDropdownItems.map((item) => (
                        <Link
                          key={item.title}
                          to={item.path}
                          className="flex items-center gap-3 px-3 py-3 text-gray-300 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-200 group"
                        >
                          <span className="text-2xl">{item.icon}</span>
                          <div className="flex-1">
                            <div className="font-medium group-hover:text-primary-300 transition-colors">
                              {item.title}
                            </div>
                            <div className="text-xs text-gray-400 group-hover:text-gray-300">
                              {item.description}
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link to="/about" className="text-gray-300 hover:text-white transition-colors font-medium px-4 py-2 rounded-lg hover:bg-white/5">
              About
            </Link>
            <Link to="/pricing" className="text-gray-300 hover:text-white transition-colors font-medium px-4 py-2 rounded-lg hover:bg-white/5">
              Pricing
            </Link>
            <Link to="/demo" className="text-gray-300 hover:text-white transition-colors font-medium px-4 py-2 rounded-lg hover:bg-white/5">
              Feature Demo
            </Link>

            {/* Resources Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('resources')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1 text-gray-300 hover:text-white transition-colors font-medium px-4 py-2 rounded-lg hover:bg-white/5">
                Support
                <ChevronDown className="w-4 h-4" />
              </button>
              
              <AnimatePresence>
                {activeDropdown === 'resources' && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.96 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full right-0 mt-2 w-72 bg-gray-800/95 backdrop-blur-xl border border-gray-700/50 rounded-2xl shadow-2xl overflow-hidden"
                  >
                    <div className="p-3">
                      {resourceDropdownItems.map((item) => (
                        <Link
                          key={item.title}
                          to={item.path}
                          className="flex items-center gap-3 px-3 py-3 text-gray-300 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-200 group"
                        >
                          <div className="w-8 h-8 bg-primary-500/20 rounded-lg flex items-center justify-center group-hover:bg-primary-500/30 transition-colors">
                            <item.icon className="w-4 h-4 text-primary-400" />
                          </div>
                          <div className="flex-1">
                            <div className="font-medium group-hover:text-primary-300 transition-colors">
                              {item.title}
                            </div>
                            <div className="text-xs text-gray-400 group-hover:text-gray-300">
                              {item.description}
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          {/* Desktop Auth */}
          <div className="hidden md:flex items-center space-x-4">
            <Link 
              to="/login" 
              className="text-gray-300 hover:text-white transition-colors font-medium px-4 py-2 rounded-lg hover:bg-white/5"
            >
              Sign In
            </Link>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link 
                to="/signup" 
                className="bg-primary-500 hover:bg-primary-600 text-white font-medium px-6 py-2.5 rounded-lg transition-all duration-200 shadow-lg shadow-primary-500/25"
              >
                Get Started
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-300 hover:text-white transition-colors rounded-lg hover:bg-white/5"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Simplified Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden border-t border-gray-800/50 py-4"
            >
              <div className="space-y-2">
                <Link 
                  to="/courses" 
                  className="block text-gray-300 hover:text-white transition-colors font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  All Courses
                </Link>
                <Link 
                  to="/about" 
                  className="block text-gray-300 hover:text-white transition-colors font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
                <Link 
                  to="/pricing" 
                  className="block text-gray-300 hover:text-white transition-colors font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Pricing
                </Link>
                <Link 
                  to="/demo" 
                  className="block text-gray-300 hover:text-white transition-colors font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Feature Demo
                </Link>
                <Link 
                  to="/support" 
                  className="block text-gray-300 hover:text-white transition-colors font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Support
                </Link>
                <div className="pt-4 border-t border-gray-800/50 space-y-3">
                  <Link 
                    to="/login" 
                    className="block text-center py-2 text-gray-300 hover:text-white transition-colors font-medium border border-gray-700 rounded-lg hover:bg-white/5"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Sign In
                  </Link>
                  <Link 
                    to="/signup" 
                    className="block text-center bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 rounded-lg transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}