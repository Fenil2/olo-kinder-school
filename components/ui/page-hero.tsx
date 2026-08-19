import { Motion } from '@/components/ui/motion'
import { HeroBackdrop } from '@/components/ui/hero-backdrop'

interface PageHeroProps {
  eyebrow?: string
  title: string
  /** Rendered after `title` in the deep teal, for a two-tone headline. */
  titleAccent?: string
  subtitle?: string
}

export function PageHero({ eyebrow, title, titleAccent, subtitle }: PageHeroProps) {
  return (
    <section className="relative min-h-[56vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      <HeroBackdrop />

      {/* Extra bottom padding keeps the copy clear of the hill and its cast */}
      <div className="relative z-10 max-w-4xl mx-auto text-center pt-20 pb-36">
        {eyebrow && (
          <Motion variant="down">
            <span className="inline-block bg-white/75 text-primary text-base font-semibold px-5 py-2 rounded-full mb-5 shadow-sm">
              {eyebrow}
            </span>
          </Motion>
        )}
        <Motion variant="up" delay={100}>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-tight text-balance text-heading">
            {title}
            {titleAccent && <> <span className="text-primary">{titleAccent}</span></>}
          </h1>
        </Motion>
        {subtitle && (
          <Motion variant="up" delay={200}>
            <p className="text-lg sm:text-2xl leading-relaxed max-w-3xl mx-auto mt-6 text-foreground/75">
              {subtitle}
            </p>
          </Motion>
        )}
      </div>
    </section>
  )
}
