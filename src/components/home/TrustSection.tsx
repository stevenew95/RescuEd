import { motion } from 'framer-motion'
import { Shield, Award, CheckCircle, Lock } from 'lucide-react'

// Mock logos - in real app these would be actual healthcare system logos
const healthcareSystems = [
  { name: "MedStar Health", logo: "🏥" },
  { name: "Johns Hopkins", logo: "🏥" },
  { name: "Cleveland Clinic", logo: "🏥" },
  { name: "Kaiser Permanente", logo: "🏥" },
  { name: "Mayo Clinic", logo: "🏥" },
  { name: "Mass General", logo: "🏥" }
]

const certifications = [
  {
    icon: Shield,
    title: "NAEMSE Approved",
    description: "National Association of EMS Educators certified content"
  },
  {
    icon: Award,
    title: "NREMT Recognized",
    description: "National Registry accepted continuing education provider"
  },
  {
    icon: Lock,
    title: "HIPAA Compliant",
    description: "Enterprise-grade security and privacy protection"
  },
  {
    icon: CheckCircle,
    title: "Accredited Platform",
    description: "Meets all state and federal CE requirements"
  }
]

export default function TrustSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 to-slate-950 relative">
      <div className="w-full max-w-7xl mx-auto px-6">
        

        {/* Certifications and compliance */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Enterprise-Grade{' '}
            <span className="text-primary-300">
              Compliance
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Meeting the highest standards for medical education and data security
          </p>
        </motion.div>

        {/* Certification badges */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 hover:border-white/20 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <cert.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-lg font-bold text-white mb-3">
                {cert.title}
              </h3>
              
              <p className="text-gray-400 text-sm leading-relaxed">
                {cert.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Security notice */}
        <motion.div
          className="mt-16 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-xl border border-blue-500/30 rounded-2xl p-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Shield className="w-6 h-6 text-blue-400" />
            <span className="text-lg font-semibold text-white">Enterprise Security</span>
          </div>
          <p className="text-blue-100 max-w-2xl mx-auto">
            Bank-level encryption, SOC 2 compliance, and 99.9% uptime SLA. 
            Your data and learning progress are always secure and accessible.
          </p>
        </motion.div>
      </div>
    </section>
  )
}