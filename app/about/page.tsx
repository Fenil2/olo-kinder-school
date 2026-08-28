import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { HeroSection } from '@/components/about/HeroSection'
import { VisionMissionSection } from '@/components/about/VisionMissionSection'
import { LeadershipSection } from '@/components/about/LeadershipSection'
import { DifferencesSection } from '@/components/about/DifferencesSection'
import { PhotoStrip } from '@/components/about/PhotoStrip'
import { CtaSection } from '@/components/about/CtaSection'

export default function About() {
  return (
    <>
      <Navigation />
      <main className="pt-20">
        <HeroSection />
        {/* "Who We Are" is parked, not deleted — it still lives at
            components/about/WhoWeAreSection.tsx. It sat on cream between the
            hero and the vision, so the hero now has to hand off to the sky
            band that follows instead; see HeroSection's `nextBand`. */}
        <VisionMissionSection />
        <LeadershipSection />
        <DifferencesSection />
        <PhotoStrip />
        <CtaSection />
      </main>
      <Footer />
    </>
  )
}
