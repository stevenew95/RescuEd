import { motion } from 'framer-motion'
import { 
  BookOpen, 
  Download, 
  Calendar, 
  Users, 
  Search,
  FileText,
  Award,
  MessageCircle,
  Zap
} from 'lucide-react'

interface QuickAction {
  id: string
  title: string
  description: string
  icon: React.ElementType
  color: string
  href?: string
  onClick?: () => void
}

export default function QuickActions() {
  const quickActions: QuickAction[] = [
    {
      id: 'browse-courses',
      title: 'Browse Courses',
      description: 'Explore our full catalog',
      icon: BookOpen,
      color: 'from-blue-500 to-purple-600',
      href: '/courses'
    },
    {
      id: 'certificates',
      title: 'My Certificates',
      description: 'Download your achievements',
      icon: Award,
      color: 'from-yellow-500 to-orange-500',
      href: '/certificates'
    },
    {
      id: 'schedule',
      title: 'Study Schedule',
      description: 'Plan your learning time',
      icon: Calendar,
      color: 'from-green-500 to-teal-500',
      href: '/schedule'
    },
    {
      id: 'community',
      title: 'Join Discussions',
      description: 'Connect with other providers',
      icon: MessageCircle,
      color: 'from-purple-500 to-pink-500',
      href: '/community'
    },
    {
      id: 'search',
      title: 'Search Content',
      description: 'Find specific topics',
      icon: Search,
      color: 'from-gray-500 to-gray-600',
      onClick: () => {
        // TODO: Open search modal
        console.log('Open search')
      }
    },
    {
      id: 'transcript',
      title: 'CE Transcript',
      description: 'View your complete record',
      icon: FileText,
      color: 'from-indigo-500 to-blue-500',
      href: '/transcript'
    }
  ]

  const handleActionClick = (action: QuickAction) => {
    if (action.onClick) {
      action.onClick()
    } else if (action.href) {
      // TODO: Use router navigation
      console.log(`Navigate to: ${action.href}`)
    }
  }

  return (
    <motion.div
      className="bg-white/5 border border-white/10 rounded-2xl p-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
    >
      <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
        <Zap className="w-5 h-5 text-primary-400" />
        Quick Actions
      </h3>

      <div className="grid grid-cols-2 gap-3">
        {quickActions.map((action, index) => (
          <motion.button
            key={action.id}
            onClick={() => handleActionClick(action)}
            className="group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-xl p-4 text-left transition-all duration-300"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className={`w-10 h-10 bg-gradient-to-r ${action.color} rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}>
              <action.icon className="w-5 h-5 text-white" />
            </div>
            <h4 className="text-white font-semibold text-sm mb-1 group-hover:text-primary-300 transition-colors">
              {action.title}
            </h4>
            <p className="text-gray-400 text-xs leading-relaxed group-hover:text-gray-300 transition-colors">
              {action.description}
            </p>
          </motion.button>
        ))}
      </div>

      {/* Popular Actions */}
      <div className="mt-6 pt-6 border-t border-white/10">
        <h4 className="text-white font-semibold text-sm mb-4">Popular This Week</h4>
        <div className="space-y-3">
          {[
            { name: 'Advanced Cardiac Assessment', type: 'Course', icon: '🫀' },
            { name: 'EMS Provider Community', type: 'Discussion', icon: '💬' },
            { name: 'CE Requirements Guide', type: 'Resource', icon: '📋' }
          ].map((item, index) => (
            <motion.button
              key={item.name}
              className="w-full flex items-center gap-3 p-3 bg-white/5 hover:bg-white/10 rounded-lg text-left transition-colors group"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <span className="text-lg">{item.icon}</span>
              <div className="flex-1">
                <div className="text-white text-sm font-medium group-hover:text-primary-300 transition-colors">
                  {item.name}
                </div>
                <div className="text-gray-400 text-xs">{item.type}</div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </motion.div>
  )
}