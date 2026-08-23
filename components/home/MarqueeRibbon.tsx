const VALUES = ['Curious', 'Confident', 'Creative', 'Compassionate', 'Playful', 'Kind']

/* The four characters take it in turns as the separator between words. */
const DOTS = [
  '/images/mascots/rolly.webp',
  '/images/mascots/squary.webp',
  '/images/mascots/starry.webp',
  '/images/mascots/hexy.webp',
]

/**
 * The ribbon under the banner: the school's words for its children, travelling
 * slowly past with a mascot between each.
 *
 * The run is rendered twice inside one track. The animation moves the track by
 * exactly half its width, which is one full copy, so the moment it resets the
 * frame is identical and the seam cannot be seen. Rendering it once and
 * looping would visibly jump back at the end of every pass.
 *
 * The second copy is `aria-hidden`: it is the same words again, and a screen
 * reader should not read the list twice.
 */
export function MarqueeRibbon() {
  const run = (hidden: boolean) => (
    <ul
      aria-hidden={hidden || undefined}
      className="flex shrink-0 items-center gap-8 sm:gap-12 pr-8 sm:pr-12"
    >
      {VALUES.map((value, i) => (
        <li key={value} className="flex shrink-0 items-center gap-8 sm:gap-12">
          <span className="text-lg sm:text-2xl font-bold whitespace-nowrap text-foreground/85">{value}</span>
          <img
            src={DOTS[i % DOTS.length]}
            alt=""
            aria-hidden="true"
            loading="lazy"
            className="h-6 sm:h-8 w-auto shrink-0 select-none"
          />
        </li>
      ))}
    </ul>
  )

  return (
    <div
      // No top border: the ribbon now butts straight onto the photo band with
      // no scallop or cream lip between them, and a rule there would redraw
      // the seam the merge was meant to remove. The photo's own edge is the
      // boundary; only the underside still needs a line.
      className="relative overflow-hidden border-b border-border bg-surface-sand/60 py-3 sm:py-4"
      // Edges faded out, so the words arrive and leave rather than being
      // clipped by a hard boundary.
      style={{
        maskImage: 'linear-gradient(to right, transparent, black 6%, black 94%, transparent)',
        WebkitMaskImage: 'linear-gradient(to right, transparent, black 6%, black 94%, transparent)',
      }}
    >
      <div className="marquee-track flex w-max">
        {run(false)}
        {run(true)}
      </div>
    </div>
  )
}
