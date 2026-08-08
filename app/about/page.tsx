import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { HeroSection } from '@/components/about/HeroSection'
import { WhoWeAreSection } from '@/components/about/WhoWeAreSection'
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
        <WhoWeAreSection />
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
