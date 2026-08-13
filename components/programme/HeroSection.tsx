import { PageHero } from '@/components/ui/page-hero'

export function HeroSection({ title, image, imageAlt }: { title: string; image: string; imageAlt: string }) {
  return (
    <PageHero
      eyebrow="Curriculum"
      title={title}
      subtitle="Thematic Learning Modules"
      image={image}
      imageAlt={imageAlt}
      focus="50% 45%"
    />
  )
}
