import { Motion } from '@/components/ui/motion'

const photos = [
  { src: '/images/campus-walk.jpg',      alt: 'Olo Kinder children in uniform walking together through the school courtyard' },
  { src: '/images/show-and-tell.jpg',    alt: 'A child presenting a paper flower to her classmates during a show and tell circle' },
  { src: '/images/art-and-coloring.jpg', alt: 'Children colouring at a classroom table and holding up their finished drawings' },
]

export function PhotoStrip() {
  return (
    <section className="bg-background px-4 sm:px-6 lg:px-8 py-6 bg-background">
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4">
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
