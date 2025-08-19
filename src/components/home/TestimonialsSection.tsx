import { motion, useAnimationFrame } from 'framer-motion'
import { Star } from 'lucide-react'
import { useRef, useState } from 'react'

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Critical Care Flight Paramedic",
    organization: "LifeFlight Network",
    image: "👩‍⚕️",
    rating: 5,
    quote: "RescuEd has been valuable for my continuing education. The content stays current with protocols, and I appreciate that it's designed by people who actually work in EMS."
  },
  {
    name: "Marcus Rodriguez",
    role: "EMS Training Director",
    organization: "Metro Healthcare System",
    image: "👨‍⚕️",
    rating: 5,
    quote: "We've implemented RescuEd across our entire system. The CE tracking is bulletproof, and our pass rates have improved dramatically. Best investment we've made."
  },
  {
    name: "Jennifer Walsh",
    role: "Paramedic Supervisor",
    organization: "Boston EMS",
    image: "👩‍⚕️",
    rating: 5,
    quote: "Finally, a platform that understands EMS education needs. Focused content without the unnecessary complexity you find in generic learning platforms."
  },
  {
    name: "David Kim",
    role: "Emergency Medicine Physician",
    organization: "Johns Hopkins",
    image: "👨‍⚕️",
    rating: 5,
    quote: "I recommend RescuEd to all our EMS partners. The quality of education and the progressive learning path is exactly what the industry needed."
  },
  {
    name: "Lisa Thompson",
    role: "Flight Nurse",
    organization: "AirCare Medical",
    image: "👩‍⚕️",
    rating: 5,
    quote: "The advanced content is phenomenal. Real case studies, current protocols, and the kind of high-level thinking that separates good providers from great ones."
  },
  {
    name: "James Miller",
    role: "EMS Educator",
    organization: "Community College",
    image: "👨‍⚕️",
    rating: 5,
    quote: "My students love RescuEd. The interactive content and progress tracking keep them engaged, and I can see their confidence building with every module."
  }
]

// Duplicate for seamless scrolling
const scrollingTestimonials = [...testimonials, ...testimonials]

export default function TestimonialsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const [x, setX] = useState(0)

  useAnimationFrame(() => {
    if (ref.current) {
      setX(prev => {
        const newX = prev - 0.5
        const resetPoint = -(testimonials.length * 400) // Adjust based on card width
        return newX <= resetPoint ? 0 : newX
      })
    }
  })

  return (
    <section className="py-24 bg-gradient-to-b from-slate-950 to-gray-900 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-6 mb-16">
        {/* Section header */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
            What{' '}
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Providers
            </span>{' '}
            Say
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real feedback from EMS professionals who've advanced their careers with RescuEd
          </p>
        </motion.div>
      </div>

      {/* Scrolling testimonials */}
      <div className="relative w-full">
        <div className="flex space-x-6" style={{ transform: `translateX(${x}px)` }}>
          {scrollingTestimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="flex-shrink-0 w-80 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
              whileHover={{ scale: 1.02, y: -5 }}
            >
              {/* Rating stars */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-gray-300 text-sm leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </blockquote>

              {/* Author info */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-2xl">
                  {testimonial.image}
                </div>
                <div>
                  <div className="font-semibold text-white text-sm">
                    {testimonial.name}
                  </div>
                  <div className="text-primary-300 text-xs font-medium">
                    {testimonial.role}
                  </div>
                  <div className="text-gray-400 text-xs">
                    {testimonial.organization}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Gradient overlays for fade effect */}
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-gray-900 to-transparent z-10" />
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-gray-900 to-transparent z-10" />
      </div>

    </section>
  )
}