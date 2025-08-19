import HeroSection from '../components/home/HeroSection'
import PurposeBuiltSection from '../components/home/PurposeBuiltSection'
import ProfessionalizationSection from '../components/home/ProfessionalizationSection'
import StatsSection from '../components/home/StatsSection'
import FeaturesSection from '../components/home/FeaturesSection'
import PlatformDemo from '../components/home/PlatformDemo'
import CoursePreview from '../components/home/CoursePreview'
import TestimonialsSection from '../components/home/TestimonialsSection'
import TrustSection from '../components/home/TrustSection'
import FinalCTA from '../components/home/FinalCTA'

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <PurposeBuiltSection />
      <ProfessionalizationSection />
      <StatsSection />
      <FeaturesSection />
      <PlatformDemo />
      <CoursePreview />
      <TestimonialsSection />
      <TrustSection />
      <FinalCTA />
    </div>
  )
}