import { motion } from 'framer-motion'
import { Star, Clock, Users, ArrowRight } from 'lucide-react'

interface RecommendedCourse {
  id: string
  title: string
  instructor: string
  duration: string
  rating: number
  enrolledCount: number
  thumbnail: string
  category: string
  reason: string
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced'
}

export default function RecommendedContent() {
  // TODO: Get from API/context - would be personalized based on user's certification level, progress, etc.
  const recommendations: RecommendedCourse[] = [
    {
      id: '1',
      title: 'Advanced Airway Management',
      instructor: 'Dr. Michael Torres',
      duration: '2.5 hrs',
      rating: 4.9,
      enrolledCount: 1247,
      thumbnail: '🫁',
      category: 'Critical Care',
      reason: 'Recommended for CCPC providers',
      difficulty: 'Advanced'
    },
    {
      id: '2',
      title: 'ECG Interpretation Mastery',
      instructor: 'Sarah Johnson, RN',
      duration: '3.0 hrs',
      rating: 4.8,
      enrolledCount: 2103,
      thumbnail: '📈',
      category: 'Cardiology',
      reason: 'Popular with similar providers',
      difficulty: 'Intermediate'
    },
    {
      id: '3',
      title: 'Trauma Psychology & PTSD',
      instructor: 'Dr. Amanda Chen',
      duration: '1.5 hrs',
      rating: 4.9,
      enrolledCount: 892,
      thumbnail: '🧠',
      category: 'Mental Health',
      reason: 'Based on your interests',
      difficulty: 'Beginner'
    }
  ]

  const getDifficultyColor = (difficulty: RecommendedCourse['difficulty']) => {
    switch (difficulty) {
      case 'Beginner': return 'text-green-400'
      case 'Intermediate': return 'text-yellow-400'
      case 'Advanced': return 'text-red-400'
      default: return 'text-gray-400'
    }
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-white flex items-center gap-3">
          <Star className="w-6 h-6 text-yellow-400" />
          Recommended for You
        </h2>
        <motion.button
          className="text-primary-400 hover:text-primary-300 font-semibold text-sm transition-colors"
          whileHover={{ scale: 1.05 }}
        >
          See All →
        </motion.button>
      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        {recommendations.map((course, index) => (
          <motion.div
            key={course.id}
            className="bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-300 cursor-pointer group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 * index }}
            whileHover={{ scale: 1.02, y: -5 }}
          >
            {/* Course Header */}
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center text-2xl">
                  {course.thumbnail}
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-1 mb-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-gray-300 text-sm">{course.rating}</span>
                  </div>
                  <div className="text-gray-400 text-xs">{course.enrolledCount} enrolled</div>
                </div>
              </div>

              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary-300 transition-colors">
                {course.title}
              </h3>
              
              <p className="text-gray-400 text-sm mb-3">with {course.instructor}</p>

              {/* Course Meta */}
              <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {course.duration}
                </div>
                <div className={`font-semibold ${getDifficultyColor(course.difficulty)}`}>
                  {course.difficulty}
                </div>
              </div>

              {/* Recommendation Reason */}
              <div className="bg-primary-500/10 border border-primary-500/20 rounded-lg p-3 mb-4">
                <div className="text-primary-300 text-xs font-semibold mb-1">Why this course?</div>
                <div className="text-gray-300 text-sm">{course.reason}</div>
              </div>

              {/* Enroll Button */}
              <motion.button
                className="w-full bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 text-white font-semibold py-3 rounded-lg flex items-center justify-center gap-2 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Start Learning
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Browse More */}
      <motion.div
        className="mt-8 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <p className="text-gray-400 mb-4">
          Looking for something specific?
        </p>
        <motion.button
          className="bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Browse Full Course Catalog
        </motion.button>
      </motion.div>
    </motion.section>
  )
}