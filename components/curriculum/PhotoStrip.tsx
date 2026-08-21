import { Motion } from '@/components/ui/motion'
import { Photo } from '@/components/ui/photo'
import { Wave } from '@/components/ui/wave'

const photos = [
  { src: '/images/montessori-materials.jpg',       alt: 'Children working with hands-on Montessori puzzles and counting materials' },
  { src: '/images/moments/shapes-with-teacher.jpeg', alt: 'An Olo Kinder teacher holding up a blue triangle for two children at a shape-sorting board' },
  { src: '/images/classroom-whiteboard-wide.jpg',  alt: 'A teacher leading an alphabet lesson at the whiteboard in an Olo Kinder classroom' },
]

// Short strip, so it takes the small divider plus enough bottom padding to
// keep the photos clear of it.
/* Pinned by hand, not stamped: each card leans a different way, and hovering
   one straightens it. */
const TILTS = ['-rotate-2', 'rotate-1', '-rotate-1']

export function PhotoStrip() {
  return (
    <section className="band-green px-4 sm:px-6 lg:px-8 pt-5 pb-12 sm:pb-14 relative overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4">
        {photos.map((photo, i) => (
          <Motion key={photo.src} variant="scale" delay={i * 100}>
            {/* A polaroid: white mat, photo contained inside it. The strip
                mixes a wide frame, a 9:16 phone still and a 3:2 photo, and
                nothing may be cropped — so the mat takes up the difference
                instead of the picture losing its edges. */}
            <figure
              className={`surface-card rounded-2xl p-3 pb-5 shadow-md transition-transform duration-300 hover:rotate-0 hover:-translate-y-1 ${TILTS[i % TILTS.length]}`}
            >
              <Photo
                src={photo.src}
                alt={photo.alt}
                className="aspect-4/3 w-full rounded-lg"
                fit="object-contain"
              />
            </figure>
          </Motion>
        ))}
      </div>

      <Wave className="text-background" height="sm" />
    </section>
  )
}
