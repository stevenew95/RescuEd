import { Play, Clock, Star } from 'lucide-react'
import { motion } from 'framer-motion'

const courses = [
  {
    title: "Advanced Hemodynamics & IABP",
    level: "CCPC/FPC",
    duration: "45 min",
    rating: 4.9,
    description: "Master complex cardiac interventions with real case studies from Level 1 trauma centers.",
    gradient: "from-blue-500 to-purple-600",
    levelColor: "bg-blue-500/20 text-blue-300"
  },
  {
    title: "Pediatric Airway Mastery",
    level: "EMTP",
    duration: "32 min",
    rating: 4.8,
    description: "Evidence-based pediatric airway management with simulation-based learning.",
    gradient: "from-purple-500 to-pink-600",
    levelColor: "bg-purple-500/20 text-purple-300"
  },
  {
    title: "Trauma Assessment Revolution",
    level: "EMT-B",
    duration: "28 min",
    rating: 4.9,
    description: "Latest systematic trauma evaluation protocols that actually work in the field.",
    gradient: "from-green-500 to-blue-600",
    levelColor: "bg-green-500/20 text-green-300"
  }
]

export default function CoursePreview() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 to-slate-900">
      <div className="w-full px-6">
        {/* Section header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
            Content That Actually{' '}
            <span className="text-primary-300">
              Matters
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Current protocols. Recent research. Practical applications from experienced providers.
          </p>
        </motion.div>

        {/* Course grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 hover:border-white/20 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              {/* Course thumbnail */}
              <div className={`h-48 bg-gradient-to-br ${course.gradient} relative flex items-center justify-center`}>
                <motion.div
                  className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <Play className="w-8 h-8 text-white ml-1" />
                </motion.div>
                
                {/* Duration badge */}
                <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm rounded-lg px-3 py-1 flex items-center gap-1">
                  <Clock className="w-3 h-3 text-white" />
                  <span className="text-white text-xs font-medium">{course.duration}</span>
                </div>
              </div>
              
              {/* Course info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className={`${course.levelColor} text-xs font-semibold px-3 py-1 rounded-full`}>
                    {course.level}
                  </span>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-gray-400 text-sm">{course.rating}</span>
                  </div>
                </div>
                
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                  {course.title}
                </h3>
                
                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                  {course.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View all button */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.button 
            className="bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white font-semibold px-8 py-3 rounded-xl transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Courses →
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}