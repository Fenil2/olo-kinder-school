import Link from 'next/link'
import { Motion } from '@/components/ui/motion'
import { Wave } from '@/components/ui/wave'
import { BannerCarousel, type BannerSlide } from '@/components/home/BannerCarousel'
import { MarqueeRibbon } from '@/components/home/MarqueeRibbon'

/**
 * Four moments, chosen to be four different places: block play, puppet play,
 * inside at work, and outdoors. A carousel of near-identical classroom shots
 * reads as a loading bug rather than as a tour.
 *
 * The `lift` on each is not decoration. Most of these stills were graded dark
 * to sit behind white headline text, and they average a third below the rest
 * of the library. Each is lifted to the same mid point, capped at the factor
 * where its own brightest 0.1% would begin to clip.
 */
const SLIDES: BannerSlide[] = [
  {
    // The one still that arrived ungraded — already at the library's mid point
    // with the white shelving near clipping, so it takes no lift at all.
    src: '/hero-image.jpg',
    alt: 'Four Olo Kinder children building towers together from coloured blocks at a table',
    lift: '',
  },
  {
    src: '/images/classroom-colorful-wide.jpg',
    alt: 'Two Olo Kinder children laughing as they play with hand puppets in the activity room',
    lift: 'brightness-[1.31] saturate-[1.06]',
  },
  {
    src: '/images/classroom-writing-wide.jpg',
    alt: 'Two Olo Kinder children writing carefully with coloured pencils at a classroom table',
    lift: 'brightness-[1.38] saturate-[1.06]',
  },
  {
    src: '/images/hero-learning.jpg',
    alt: 'Four Olo Kinder children making flower and leaf pictures at a table in the garden',
    lift: 'brightness-[1.22] saturate-[1.04]',
  },
]

/**
 * The banner that opens the home page.
 *
 * A full-bleed photo band scalloped along its top edge only, with the brand
 * lockup standing INSIDE the photograph rather than on a shape hung off its
 * edge — logo artwork, one line of welcome, one way in, set low on the left
 * where the scrim is deepest.
 *
 * Two earlier passes put the logo on something: a cream medallion, then a
 * white plate. Both read as a sticker on a picture, and both spent the band's
 * whole lower edge on an object that said nothing. Nothing is stuck on now;
 * the only thing over the photo is the name and an invitation.
 *
 * The foot of the band is deliberately bare: no scallop, no cream lip. The
 * photograph runs straight into the values ribbon so the two read as one
 * block. A scallop there cut lobes out of the picture and then left a strip
 * of cream between them, which split the banner into two pieces.
 *
 * The lockup is anchored to the same left margin as the admissions badge in
 * the opposite corner, so the two read as one frame around the picture.
 */
export function 
BannerSection() {
  return (
    <section className="relative band-cream overflow-hidden">
      {/* The band is four stills that cross-dissolve on a timer, each
          drifting slowly across the frame, under a slow wash of brand-
          coloured light. It runs edge to edge, and only its top edge is
          scalloped — the foot meets the ribbon square. */}
      <div className="relative">
        <BannerCarousel slides={SLIDES} />
        <Wave flip className="text-background" height="sm" />

        {/* The lockup, sitting just above the ribbon and stopping short of the
            indicators in the far corner. `max-w` is capped in `ch` so the line
            breaks on its own terms rather than running the width of a desktop
            photo.

            Hidden below `sm`. On a phone the band is only ~56vw tall and the
            logo, tagline and button together fill nearly all of it, leaving a
            photograph you cannot see under its own caption — and the nav
            carries the logo directly above anyway. The phone-tier values are
            kept rather than stripped so the block still lands correctly if the
            breakpoint is ever lowered. */}
        <div className="pointer-events-none hidden sm:block absolute z-3 left-3 sm:left-6 lg:left-10 right-3 sm:right-40 bottom-6 sm:bottom-9 lg:bottom-11">
          <Motion variant="up" delay={120}>
            <img
              src="/images/brand/olo-logo.webp"
              alt="Olo Kinder"
              width={1200}
              height={630}
              className="w-[clamp(10rem,24vw,16rem)] h-auto object-contain drop-shadow-[0_3px_10px_rgba(0,0,0,0.35)]"
            />
            <p className="mt-3 sm:mt-4 max-w-[34ch] font-heading text-lg sm:text-2xl lg:text-3xl font-bold leading-snug text-white text-pretty [text-shadow:0_2px_12px_rgba(0,0,0,0.55)]">
              A joyful first school for curious little minds.
            </p>
            <Link
              href="/contact"
              /* The lockup's box is transparent and spans most of the band's
                 lower half; left clickable it would swallow the carousel
                 indicators sitting under its far corner. Only the button
                 takes the pointer back. */
              className="pointer-events-auto mt-4 sm:mt-5 inline-block bg-accent text-accent-foreground px-6 sm:px-7 py-2.5 sm:py-3 rounded-full hover:bg-accent-hover transition-colors font-semibold text-sm sm:text-base shadow-lg"
            >
              Book a School Visit
            </Link>
          </Motion>
        </div>
      </div>

      <MarqueeRibbon />
    </section>
  )
}
