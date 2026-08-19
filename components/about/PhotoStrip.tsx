import { Motion } from '@/components/ui/motion'
import { Photo } from '@/components/ui/photo'

const photos = [
  { src: '/images/teacher-alphabet-floor.jpg', alt: 'An Olo Kinder teacher leading an alphabet activity on the classroom floor' },
  { src: '/images/pretend-play-market.jpg',    alt: 'Children running a pretend market stall during dramatic play' },
  { src: '/images/classroom-reading-wide.jpg', alt: 'Children reading picture books at their desks in an Olo Kinder classroom' },
]

export function PhotoStrip() {
  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8 band-teal">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4">
        {photos.map((photo, i) => (
          <Motion key={photo.src} variant="scale" delay={i * 100}>
            <Photo src={photo.src} alt={photo.alt} className="rounded-2xl aspect-video sm:aspect-4/3 w-full" />
          </Motion>
        ))}
      </div>
    </section>
  )
}
