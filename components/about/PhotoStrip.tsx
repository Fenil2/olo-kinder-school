import { Motion } from '@/components/ui/motion'
import { Photo } from '@/components/ui/photo'
import { Wave } from '@/components/ui/wave'

const photos = [
  { src: '/images/teacher-alphabet-floor.jpg', alt: 'An Olo Kinder teacher leading an alphabet activity on the classroom floor' },
  { src: '/images/pretend-play-market.jpg',    alt: 'Children running a pretend market stall during dramatic play' },
  { src: '/images/art-and-coloring.jpg',       alt: 'Children colouring at a classroom table and holding up their finished drawings' },
]

export function PhotoStrip() {
  return (
    <section className="pt-6 pb-12 sm:pb-14 px-4 sm:px-6 lg:px-8 band-green relative overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4">
        {photos.map((photo, i) => (
          <Motion key={photo.src} variant="scale" delay={i * 100}>
            <Photo src={photo.src} alt={photo.alt} className="blob-soft aspect-video sm:aspect-4/3 w-full shadow-sm" />
          </Motion>
        ))}
      </div>

      <Wave className="text-surface-dark" height="sm" />
    </section>
  )
}
