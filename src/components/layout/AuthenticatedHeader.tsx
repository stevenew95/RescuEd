import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Heart, 
  Home, 
  BookOpen, 
  Award, 
  Users, 
  Settings, 
  Menu, 
  X,
  Search,
  Bell,
  ChevronDown,
  LogOut,
  User
} from 'lucide-react'
import { useAuth } from '../../contexts/AuthContext'

interface User {
  firstName: string
  lastName: string
  email: string
  certificationLevel: string
}

interface AuthenticatedHeaderProps {
  user: User
}

export default function AuthenticatedHeader({ user }: AuthenticatedHeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)
  const location = useLocation()
  const { signOut } = useAuth()

  const navigation = [
    { name: 'Dashboard', href: '/dashboard', icon: Home },
    { name: 'Courses', href: '/courses', icon: BookOpen },
    { name: 'My Learning', href: '/my-learning', icon: Award },
    { name: 'Community', href: '/community', icon: Users },
  ]

  const userMenuItems = [
    { name: 'Account Settings', href: '/account', icon: Settings },
    { name: 'Profile', href: '/profile', icon: User },
    { name: 'Sign Out', href: '#', icon: LogOut }
  ]

  const isActive = (href: string) => location.pathname === href

  const handleSignOut = async () => {
    try {
      await signOut()
      // Router will automatically redirect to login due to our auth guard
    } catch (error) {
      console.error('Error signing out:', error)
    }
  }

  const handleMenuItemClick = (item: typeof userMenuItems[0]) => {
    if (item.name === 'Sign Out') {
      handleSignOut()
    }
    setIsUserMenuOpen(false)
    setIsMobileMenuOpen(false)
  }

  return (
    <header className="bg-gray-900/95 backdrop-blur-md border-b border-gray-800/50 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/dashboard" className="flex items-center gap-3 group">
            <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center">
              <Heart className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white group-hover:text-primary-300 transition-colors">
              Rescu<span className="text-primary-400">Ed</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                  isActive(item.href)
                    ? 'bg-primary-500/20 text-primary-300'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                <item.icon className="w-4 h-4" />
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Right Section */}
          <div className="hidden md:flex items-center gap-4">
            {/* Search */}
            <motion.button
              className="p-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Search className="w-5 h-5" />
            </motion.button>

            {/* Notifications */}
            <motion.button
              className="p-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors relative"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Bell className="w-5 h-5" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
            </motion.button>

            {/* User Menu */}
            <div className="relative">
              <motion.button
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                className="flex items-center gap-3 p-2 hover:bg-white/5 rounded-lg transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">
                    {user.firstName[0]}{user.lastName[0]}
                  </span>
                </div>
                <div className="text-left">
                  <div className="text-white text-sm font-medium">
                    {user.firstName} {user.lastName}
                  </div>
                  <div className="text-gray-400 text-xs">{user.certificationLevel}</div>
                </div>
                <ChevronDown className="w-4 h-4 text-gray-400" />
              </motion.button>

              {/* User Dropdown */}
              <AnimatePresence>
                {isUserMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.95 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full right-0 mt-2 w-56 bg-gray-800/95 backdrop-blur-xl border border-gray-700/50 rounded-xl shadow-2xl overflow-hidden"
                  >
                    <div className="p-3">
                      <div className="px-3 py-2 border-b border-gray-700/50 mb-2">
                        <div className="text-white font-medium">{user.firstName} {user.lastName}</div>
                        <div className="text-gray-400 text-sm">{user.email}</div>
                      </div>
                      {userMenuItems.map((item) => (
                        <button
                          key={item.name}
                          onClick={() => handleMenuItemClick(item)}
                          className="w-full flex items-center gap-3 px-3 py-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200 text-left"
                        >
                          <item.icon className="w-4 h-4" />
                          {item.name}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-gray-300 hover:text-white transition-colors rounded-lg hover:bg-white/5"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden border-t border-gray-800/50 py-4"
            >
              <div className="space-y-2">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-colors ${
                      isActive(item.href)
                        ? 'bg-primary-500/20 text-primary-300'
                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <item.icon className="w-5 h-5" />
                    {item.name}
                  </Link>
                ))}
                
                <div className="pt-4 border-t border-gray-800/50">
                  <div className="px-4 py-2 text-gray-400 text-sm">
                    {user.firstName} {user.lastName} • {user.certificationLevel}
                  </div>
                  {userMenuItems.map((item) => (
                    <button
                      key={item.name}
                      onClick={() => handleMenuItemClick(item)}
                      className="w-full flex items-center gap-3 px-4 py-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors text-left"
                    >
                      <item.icon className="w-5 h-5" />
                      {item.name}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Click outside to close user menu */}
      {isUserMenuOpen && (
        <div 
          className="fixed inset-0 z-30" 
          onClick={() => setIsUserMenuOpen(false)}
        />
      )}
    </header>
  )
}