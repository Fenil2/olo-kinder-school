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
    <section className="relative min-h-[42vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      <HeroBackdrop />

      {/* The bottom padding is set by the cast, not by taste: the tallest
          figure standing in the middle of the hill reaches ~102px, so the copy
          needs to clear that much to stay on flat colour. */}
      <div className="relative z-10 max-w-4xl mx-auto text-center pt-12 pb-28">
        {eyebrow && (
          <Motion variant="down">
            <span className="inline-block bg-white/75 text-primary text-base font-semibold px-5 py-2 rounded-full mb-5 shadow-sm">
              {eyebrow}
            </span>
          </Motion>
        )}
        <Motion variant="up" delay={100}>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-[1.12] text-balance ink-plum">
            {title}
            {titleAccent && (
              <> <span className="ink-coral scribble-under">{titleAccent}</span></>
            )}
          </h1>
        </Motion>
        {subtitle && (
          <Motion variant="up" delay={200}>
            <p className="text-lg sm:text-2xl leading-relaxed max-w-3xl mx-auto mt-6 text-foreground/90">
              {subtitle}
            </p>
          </Motion>
        )}
      </div>
    </section>
  )
}
