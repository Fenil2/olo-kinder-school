import Link from 'next/link'
import { Wave } from '@/components/ui/wave'
import { BannerCarousel } from '@/components/home/BannerCarousel'
import type { Programme } from '@/lib/programmes'

/**
 * The opening band of a programme page: the home page's photo banner, with the
 * programme's own still in it.
 *
 * This is the enrichment pages' hero, pointed at the curriculum's content —
 * the two sub-sections already share a sub-nav, and they now open the same way
 * as well. It replaces the illustrated `PageHero` these three pages used, so
 * the band that names Pre-School is a photograph of the pre-school room rather
 * than the same cartoon hill every other page opens on.
 *
 * The band is `BannerCarousel` in `still` mode: no drift across the still, no
 * wash of coloured light, no bobbing mascots, no pulse on the badge. What is
 * left is the photograph, the badge and the headline. These pages are read,
 * not browsed, and the movement competed with the type sitting on top of it.
 *
 * Where the old hero's parts went:
 *
 *   eyebrow "Curriculum"           -> the frosted badge, top left
 *   title                          -> the headline on the photograph
 *   "Thematic Learning Modules"    -> the accent line under it
 *
 * The last one stays on the picture where the enrichment pages' opening
 * paragraph does not, because it is a three-word label rather than a sentence
 * of prose: it needs no more scrim than the headline already asks for.
 */
export function HeroSection({ programme }: { programme: Programme }) {
  return (
    <section className="relative band-cream overflow-hidden">
      <div className="relative">
        <BannerCarousel
          slides={programme.banners}
          badge="Curriculum"
          label={programme.title}
          /* The same shape the enrichment band takes: ~1.4:1 on a phone, so
             the headline sits on the picture without covering it whole, and
             the desktop's 2.1:1 above that. */
          heightClass="h-[clamp(16rem,72vw,22rem)] sm:h-[clamp(20rem,47.6vw,78vh)]"
          still
          /* The headline is on the photograph at every width, so the phone
             needs the full scrim rather than the light one. */
          fullScrim
        />
        <Wave flip className="text-background" height="sm" />

        {/* Anchored to the same left margin as the badge in the opposite
            corner, so the two frame the picture. */}
        <div className="pointer-events-none absolute z-3 left-3 sm:left-6 lg:left-10 right-3 sm:right-16 lg:right-24 bottom-6 sm:bottom-9 lg:bottom-11">
          {/* No entrance animation: this is the page's `h1` and the first
              thing in the viewport.

              Two shadows, not one. The wide soft cast separates the block
              from a busy photograph; the tight dark one keeps the letter
              edges from dissolving where the picture goes light. */}
          <h1 className="max-w-[22ch] font-heading text-3xl sm:text-5xl lg:text-6xl font-bold leading-[1.12] text-white text-balance [text-shadow:0_2px_16px_rgba(0,0,0,0.75),0_1px_3px_rgba(0,0,0,0.55)]">
            {programme.title}
          </h1>
          <p className="mt-2 font-heading text-lg sm:text-xl lg:text-2xl font-bold text-accent [text-shadow:0_2px_14px_rgba(0,0,0,0.7),0_1px_3px_rgba(0,0,0,0.5)]">
            Thematic Learning Modules
          </p>
          <Link
            href="/contact"
            /* The block is transparent and spans most of the band's lower
               half; left clickable it would swallow anything beneath it.
               Only the button takes the pointer back. */
            className="pointer-events-auto mt-5 sm:mt-6 inline-block bg-accent text-accent-foreground px-6 sm:px-7 py-2.5 sm:py-3 rounded-full hover:bg-accent-hover transition-colors font-semibold text-sm sm:text-base shadow-lg"
          >
            Book a School Visit
          </Link>
        </div>
      </div>
    </section>
  )
}
