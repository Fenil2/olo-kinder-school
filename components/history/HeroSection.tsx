import { PageHero } from '@/components/ui/page-hero'

export function HeroSection() {
  return (
    <PageHero
      eyebrow="About Us"
      title="Our"
      titleAccent="History"
      subtitle="Olo Kinder is an assemblage of thematic kindergarten learning modules that provide a learning experience based on international standards while preserving our core Indian values."
      /* The page switcher sits on cream directly under the hero. */
      nextBand="text-background"
    />
  )
}
