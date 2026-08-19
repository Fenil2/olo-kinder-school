import type { Metadata } from 'next'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { HeroSection } from '@/components/gallery/HeroSection'
import { GalleryGrid } from '@/components/gallery/GalleryGrid'
import { CtaSection } from '@/components/gallery/CtaSection'

export const metadata: Metadata = {
  title: 'Gallery - Olo Kinder',
  description:
    'Photos from everyday life at Olo Kinder school — classrooms, learning activities, outdoor play, celebrations and our thematic course books.',
}

export default function Gallery() {
  return (
    <>
      <Navigation />
      <main className="pt-20">
        <HeroSection />
        <GalleryGrid />
        <CtaSection />
      </main>
      <Footer />
    </>
  )
}
