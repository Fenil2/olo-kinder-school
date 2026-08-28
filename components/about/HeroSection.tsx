import { PageHero } from '@/components/ui/page-hero'

export function HeroSection() {
  return (
    <PageHero
      eyebrow="About Us"
      title="About"
      titleAccent="Olo Kinder"
      subtitle="Olo Kinder is a unique early childhood learning initiative designed to nurture curious, confident, creative and compassionate young learners."
      /* The hero's scalloped ground line is filled with the colour of the band
         below it. With "Who We Are" parked, that is no longer cream — the
         vision band follows the hero directly. */
      nextBand="text-surface-sky"
    />
  )
}
