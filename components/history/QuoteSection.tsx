import { MdFormatQuote } from 'react-icons/md'
import { Motion } from '@/components/ui/motion'
import { Doodle } from '@/components/ui/doodle'
import { Wave } from '@/components/ui/wave'

/**
 * The founding promise, set as a departure board rather than as a paragraph.
 *
 * The quote calls the modules a "learning voyage", so the section is built as
 * the start of one: the globe from the mark surfaces behind the type, and the
 * dashed route that runs down the rest of the page is first drawn here, under
 * the words, with Starry standing on it. Everything below picks that line up.
 */
export function QuoteSection() {
  return (
    <section className="band-plum relative overflow-hidden px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 pb-24 sm:pb-32">
      {/* The band's background photograph, run full-bleed and covered by a
          plum scrim. The scrim is what makes a picture usable behind type: at
          78% the children are still legible as a scene, while white type over
          the photo's brightest patch — the shelving behind them — still clears
          5.3:1. The band's own `band-plum` ink tokens carry on applying. The
          still is only 741px wide, which the scrim also covers for: whatever
          softness comes of stretching it across the band goes under the plum. */}
      <img
        src="/images/beadwork-play.jpg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full select-none object-cover object-center"
      />
      <span aria-hidden="true" className="pointer-events-none absolute inset-0 bg-brand-plum/78" />

      {/* The globe, kept as a watermark over the photo. */}
      <img
        src="/images/brand/olo-globe.webp"
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="pointer-events-none absolute -right-16 top-1/2 hidden w-80 -translate-y-1/2 select-none opacity-15 sm:block"
      />
      <Doodle name="cloud" className="top-10 left-6 w-24" opacity={18} />
      <Doodle name="cloud" className="bottom-24 right-10 w-20" opacity={14} flip />

      <Motion variant="scale">
        <figure className="relative z-10 mx-auto max-w-4xl text-center">
          <MdFormatQuote size={54} className="mx-auto mb-2 text-accent/80" aria-hidden />
          <blockquote className="font-heading text-2xl sm:text-3xl md:text-[2.6rem] font-bold leading-snug text-balance text-foreground">
            The modules take students on a learning voyage to shape their character and to ensure
            that every child who steps into the real world, does it with great panache.
          </blockquote>

          {/* The first stretch of the route. The same dashed line, the same
              hue, runs down the voyage below. */}
          <div className="mt-10 flex items-center justify-center gap-4" aria-hidden>
            <span className="h-0 w-16 border-t-2 border-dashed border-white/40 sm:w-28" />
            <img
              src="/images/mascots/starry.webp"
              alt=""
              loading="lazy"
              className="bob w-12 shrink-0 drop-shadow sm:w-14"
            />
            <span className="h-0 w-16 border-t-2 border-dashed border-white/40 sm:w-28" />
          </div>
        </figure>
      </Motion>

      <Wave className="text-brand-cream" />
    </section>
  )
}
