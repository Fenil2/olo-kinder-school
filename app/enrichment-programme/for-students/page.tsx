import type { Metadata } from 'next'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { HeroSection } from '@/components/enrichment/HeroSection'
import { EnrichmentNav } from '@/components/enrichment/EnrichmentNav'
import { ProgrammeSection } from '@/components/enrichment/ProgrammeSection'
import { GallerySection } from '@/components/enrichment/GallerySection'
import { CtaSection } from '@/components/enrichment/CtaSection'
import { forStudents } from '@/lib/enrichment'

export const metadata: Metadata = {
  title: 'Enrichment Programme For Students - Olo Kinder',
  description:
    'Enrichment programmes for young students at Olo Kinder school foster creativity and critical thinking, build a passion for art and music, and develop a scientific temper through STEM and STEAM activities.',
}

export default function EnrichmentForStudents() {
  return (
    <>
      <Navigation />
      <main className="pt-20">
        <HeroSection page={forStudents} />
        <EnrichmentNav current={forStudents.slug} />
        <ProgrammeSection page={forStudents} />
        <GallerySection page={forStudents} />
        <CtaSection />
      </main>
      <Footer />
    </>
  )
}
