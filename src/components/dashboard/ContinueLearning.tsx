import { motion } from 'framer-motion'
import { Play, Clock, BarChart3 } from 'lucide-react'

interface Course {
  id: string
  title: string
  instructor: string
  progress: number
  timeRemaining: string
  lastWatched: string
  thumbnail: string
  type: 'video' | 'interactive' | 'audio'
}

export default function ContinueLearning() {
  // TODO: Get from API/context
  const inProgressCourses: Course[] = [
    {
      id: '1',
      title: 'Advanced Cardiac Assessment',
      instructor: 'Dr. Sarah Chen',
      progress: 75,
      timeRemaining: '18 min',
      lastWatched: '2 hours ago',
      thumbnail: '🫀',
      type: 'video'
    },
    {
      id: '2',
      title: 'Critical Thinking in EMS',
      instructor: 'Marcus Rodriguez',
      progress: 45,
      timeRemaining: '1.2 hrs',
      lastWatched: 'Yesterday',
      thumbnail: '🧠',
      type: 'interactive'
    },
    {
      id: '3',
      title: 'Pathophysiology Deep Dive',
      instructor: 'Dr. Jennifer Walsh',
      progress: 30,
      timeRemaining: '2.5 hrs',
      lastWatched: '3 days ago',
      thumbnail: '🧬',
      type: 'audio'
    }
  ]

  const getTypeIcon = (type: Course['type']) => {
    switch (type) {
      case 'video': return '📹'
      case 'interactive': return '🎯'
      case 'audio': return '🎧'
      default: return '📚'
    }
  }

  const getTypeColor = (type: Course['type']) => {
    switch (type) {
      case 'video': return 'from-blue-500 to-purple-600'
      case 'interactive': return 'from-green-500 to-blue-600'
      case 'audio': return 'from-purple-500 to-pink-600'
      default: return 'from-gray-500 to-gray-600'
    }
  }

  if (inProgressCourses.length === 0) {
    return (
      <motion.section
        className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-6xl mb-4">🚀</div>
        <h2 className="text-xl font-bold text-white mb-2">Ready to Start Learning?</h2>
        <p className="text-gray-400 mb-6">
          Browse our course catalog to begin your professional development journey.
        </p>
        <motion.button
          className="bg-primary-500 hover:bg-primary-600 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Browse Courses
        </motion.button>
      </motion.section>
    )
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-white flex items-center gap-3">
          <Play className="w-6 h-6 text-primary-400" />
          Continue Learning
        </h2>
        <motion.button
          className="text-primary-400 hover:text-primary-300 font-semibold text-sm transition-colors"
          whileHover={{ scale: 1.05 }}
        >
          View All →
        </motion.button>
      </div>

      <div className="grid gap-4">
        {inProgressCourses.map((course, index) => (
          <motion.div
            key={course.id}
            className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 cursor-pointer group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ scale: 1.02, y: -2 }}
          >
            <div className="flex items-center gap-4">
              {/* Course Thumbnail */}
              <div className={`w-16 h-16 bg-gradient-to-br ${getTypeColor(course.type)} rounded-xl flex items-center justify-center relative`}>
                <span className="text-2xl">{course.thumbnail}</span>
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gray-800 rounded-full flex items-center justify-center border-2 border-gray-700">
                  <span className="text-xs">{getTypeIcon(course.type)}</span>
                </div>
              </div>

              {/* Course Info */}
              <div className="flex-1">
                <h3 className="text-lg font-bold text-white mb-1 group-hover:text-primary-300 transition-colors">
                  {course.title}
                </h3>
                <p className="text-gray-400 text-sm mb-2">with {course.instructor}</p>
                
                {/* Progress Bar */}
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex-1 bg-gray-700 rounded-full h-2">
                    <motion.div
                      className={`bg-gradient-to-r ${getTypeColor(course.type)} rounded-full h-2`}
                      initial={{ width: 0 }}
                      animate={{ width: `${course.progress}%` }}
                      transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                    />
                  </div>
                  <span className="text-gray-400 text-sm">{course.progress}%</span>
                </div>

                <div className="flex items-center gap-4 text-sm text-gray-400">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {course.timeRemaining} remaining
                  </div>
                  <div className="flex items-center gap-1">
                    <BarChart3 className="w-4 h-4" />
                    Last: {course.lastWatched}
                  </div>
                </div>
              </div>

              {/* Continue Button */}
              <motion.button
                className={`bg-gradient-to-r ${getTypeColor(course.type)} text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2 opacity-80 group-hover:opacity-100 transition-opacity`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Play className="w-4 h-4" />
                Continue
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}