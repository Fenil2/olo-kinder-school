/**
 * The house divider between two bands.
 *
 * One curve is used site-wide: a row of rounded lobes where the upper band
 * dips down into the one below, like the edge of a sheet of scalloped paper.
 *
 * It is drawn as a repeating CSS mask over a block of flat colour rather than
 * as one stretched SVG path. A `preserveAspectRatio="none"` path has to squash
 * itself to the viewport, so its lobes come out wide and shallow on a desktop
 * and tall and narrow on a phone — the shape changes with the window. A
 * repeating tile keeps every lobe identical at every width, and because
 * `mask-size: auto 100%` scales the tile by height alone, a lobe is always
 * exactly twice as wide as the divider is tall.
 *
 * Usage: drop it as the last child of a `relative` section and give it the
 * colour of the section BELOW, so the two bands interlock rather than meeting
 * on a straight line:
 *
 *   <section className="band-cream relative ...">
 *     …
 *     <Wave className="text-surface-sky" />
 *   </section>
 *
 * `bg-current` takes the fill from `text-*`, so a divider can also pick up a
 * band's own token (`text-background`).
 */

/* One lobe, 2:1. The filled half is everything BELOW the curve — that is the
   lower band — which leaves the hollow above each lobe for the upper band to
   reach down into. The cubic dips to ~0.75 of the tile height at its centre
   and returns to the full height at the cusps where two lobes meet. */
const TILE =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='50' viewBox='0 0 100 50'%3E%3Cpath d='M0 0c25 49 75 49 100 0v50H0z' fill='%23000'/%3E%3C/svg%3E\")"

const MASK = {
  maskImage: TILE,
  WebkitMaskImage: TILE,
  maskRepeat: 'repeat-x',
  WebkitMaskRepeat: 'repeat-x',
  /* Height drives the scale, so the lobes never distort. */
  maskSize: 'auto 100%',
  WebkitMaskSize: 'auto 100%',
} as const

interface WaveProps {
  /** Colour classes for the fill, e.g. `text-background`. Sets `currentColor`. */
  className?: string
  /** Flip vertically, to cap the TOP of a section instead of its bottom. */
  flip?: boolean
  /** Divider height, which also sets the lobe width. Shorter reads calmer. */
  height?: 'sm' | 'md' | 'lg'
}

/* Lobes are twice the divider's height, so these read as ~48/64/80px lobes on
   a phone and ~72/104/128px on a desktop. */
const HEIGHTS = { sm: 'h-6 sm:h-9', md: 'h-8 sm:h-13', lg: 'h-10 sm:h-16' }

export function Wave({ className = '', flip = false, height = 'md' }: WaveProps) {
  return (
    <span
      aria-hidden="true"
      style={MASK}
      className={`pointer-events-none absolute inset-x-0 z-1 block w-full bg-current ${HEIGHTS[height]} ${
        flip ? 'top-0 -scale-y-100' : 'bottom-0'
      } ${className}`}
    />
  )
}
