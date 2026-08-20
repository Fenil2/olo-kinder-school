const DOODLES = {
  fox: '/images/doodles/fox.svg',
  snail: '/images/doodles/snail.svg',
  butterfly: '/images/doodles/butterfly.svg',
  cloud: '/images/doodles/cloud.svg',
  leaf1: '/images/doodles/leaf-1.svg',
  leaf2: '/images/doodles/leaf-2.svg',
  treeOrange: '/images/doodles/tree-orange.svg',
  treeGreen: '/images/doodles/tree-green.svg',
  // The brand cast. Same artwork as `lib/mascots.ts`, reachable by name so a
  // section can scatter a character without importing the whole registry.
  rolly: '/images/mascots/rolly.webp',
  squary: '/images/mascots/squary.webp',
  starry: '/images/mascots/starry.webp',
  hexy: '/images/mascots/hexy.webp',
} as const

export type DoodleName = keyof typeof DOODLES

interface DoodleProps {
  name: DoodleName
  /** Tailwind positioning + width, e.g. "top-8 right-10 w-20". */
  className: string
  rotate?: number
  /** 0-100. Kept low where a doodle sits near text. */
  opacity?: number
  flip?: boolean
}

/**
 * A small decorative cartoon. Purely ornamental: hidden from assistive tech,
 * non-interactive, and hidden below `md` so it never crowds a phone layout.
 * The parent section must be `relative overflow-hidden`.
 */
export function Doodle({ name, className, rotate = 0, opacity = 100, flip = false }: DoodleProps) {
  const transform = [rotate ? `rotate(${rotate}deg)` : '', flip ? 'scaleX(-1)' : ''].filter(Boolean).join(' ')
  return (
    <img
      src={DOODLES[name]}
      alt=""
      aria-hidden="true"
      loading="lazy"
      className={`pointer-events-none select-none absolute hidden md:block z-0 ${className}`}
      style={{ transform: transform || undefined, opacity: opacity / 100 }}
    />
  )
}
