import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { HeroSection } from '@/components/learning-experiences/HeroSection'
import { ExperiencesSection } from '@/components/learning-experiences/ExperiencesSection'
import { CtaSection } from '@/components/learning-experiences/CtaSection'

export default function LearningExperiences() {
  return (
    <>
      <Navigation />
      <main className="pt-20">
        <HeroSection />
        <ExperiencesSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  )
}
