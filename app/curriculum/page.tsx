import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { HeroSection } from '@/components/curriculum/HeroSection'
import { ApproachSection } from '@/components/curriculum/ApproachSection'
import { PhotoStrip } from '@/components/curriculum/PhotoStrip'
import { LearningAreasSection } from '@/components/curriculum/LearningAreasSection'
import { CtaSection } from '@/components/curriculum/CtaSection'

export default function Curriculum() {
  return (
    <>
      <Navigation />
      <main className="pt-20">
        <HeroSection />
        <ApproachSection />
        <PhotoStrip />
        <LearningAreasSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  )
}
