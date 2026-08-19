/**
 * The illustrated scene behind every page hero: a sky gradient, a rolling
 * hill, and the brand's cartoon cast scattered across it.
 *
 * Everything here is decorative, so it is hidden from assistive tech. The
 * cast is kept to the outer edges and the hill so the headline sitting in
 * the middle always lands on flat colour — and most of it only appears from
 * `sm` up, where there is room for it beside the copy.
 */
export function HeroBackdrop() {
  return (
    <div aria-hidden="true" className="absolute inset-0 overflow-hidden bg-linear-to-b from-surface-leaf via-surface-blush to-secondary">
      {/* Sun */}
      <span className="absolute top-6 right-[10%] w-16 h-16 sm:w-24 sm:h-24 rounded-full bg-accent/60" />
      <span className="absolute top-6 right-[10%] w-16 h-16 sm:w-24 sm:h-24 rounded-full bg-accent/40 scale-150" />

      {/* Clouds */}
      <img src="/images/doodles/cloud.svg" alt="" className="absolute top-5 left-[4%] w-24 sm:w-36 opacity-90" />
      <img src="/images/doodles/cloud.svg" alt="" className="absolute top-16 right-[30%] w-20 sm:w-28 opacity-70 hidden sm:block" />
      <img src="/images/doodles/cloud.svg" alt="" className="absolute top-[34%] left-[26%] w-16 sm:w-24 opacity-55 hidden lg:block" />

      {/* Butterflies drifting near the top corners */}
      <img src="/images/doodles/butterfly.svg" alt="" className="absolute top-[26%] right-[6%] w-10 sm:w-14 -rotate-12 hidden sm:block" />
      <img src="/images/doodles/leaf-1.svg" alt="" className="absolute top-[18%] left-[12%] w-8 sm:w-12 rotate-12 opacity-80 hidden lg:block" />
      <img src="/images/doodles/leaf-2.svg" alt="" className="absolute bottom-[38%] right-[16%] w-8 sm:w-12 -rotate-6 opacity-80 hidden lg:block" />

      {/* The hill the cast stands on */}
      <div className="absolute -bottom-16 -inset-x-8 h-40 sm:h-48 rounded-[50%] bg-mascot-squarey/20" />
      <div className="absolute -bottom-24 -inset-x-16 h-40 sm:h-52 rounded-[50%] bg-mascot-squarey/25" />

      {/* Trees along the skyline */}
      <img src="/images/doodles/tree-green.svg" alt="" className="absolute bottom-2 left-[2%] w-20 sm:w-28" />
      <img src="/images/doodles/tree-orange.svg" alt="" className="absolute bottom-3 left-[15%] w-16 sm:w-24 hidden sm:block" />
      <img src="/images/doodles/tree-green.svg" alt="" className="absolute bottom-2 right-[3%] w-20 sm:w-32" />
      <img src="/images/doodles/tree-orange.svg" alt="" className="absolute bottom-4 right-[17%] w-14 sm:w-20 hidden lg:block" />

      {/* The cast */}
      <img src="/images/doodles/fox.svg" alt="" className="absolute bottom-3 right-[26%] w-16 sm:w-24 hidden sm:block" />
      <img src="/images/doodles/snail.svg" alt="" className="absolute bottom-4 left-[27%] w-14 sm:w-20 hidden sm:block" />
      <img src="/images/doodles/mascot-roundy.webp" alt="" className="absolute bottom-5 left-[38%] w-10 sm:w-14 hidden md:block" />
      <img src="/images/doodles/mascot-hexy.webp" alt="" className="absolute bottom-6 right-[36%] w-12 sm:w-16 hidden lg:block" />
    </div>
  )
}
