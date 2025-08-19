import { motion } from 'framer-motion'
import AuthenticatedLayout from '../components/layout/AuthenticatedLayout'
import WelcomeHeader from '../components/dashboard/WelcomeHeader'
import ContinueLearning from '../components/dashboard/ContinueLearning'
import ProgressOverview from '../components/dashboard/ProgressOverview'
import RecommendedContent from '../components/dashboard/RecommendedContent'
import QuickActions from '../components/dashboard/QuickActions'
import RecentActivity from '../components/dashboard/RecentActivity'

export default function DashboardPage() {
  return (
    <AuthenticatedLayout>
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Welcome Section */}
        <WelcomeHeader />

        {/* Main Dashboard Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Primary Content */}
          <div className="lg:col-span-2 space-y-8">
            <ContinueLearning />
            <RecommendedContent />
          </div>

          {/* Right Column - Secondary Content */}
          <div className="space-y-8">
            <ProgressOverview />
            <QuickActions />
            <RecentActivity />
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  )
}