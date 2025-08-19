import { motion } from 'framer-motion'
import { Users, Code, BookOpen, Zap } from 'lucide-react'

const principles = [
  {
    icon: Users,
    title: "Provider-Led Development",
    description: "Built by a team of active EMTs, Paramedics, and Critical Care providers who use the platform daily. Not corporate executives guessing what EMS needs."
  },
  {
    icon: BookOpen,
    title: "Education-First Design",
    description: "Every feature exists to improve learning outcomes. No bloated LMS features that distract from actual education. Just clean, focused tools that work."
  },
  {
    icon: Zap,
    title: "Real-World Focused",
    description: "Content created from actual field experience, current protocols, and emerging practices. We distribute the medicine that matters, not outdated textbook theory."
  },
  {
    icon: Code,
    title: "Built for How You Learn",
    description: "Multiple learning formats, mobile-friendly design, and progress tracking that respects your time. Education that fits your schedule, not the other way around."
  }
]

export default function PurposeBuiltSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-900 to-slate-950 relative">
      <div className="w-full max-w-6xl mx-auto px-6">
        {/* Section header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8">
            What "Purpose-Built" 
            <span className="block text-primary-400">Actually Means</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Too many platforms claim to serve EMS but feel like 
            <span className="text-white font-semibold"> generic corporate training tools</span> with 
            medical content slapped on. RescuEd is different because it was designed from the foundation up 
            to solve the <span className="text-primary-300">specific challenges EMS education faces</span>.
          </p>
        </motion.div>

        {/* Principles grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {principles.map((principle, index) => (
            <motion.div
              key={index}
              className="group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <div className="flex gap-6">
                {/* Icon */}
                <motion.div 
                  className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center shadow-lg"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <principle.icon className="w-8 h-8 text-white" />
                </motion.div>
                
                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary-300 transition-colors">
                    {principle.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed text-lg group-hover:text-gray-300 transition-colors">
                    {principle.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom message */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-6">
              The Result: Education That Actually Works
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              When you build a platform specifically for EMS providers, using input from EMS providers, 
              you get something that <span className="text-white font-semibold">feels natural to use</span>. 
              No more fighting with clunky interfaces or irrelevant content. Just professional education 
              delivered the way <span className="text-primary-300">providers want to learn</span>.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-primary-400 mb-2">Up-to-Date</div>
                <div className="text-gray-300 text-sm">Current protocols and emerging practices</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary-400 mb-2">Collaborative</div>
                <div className="text-gray-300 text-sm">Built with ongoing provider feedback</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary-400 mb-2">Practical</div>
                <div className="text-gray-300 text-sm">Education that applies to real situations</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}