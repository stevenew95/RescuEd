import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

// Custom hook for animated counting
function useAnimatedCounter(end: number, duration: number = 2000) {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  
  const animate = () => {
    if (hasAnimated) return
    setHasAnimated(true)
    
    let startTime: number
    const startValue = 0
    
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const current = Math.floor(progress * (end - startValue) + startValue)
      setCount(current)
      
      if (progress < 1) {
        requestAnimationFrame(step)
      }
    }
    
    requestAnimationFrame(step)
  }
  
  return { count, animate }
}

interface StatCardProps {
  number: number
  suffix?: string
  label: string
  description: string
  icon: string
}

function StatCard({ number, suffix = '', label, description, icon }: StatCardProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const { count, animate } = useAnimatedCounter(number)
  
  useEffect(() => {
    if (isInView) {
      animate()
    }
  }, [isInView, animate])
  
  return (
    <motion.div
      ref={ref}
      className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 text-center hover:bg-white/10 hover:border-white/20 transition-all duration-500"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02, y: -5 }}
    >
      <div className="text-4xl mb-4">{icon}</div>
      <div className="text-4xl font-black text-white mb-2">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-lg font-semibold text-white mb-2">{label}</div>
      <div className="text-gray-400 text-sm leading-relaxed">{description}</div>
    </motion.div>
  )
}

export default function StatsSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-slate-900 to-gray-900 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M30 30m-2 0a2 2 0 1 1 4 0a2 2 0 1 1-4 0'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="w-full max-w-7xl mx-auto px-6 relative z-10">
        {/* Section header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
            Trusted by{' '}
            <span className="text-primary-400">
              Thousands
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join the growing community of EMS professionals advancing their careers with RescuEd
          </p>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <StatCard
            number={2847}
            suffix="+"
            label="EMS Providers Trained"
            description="Active learners across all certification levels"
            icon="👨‍⚕️"
          />
          <StatCard
            number={98}
            suffix="%"
            label="Pass Rate Improvement"
            description="Average improvement in certification exam scores"
            icon="📊"
          />
          <StatCard
            number={15000}
            suffix="+"
            label="CE Hours Completed"
            description="Continuing education hours successfully tracked"
            icon="🎓"
          />
          <StatCard
            number={500}
            suffix="+"
            label="Healthcare Systems"
            description="Organizations trusting RescuEd for training"
            icon="🏥"
          />
        </div>
      </div>
    </section>
  )
}