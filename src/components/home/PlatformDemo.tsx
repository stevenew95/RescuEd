import { motion } from 'framer-motion'
import { Play, BarChart3, BookOpen, Users, Shield, Clock } from 'lucide-react'

export default function PlatformDemo() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 to-slate-950">
      <div className="w-full max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
            See RescuEd in{' '}
            <span className="text-primary-400">
              Action
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience the platform that's revolutionizing EMS education
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Platform mockup */}
          <motion.div
            className="relative group"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Main interface mockup */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 overflow-hidden shadow-2xl">
              {/* Header bar */}
              <div className="bg-gray-800 border-b border-gray-700 p-4 flex items-center gap-3">
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="text-gray-400 text-sm font-medium">RescuEd Dashboard</div>
              </div>

              {/* Content area */}
              <div className="p-6">
                {/* Navigation */}
                <div className="flex items-center gap-6 mb-6">
                  <div className="text-primary-400 font-semibold">Courses</div>
                  <div className="text-gray-400">Progress</div>
                  <div className="text-gray-400">Certificates</div>
                  <div className="text-gray-400">Community</div>
                </div>

                {/* Course card */}
                <motion.div 
                  className="bg-gradient-to-br from-primary-500 to-purple-600 rounded-xl p-6 mb-4 relative overflow-hidden group-hover:scale-105 transition-transform duration-300"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-white/20 text-white text-xs px-2 py-1 rounded">CCPC</span>
                    <Play className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-white font-bold mb-2">Advanced Hemodynamics</h3>
                  <div className="bg-white/20 rounded-full h-2 mb-2">
                    <motion.div 
                      className="bg-white rounded-full h-2"
                      initial={{ width: 0 }}
                      whileInView={{ width: "75%" }}
                      transition={{ duration: 2, delay: 0.5 }}
                    />
                  </div>
                  <div className="text-white/80 text-sm">75% Complete</div>
                </motion.div>

                {/* Stats grid */}
                <div className="grid grid-cols-3 gap-3">
                  <div className="bg-gray-700/50 rounded-lg p-3 text-center">
                    <div className="text-green-400 font-bold">98%</div>
                    <div className="text-gray-400 text-xs">Accuracy</div>
                  </div>
                  <div className="bg-gray-700/50 rounded-lg p-3 text-center">
                    <div className="text-blue-400 font-bold">12h</div>
                    <div className="text-gray-400 text-xs">CE Hours</div>
                  </div>
                  <div className="bg-gray-700/50 rounded-lg p-3 text-center">
                    <div className="text-purple-400 font-bold">5</div>
                    <div className="text-gray-400 text-xs">Certificates</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <motion.div
              className="absolute -top-4 -right-4 bg-green-500 text-white p-3 rounded-full shadow-lg"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Shield className="w-5 h-5" />
            </motion.div>

            <motion.div
              className="absolute -bottom-4 -left-4 bg-blue-500 text-white p-3 rounded-full shadow-lg"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            >
              <BarChart3 className="w-5 h-5" />
            </motion.div>
          </motion.div>

          {/* Features list */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {[
              {
                icon: BookOpen,
                title: "Interactive Learning",
                description: "Engage with content through videos, simulations, and real case studies that mirror actual field experiences."
              },
              {
                icon: BarChart3,
                title: "Real-Time Progress Tracking",
                description: "Monitor your advancement with detailed analytics, competency mapping, and personalized learning paths."
              },
              {
                icon: Shield,
                title: "Secure CE Compliance",
                description: "Tamper-proof tracking ensures your continuing education credits are always audit-ready and compliant."
              },
              {
                icon: Users,
                title: "Professional Community",
                description: "Connect with fellow providers, share experiences, and learn from industry experts in our private forums."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="flex gap-4 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* CTA button */}
            <motion.button 
              className="bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 flex items-center gap-3"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <Play className="w-5 h-5" />
              Request Live Demo
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}