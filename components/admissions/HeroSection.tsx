import { Motion } from '@/components/ui/motion'

export function HeroSection() {
  return (
    <section className="relative min-h-[50vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=1600&q=80"
          alt="Children at Olo Kinder"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/50" />
      </div>
      <div className="max-w-4xl mx-auto text-center text-white relative z-10 py-16">
        <Motion variant="down">
          <span className="inline-block bg-white/20 text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-4">Join Us</span>
        </Motion>
        <Motion variant="up" delay={100}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">Admissions Open</h1>
        </Motion>
        <Motion variant="up" delay={200}>
          <p className="text-base sm:text-xl leading-relaxed max-w-2xl mx-auto opacity-90">
            Take the first step towards a joyful, enriching learning journey for your child. We welcome curious, creative, and compassionate young learners.
          </p>
        </Motion>
      </div>
    </section>
  )
}
