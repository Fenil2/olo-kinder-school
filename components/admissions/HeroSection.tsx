import Link from 'next/link'
import { Motion } from '@/components/ui/motion'

export function HeroSection() {
  return (
    <section className="relative min-h-[50vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/images/hero-school-entrance.jpg"
          alt="Olo Kinder children walking out of the school entrance together"
          className="w-full h-full object-cover object-[50%_38%]"
        />
        <div className="absolute inset-0 bg-surface-dark/65" />
      </div>
      <div className="max-w-4xl mx-auto text-center text-white relative z-10 py-16">
        <Motion variant="down">
          <span className="inline-block bg-white/20 text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-4">Join Us</span>
        </Motion>
        <Motion variant="up" delay={100}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">Admissions Open Now</h1>
        </Motion>
        <Motion variant="up" delay={200}>
          <p className="text-base sm:text-xl leading-relaxed max-w-2xl mx-auto opacity-90">
            Take the first step towards a joyful, enriching learning journey for your child. We welcome curious, creative, and compassionate young learners.
          </p>
        </Motion>
        <Motion variant="up" delay={300}>
          <Link
            href="#enquiry"
            className="inline-block mt-8 bg-accent text-accent-foreground px-8 py-3.5 rounded-full hover:bg-accent-hover transition-colors font-semibold shadow-sm"
          >
            Submit Your Enquiry
          </Link>
        </Motion>
      </div>
    </section>
  )
}
