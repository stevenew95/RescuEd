import { ArrowRight, Play, Stethoscope, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Full-width background */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-slate-950 via-gray-900 to-slate-950">
        {/* Animated background elements */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      {/* Content container - this can have max-width for readability */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 text-center">
        {/* Top badge */}
        <motion.div 
          className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Sparkles className="w-4 h-4 text-blue-400" />
          <span className="text-white text-sm font-medium">Built by EMS providers, for EMS providers</span>
        </motion.div>

        {/* Main headline */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.9] mb-4">
            Stop Learning From
          </h1>
          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-black bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent leading-[0.9]"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Outdated Content
          </motion.h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p 
          className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          RescuEd was built from day one with a simple mission: create the EMS education platform 
          that <span className="text-white font-semibold">providers actually want to use</span>. Every design decision, 
          every feature, every piece of content reflects input from working EMS professionals who know 
          what real education looks like in our field.
        </motion.p>

        {/* CTA buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <motion.button 
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white text-lg font-semibold px-8 py-4 rounded-xl flex items-center gap-3 shadow-2xl transition-all duration-300"
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)" }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Journey
            <ArrowRight className="w-5 h-5" />
          </motion.button>
          
          <motion.button 
            className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl flex items-center gap-3 transition-all duration-300"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Play className="w-5 h-5" />
            Watch Demo
          </motion.button>
        </motion.div>

        {/* Stats */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
        >
          {[
            { number: "100%", label: "Provider-Focused", emoji: "🎯" },
            { number: "5", label: "Certification Levels Supported", emoji: "📈" },
            { number: "24/7", label: "Access", emoji: "⚡" }
          ].map((stat, index) => (
            <motion.div 
              key={index}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="text-3xl mb-2">{stat.emoji}</div>
              <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
              <div className="text-gray-300 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}