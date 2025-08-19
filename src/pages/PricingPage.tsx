import { motion } from 'framer-motion'
import { Check, Star, Users, Zap, ArrowRight, Heart } from 'lucide-react'
import { useState } from 'react'

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly')

  const plans = [
    {
      name: "Individual",
      description: "Perfect for providers serious about their professional development",
      monthlyPrice: 29,
      yearlyPrice: 290,
      icon: Star,
      color: "from-blue-500 to-purple-600",
      features: [
        "Access to all course content",
        "Tamper-proof CE tracking",
        "Progress analytics",
        "Certificate downloads",
        "Mobile app access",
        "Community forums",
        "Email support"
      ]
    },
    {
      name: "Team",
      description: "For small departments and agencies who learn together",
      monthlyPrice: 25,
      yearlyPrice: 250,
      icon: Users,
      color: "from-green-500 to-blue-600",
      popular: true,
      perUser: true,
      minimumSeats: 5,
      features: [
        "Everything in Individual",
        "Team progress dashboard",
        "Shared learning goals",
        "Group discussions",
        "Basic reporting",
        "Bulk enrollment",
        "Shared certificates",
        "Priority support"
      ]
    },
    {
      name: "Pro",
      description: "Advanced features for career-focused providers",
      monthlyPrice: 49,
      yearlyPrice: 490,
      icon: Zap,
      color: "from-purple-500 to-pink-600",
      features: [
        "Everything in Individual",
        "Priority access to new content",
        "Advanced analytics & insights",
        "Personalized learning paths",
        "1-on-1 education consultations",
        "Early access to beta features",
        "Direct instructor access",
        "Career development tools"
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-gray-900 to-slate-950">
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
        </div>

        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-6">
              Simple{' '}
              <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                Pricing
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
              Professional education shouldn't break the bank. Choose the plan that fits 
              your learning style and career goals.
            </p>

            {/* Billing Toggle */}
            <div className="flex items-center justify-center gap-4 mb-16">
              <span className={`font-medium ${billingCycle === 'monthly' ? 'text-white' : 'text-gray-400'}`}>
                Monthly
              </span>
              <motion.button
                className="relative w-16 h-8 bg-gray-700 rounded-full p-1 transition-colors duration-300"
                onClick={() => setBillingCycle(prev => prev === 'monthly' ? 'yearly' : 'monthly')}
                animate={{ backgroundColor: billingCycle === 'yearly' ? '#3B82F6' : '#374151' }}
              >
                <motion.div
                  className="w-6 h-6 bg-white rounded-full shadow-lg"
                  animate={{ x: billingCycle === 'yearly' ? 32 : 0 }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              </motion.button>
              <div className="flex items-center gap-2">
                <span className={`font-medium ${billingCycle === 'yearly' ? 'text-white' : 'text-gray-400'}`}>
                  Yearly
                </span>
                <span className="bg-green-500/20 text-green-400 text-xs font-bold px-2 py-1 rounded-full">
                  Save 15%
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Plans */}
      <section className="py-16 bg-gradient-to-b from-gray-900 to-slate-950">
        <div className="w-full max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                className={`relative bg-white/5 backdrop-blur-xl border rounded-3xl p-8 hover:bg-white/10 transition-all duration-300 ${
                  plan.popular 
                    ? 'border-primary-500/50 shadow-2xl shadow-primary-500/25 scale-105' 
                    : 'border-white/10'
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: plan.popular ? 1.05 : 1.02, y: -5 }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white text-sm font-bold px-6 py-2 rounded-full">
                      Most Popular
                    </div>
                  </div>
                )}

                {/* Plan header */}
                <div className="text-center mb-8">
                  <div className={`w-16 h-16 bg-gradient-to-r ${plan.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                    <plan.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 text-sm mb-6">{plan.description}</p>
                  
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl font-black text-white">
                      ${billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice}
                    </span>
                    <span className="text-gray-400">
                      {plan.perUser ? '/user' : ''}
                      /{billingCycle === 'monthly' ? 'month' : 'year'}
                    </span>
                  </div>
                  
                  {plan.minimumSeats && (
                    <div className="text-sm text-gray-400 mt-2">
                      Minimum {plan.minimumSeats} people
                    </div>
                  )}
                  
                  {billingCycle === 'yearly' && (
                    <div className="text-green-400 text-sm font-medium mt-2">
                      Save ${(plan.monthlyPrice * 12) - plan.yearlyPrice}{plan.perUser ? ' per person' : ''} annually
                    </div>
                  )}
                </div>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <motion.button
                  className={`w-full py-4 rounded-xl font-bold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-green-500 to-blue-500 text-white hover:from-green-600 hover:to-blue-600'
                      : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Start Free Trial
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Simple benefits */}
      <section className="py-16 bg-gradient-to-b from-slate-950 to-gray-900">
        <div className="w-full max-w-6xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              Why{' '}
              <span className="text-primary-400">RescuEd</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🎯",
                title: "No Contracts",
                description: "Month-to-month billing. Cancel anytime. No hidden fees or long-term commitments."
              },
              {
                icon: "⚡",
                title: "Instant Access",
                description: "Start learning immediately. No waiting for approvals or lengthy setup processes."
              },
              {
                icon: "💡",
                title: "Provider Built",
                description: "Created by working EMS providers who understand what you actually need to learn."
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="text-4xl mb-6">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                <p className="text-gray-400 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gradient-to-b from-gray-900 to-slate-950">
        <div className="w-full max-w-4xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              Common{' '}
              <span className="text-primary-400">Questions</span>
            </h2>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                question: "Can I switch plans anytime?",
                answer: "Yes! Upgrade or downgrade whenever you want. Changes take effect immediately and we'll adjust your billing accordingly."
              },
              {
                question: "What happens to my CE credits if I cancel?",
                answer: "Your certificates are yours forever. You can download them anytime, and we keep your records for 7 years for audit purposes."
              },
              {
                question: "Do you offer discounts for volunteer departments?",
                answer: "Absolutely. We offer 25% discounts for volunteer EMS organizations. Just contact us with verification of your volunteer status."
              },
              {
                question: "Is the content updated regularly?",
                answer: "Yes, our content is continuously updated by working providers and educators. You'll always have access to current protocols and best practices."
              },
              {
                question: "Can my department use this for required training?",
                answer: "The Team plan is perfect for departments. You can track everyone's progress and ensure compliance with training requirements."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-bold text-white mb-3">{faq.question}</h3>
                <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
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
              Start Learning Today
            </h2>
            
            <p className="text-xl text-blue-100 mb-12 leading-relaxed">
              Join thousands of EMS providers who've already committed to professional excellence.
            </p>

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
                <Heart className="w-6 h-6" />
                Start Free Trial
              </motion.button>
              
              <p className="text-blue-100 text-sm">
                14 days free • No credit card required
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}