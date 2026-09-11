import type { CSSProperties } from 'react'

const DOODLES = {
  snail: 'https://res.cloudinary.com/xscf9i08/image/upload/snail',
  butterfly: 'https://res.cloudinary.com/xscf9i08/image/upload/butterfly',
  cloud: 'https://res.cloudinary.com/xscf9i08/image/upload/cloud',
  leaf1: 'https://res.cloudinary.com/xscf9i08/image/upload/leaf-1',
  leaf2: 'https://res.cloudinary.com/xscf9i08/image/upload/leaf-2',
  treeOrange: 'https://res.cloudinary.com/xscf9i08/image/upload/tree-orange',
  treeGreen: 'https://res.cloudinary.com/xscf9i08/image/upload/tree-green',
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
 * A small decorative cartoon. Purely ornamental: hidden from assistive tech
 * and non-interactive. The parent section must be `relative overflow-hidden`.
 *
 * Rotation and flip are handed to CSS as custom properties rather than written
 * into an inline `transform`, because an inline transform cannot vary with the
 * viewport. The `.doodle` rule in globals.css composes them with a scale that
 * drops on a phone, where a full-size doodle crowds the copy.
 */
export function Doodle({ name, className, rotate = 0, opacity = 100, flip = false }: DoodleProps) {
  return (
    <img
      src={DOODLES[name]}
      alt=""
      aria-hidden="true"
      loading="lazy"
      className={`doodle pointer-events-none select-none absolute z-0 ${className}`}
      style={
        {
          '--doodle-rotate': `${rotate}deg`,
          '--doodle-flip': flip ? -1 : 1,
          opacity: opacity / 100,
        } as CSSProperties
      }
    />
  )
}
