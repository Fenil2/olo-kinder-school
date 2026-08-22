import { PageHero } from '@/components/ui/page-hero'
import type { EnrichmentPage } from '@/lib/enrichment'

export function HeroSection({ page }: { page: EnrichmentPage }) {
  return (
    <PageHero
      eyebrow="Enrichment Programme"
      title={page.title}
      titleAccent={page.titleAccent}
      subtitle={page.lead}
      // The sub-nav pills sit on cream directly beneath the hero.
      nextBand="text-brand-cream"
    />
  )
}
