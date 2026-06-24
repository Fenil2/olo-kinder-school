import { Motion } from '@/components/ui/motion'

const photos = [
  'https://images.unsplash.com/photo-1543730435-cd2a6fa2a72a?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1484863137850-59afcfe05386?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1541647376583-8934aaf3448a?auto=format&fit=crop&w=600&q=80',
]

export function PhotoStrip() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-6 bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4">
        {photos.map((src, i) => (
          <Motion key={i} variant="scale" delay={i * 100}>
            <div className="relative rounded-2xl overflow-hidden aspect-video sm:aspect-4/3 w-full">
              <img src={src} alt="Children learning at Olo Kinder" className="w-full h-full object-cover" />
            </div>
          </Motion>
        ))}
      </div>
    </section>
  )
}
