import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { BannerSection } from '@/components/home/BannerSection'
import { HeroSection } from '@/components/home/HeroSection'
import { MascotsSection } from '@/components/home/MascotsSection'
import { WhySection } from '@/components/home/WhySection'
import { GoalsSection } from '@/components/home/GoalsSection'
import { LearningJourneySection } from '@/components/home/LearningJourneySection'
import { TestimonialsSection } from '@/components/home/TestimonialsSection'
import { AdmissionsCtaSection } from '@/components/home/AdmissionsCtaSection'
import { MapSection } from '@/components/home/MapSection'

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="pt-20">
        <BannerSection />
        <HeroSection />
        <MascotsSection />
        <WhySection />
        {/* "Learning Through Experiences" is parked, not deleted — the section
            still lives at components/home/ExperiencesSection.tsx, and the same
            six experiences are on /learning-experiences. The goals deck takes
            its slot in the cream band between "Why" and the journey. */}
        <GoalsSection />
        <LearningJourneySection />
        <TestimonialsSection />
        <AdmissionsCtaSection />
        <MapSection />
      </main>
      <Footer />
    </>
  )
}
