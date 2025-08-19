import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { 
  Play, 
  ArrowRight,
  CheckCircle,
  Clock,
  Users,
  BookOpen,
  Headphones,
  Brain,
  Heart,
  Zap,
  ChevronDown,
  ChevronUp
} from 'lucide-react'

// We'll import these components
import InteractiveCaseStudy from '../components/demo/InteractiveCaseStudy'
import VideoLessonDemo from '../components/demo/VideoLessonDemo'
import PathophysiologyModule from '../components/demo/PathophysiologyModule'
import PodcastDemo from '../components/demo/PodcastsDemo'
import ProgressTrackingDemo from '../components/demo/ProgressTrackingDemo'

export default function DemoPage() {
  const [expandedDemo, setExpandedDemo] = useState<string | null>(null)

  const demoSections = [
    {
      id: 'case-study',
      title: 'Interactive Case Studies',
      subtitle: 'Real scenarios with branching decisions',
      description: 'Experience how we turn complex medical scenarios into engaging, decision-based learning that mirrors actual field work.',
      icon: Brain,
      color: 'from-blue-500 to-purple-600',
      preview: 'Navigate a cardiac emergency with real-time decision points',
      component: InteractiveCaseStudy
    },
    {
      id: 'video-lesson',
      title: 'Professional Video Content',
      subtitle: 'Current techniques from working providers',
      description: 'High-quality instructional videos that respect your intelligence and time, created by providers who know the field.',
      icon: Play,
      color: 'from-green-500 to-blue-600',
      preview: 'Watch a comprehensive airway assessment demonstration',
      component: VideoLessonDemo
    },
    {
      id: 'pathophysiology',
      title: 'Deep Pathophysiology',
      subtitle: 'Understanding the "why" behind conditions',
      description: 'Interactive modules that build foundational knowledge, helping you understand disease processes at a deeper level.',
      icon: Heart,
      color: 'from-red-500 to-pink-600',
      preview: 'Explore how heart failure affects multiple body systems',
      component: PathophysiologyModule
    },
    {
      id: 'podcast',
      title: 'Expert Podcasts',
      subtitle: 'Learn during commutes and downtime',
      description: 'Conversations with specialists and experienced providers covering topics you won\'t find in traditional CE.',
      icon: Headphones,
      color: 'from-purple-500 to-indigo-600',
      preview: 'Listen to a flight paramedic discuss critical care transport',
      component: PodcastDemo
    },
    {
      id: 'progress',
      title: 'Smart Progress Tracking',
      subtitle: 'See your growth and stay compliant',
      description: 'Comprehensive tracking that shows not just completion, but actual learning progress and skill development.',
      icon: CheckCircle,
      color: 'from-yellow-500 to-orange-600',
      preview: 'View detailed analytics of your learning journey',
      component: ProgressTrackingDemo
    }
  ]

  const toggleDemo = (demoId: string) => {
    setExpandedDemo(expandedDemo === demoId ? null : demoId)
  }

  return (
    <div className="min-h-screen bg-gray-900 pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-slate-950 via-gray-900 to-slate-950">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-3 bg-primary-500/20 border border-primary-500/30 rounded-full px-6 py-3 mb-8">
              <Zap className="w-5 h-5 text-primary-400" />
              <span className="text-primary-300 font-semibold">Interactive Product Demo</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-6">
              See RescuEd in{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Action
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-12">
              Don't just take our word for it. Experience the actual content, learning methods, 
              and tools that make RescuEd different. Click any section below to try it yourself.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Demo Sections - Accordion Style */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
          </motion.div>

          {/* Accordion Demo Cards */}
          <div className="space-y-4">
            {demoSections.map((section, index) => (
              <motion.div
                key={section.id}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Card Header - Always Visible */}
                <motion.div
                  className="p-8 cursor-pointer hover:bg-white/10 transition-all duration-300"
                  onClick={() => toggleDemo(section.id)}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-6">
                      <div className={`w-16 h-16 bg-gradient-to-r ${section.color} rounded-2xl flex items-center justify-center`}>
                        <section.icon className="w-8 h-8 text-white" />
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white mb-2">{section.title}</h3>
                        <p className="text-primary-300 font-semibold text-sm mb-2">{section.subtitle}</p>
                        <p className="text-gray-400 leading-relaxed">{section.description}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="text-right hidden md:block">
                        <div className="text-gray-500 text-sm italic mb-2">{section.preview}</div>
                        <div className="flex items-center gap-2 text-primary-400 font-semibold">
                          <span className="text-sm">
                            {expandedDemo === section.id ? 'Close Demo' : 'Try Demo'}
                          </span>
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>
                      
                      <motion.div
                        animate={{ rotate: expandedDemo === section.id ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown className="w-6 h-6 text-gray-400" />
                      </motion.div>
                    </div>
                  </div>
                </motion.div>

                {/* Expanded Content */}
                <AnimatePresence>
                  {expandedDemo === section.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-white/10 bg-white/5">
                        <div className="p-8">
                          <section.component />
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-700 relative overflow-hidden">
        <div className="absolute inset-0">
          <motion.div 
            className="absolute top-20 left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{ 
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        <div className="w-full max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
              Ready to Upgrade Your Education?
            </h2>
            
            <p className="text-xl text-blue-100 mb-12 leading-relaxed">
              Join thousands of providers who've already made the switch to professional-grade EMS education.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.button 
                className="bg-white text-blue-600 hover:bg-blue-50 font-bold text-xl px-10 py-4 rounded-xl flex items-center gap-3 shadow-2xl transition-all duration-300"
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(255,255,255,0.2)" }}
                whileTap={{ scale: 0.95 }}
              >
                Start Free Trial
                <ArrowRight className="w-6 h-6" />
              </motion.button>
              
              <p className="text-blue-100">
                14 days free • No credit card required
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}