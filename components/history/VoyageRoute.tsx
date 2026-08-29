'use client'

import { useEffect, useRef } from 'react'

/**
 * The route the voyage's stops hang off, drawn by the scroll.
 *
 * The dashed line is always there in full; over it sits a solid line that is
 * only as long as the reader has travelled, with a bead at its head. The
 * fraction is published as `--drawn` (0→1) on the wrapper, so the two children
 * are pure CSS — one scales, one is offset by it — and nothing re-renders.
 *
 * It has to be measured rather than declared: the length depends on where the
 * section sits in the viewport, which no CSS scroll trigger short of
 * `animation-timeline` can express, and that is still missing from Firefox.
 * Someone who has asked for less motion gets the finished line, not an
 * animated one.
 */
export function VoyageRoute() {
  const wrap = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = wrap.current
    if (!el) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.style.setProperty('--drawn', '1')
      return
    }

    let frame = 0
    const measure = () => {
      frame = 0
      const box = el.getBoundingClientRect()
      /* The head of the line tracks the reader's eye: it sits wherever the
         route crosses three fifths of the way down the window. */
      const eye = window.innerHeight * 0.6
      const drawn = Math.min(Math.max((eye - box.top) / Math.max(box.height, 1), 0), 1)
      el.style.setProperty('--drawn', drawn.toFixed(4))
    }
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(measure)
    }

    measure()
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)
    return () => {
      if (frame) cancelAnimationFrame(frame)
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
    }
  }, [])

  return (
    <div ref={wrap} aria-hidden="true" className="pointer-events-none absolute inset-0 z-0">
      {/* The whole route, faint: where the voyage still has to go. */}
      <span className="absolute inset-y-0 left-5 w-0 border-l-3 border-dashed border-mascot-hexy/35 md:left-1/2 md:-translate-x-1/2" />

      {/* The stretch already travelled. */}
      <span className="absolute inset-y-0 left-5 w-[3px] overflow-hidden md:left-1/2 md:-translate-x-1/2">
        <span
          className="block h-full w-full origin-top rounded-full bg-mascot-hexy"
          style={{ transform: 'scaleY(var(--drawn, 0))' }}
        />
      </span>

      {/* The bead at the head of it. */}
      <span className="absolute inset-y-0 left-5 w-0 md:left-1/2">
        <span
          className="absolute h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-mascot-hexy shadow-md ring-4 ring-mascot-hexy/25"
          style={{ top: 'calc(var(--drawn, 0) * 100%)' }}
        />
      </span>
    </div>
  )
}
