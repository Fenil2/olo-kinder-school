import { Motion } from '@/components/ui/motion'
import { Photo } from '@/components/ui/photo'

const photos = [
  { src: '/images/montessori-materials.jpg',       alt: 'Children working with hands-on Montessori puzzles and counting materials' },
  { src: '/images/moments/shapes-with-teacher.jpeg', alt: 'An Olo Kinder teacher holding up a blue triangle for two children at a shape-sorting board' },
  { src: '/images/classroom-whiteboard-wide.jpg',  alt: 'A teacher leading an alphabet lesson at the whiteboard in an Olo Kinder classroom' },
]

export function PhotoStrip() {
  return (
    <section className="band-green px-4 sm:px-6 lg:px-8 py-5">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4">
        {photos.map((photo, i) => (
          <Motion key={photo.src} variant="scale" delay={i * 100}>
            <Photo src={photo.src} alt={photo.alt} className="blob-soft aspect-video sm:aspect-4/3 w-full shadow-sm" />
          </Motion>
        ))}
      </div>
    </section>
  )
}
