import { motion } from 'framer-motion'
import { useState } from 'react'
import { Clock, X, ArrowRight, CreditCard } from 'lucide-react'
import { useTrialStatus } from '../../hooks/useTrialStatus'

interface TrialStatusHeaderProps {
  onUpgradeClick?: () => void
}

export default function TrialStatusHeader({ onUpgradeClick }: TrialStatusHeaderProps) {
  const { daysRemaining, totalTrialDays, isLoading } = useTrialStatus()
  const [isDismissed, setIsDismissed] = useState(false)

  if (isLoading) {
    return (
      <motion.div
        className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 mb-6"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center justify-center">
          <div className="text-white text-sm">Loading trial status...</div>
        </div>
      </motion.div>
    )
  }

  const isExpiringSoon = daysRemaining <= 3
  const isExpired = daysRemaining <= 0

  // Don't show if dismissed and not urgent
  if (isDismissed && !isExpiringSoon && !isExpired) {
    return null
  }

  // Always show if expired or expiring soon
  const canDismiss = !isExpiringSoon && !isExpired && daysRemaining > 3

  if (isExpired) {
    return (
      <motion.div
        className="bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/30 rounded-lg p-4 mb-6"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-red-500/20 rounded-lg flex items-center justify-center">
              <Clock className="w-4 h-4 text-red-400" />
            </div>
            <div>
              <span className="text-white font-semibold">Trial Expired</span>
              <span className="text-gray-400 text-sm ml-2">
                Upgrade to continue learning
              </span>
            </div>
          </div>
          <motion.button
            onClick={onUpgradeClick}
            className="bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold px-4 py-2 rounded-lg flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <CreditCard className="w-4 h-4" />
            Upgrade
          </motion.button>
        </div>
      </motion.div>
    )
  }

  return (
    <motion.div
      className={`border rounded-lg p-4 mb-6 ${
        isExpiringSoon 
          ? 'bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border-yellow-500/30' 
          : 'bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-blue-500/20'
      }`}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
            isExpiringSoon ? 'bg-yellow-500/20' : 'bg-blue-500/20'
          }`}>
            <Clock className={`w-4 h-4 ${
              isExpiringSoon ? 'text-yellow-400' : 'text-blue-400'
            }`} />
          </div>
          <div className="flex items-center gap-4">
            <div>
              <span className="text-white font-semibold">
                {isExpiringSoon ? '⚠️ Trial ending soon' : '🎯 Free trial active'}
              </span>
              <span className="text-gray-400 text-sm ml-2">
                {daysRemaining} {daysRemaining === 1 ? 'day' : 'days'} remaining
              </span>
            </div>
            
            {/* Mini progress bar */}
            <div className="hidden md:flex items-center gap-2">
              <div className="w-24 bg-gray-700 rounded-full h-1.5">
                <motion.div
                  className={`rounded-full h-1.5 ${
                    isExpiringSoon 
                      ? 'bg-gradient-to-r from-yellow-500 to-orange-500' 
                      : 'bg-gradient-to-r from-blue-500 to-purple-500'
                  }`}
                  initial={{ width: 0 }}
                  animate={{ width: `${((totalTrialDays - daysRemaining) / totalTrialDays) * 100}%` }}
                  transition={{ duration: 1 }}
                />
              </div>
              <span className="text-xs text-gray-400">
                {totalTrialDays - daysRemaining}/{totalTrialDays}
              </span>
            </div>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <motion.button
            onClick={onUpgradeClick}
            className={`font-semibold px-4 py-2 rounded-lg flex items-center gap-2 text-sm ${
              isExpiringSoon
                ? 'bg-gradient-to-r from-yellow-500 to-orange-500 text-black hover:from-yellow-600 hover:to-orange-600'
                : 'bg-white/10 text-white hover:bg-white/20'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isExpiringSoon ? 'Upgrade Now' : 'View Plans'}
            <ArrowRight className="w-3 h-3" />
          </motion.button>
          
          {canDismiss && (
            <motion.button
              onClick={() => setIsDismissed(true)}
              className="text-gray-400 hover:text-white transition-colors p-1"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <X className="w-4 h-4" />
            </motion.button>
          )}
        </div>
      </div>
    </motion.div>
  )
}