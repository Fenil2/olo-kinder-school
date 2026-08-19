import Link from 'next/link'
import { Motion } from '@/components/ui/motion'
import { HeroBackdrop } from '@/components/ui/hero-backdrop'

export function HeroSection() {
  return (
    <section className="relative min-h-[40vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      <HeroBackdrop />
      <div className="max-w-4xl mx-auto text-center relative z-10 pt-10 pb-28">
        <Motion variant="down">
          <span className="inline-block bg-white/75 text-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-4 shadow-sm">Join Us</span>
        </Motion>
        <Motion variant="up" delay={100}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-heading">Admissions <span className="text-primary">Open Now</span></h1>
        </Motion>
        <Motion variant="up" delay={200}>
          <p className="text-base sm:text-xl leading-relaxed max-w-2xl mx-auto text-foreground/90">
            Take the first step towards a joyful, enriching learning journey for your child. We welcome curious, creative, and compassionate young learners.
          </p>
        </Motion>
        <Motion variant="up" delay={300}>
          <Link
            href="#enquiry"
            className="inline-block mt-6 bg-accent text-accent-foreground px-8 py-3.5 rounded-full hover:bg-accent-hover transition-colors font-semibold shadow-sm"
          >
            Submit Your Enquiry
          </Link>
        </Motion>
      </div>
    </section>
  )
}
