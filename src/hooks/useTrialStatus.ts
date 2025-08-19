import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabase'

export function useTrialStatus() {
  const [trialStatus, setTrialStatus] = useState({
    daysRemaining: 0,
    totalTrialDays: 14,
    isLoading: true
  })

  useEffect(() => {
    async function getTrialStatus() {
      try {
        // Get current user
        const { data: { user } } = await supabase.auth.getUser()
        
        if (!user) {
          // No user logged in
          setTrialStatus({
            daysRemaining: 0,
            totalTrialDays: 14,
            isLoading: false
          })
          return
        }

        // Get user profile with trial info
        const { data: profile } = await supabase
          .from('user_profiles')
          .select('trial_end_date, subscription_type')
          .eq('id', user.id)
          .single()

        if (profile && profile.subscription_type === 'trial') {
          const trialEnd = new Date(profile.trial_end_date)
          const now = new Date()
          const daysLeft = Math.ceil((trialEnd.getTime() - now.getTime()) / (1000 * 60 * 60 * 24))

          setTrialStatus({
            daysRemaining: Math.max(0, daysLeft),
            totalTrialDays: 14,
            isLoading: false
          })
        } else {
          // Not on trial
          setTrialStatus({
            daysRemaining: 0,
            totalTrialDays: 14,
            isLoading: false
          })
        }
      } catch (error) {
        console.error('Error getting trial status:', error)
        setTrialStatus({
          daysRemaining: 0,
          totalTrialDays: 14,
          isLoading: false
        })
      }
    }

    getTrialStatus()
  }, [])

  return trialStatus
}