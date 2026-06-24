import { Motion } from '@/components/ui/motion'

export function HeroSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-[#FFFDF8] via-[#E8F7FB] to-[#EFF8E0] flex items-center justify-center">
      <div className="max-w-4xl mx-auto text-center">
        <Motion variant="down">
          <span className="inline-block bg-highlight/30 text-foreground text-sm font-semibold px-4 py-1.5 rounded-full mb-4">Our Curriculum</span>
        </Motion>
        <Motion variant="up" delay={100}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-foreground">The Olo Kinder Learning Framework</h1>
        </Motion>
        <Motion variant="up" delay={200}>
          <p className="text-lg sm:text-xl text-foreground/75 leading-relaxed max-w-2xl mx-auto">
            A comprehensive, research-based framework supporting holistic child development across six essential learning areas.
          </p>
        </Motion>
      </div>
    </section>
  )
}
