import type { Metadata } from 'next'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { HeroSection } from '@/components/enrichment/HeroSection'
import { EnrichmentNav } from '@/components/enrichment/EnrichmentNav'
import { ProgrammeSection } from '@/components/enrichment/ProgrammeSection'
import { GallerySection } from '@/components/enrichment/GallerySection'
import { CtaSection } from '@/components/enrichment/CtaSection'
import { forParents } from '@/lib/enrichment'

export const metadata: Metadata = {
  title: 'Enrichment Programme For Parents - Olo Kinder',
  description:
    'Enrichment programmes for parents at Olo Kinder school offer workshops, seminars and interactive sessions on nutrition, parent-child communication, guiding good behaviour and fostering a love for learning at home.',
}

export default function EnrichmentForParents() {
  return (
    <>
      <Navigation />
      <main className="pt-20">
        <HeroSection page={forParents} />
        <EnrichmentNav current={forParents.slug} />
        <ProgrammeSection page={forParents} />
        <GallerySection page={forParents} />
        <CtaSection />
      </main>
      <Footer />
    </>
  )
}
