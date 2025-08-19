import { motion } from 'framer-motion'
import { TrendingUp, Award, Users, BookOpen } from 'lucide-react'

export default function ProfessionalizationSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-slate-950 to-gray-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-500/5 rounded-full blur-3xl"
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
      </div>

      <div className="w-full max-w-6xl mx-auto px-6 relative z-10">
        {/* Section header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8">
            EMS is a{' '}
            <span className="text-primary-400">Profession</span>
            <span className="block">Not a Service</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            The mindset needs to shift. EMS providers aren't just 
            <span className="text-red-300"> "ambulance drivers"</span> or emergency responders. 
            We're <span className="text-white font-semibold">healthcare professionals</span> who deserve the same caliber of education, recognition, and 
            professional development as our colleagues in hospitals.
          </p>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - The Problem */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-white mb-6">
              The Old Mindset is Holding Us Back
            </h3>
            
            <div className="space-y-6">
              <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-6">
                <p className="text-gray-300 leading-relaxed">
                  <span className="text-red-400 font-semibold">"It's just a job"</span> - 
                  When we treat EMS as temporary work instead of a career, we accept lower standards 
                  for education, pay, and professional development.
                </p>
              </div>
              
              <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-6">
                <p className="text-gray-300 leading-relaxed">
                  <span className="text-red-400 font-semibold">"Basic training is enough"</span> - 
                  While other healthcare fields demand continuous learning, EMS often settles for 
                  minimum CE requirements and outdated training methods.
                </p>
              </div>
              
              <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-6">
                <p className="text-gray-300 leading-relaxed">
                  <span className="text-red-400 font-semibold">"We're different from other healthcare"</span> - 
                  This separation mindset keeps us from the professional recognition and 
                  educational standards we deserve.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right side - The Solution */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-white mb-6">
              Professional Education Changes Everything
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4 bg-green-500/10 border border-green-500/20 rounded-2xl p-6">
                <TrendingUp className="w-8 h-8 text-green-400 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-white font-semibold mb-2">Career Advancement</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Professional-grade education opens doors to specialized roles, leadership positions, 
                    and higher compensation.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 bg-green-500/10 border border-green-500/20 rounded-2xl p-6">
                <Award className="w-8 h-8 text-green-400 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-white font-semibold mb-2">Public Recognition</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    When we demonstrate professional competence through quality education, 
                    public perception and respect follow.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 bg-green-500/10 border border-green-500/20 rounded-2xl p-6">
                <Users className="w-8 h-8 text-green-400 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-white font-semibold mb-2">Professional Identity</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Quality education builds confidence, competence, and pride in our 
                    essential role in healthcare.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Call to action with lamp effect */}
        <motion.div
          className="mt-20 text-center relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Lamp/Spotlight effect background */}
          <div className="relative overflow-hidden rounded-3xl">
            {/* Multiple layered gradients for lamp effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-500/5 to-primary-600/20"></div>
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-gradient-radial from-primary-400/30 via-primary-500/10 to-transparent blur-3xl"></div>
            <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-64 h-64 bg-gradient-radial from-secondary-400/20 via-transparent to-transparent blur-2xl"></div>
            
            {/* Animated rays */}
            <motion.div 
              className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-32 bg-gradient-to-b from-primary-300 to-transparent"
              animate={{ 
                scaleY: [1, 1.5, 1],
                opacity: [0.3, 0.8, 0.3]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div 
              className="absolute top-0 left-1/2 transform -translate-x-1/2 rotate-12 w-1 h-24 bg-gradient-to-b from-secondary-300 to-transparent"
              animate={{ 
                scaleY: [1, 1.3, 1],
                opacity: [0.2, 0.6, 0.2]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            />
            <motion.div 
              className="absolute top-0 left-1/2 transform -translate-x-1/2 -rotate-12 w-1 h-20 bg-gradient-to-b from-primary-400 to-transparent"
              animate={{ 
                scaleY: [1, 1.4, 1],
                opacity: [0.2, 0.7, 0.2]
              }}
              transition={{ 
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2
              }}
            />
            
            {/* Content container */}
            <div className="relative z-10 p-16 bg-gradient-to-b from-gray-900/80 via-gray-800/60 to-gray-900/90 backdrop-blur-sm">
              {/* Glowing icon */}
              <motion.div 
                className="w-20 h-20 bg-gradient-to-br from-primary-400 to-secondary-500 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl relative"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-secondary-500 rounded-3xl blur-xl opacity-50"></div>
                <BookOpen className="w-10 h-10 text-white relative z-10" />
              </motion.div>
              
              <motion.h3 
                className="text-5xl md:text-6xl font-black mb-8 leading-tight bg-gradient-to-r from-white via-primary-100 to-white bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Be Part of the Change
              </motion.h3>
              
              <motion.p 
                className="text-xl text-gray-200 leading-relaxed mb-12 max-w-4xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                Every provider who chooses <span className="text-white font-bold bg-primary-500/20 px-2 py-1 rounded">professional-grade education</span> over 
                the minimum requirement helps elevate our entire field. RescuEd exists to make that choice 
                <span className="text-primary-300 font-semibold"> easier and more accessible</span>.
              </motion.p>
              
              <motion.button 
                className="group relative bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-400 hover:to-secondary-400 text-white font-bold text-xl px-14 py-6 rounded-2xl transition-all duration-300 overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
              >
                {/* Button glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-secondary-400 blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                
                {/* Animated shine effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.8 }}
                />
                
                <span className="relative z-10">
                  <span className="bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">Elevate</span>{' '}
                  <span className="text-white">Your</span>{' '}
                  <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent font-black">Practice</span>
                </span>
              </motion.button>
              
              {/* Floating particles */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-primary-300/60 rounded-full"
                  style={{
                    left: `${20 + (i * 15)}%`,
                    top: `${30 + (i * 10)}%`,
                  }}
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0.3, 1, 0.3],
                    scale: [1, 1.5, 1]
                  }}
                  transition={{
                    duration: 3 + (i * 0.5),
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.5
                  }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}