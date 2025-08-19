import { motion } from 'framer-motion'
import { Heart, Zap, Target, Users, ArrowRight, Flame, Shield, Award } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section - Raw and Emotional */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-gray-900 to-slate-950">
          <motion.div 
            className="absolute top-1/3 left-1/3 w-96 h-96 bg-red-500/30 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{ 
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ 
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />
        </div>

        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.div
              className="inline-flex items-center gap-3 bg-red-500/20 border border-red-500/30 rounded-full px-6 py-3 mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <Flame className="w-5 h-5 text-red-400" />
              <span className="text-red-300 font-semibold">Born from Frustration</span>
            </motion.div>

            <h1 className="text-5xl md:text-8xl font-black text-white leading-[0.85] mb-8">
              We Were{' '}
              <span className="bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
                Fed Up
              </span>
              <span className="block text-4xl md:text-6xl mt-4 text-gray-300">
                With The Bullsh.. yeah you know
              </span>
            </h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 max-w-5xl mx-auto leading-relaxed mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Sitting through another PowerPoint from 1997. Watching colleagues accept 
              <span className="text-red-400 font-bold"> "good enough"</span> training because 
              that's all that existed. Being treated like we don't deserve 
              <span className="text-white font-bold"> real professional education</span>.
            </motion.p>

            <motion.p 
              className="text-2xl md:text-3xl font-bold text-white mb-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
            >
              So we built what we wished existed.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* The Breaking Point */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-slate-950 relative">
        <div className="w-full max-w-6xl mx-auto px-6">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight">
              The Breaking{' '}
              <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                Point
              </span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* The Moment */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-red-500/20 to-orange-500/20 border border-red-500/30 rounded-3xl p-10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/20 rounded-full blur-2xl"></div>
                
                <blockquote className="text-2xl md:text-3xl text-white leading-relaxed font-light italic mb-8">
                  "I've been through enough EMS training to know when it's good and when it's... not. 
                  I've also spent years in tech and cybersecurity. When I saw how far behind EMS education was, 
                  <span className="font-bold text-red-300"> I couldn't just complain about it anymore.</span>"
                </blockquote>
                
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-bold text-lg">Steven White</div>
                    <div className="text-gray-400">Firefighter/Paramedic • Cyber Security</div>
                    <div className="text-gray-500 text-sm">RescuEd Founder</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* The Realization */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-4xl font-black text-white mb-8">
                Two Worlds, One Problem
              </h3>
              
              <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                <p>
                  Coming from both EMS and technology backgrounds gave us a unique perspective 
                  on just how far behind EMS education really was.
                </p>
                
                <p>
                  <span className="text-white font-semibold">It wasn't about having all the answers.</span> 
                  It was about seeing the gap between what technology could enable and what 
                  EMS providers were actually getting for "professional development."
                </p>
                
                <p className="text-xl font-semibold text-primary-300">
                  "We're not claiming to be experts. We just knew we could do better 
                  if someone actually tried."
                </p>
                
                <p>
                  RescuEd started as a passion project - combining a love of technology 
                  with frustration at subpar EMS training.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Who We Really Are */}
      <section className="py-20 bg-gradient-to-b from-slate-950 to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <motion.div 
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.4, 1],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{ 
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        <div className="w-full max-w-6xl mx-auto px-6 relative z-10">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-black text-white mb-8">
              Who We{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Really Are
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Not a tech company that decided to do healthcare. 
              An EMS provider who learned tech and got tired of accepting the status quo.
            </p>
          </motion.div>

          {/* Team Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {[
              {
                emoji: "🚑",
                title: "EMS Reality Check",
                description: "RescuEd was built by people who work in EMS and have sat through the same frustrating training everyone else has.",
                stats: "Current providers, not former"
              },
              {
                emoji: "💻", 
                title: "Tech Background",
                description: "With backgrounds in cybersecurity and technology, we saw how far behind EMS education really was.",
                stats: "Built with modern tech standards"
              },
              {
                emoji: "🤝",
                title: "Collaborative Vision",
                description: "RescuEd partners with experienced educators who know what they're doing - we just provide better tools.",
                stats: "Working with educators nationwide"
              }
            ].map((member, index) => (
              <motion.div
                key={index}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 text-center hover:bg-white/10 transition-all duration-500"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -10 }}
              >
                <div className="text-6xl mb-6">{member.emoji}</div>
                <h3 className="text-2xl font-bold text-white mb-4">{member.title}</h3>
                <p className="text-gray-400 leading-relaxed mb-4">{member.description}</p>
                <div className="text-primary-300 text-sm font-semibold">{member.stats}</div>
              </motion.div>
            ))}
          </div>

          {/* The Reality Check */}
          <motion.div
            className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 rounded-3xl p-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-black text-white mb-6">Here's the Thing</h3>
            <p className="text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
              RescuEd didn't set out to start a company. We just wanted 
              <span className="text-white font-bold"> professional-grade education</span> for 
              EMS providers - education that respects our intelligence, our time, and our profession.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Non-Negotiables */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-slate-950">
        <div className="w-full max-w-6xl mx-auto px-6">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-black text-white mb-8">
              Our{' '}
              <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                Non-Negotiables
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              These principles guide every decision we make. No compromises, no exceptions.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {[
              {
                icon: Target,
                title: "Provider Input Drives Everything",
                description: "We don't guess what providers need. We ask them. Every feature, every piece of content, every design decision gets vetted by working EMS professionals.",
                color: "from-green-500 to-emerald-500"
              },
              {
                icon: Zap,
                title: "No Corporate Foolery",
                description: "No synergy. No paradigm shifts. No revolutionary solutions. Just honest, straightforward education that helps you do your job better.",
                color: "from-yellow-500 to-orange-500"
              },
              {
                icon: Shield,
                title: "Current Content or No Content",
                description: "If it's not based on current protocols and practices, it doesn't go on the platform. We'd rather have less content than outdated content.",
                color: "from-blue-500 to-cyan-500"
              },
              {
                icon: Heart,
                title: "EMS Pride, Not EMS Shame",
                description: "We're healthcare professionals who save lives. Our education should reflect that reality, not perpetuate the \"ambulance driver\" stereotype.",
                color: "from-red-500 to-pink-500"
              }
            ].map((principle, index) => (
              <motion.div
                key={index}
                className="group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
              >
                <div className="flex gap-6">
                  <motion.div 
                    className={`flex-shrink-0 w-20 h-20 bg-gradient-to-br ${principle.color} rounded-3xl flex items-center justify-center shadow-2xl`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <principle.icon className="w-10 h-10 text-white" />
                  </motion.div>
                  
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-primary-300 transition-colors">
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
        </div>
      </section>

      {/* The Future Vision */}
      <section className="py-24 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-700 relative overflow-hidden">
        <div className="absolute inset-0">
          <motion.div 
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.5, 1],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{ 
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-white/5 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.05, 0.2, 0.05]
            }}
            transition={{ 
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 4
            }}
          />
        </div>

        <div className="w-full max-w-5xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight">
              Where We're{' '}
              <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Going
              </span>
            </h2>
            
            <p className="text-2xl text-blue-100 mb-12 leading-relaxed">
              We want to create a world where every EMS provider has access to 
              <span className="text-white font-bold"> world-class professional education</span>. 
              Where continuing education isn't a chore, but genuine professional development. 
              Where providers are proud of their skills and confident in their knowledge.
            </p>

            <motion.div
              className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-10 mb-12"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <blockquote className="text-2xl md:text-3xl text-white italic font-light leading-relaxed">
                "When EMS providers have access to excellent education, 
                everyone wins. Providers feel more confident and competent. 
                Patients receive better care. The profession gains respect."
              </blockquote>
            </motion.div>

            <motion.div 
              className="flex flex-col sm:flex-row items-center justify-center gap-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.button 
                className="bg-white text-blue-600 hover:bg-blue-50 font-bold text-xl px-12 py-5 rounded-2xl flex items-center gap-3 shadow-2xl transition-all duration-300"
                whileHover={{ scale: 1.05, boxShadow: "0 25px 50px rgba(255,255,255,0.3)" }}
                whileTap={{ scale: 0.95 }}
              >
                Join the Movement
                <ArrowRight className="w-6 h-6" />
              </motion.button>
              
              <p className="text-blue-100 text-lg">
                Because you deserve better than PowerPoint from 1997.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}