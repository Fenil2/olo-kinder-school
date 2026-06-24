import { Motion } from '@/components/ui/motion'

const photos = [
  'https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1503676260728-1c657d096d18?auto=format&fit=crop&w=600&q=80',
]

export function PhotoStrip() {
  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8 bg-[#F0EDF5]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4">
        {photos.map((src, i) => (
          <Motion key={i} variant="scale" delay={i * 100}>
            <div className="relative rounded-2xl overflow-hidden aspect-video sm:aspect-4/3 w-full">
              <img src={src} alt="Olo Kinder children" className="w-full h-full object-cover" />
            </div>
          </Motion>
        ))}
      </div>
    </section>
  )
}
