import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { HeroSection } from '@/components/home/HeroSection'
import { MascotsSection } from '@/components/home/MascotsSection'
import { WhySection } from '@/components/home/WhySection'
import { ExperiencesSection } from '@/components/home/ExperiencesSection'
import { LearningJourneySection } from '@/components/home/LearningJourneySection'
import { TestimonialsSection } from '@/components/home/TestimonialsSection'
import { AdmissionsCtaSection } from '@/components/home/AdmissionsCtaSection'

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="pt-20">
        <HeroSection />
        <MascotsSection />
        <WhySection />
        <ExperiencesSection />
        <LearningJourneySection />
        <TestimonialsSection />
        <AdmissionsCtaSection />
      </main>
      <Footer />
    </>
  )
}
