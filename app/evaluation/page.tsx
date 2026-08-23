import type { Metadata } from 'next'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { HeroSection } from '@/components/evaluation/HeroSection'
import { WhatIsSection } from '@/components/evaluation/WhatIsSection'
import { WhyImportantSection } from '@/components/evaluation/WhyImportantSection'
import { HowConductedSection } from '@/components/evaluation/HowConductedSection'
import { RubricsSection } from '@/components/evaluation/RubricsSection'
import { CtaSection } from '@/components/enrichment/CtaSection'

export const metadata: Metadata = {
  title: 'Evaluation - Olo Kinder',
  description:
    'Evaluation at Olo Kinder school: informal observations, play-based activities, termly summative tasks and the CBSE Holistic Progress Card, used to understand and foster the holistic development of every young child.',
}

export default function Evaluation() {
  return (
    <>
      <Navigation />
      <main className="pt-20">
        <HeroSection />
        <WhatIsSection />
        <WhyImportantSection />
        <HowConductedSection />
        <RubricsSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  )
}
