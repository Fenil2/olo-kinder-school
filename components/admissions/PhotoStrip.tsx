import { Motion } from '@/components/ui/motion'
import { Photo } from '@/components/ui/photo'
import { Wave } from '@/components/ui/wave'

const photos = [
  { src: '/images/campus-walk.jpg',      alt: 'Olo Kinder children in uniform walking together through the school courtyard' },
  { src: '/images/moments/stage-microphone.jpeg', alt: 'A child in festival dress speaking into a microphone on stage in front of her classmates' },
  { src: '/images/art-and-coloring.jpg', alt: 'Children colouring at a classroom table and holding up their finished drawings' },
]

/* Pinned by hand, not stamped: each card leans a different way, and hovering
   one straightens it. */
const TILTS = ['-rotate-2', 'rotate-1', '-rotate-1']

export function PhotoStrip() {
  return (
    <section className="band-green px-4 sm:px-6 lg:px-8 pt-5 pb-12 sm:pb-14 relative overflow-hidden">
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4">
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

      <Wave className="text-surface-sky" height="sm" />
    </section>
  )
}
