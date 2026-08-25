import Link from 'next/link'
import { Wave } from '@/components/ui/wave'
import { BannerCarousel } from '@/components/home/BannerCarousel'
import type { EnrichmentPage } from '@/lib/enrichment'

/**
 * The opening band of an enrichment page: the home page's photo banner, with
 * the page's own stills in it.
 *
 * The band is the same `BannerCarousel` rather than a rebuild of it, but it
 * runs in `still` mode. The home page's decoration — the slow drift across
 * each still, the wash of brand-coloured light, the two mascots bobbing in
 * the upper corners, the pulse on the badge and the filling progress bar —
 * is all off here. What is left is the photograph, the frosted badge, the
 * indicators, and a plain crossfade when the band changes picture on its own
 * clock. These three pages are read, not browsed, and the movement was
 * competing with the headline sitting on top of it.
 *
 * The copy is the page's own, moved onto the photograph, and kept to two
 * lines so the picture carries the band rather than the type:
 *
 *   the eyebrow  -> the frosted badge in the top-left corner
 *   the title    -> the headline the brand lockup occupies on the home page
 *
 * The page's opening paragraph deliberately stays off the photograph. It is
 * a full sentence of prose, and over a moving carousel it had to be set in
 * white with a shadow heavy enough to cover three different stills, which
 * buried the picture behind it. The heading names the page and the button
 * gives it somewhere to go; that is the whole job of this band.
 *
 * Two things differ from the home banner, both because this band carries the
 * page's `h1` where the home one carries a logo:
 *
 *  - The headline is not hidden below `sm`. On the home page the lockup is,
 *    because the nav repeats the logo directly above it; here that would
 *    leave the page with no visible title on a phone.
 *  - The band is a different shape on a phone for the same reason. It cannot
 *    be as wide as the desktop's or the copy would cover the picture whole,
 *    but the nearly-square band it used to take cropped these stills far too
 *    hard: the widest of them, the parents banner at 2.17:1, lost 53% of its
 *    width and the crop cut straight through the two people it is a
 *    photograph of. ~1.4:1 is where the two demands meet — the headline and
 *    its button still sit on the picture, and about a third of the width is
 *    cropped rather than a half.
 */
export function HeroSection({ page }: { page: EnrichmentPage }) {
  return (
    <section className="relative band-cream overflow-hidden">
      <div className="relative">
        <BannerCarousel
          slides={page.banners}
          badge="Enrichment Programme"
          label={`${page.title} ${page.titleAccent}`}
          /* 72vw is ~1.4:1 on a phone. The floor keeps a 320px screen from
             squeezing the copy, and the ceiling stops a large phone held in
             landscape from turning the band into a full screen of photograph. */
          heightClass="h-[clamp(16rem,72vw,22rem)] sm:h-[clamp(20rem,47.6vw,78vh)]"
          still
          /* The headline sits on the photograph at every width here, so the
             band's foot needs the full scrim on a phone too — the light one
             the home banner uses left white type on bare picture. */
          fullScrim
        />
        <Wave flip className="text-background" height="sm" />

        {/* The copy block, anchored to the same left margin as the badge in
            the opposite corner so the two frame the picture. `max-w` is in
            `ch` so the headline breaks on its own terms rather than running
            the full width of a desktop photo. */}
        <div className="pointer-events-none absolute z-3 left-3 sm:left-6 lg:left-10 right-3 sm:right-16 lg:right-24 bottom-6 sm:bottom-9 lg:bottom-11">
          {/* No entrance animation on the headline. It is the page's `h1`,
              first thing in the viewport, and sliding it up on load was the
              most visible piece of the movement being taken out of this band. */}
          {/* White with the accent in the brand yellow. The page's own
              plum-and-coral pairing is for dark type on cream; over a
              photograph neither holds, and yellow is already the colour of
              the button below it.

              Two shadows, not one: the wide, soft cast separates the block
              from a busy photograph, and the tight, dark one under it keeps
              the individual letter edges from dissolving into a light patch
              — which is what a single large blur cannot do. */}
          <h1 className="max-w-[22ch] font-heading text-3xl sm:text-5xl lg:text-6xl font-bold leading-[1.12] text-white text-balance [text-shadow:0_2px_16px_rgba(0,0,0,0.75),0_1px_3px_rgba(0,0,0,0.55)]">
            {page.title} <span className="text-accent">{page.titleAccent}</span>
          </h1>
          <Link
            href="/contact"
            /* The block is transparent and spans most of the band's lower
               half; left clickable it would swallow anything beneath it.
               Only the button takes the pointer back. */
            /* A step wider than the old gap: the button now hangs off the
               headline itself rather than off a paragraph, and a large
               display face needs the extra air under it. */
            className="pointer-events-auto mt-5 sm:mt-6 inline-block bg-accent text-accent-foreground px-6 sm:px-7 py-2.5 sm:py-3 rounded-full hover:bg-accent-hover transition-colors font-semibold text-sm sm:text-base shadow-lg"
          >
            Book a School Visit
          </Link>
        </div>
      </div>
    </section>
  )
}
