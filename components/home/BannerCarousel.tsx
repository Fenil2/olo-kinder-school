'use client'

import { useCallback, useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react'

export interface BannerSlide {
  src: string
  alt: string
  /**
   * Several of these stills ship with a dark tint baked in — they were graded
   * to sit behind white headline text. Measured against the library's mid
   * point and lifted back, each as far as its own highlights allow before the
   * brightest 0.1% starts to clip.
   */
  lift: string
}

const SLIDE_MS = 6000
const FADE_MS = 1100

/** Two mascots hovering at the band's upper corners, where no face ever sits. */
const CAST = [
  // Starry sits lower than Hexy: the frosted admissions badge is in this
  // corner, and at the same height as its opposite number the star crowded it.
  { src: '/images/mascots/starry.webp', style: 'left-[3%] top-[16%] w-12 sm:w-16 lg:w-20', rot: '-9deg', delay: '0s' },
  { src: '/images/mascots/hexy.webp', style: 'right-[3%] top-[11%] w-11 sm:w-14 lg:w-18', rot: '8deg', delay: '1.4s' },
]

/** The band's own height. Overridable because a band that carries a headline
 *  instead of the brand lockup needs more room on a phone — see the enrichment
 *  pages' `HeroSection`. */
const DEFAULT_HEIGHT = 'h-[clamp(14rem,56.25vw,78vh)] sm:h-[clamp(16rem,47.6vw,78vh)]'

interface BannerCarouselProps {
  slides: BannerSlide[]
  /** Text inside the frosted badge in the top-left corner. */
  badge?: ReactNode
  /** Describes the band to screen readers. */
  label?: string
  /** Tailwind height classes for the band. */
  heightClass?: string
}

export function BannerCarousel({
  slides,
  badge = 'Admissions open for 2026–27',
  label = 'Life at Olo Kinder',
  heightClass = DEFAULT_HEIGHT,
}: BannerCarouselProps) {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const [reduced, setReduced] = useState(false)
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)')
    const sync = () => setReduced(query.matches)
    sync()
    query.addEventListener('change', sync)
    return () => query.removeEventListener('change', sync)
  }, [])

  const advance = useCallback(() => setIndex((i) => (i + 1) % slides.length), [slides.length])

  useEffect(() => {
    if (paused || reduced || slides.length < 2) return
    timer.current = setTimeout(advance, SLIDE_MS)
    return () => {
      if (timer.current) clearTimeout(timer.current)
    }
    // `index` is a dependency so the clock restarts from the slide just shown,
    // rather than firing early on whatever was left of the previous interval.
  }, [index, paused, reduced, advance, slides.length])

  const running = !paused && !reduced

  return (
    <div
      className="relative"
      role="group"
      aria-roledescription="carousel"
      aria-label={label}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      {/* The band runs edge to edge, as the reference does.
          Height is set directly rather than with `aspect-ratio` + `max-height`.
          Those two fight: with `width: auto` and the height capped, the browser
          resolves the auto width back through the ratio, so the whole band
          shrank to `78vh × 2.1` and sat in the middle of the page with cream
          either side. `w-full` fixes the width, and `clamp` does what the pair
          was meant to do — the middle term is the 2.1:1 shape the three stills
          average to (100/2.1 = 47.6vw), floored so it never becomes a strip,
          and ceilinged at 78vh so a short, wide window still shows the page
          below it. A phone takes 16:9 (100/1.778 = 56.25vw), since 2.1:1 would
          leave a letterbox strip on a 390px screen. */}
      <div className={`relative w-full overflow-hidden bg-surface-mist ${heightClass}`}>
        {slides.map((slide, i) => {
          const active = i === index
          return (
            <div
              key={slide.src}
              aria-hidden={!active}
              className="absolute inset-0 transition-opacity ease-in-out"
              style={{ opacity: active ? 1 : 0, transitionDuration: `${FADE_MS}ms` }}
            >
              <img
                src={slide.src}
                alt={slide.alt}
                width={1440}
                height={744}
                loading={i === 0 ? 'eager' : 'lazy'}
                fetchPriority={i === 0 ? 'high' : 'low'}
                /* The drift class is only on the active slide, so leaving and
                   returning removes and re-adds it — which is what makes the
                   animation start over rather than sit at its end. */
                className={`block w-full h-full object-cover object-center ${slide.lift} ${active ? `ken-${i % 3}` : ''}`}
              />
            </div>
          )
        })}

        {/* Aurora: brand-coloured light moving over the photograph. `screen`
            lifts rather than veils, so the picture stays legible underneath. */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden mix-blend-screen">
          <span className="aurora absolute -left-1/4 -top-1/3 h-[70%] w-[60%] rounded-full bg-mascot-hexy/35 blur-3xl" />
          <span
            className="aurora absolute -right-1/4 top-0 h-[80%] w-[55%] rounded-full bg-mascot-roundy/30 blur-3xl"
            style={{ animationDelay: '-9s', animationDuration: '31s' }}
          />
          <span
            className="aurora absolute left-1/4 -bottom-1/3 h-[70%] w-[50%] rounded-full bg-mascot-starry/30 blur-3xl"
            style={{ animationDelay: '-17s', animationDuration: '23s' }}
          />
        </div>

        {/* A scrim at the foot of the frame, in two strengths.

            From `sm` the brand lockup stands in white type over the lower left
            of the photograph, so the scrim has to carry that type over three
            stills each brightened back up by `lift` — hence the reach, two
            thirds of the frame, and the weight at the base.

            Below `sm` the lockup is hidden, and that same scrim would only be
            muddying a photo with nothing written on it. The phone gets the
            light version: just enough to hold the slide indicators. */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-32 sm:h-2/3 bg-linear-to-t from-black/35 via-black/10 to-transparent sm:from-black/60 sm:via-black/25"
        />

        {/* The cast, hovering over the upper corners. */}
        {CAST.map((member) => (
          <img
            key={member.src}
            src={member.src}
            alt=""
            aria-hidden="true"
            className={`bob pointer-events-none select-none absolute drop-shadow-lg ${member.style}`}
            style={{ '--bob-rot': member.rot, animationDelay: member.delay } as CSSProperties}
          />
        ))}

        {/* Frosted badge. Glass over a photograph only works with a border and
            a shadow — without them it dissolves into whatever is behind it. */}
        <div className="absolute left-3 sm:left-6 lg:left-10 top-4 sm:top-7 z-3">
          <span className="inline-flex items-center gap-2.5 rounded-full border border-white/25 bg-black/25 px-4 py-2 text-white shadow-lg backdrop-blur-md">
            <span className="relative grid place-items-center">
              <span className="absolute h-2.5 w-2.5 rounded-full bg-accent/70 motion-safe:animate-ping" />
              <span className="relative h-2 w-2 rounded-full bg-accent" />
            </span>
            <span className="text-xs sm:text-sm font-bold tracking-wide">{badge}</span>
          </span>
        </div>

        {/* The indicators sit in the corner the brand lockup does not occupy.
            The band's foot is square now rather than scalloped, so they no
            longer have to be lifted clear of a row of lobes — they sit at the
            height of the lockup's button across the frame. They double as the
            way to reach a slide directly. */}
        <div
          /* A lone slide has nothing to indicate: one dash that never fills
             and cannot be clicked anywhere else reads as a broken control. */
          hidden={slides.length < 2}
          className="absolute bottom-6 sm:bottom-10 right-3 sm:right-6 z-3 flex items-center gap-1.5 sm:gap-2"
        >
          {slides.map((slide, i) => {
            const active = i === index
            return (
              <button
                key={slide.src}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Show photo ${i + 1} of ${slides.length}`}
                aria-current={active ? 'true' : undefined}
                className="group py-2"
              >
                <span
                  className={`block h-1.5 rounded-full overflow-hidden transition-all duration-300 ${
                    active ? 'w-9 sm:w-12 bg-white/45' : 'w-3 sm:w-4 bg-white/45 group-hover:bg-white/70'
                  }`}
                >
                  {active && (
                    <span
                      // Re-keyed per slide so the fill restarts each time.
                      key={`${index}-${running}`}
                      className={`block h-full w-full origin-left rounded-full bg-white ${running ? 'ken-progress' : ''}`}
                      style={{ '--slide-ms': `${SLIDE_MS}ms` } as CSSProperties}
                    />
                  )}
                </span>
              </button>
            )
          })}

        </div>
      </div>

      {/* Announced to screen readers, which cannot see the photo change.
          Nothing changes with a single slide, so there is nothing to announce
          — and the photo's own `alt` already carries it. */}
      {slides.length > 1 && (
        <p className="sr-only" aria-live="polite">
          Photo {index + 1} of {slides.length}: {slides[index].alt}
        </p>
      )}
    </div>
  )
}
