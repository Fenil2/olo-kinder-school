import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { HeroSection } from '@/components/curriculum/HeroSection'
import { ApproachSection } from '@/components/curriculum/ApproachSection'
import { CoreFocusSection } from '@/components/curriculum/CoreFocusSection'
import { PhotoStrip } from '@/components/curriculum/PhotoStrip'
import { ProgrammesSection } from '@/components/curriculum/ProgrammesSection'
import { LearningPillarsSection } from '@/components/curriculum/LearningPillarsSection'
import { LearningAreasSection } from '@/components/curriculum/LearningAreasSection'
import { CtaSection } from '@/components/curriculum/CtaSection'

export default function Curriculum() {
  return (
    <>
      <Navigation />
      <main className="pt-20">
        <HeroSection />
        <ApproachSection />
        <CoreFocusSection />
        <PhotoStrip />
        <ProgrammesSection />
        <LearningPillarsSection />
        <LearningAreasSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  )
}
