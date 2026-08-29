import type { Metadata } from 'next'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { AboutNav } from '@/components/about/AboutNav'
import { HeroSection } from '@/components/history/HeroSection'
import { QuoteSection } from '@/components/history/QuoteSection'
import { VoyageSection } from '@/components/history/VoyageSection'
import { CtaSection } from '@/components/about/CtaSection'

export const metadata: Metadata = {
  title: 'Our History - Olo Kinder',
  description:
    'Olo Kinder is an assemblage of thematic kindergarten learning modules that provide a learning experience based on international standards while preserving our core Indian values.',
}

export default function OurHistory() {
  return (
    <>
      <Navigation />
      <main className="pt-20">
        <HeroSection />
        <AboutNav current="our-history" />
        <QuoteSection />
        <VoyageSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  )
}
