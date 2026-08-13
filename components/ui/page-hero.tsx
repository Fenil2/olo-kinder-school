import { Motion } from '@/components/ui/motion'

interface PageHeroProps {
  eyebrow?: string
  title: string
  /** Rendered after `title` in the brand yellow, for a two-tone headline. */
  titleAccent?: string
  subtitle?: string
  image: string
  imageAlt: string
  /** object-position for the photo, e.g. '50% 35%' to favour faces. */
  focus?: string
}

export function PageHero({ eyebrow, title, titleAccent, subtitle, image, imageAlt, focus = '50% 50%' }: PageHeroProps) {
  return (
    <section className="relative min-h-[52vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0">
        <img src={image} alt={imageAlt} className="w-full h-full object-cover" style={{ objectPosition: focus }} />
        {/* Scrim keeps the white headline readable over any photo */}
        <div className="absolute inset-0 bg-surface-dark/65" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center text-white py-20">
        {eyebrow && (
          <Motion variant="down">
            <span className="inline-block bg-white/20 text-white text-base font-semibold px-5 py-2 rounded-full mb-5">
              {eyebrow}
            </span>
          </Motion>
        )}
        <Motion variant="up" delay={100}>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-tight text-balance">
            {title}
            {titleAccent && <> <span className="text-highlight">{titleAccent}</span></>}
          </h1>
        </Motion>
        {subtitle && (
          <Motion variant="up" delay={200}>
            <p className="text-lg sm:text-2xl leading-relaxed max-w-3xl mx-auto mt-6 text-white/90">
              {subtitle}
            </p>
          </Motion>
        )}
      </div>
    </section>
  )
}
