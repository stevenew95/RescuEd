import { Shield, TrendingUp, Zap, Target, BookOpen, Users } from 'lucide-react'
import { motion } from 'framer-motion'

const features = [
  {
    icon: Shield,
    title: "Tamper-Proof CE Tracking",
    description: "Can't skip, can't fast-forward, can't cheat. Your CE hours are bulletproof for audit time.",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: TrendingUp,
    title: "All Certification Levels",
    description: "Comprehensive education for EMT, AEMT, EMTI, EMTP, and CCPC/FPC providers.",
    gradient: "from-green-500 to-emerald-500"
  },
  {
    icon: Zap,
    title: "Focused Content",
    description: "Practical, evidence-based education that respects your time and intelligence.",
    gradient: "from-yellow-500 to-orange-500"
  },
  {
    icon: Target,
    title: "Role-Based Access",
    description: "Students, Instructors, Managers, Admins. Everyone gets exactly what they need.",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    icon: BookOpen,
    title: "Multi-Format Learning",
    description: "Videos, podcasts, interactive content. Learn how you learn best.",
    gradient: "from-red-500 to-rose-500"
  },
  {
    icon: Users,
    title: "Provider Community",
    description: "Connect with other providers, share experiences, learn from the best.",
    gradient: "from-indigo-500 to-blue-500"
  }
]

export default function FeaturesSection() {
  return (
    <section className="w-full py-16 bg-gradient-to-b from-slate-950 to-gray-900">
      <div className="w-full max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
            Built Different. Built{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Better
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Every feature designed with real provider needs in mind
          </p>
        </motion.div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -10 }}
            >
              {/* Icon */}
              <div className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}