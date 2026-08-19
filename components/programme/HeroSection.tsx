import { PageHero } from '@/components/ui/page-hero'

export function HeroSection({ title }: { title: string }) {
  return (
    <PageHero
      eyebrow="Curriculum"
      title={title}
      subtitle="Thematic Learning Modules"
    />
  )
}
