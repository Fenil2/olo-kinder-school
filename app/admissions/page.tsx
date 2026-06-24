import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { HeroSection } from '@/components/admissions/HeroSection'
import { ProcessSection } from '@/components/admissions/ProcessSection'
import { PhotoStrip } from '@/components/admissions/PhotoStrip'
import { EnquiryFormSection } from '@/components/admissions/EnquiryFormSection'

export default function Admissions() {
  return (
    <>
      <Navigation />
      <main className="pt-20">
        <HeroSection />
        <ProcessSection />
        <PhotoStrip />
        <EnquiryFormSection />
      </main>
      <Footer />
    </>
  )
}
