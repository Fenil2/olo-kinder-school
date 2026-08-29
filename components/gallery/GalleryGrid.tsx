'use client'

import { useCallback, useEffect, useMemo, useState } from 'react'
import { MdChevronLeft, MdChevronRight, MdClose } from 'react-icons/md'
import { Motion } from '@/components/ui/motion'
import { Wave } from '@/components/ui/wave'
import { Doodle } from '@/components/ui/doodle'
import { galleryCategories, galleryPhotos, type GalleryPhoto } from '@/lib/gallery'

const ALL = 'all'

export function GalleryGrid() {
  const [active, setActive] = useState<string>(ALL)
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const photos = useMemo(
    () => (active === ALL ? galleryPhotos : galleryPhotos.filter((p) => p.category === active)),
    [active]
  )

  /* Two columns on a phone, three from `md` up — the same breakpoint the old
     `columns-2 md:columns-3` used. It has to be state rather than a class now
     that the packing is done here; the server renders the three-column pack
     and a phone repacks to two on hydration. */
  const [columnCount, setColumnCount] = useState(3)
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)')
    const apply = () => setColumnCount(mq.matches ? 3 : 2)
    apply()
    mq.addEventListener('change', apply)
    return () => mq.removeEventListener('change', apply)
  }, [])

  /* Shortest-column-first packing. Each tile's height, as a multiple of the
     column width, is `1 / ratio`, so the running totals below are in column
     widths and no measuring of the DOM is needed. */
  const columnised = useMemo(() => {
    const columns: { photo: GalleryPhoto; index: number }[][] = Array.from(
      { length: columnCount },
      () => []
    )
    const heights = new Array<number>(columnCount).fill(0)
    photos.forEach((photo, index) => {
      let shortest = 0
      for (let c = 1; c < columnCount; c++) if (heights[c] < heights[shortest]) shortest = c
      columns[shortest].push({ photo, index })
      heights[shortest] += 1 / photo.ratio
    })
    return columns
  }, [photos, columnCount])

  const close = useCallback(() => setOpenIndex(null), [])
  const step = useCallback(
    (delta: number) => setOpenIndex((i) => (i === null ? i : (i + delta + photos.length) % photos.length)),
    [photos.length]
  )

  // Lightbox keyboard controls, plus a scroll lock while it is open
  useEffect(() => {
    if (openIndex === null) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
      else if (e.key === 'ArrowRight') step(1)
      else if (e.key === 'ArrowLeft') step(-1)
    }
    document.addEventListener('keydown', onKeyDown)
    const { overflow } = document.body.style
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = overflow
    }
  }, [openIndex, close, step])

  const filters = [{ id: ALL, label: `All Photos` }, ...galleryCategories]
  const open = openIndex === null ? null : photos[openIndex]

  return (
    <section className="pt-12 sm:pt-16 pb-20 sm:pb-28 px-4 sm:px-6 lg:px-8 band-sky relative overflow-hidden">
      <Doodle name="cloud" className="top-10 left-8 w-28" opacity={60} />
      <Doodle name="butterfly" className="top-12 right-12 w-16" opacity={75} flip />
      <Doodle name="snail" className="bottom-8 left-10 w-20" opacity={70} />
      <Doodle name="treeGreen" className="bottom-6 right-8 w-24" opacity={70} />
      <Doodle name="rolly" className="top-1/3 left-6 w-14" rotate={-12} />
      <Doodle name="starry" className="bottom-1/3 right-6 w-14" rotate={10} />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Category filters */}
        <Motion variant="up">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-10">
            {filters.map((filter) => {
              const isActive = active === filter.id
              return (
                <button
                  key={filter.id}
                  onClick={() => {
                    setActive(filter.id)
                    setOpenIndex(null)
                  }}
                  aria-pressed={isActive}
                  className={`px-4 sm:px-5 py-2 rounded-full text-sm sm:text-base font-semibold transition-colors cursor-pointer border ${
                    isActive
                      ? 'bg-primary text-primary-foreground border-transparent shadow-sm'
                      : 'surface-card text-foreground/90 border-border hover:text-foreground hover:border-primary'
                  }`}
                >
                  {filter.label}
                </button>
              )
            })}
          </div>
        </Motion>

        {/* Masonry, packed by hand rather than by `columns-*`.

            The library mixes 9:16 phone stills with 4:3 and 16:9 photos, so
            every tile keeps its photo's own height — nothing is cropped and
            nothing is letterboxed. CSS multi-column can do that, but it decides
            for itself where a column breaks: a tile that will not fit in what
            is left of a column jumps to the next one and leaves the hole
            behind, which is what put the gaps in this grid.

            So the columns are filled here instead. Each photo goes to whichever
            column is currently shortest, measured in `1 / ratio` — a tile's
            height as a multiple of the column's width — and each column is then
            a plain flex stack that cannot break anywhere. No holes, and the
            columns finish within a tile of each other. */}
        <div className="flex items-start gap-3 sm:gap-5">
          {columnised.map((column, c) => (
            <div key={c} className="flex min-w-0 flex-1 flex-col gap-3 sm:gap-5">
              {column.map(({ photo, index }) => (
                <Motion key={photo.src} variant="scale" delay={Math.min(index, 8) * 60}>
                  <button
                    onClick={() => setOpenIndex(index)}
                    aria-label={`View photo: ${photo.caption}`}
                    className="group block w-full overflow-hidden rounded-2xl border border-border shadow-sm transition-shadow hover:shadow-lg cursor-pointer"
                  >
                    {/* No caption over the tile: the photos speak for
                        themselves, and the caption still reads under the photo
                        in the lightbox. The aspect ratio comes from the file,
                        so the tile is the right size before the photo lands
                        and the grid never reflows around it. */}
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      loading="lazy"
                      style={{ aspectRatio: photo.ratio }}
                      className="block w-full align-bottom object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </button>
                </Motion>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={open.caption}
          onClick={close}
          className="fixed inset-0 z-100 bg-black/97 flex items-center justify-center p-4 sm:p-8 motion-fade"
        >
          <button
            onClick={close}
            aria-label="Close"
            className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white/80 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors cursor-pointer"
          >
            <MdClose size={30} />
          </button>

          {photos.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  step(-1)
                }}
                aria-label="Previous photo"
                className="absolute left-2 sm:left-6 text-white/80 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors cursor-pointer"
              >
                <MdChevronLeft size={40} />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  step(1)
                }}
                aria-label="Next photo"
                className="absolute right-2 sm:right-6 text-white/80 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors cursor-pointer"
              >
                <MdChevronRight size={40} />
              </button>
            </>
          )}

          <figure
            onClick={(e) => e.stopPropagation()}
            className="max-w-5xl w-full flex flex-col items-center gap-4"
          >
            <img
              src={open.src}
              alt={open.alt}
              className="max-h-[75vh] w-auto max-w-full object-contain rounded-2xl shadow-2xl"
            />
            <figcaption className="text-center text-white/90 text-sm sm:text-base font-semibold px-4">
              {open.caption}
              <span className="block text-white/50 text-xs mt-1">
                {(openIndex ?? 0) + 1} of {photos.length}
              </span>
            </figcaption>
          </figure>
        </div>
      )}

      <Wave className="text-surface-dark" />
    </section>
  )
}
