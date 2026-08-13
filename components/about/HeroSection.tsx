import { Motion } from '@/components/ui/motion'

export function HeroSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-background via-surface-sky to-surface-leaf flex items-center justify-center">
      <div className="max-w-4xl mx-auto text-center">
        <Motion variant="down">
          <span className="inline-block bg-highlight/30 text-foreground text-sm font-semibold px-4 py-1.5 rounded-full mb-4">About Us</span>
        </Motion>
        <Motion variant="up" delay={100}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-heading">About Olo Kinder</h1>
        </Motion>
        <Motion variant="up" delay={200}>
          <p className="text-lg sm:text-xl text-foreground/75 leading-relaxed max-w-2xl mx-auto">
            Olo Kinder is a unique early childhood learning initiative designed to nurture curious, confident, creative and compassionate young learners.
          </p>
        </Motion>
      </div>
    </section>
  )
}
