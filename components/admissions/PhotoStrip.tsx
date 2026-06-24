import { Motion } from '@/components/ui/motion'

const photos = [
  'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1574279606130-09958dc756f7?auto=format&fit=crop&w=600&q=80',
]

export function PhotoStrip() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-6 bg-white">
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4">
        {photos.map((src, i) => (
          <Motion key={i} variant="scale" delay={i * 100}>
            <div className="relative rounded-2xl overflow-hidden aspect-video sm:aspect-4/3 w-full">
              <img src={src} alt="Olo Kinder students" className="w-full h-full object-cover" />
            </div>
          </Motion>
        ))}
      </div>
    </section>
  )
}
