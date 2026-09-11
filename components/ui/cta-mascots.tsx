const CAST = [
  { src: '/images/mascots/hexy.webp',  className: 'left-1 sm:left-6 lg:left-20 bottom-0 w-14 sm:w-24 lg:w-32 -rotate-6' },
  { src: '/images/mascots/rolly.webp', className: 'right-1 sm:right-6 lg:right-20 bottom-0 w-14 sm:w-24 lg:w-32 rotate-6' },
]

/**
 * A pair of characters flanking a closing call-to-action band.
 *
 * Deliberately two, not four: every CTA band is `band-plum` and so is the
 * footer directly beneath it, so the two run together into a single block of
 * purple. Putting the whole cast in both halves reads as a pile-up — this
 * pair frames the buttons, and the footer carries the full line-up below.
 *
 * Purely decorative. On a phone the pair shrinks to a thumb's width and hugs
 * the very edges, where the band is too narrow to hold much beside the copy.
 *
 * The parent `<section>` must be `relative overflow-hidden`, and its content
 * needs `relative z-10` — these are positioned children, so without it they
 * would paint over the heading rather than behind it.
 */
export function CtaMascots() {
  return (
    <>
      {CAST.map((m) => (
        <img
          key={m.src}
          src={m.src}
          alt=""
          aria-hidden="true"
          loading="lazy"
          className={`pointer-events-none select-none absolute z-0 drop-shadow-md ${m.className}`}
        />
      ))}
    </>
  )
}
