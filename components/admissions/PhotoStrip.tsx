import { Motion } from '@/components/ui/motion'
import { Photo } from '@/components/ui/photo'

const photos = [
  { src: '/images/campus-walk.jpg',      alt: 'Olo Kinder children in uniform walking together through the school courtyard' },
  { src: '/images/moments/stage-microphone.jpeg', alt: 'A child in festival dress speaking into a microphone on stage in front of her classmates' },
  { src: '/images/art-and-coloring.jpg', alt: 'Children colouring at a classroom table and holding up their finished drawings' },
]

export function PhotoStrip() {
  return (
    <section className="band-teal px-4 sm:px-6 lg:px-8 py-5">
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4">
        {photos.map((photo, i) => (
          <Motion key={photo.src} variant="scale" delay={i * 100}>
            <Photo src={photo.src} alt={photo.alt} className="rounded-2xl aspect-video sm:aspect-4/3 w-full" />
          </Motion>
        ))}
      </div>
    </section>
  )
}
