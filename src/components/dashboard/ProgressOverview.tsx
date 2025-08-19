import { motion } from 'framer-motion'
import { Clock, Award, Target, TrendingUp, Calendar } from 'lucide-react'

export default function ProgressOverview() {
  // TODO: Get from API/context
  const stats = {
    ceHours: {
      completed: 24.5,
      required: 40,
      percentage: 61
    },
    coursesCompleted: 12,
    averageScore: 94,
    currentStreak: 7,
    upcomingDeadlines: [
      { name: 'Advanced Cardiac', dueDate: 'Dec 15', daysLeft: 3 },
      { name: 'Annual Recert', dueDate: 'Jan 31', daysLeft: 47 }
    ]
  }

  return (
    <motion.div
      className="bg-white/5 border border-white/10 rounded-2xl p-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
        <Target className="w-5 h-5 text-primary-400" />
        Progress Overview
      </h3>

      {/* CE Hours Progress */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-3">
          <span className="text-white font-semibold">CE Hours</span>
          <span className="text-gray-400 text-sm">
            {stats.ceHours.completed} / {stats.ceHours.required}
          </span>
        </div>
        <div className="bg-gray-700 rounded-full h-3 mb-2">
          <motion.div
            className="bg-gradient-to-r from-blue-500 to-green-500 rounded-full h-3"
            initial={{ width: 0 }}
            animate={{ width: `${stats.ceHours.percentage}%` }}
            transition={{ duration: 1.5, delay: 0.5 }}
          />
        </div>
        <p className="text-gray-400 text-sm">
          {stats.ceHours.required - stats.ceHours.completed} hours remaining for certification
        </p>
      </div>

      {/* Quick Stats Grid */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <motion.div
          className="bg-white/5 border border-white/10 rounded-lg p-4 text-center"
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <Award className="w-6 h-6 text-yellow-400 mx-auto mb-2" />
          <div className="text-xl font-bold text-white">{stats.coursesCompleted}</div>
          <div className="text-gray-400 text-xs">Completed</div>
        </motion.div>

        <motion.div
          className="bg-white/5 border border-white/10 rounded-lg p-4 text-center"
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <Target className="w-6 h-6 text-purple-400 mx-auto mb-2" />
          <div className="text-xl font-bold text-white">{stats.averageScore}%</div>
          <div className="text-gray-400 text-xs">Avg Score</div>
        </motion.div>

        <motion.div
          className="bg-white/5 border border-white/10 rounded-lg p-4 text-center col-span-2"
          whileHover={{ scale: 1.02 }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          <TrendingUp className="w-6 h-6 text-green-400 mx-auto mb-2" />
          <div className="text-xl font-bold text-white">{stats.currentStreak} Days</div>
          <div className="text-gray-400 text-xs">Learning Streak 🔥</div>
        </motion.div>
      </div>

      {/* Upcoming Deadlines */}
      <div>
        <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
          <Calendar className="w-4 h-4 text-orange-400" />
          Upcoming Deadlines
        </h4>
        <div className="space-y-2">
          {stats.upcomingDeadlines.map((deadline, index) => (
            <motion.div
              key={deadline.name}
              className={`p-3 rounded-lg border-l-4 ${
                deadline.daysLeft <= 7
                  ? 'bg-red-500/10 border-red-500'
                  : deadline.daysLeft <= 30
                  ? 'bg-yellow-500/10 border-yellow-500'
                  : 'bg-green-500/10 border-green-500'
              }`}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
            >
              <div className="flex justify-between items-center">
                <div>
                  <div className="text-white font-medium text-sm">{deadline.name}</div>
                  <div className="text-gray-400 text-xs">Due {deadline.dueDate}</div>
                </div>
                <div className={`text-xs font-semibold ${
                  deadline.daysLeft <= 7 ? 'text-red-400' : 
                  deadline.daysLeft <= 30 ? 'text-yellow-400' : 'text-green-400'
                }`}>
                  {deadline.daysLeft}d
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}