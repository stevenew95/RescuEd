import type { ReactNode } from 'react'
import { useAuth } from '../../contexts/AuthContext'
import AuthenticatedHeader from './AuthenticatedHeader'
import TrialStatusHeader from '../auth/TrialStatusHeader'

interface AuthenticatedLayoutProps {
  children: ReactNode
}

export default function AuthenticatedLayout({ children }: AuthenticatedLayoutProps) {
  const { userProfile } = useAuth()

  if (!userProfile) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-white">Loading profile...</div>
      </div>
    )
  }

  // Convert to format expected by AuthenticatedHeader
  const user = {
    firstName: userProfile.first_name,
    lastName: userProfile.last_name,
    email: userProfile.id, // We'll need to get email from auth.user if needed
    certificationLevel: userProfile.primary_certification
  }

  return (
    <div className="min-h-screen bg-gray-900">
      <AuthenticatedHeader user={user} />
      
      {/* Trial status now gets its own data */}
      <TrialStatusHeader 
        onUpgradeClick={() => window.location.href = '/pricing'}
      />
      
      <main className="pb-16">
        {children}
      </main>
    </div>
  )
}