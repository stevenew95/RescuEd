import { motion } from 'framer-motion'
import { Calendar, TrendingUp, Target } from 'lucide-react'

export default function WelcomeHeader() {
  // TODO: Get from auth context/user data
  const user = {
    firstName: 'Sarah',
    certificationLevel: 'CCPC',
    lastLogin: '2 hours ago',
    streakDays: 7
  }

  const currentHour = new Date().getHours()
  const greeting = currentHour < 12 ? 'Good morning' : currentHour < 18 ? 'Good afternoon' : 'Good evening'

  return (
    <motion.div
      className="mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        {/* Welcome Message */}
        <div>
          <h1 className="text-3xl md:text-4xl font-black text-white mb-2">
            {greeting}, {user.firstName}! 👋
          </h1>
          <p className="text-gray-400 text-lg">
            Ready to continue your professional development journey?
          </p>
        </div>

        {/* Quick Stats */}
        <div className="flex gap-4">
          <motion.div
            className="bg-white/5 border border-white/10 rounded-xl p-4 text-center min-w-[100px]"
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="flex items-center justify-center gap-2 mb-1">
              <TrendingUp className="w-4 h-4 text-green-400" />
              <span className="text-2xl font-bold text-white">{user.streakDays}</span>
            </div>
            <p className="text-gray-400 text-xs">Day Streak</p>
          </motion.div>

          <motion.div
            className="bg-white/5 border border-white/10 rounded-xl p-4 text-center min-w-[100px]"
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center justify-center gap-2 mb-1">
              <Target className="w-4 h-4 text-blue-400" />
              <span className="text-2xl font-bold text-white">61%</span>
            </div>
            <p className="text-gray-400 text-xs">CE Progress</p>
          </motion.div>

          <motion.div
            className="bg-white/5 border border-white/10 rounded-xl p-4 text-center min-w-[100px]"
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="flex items-center justify-center gap-2 mb-1">
              <Calendar className="w-4 h-4 text-purple-400" />
              <span className="text-2xl font-bold text-white">5</span>
            </div>
            <p className="text-gray-400 text-xs">This Week</p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}