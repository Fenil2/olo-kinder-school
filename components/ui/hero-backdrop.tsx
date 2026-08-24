import { Wave } from '@/components/ui/wave'

/**
 * The illustrated scene behind every page hero: a sky gradient, a rolling
 * hill, and the brand's cartoon cast scattered across it.
 *
 * Everything here is decorative, so it is hidden from assistive tech. The
 * cast is kept to the outer edges and the hill so the headline sitting in
 * the middle always lands on flat colour — and the denser layers only
 * appear from `sm` up, where there is room for them beside the copy.
 */
interface HeroBackdropProps {
  /**
   * Colour of the band directly beneath the hero, as a `text-*` class. The
   * scalloped ground line is filled with it so the hero interlocks with
   * whatever follows — most pages open on cream, but a few open on sky or sun.
   */
  nextBand?: string
}

export function HeroBackdrop({ nextBand = 'text-background' }: HeroBackdropProps) {
  return (
    <div aria-hidden="true" className="absolute inset-0 overflow-hidden bg-linear-to-b from-surface-leaf via-surface-blush to-secondary">
      {/* Sun */}
      <span className="absolute top-6 right-[10%] w-16 h-16 sm:w-24 sm:h-24 rounded-full bg-accent/60" />
      <span className="absolute top-6 right-[10%] w-16 h-16 sm:w-24 sm:h-24 rounded-full bg-accent/40 scale-150" />

      {/* Clouds */}
      <img src="/images/doodles/cloud.svg" alt="" className="absolute top-5 left-[4%] w-24 sm:w-36 opacity-90" />
      <img src="/images/doodles/cloud.svg" alt="" className="absolute top-16 right-[30%] w-20 sm:w-28 opacity-70" />
      <img src="/images/doodles/cloud.svg" alt="" className="absolute top-[34%] left-[26%] w-16 sm:w-24 opacity-55 hidden sm:block" />

      {/* Butterflies drifting near the top corners */}
      <img src="/images/doodles/butterfly.svg" alt="" className="absolute top-[26%] right-[6%] w-10 sm:w-14 -rotate-12" />
      <img src="/images/doodles/leaf-1.svg" alt="" className="absolute top-[18%] left-[12%] w-8 sm:w-12 rotate-12 opacity-80 hidden sm:block" />
      <img src="/images/doodles/leaf-2.svg" alt="" className="absolute bottom-[38%] right-[16%] w-8 sm:w-12 -rotate-6 opacity-80 hidden sm:block" />

      {/* The hill the cast stands on */}
      <div className="absolute -bottom-16 -inset-x-8 h-40 sm:h-48 rounded-[50%] bg-mascot-squarey/20" />
      <div className="absolute -bottom-24 -inset-x-16 h-40 sm:h-52 rounded-[50%] bg-mascot-squarey/25" />

      {/* The scalloped ground line. It is drawn BEFORE the trees and the
          cast so they stand on top of it rather than behind it, and it is
          filled with the page background so the hero interlocks with
          whichever band follows instead of ending on a straight edge. */}
      <Wave className={nextBand} height="md" />

      {/* Trees along the skyline */}
      <img src="/images/doodles/tree-green.svg" alt="" className="absolute bottom-2 left-[2%] w-20 sm:w-28" />
      <img src="/images/doodles/tree-orange.svg" alt="" className="absolute bottom-3 left-[15%] w-16 sm:w-24" />
      <img src="/images/doodles/tree-green.svg" alt="" className="absolute bottom-2 right-[3%] w-20 sm:w-32" />
      <img src="/images/doodles/tree-orange.svg" alt="" className="absolute bottom-4 right-[17%] w-14 sm:w-20" />

      {/* Critters along the ground */}
      <img src="/images/doodles/butterfly.svg" alt="" className="absolute bottom-8 right-[26%] w-10 sm:w-14 rotate-6" />
      <img src="/images/doodles/snail.svg" alt="" className="absolute bottom-4 left-[27%] w-14 sm:w-20" />

      {/* The four brand characters lined up along the crown of the hill. They
          are staggered in size and height so the row reads as a crowd rather
          than a set of evenly spaced icons, and each is small enough to clear
          the headline's bottom padding. */}
      <img src="/images/mascots/rolly.webp" alt="" className="absolute bottom-4 left-[36%] w-12 sm:w-16 drop-shadow-sm" />
      <img src="/images/mascots/starry.webp" alt="" className="absolute bottom-6 left-[45%] w-11 sm:w-14 hidden sm:block drop-shadow-sm" />
      <img src="/images/mascots/squary.webp" alt="" className="absolute bottom-5 right-[45%] w-10 sm:w-13 hidden sm:block drop-shadow-sm" />
      <img src="/images/mascots/hexy.webp" alt="" className="absolute bottom-3 right-[35%] w-12 sm:w-16 drop-shadow-sm" />
    </div>
  )
}
