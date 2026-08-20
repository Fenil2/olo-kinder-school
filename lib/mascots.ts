/**
 * The four Olo Kinder characters, in the order they appear on the logo banner.
 *
 * Artwork lives in `public/images/mascots/`, derived from the master PNGs by
 * `scripts/build-brand-assets.py`. Every surface that shows a mascot reads it
 * from here, so re-cropping the art or renaming a character is a one-line
 * change rather than a hunt through a dozen components.
 *
 * The shape and the colour are two halves of the same character, so the
 * globals.css colour family travels with the artwork. The classes are spelled
 * out in full rather than built from a token: Tailwind only ever sees class
 * names as literal strings in the source, so `ring-mascot-${token}` would
 * compile to nothing.
 */
export interface Mascot {
  /** Character name as it is written on the page. */
  name: string
  /** The learning trait this character stands for. */
  role: string
  img: string
  /** Reads on its own out of context — these are the alt texts users hear. */
  alt: string
  /** Body-text-safe ink, ≥4.8:1 on cream. */
  ink: string
  /** Faint wash for a card or badge behind the character. */
  tint: string
  ring: string
}

export const MASCOTS: Mascot[] = [
  {
    name: 'Rolly',
    role: 'Curious Explorer',
    img: '/images/mascots/rolly.webp',
    alt: 'Rolly, the round coral Olo Kinder character, grinning with a wide open mouth',
    ink: 'text-mascot-roundy-dark',
    tint: 'bg-mascot-roundy/15',
    ring: 'ring-mascot-roundy',
  },
  {
    name: 'Squary',
    role: 'Logical Thinker',
    img: '/images/mascots/squary.webp',
    alt: 'Squary, the square green Olo Kinder character, smiling with two front teeth',
    ink: 'text-mascot-squarey-dark',
    tint: 'bg-mascot-squarey/15',
    ring: 'ring-mascot-squarey',
  },
  {
    name: 'Starry',
    role: 'Creative Dreamer',
    img: '/images/mascots/starry.webp',
    alt: 'Starry, the yellow star Olo Kinder character, with a happy curved smile',
    ink: 'text-mascot-starry-dark',
    tint: 'bg-mascot-starry/15',
    ring: 'ring-mascot-starry',
  },
  {
    name: 'Hexy',
    role: 'Problem Solver',
    img: '/images/mascots/hexy.webp',
    alt: 'Hexy, the blue many-sided Olo Kinder character, smiling with two front teeth',
    ink: 'text-mascot-hexy-dark',
    tint: 'bg-mascot-hexy/15',
    ring: 'ring-mascot-hexy',
  },
]
