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
 *  - The band is taller on a phone for the same reason. The home banner's
 *    ~56vw is too short to seat a headline and a button without them
 *    covering the photograph completely.
 */
export function HeroSection({ page }: { page: EnrichmentPage }) {
  return (
    <section className="relative band-cream overflow-hidden">
      <div className="relative">
        <BannerCarousel
          slides={page.banners}
          badge="Enrichment Programme"
          label={`${page.title} ${page.titleAccent}`}
          heightClass="h-[clamp(24rem,92vw,78vh)] sm:h-[clamp(20rem,47.6vw,78vh)]"
          still
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
              the button below it. */}
          <h1 className="max-w-[22ch] font-heading text-3xl sm:text-5xl lg:text-6xl font-bold leading-[1.12] text-white text-balance [text-shadow:0_2px_14px_rgba(0,0,0,0.6)]">
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
