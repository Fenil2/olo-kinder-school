/**
 * The wavy edge between two sections.
 *
 * Every reference layout separates its bands with a soft organic edge
 * rather than a straight line — a cloud scallop, a rolling hill, a
 * ribbon. This draws that edge as an SVG sitting at the bottom of a
 * section, filled with the colour of the section BELOW it, so the two
 * bands interlock instead of butting together.
 *
 * Usage: drop it as the last child of a `relative` section, and give it
 * the next section's band colour:
 *
 *   <section className="band-cream relative ...">
 *     …
 *     <Wave variant="hill" className="text-[--surface-leaf]" />
 *   </section>
 *
 * `text-*` sets the fill because the paths use `currentColor`, which
 * means a wave can also pick up a band's own token (`text-background`).
 */

type WaveVariant = 'hill' | 'cloud' | 'ribbon' | 'scallop'

const PATHS: Record<WaveVariant, string> = {
  // A single rolling rise — the green hill in reference 03
  hill: 'M0 96C240 32 480 8 720 30s480 74 720 50v64H0V96z',
  // Round bumps, like the cloud edge under reference 02's hero
  cloud:
    'M0 128V72c60-38 120-38 180 0s120 38 180 0 120-38 180 0 120 38 180 0 120-38 180 0 120 38 180 0 120-38 180 0 120 38 180 0v56H0z',
  // An off-centre sweep — the pink ribbon under reference 01
  ribbon: 'M0 128V38c180 60 340 74 520 42S900 8 1120 26s260 46 320 60v42H0z',
  // Tighter, shallower bumps for narrow dividers
  scallop:
    'M0 128V88c48-30 96-30 144 0s96 30 144 0 96-30 144 0 96 30 144 0 96-30 144 0 96 30 144 0 96-30 144 0 96 30 144 0 96-30 144 0v40H0z',
}

interface WaveProps {
  variant?: WaveVariant
  /** Colour classes for the fill, e.g. `text-background`. Sets `currentColor`. */
  className?: string
  /** Flip vertically, to cap the TOP of a section instead of its bottom. */
  flip?: boolean
  /** Wave height. Shorter reads calmer between two close-toned bands. */
  height?: 'sm' | 'md' | 'lg'
}

const HEIGHTS = { sm: 'h-8 sm:h-12', md: 'h-12 sm:h-20', lg: 'h-16 sm:h-28' }

export function Wave({ variant = 'hill', className = '', flip = false, height = 'md' }: WaveProps) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 1440 128"
      preserveAspectRatio="none"
      className={`pointer-events-none absolute inset-x-0 z-1 block w-full ${HEIGHTS[height]} ${
        flip ? 'top-0 -scale-y-100' : 'bottom-0'
      } ${className}`}
    >
      <path d={PATHS[variant]} fill="currentColor" />
    </svg>
  )
}
