import { motion } from 'framer-motion'
import { 
  Play, 
  Award, 
  MessageCircle, 
  BookOpen, 
  Clock,
  CheckCircle,
  TrendingUp
} from 'lucide-react'

interface ActivityItem {
  id: string
  type: 'course_completed' | 'course_started' | 'certificate_earned' | 'discussion_joined' | 'milestone_reached'
  title: string
  description: string
  timestamp: string
  metadata?: {
    score?: number
    duration?: string
    milestone?: string
  }
}

export default function RecentActivity() {
  // TODO: Get from API/context
  const recentActivity: ActivityItem[] = [
    {
      id: '1',
      type: 'course_completed',
      title: 'Completed Advanced Cardiac Assessment',
      description: 'Excellent work! You scored 96%',
      timestamp: '2 hours ago',
      metadata: { score: 96, duration: '2.5 hrs' }
    },
    {
      id: '2',
      type: 'certificate_earned',
      title: 'Certificate Earned',
      description: 'Trauma Assessment Excellence',
      timestamp: '1 day ago'
    },
    {
      id: '3',
      type: 'milestone_reached',
      title: 'Learning Streak Milestone',
      description: '7-day learning streak achieved!',
      timestamp: '2 days ago',
      metadata: { milestone: '7 days' }
    },
    {
      id: '4',
      type: 'course_started',
      title: 'Started Critical Thinking in EMS',
      description: 'Interactive decision-making course',
      timestamp: '3 days ago'
    },
    {
      id: '5',
      type: 'discussion_joined',
      title: 'Joined Community Discussion',
      description: 'Flight Medicine Best Practices',
      timestamp: '4 days ago'
    }
  ]

  const getActivityIcon = (type: ActivityItem['type']) => {
    switch (type) {
      case 'course_completed': return CheckCircle
      case 'course_started': return Play
      case 'certificate_earned': return Award
      case 'discussion_joined': return MessageCircle
      case 'milestone_reached': return TrendingUp
      default: return BookOpen
    }
  }

  const getActivityColor = (type: ActivityItem['type']) => {
    switch (type) {
      case 'course_completed': return 'text-green-400'
      case 'course_started': return 'text-blue-400'
      case 'certificate_earned': return 'text-yellow-400'
      case 'discussion_joined': return 'text-purple-400'
      case 'milestone_reached': return 'text-orange-400'
      default: return 'text-gray-400'
    }
  }

  return (
    <motion.div
      className="bg-white/5 border border-white/10 rounded-2xl p-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
    >
      <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
        <Clock className="w-5 h-5 text-primary-400" />
        Recent Activity
      </h3>

      <div className="space-y-4">
        {recentActivity.map((activity, index) => {
          const Icon = getActivityIcon(activity.type)
          const iconColor = getActivityColor(activity.type)
          
          return (
            <motion.div
              key={activity.id}
              className="flex items-start gap-3 p-3 hover:bg-white/5 rounded-lg transition-colors cursor-pointer group"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{ scale: 1.02 }}
            >
              {/* Activity Icon */}
              <div className={`w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                <Icon className={`w-4 h-4 ${iconColor}`} />
              </div>

              {/* Activity Content */}
              <div className="flex-1">
                <h4 className="text-white font-medium text-sm mb-1 group-hover:text-primary-300 transition-colors">
                  {activity.title}
                </h4>
                <p className="text-gray-400 text-xs mb-2 group-hover:text-gray-300 transition-colors">
                  {activity.description}
                </p>
                
                {/* Metadata */}
                {activity.metadata && (
                  <div className="flex items-center gap-3 text-xs">
                    {activity.metadata.score && (
                      <span className="text-green-400 font-semibold">
                        Score: {activity.metadata.score}%
                      </span>
                    )}
                    {activity.metadata.duration && (
                      <span className="text-blue-400">
                        {activity.metadata.duration}
                      </span>
                    )}
                    {activity.metadata.milestone && (
                      <span className="text-orange-400 font-semibold">
                        🔥 {activity.metadata.milestone}
                      </span>
                    )}
                  </div>
                )}

                <div className="text-gray-500 text-xs mt-2">
                  {activity.timestamp}
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* View All Activity */}
      <motion.button
        className="w-full mt-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-gray-300 hover:text-white font-medium text-sm rounded-lg transition-all duration-300"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        View All Activity
      </motion.button>
    </motion.div>
  )
}