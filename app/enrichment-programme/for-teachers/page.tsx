import type { Metadata } from 'next'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { HeroSection } from '@/components/enrichment/HeroSection'
import { EnrichmentNav } from '@/components/enrichment/EnrichmentNav'
import { ProgrammeSection } from '@/components/enrichment/ProgrammeSection'
import { CtaSection } from '@/components/enrichment/CtaSection'
import { forTeachers } from '@/lib/enrichment'

export const metadata: Metadata = {
  title: 'Enrichment Programme For Teachers - Olo Kinder',
  description:
    'Enrichment programmes for teachers at Olo Kinder school enhance professional growth and equip teachers with innovative teaching strategies through hands-on workshops in storytelling, puppetry and phonics.',
}

export default function EnrichmentForTeachers() {
  return (
    <>
      <Navigation />
      <main className="pt-20">
        <HeroSection page={forTeachers} />
        <EnrichmentNav current={forTeachers.slug} />
        {/* No "In Pictures" band here: the portrait beside the programme copy
            is the one photograph this page needs. */}
        <ProgrammeSection page={forTeachers} wave="text-surface-dark" />
        <CtaSection />
      </main>
      <Footer />
    </>
  )
}
