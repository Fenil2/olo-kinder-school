import { Motion } from '@/components/ui/motion'

const photos = [
  { src: '/images/montessori-materials.jpg',       alt: 'Children working with hands-on Montessori puzzles and counting materials' },
  { src: '/images/numeracy-teacher.jpg',           alt: 'An Olo Kinder teacher introducing numbers to a small group of children' },
  { src: '/images/classroom-whiteboard-wide.jpg',  alt: 'A teacher leading an alphabet lesson at the whiteboard in an Olo Kinder classroom' },
]

export function PhotoStrip() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-6 bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4">
        {photos.map((photo, i) => (
          <Motion key={photo.src} variant="scale" delay={i * 100}>
            <div className="relative rounded-2xl overflow-hidden aspect-video sm:aspect-4/3 w-full">
              <img src={photo.src} alt={photo.alt} loading="lazy" className="w-full h-full object-cover" />
            </div>
          </Motion>
        ))}
      </div>
    </section>
  )
}
