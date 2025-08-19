import { ArrowRight, CheckCircle } from 'lucide-react'
import { motion } from 'framer-motion'

export default function FinalCTA() {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-700 relative overflow-hidden">
      {/* Background elements */}
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
        <motion.div 
          className="absolute bottom-20 right-20 w-80 h-80 bg-white/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.05, 0.15, 0.05]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
        />
      </div>

      <div className="w-full px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
            Your Patients Deserve Better
          </h2>
          
          <p className="text-xl text-blue-100 mb-12 leading-relaxed max-w-3xl mx-auto">
            RescuEd offers the professional education platform EMS providers have been asking for. 
            Built with input from working providers across all certification levels.
          </p>

          {/* Benefits list */}
          <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
            {[
              "Free trial included",
              "No credit card required",
              "Cancel anytime"
            ].map((benefit, index) => (
              <motion.div
                key={index}
                className="flex items-center justify-center gap-2 text-blue-100"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="font-medium">{benefit}</span>
              </motion.div>
            ))}
          </div>

          {/* CTA buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.button 
              className="bg-white text-blue-600 hover:bg-blue-50 font-bold text-xl px-10 py-4 rounded-xl flex items-center gap-3 shadow-2xl transition-all duration-300"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(255,255,255,0.2)" }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Journey Today
              <ArrowRight className="w-6 h-6" />
            </motion.button>
            
            <motion.button 
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold text-lg px-8 py-4 rounded-xl transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Talk to Sales
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}