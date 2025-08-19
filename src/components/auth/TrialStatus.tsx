import { motion } from 'framer-motion'
import { Clock, CreditCard, ArrowRight, CheckCircle, Zap } from 'lucide-react'
import { useTrialStatus } from '../../hooks/useTrialStatus'

export default function TrialStatus() {
  const { daysRemaining, totalTrialDays, isLoading } = useTrialStatus()

  if (isLoading) {
    return (
      <motion.div
        className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center justify-center">
          <div className="text-white">Loading trial status...</div>
        </div>
      </motion.div>
    )
  }

  const percentageUsed = ((totalTrialDays - daysRemaining) / totalTrialDays) * 100
  const isExpiringSoon = daysRemaining <= 3
  const isExpired = daysRemaining <= 0

  if (isExpired) {
    return (
      <motion.div
        className="bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/30 rounded-xl p-6 mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-bold text-white mb-2">Trial Expired</h3>
            <p className="text-gray-300">
              Your free trial has ended. Upgrade to continue accessing professional EMS education.
            </p>
          </div>
          <motion.button
            className="bg-gradient-to-r from-red-500 to-orange-500 text-white font-bold px-6 py-3 rounded-xl flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <CreditCard className="w-5 h-5" />
            Upgrade Now
          </motion.button>
        </div>
      </motion.div>
    )
  }

  return (
    <motion.div
      className={`border rounded-xl p-6 mb-6 ${
        isExpiringSoon 
          ? 'bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border-yellow-500/30' 
          : 'bg-gradient-to-r from-blue-500/20 to-green-500/20 border-blue-500/30'
      }`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
            isExpiringSoon ? 'bg-yellow-500/20' : 'bg-blue-500/20'
          }`}>
            {isExpiringSoon ? (
              <Clock className="w-5 h-5 text-yellow-400" />
            ) : (
              <Zap className="w-5 h-5 text-blue-400" />
            )}
          </div>
          <div>
            <h3 className="text-lg font-bold text-white">
              {isExpiringSoon ? 'Trial Ending Soon' : 'Free Trial Active'}
            </h3>
            <p className="text-gray-400 text-sm">
              {daysRemaining} {daysRemaining === 1 ? 'day' : 'days'} remaining
            </p>
          </div>
        </div>
        
        <motion.button
          className={`font-semibold px-6 py-3 rounded-xl flex items-center gap-2 transition-all duration-300 ${
            isExpiringSoon
              ? 'bg-gradient-to-r from-yellow-500 to-orange-500 text-black hover:from-yellow-600 hover:to-orange-600'
              : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {isExpiringSoon ? (
            <>
              <CreditCard className="w-5 h-5" />
              Upgrade Now
            </>
          ) : (
            <>
              View Plans
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </motion.button>
      </div>

      {/* Progress Bar */}
      <div className="mb-4">
        <div className="flex justify-between text-sm text-gray-400 mb-2">
          <span>Trial Progress</span>
          <span>{totalTrialDays - daysRemaining} of {totalTrialDays} days used</span>
        </div>
        <div className="bg-gray-700 rounded-full h-2">
          <motion.div
            className={`rounded-full h-2 ${
              isExpiringSoon 
                ? 'bg-gradient-to-r from-yellow-500 to-orange-500' 
                : 'bg-gradient-to-r from-blue-500 to-green-500'
            }`}
            initial={{ width: 0 }}
            animate={{ width: `${percentageUsed}%` }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </div>
      </div>

      {/* Trial Benefits */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
        {[
          { label: 'Full Access', icon: '🔓' },
          { label: 'All Courses', icon: '📚' },
          { label: 'CE Tracking', icon: '📊' },
          { label: 'Community', icon: '👥' }
        ].map((benefit, index) => (
          <div key={index} className="flex flex-col items-center gap-1">
            <span className="text-lg">{benefit.icon}</span>
            <span className="text-xs text-gray-400">{benefit.label}</span>
          </div>
        ))}
      </div>

      {isExpiringSoon && (
        <motion.div
          className="mt-4 pt-4 border-t border-white/10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="flex items-center gap-2 text-yellow-300">
            <CheckCircle className="w-4 h-4" />
            <span className="text-sm font-semibold">
              Upgrade now and save 20% on your first year
            </span>
          </div>
        </motion.div>
      )}
    </motion.div>
  )
}