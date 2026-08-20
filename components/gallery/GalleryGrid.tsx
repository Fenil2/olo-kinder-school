'use client'

import { useCallback, useEffect, useMemo, useState } from 'react'
import { MdChevronLeft, MdChevronRight, MdClose } from 'react-icons/md'
import { Motion } from '@/components/ui/motion'
import { Wave } from '@/components/ui/wave'
import { Doodle } from '@/components/ui/doodle'
import { galleryCategories, galleryPhotos } from '@/lib/gallery'

const ALL = 'all'

export function GalleryGrid() {
  const [active, setActive] = useState<string>(ALL)
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const photos = useMemo(
    () => (active === ALL ? galleryPhotos : galleryPhotos.filter((p) => p.category === active)),
    [active]
  )

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
              const count =
                filter.id === ALL
                  ? galleryPhotos.length
                  : galleryPhotos.filter((p) => p.category === filter.id).length
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
                  <span className={`ml-2 text-xs ${isActive ? 'opacity-70' : 'opacity-55'}`}>{count}</span>
                </button>
              )
            })}
          </div>
        </Motion>

        {/* Masonry columns. The library mixes 9:16 video stills with 4:3 and
            16:9 photos, so every tile takes its photo's own height instead of
            forcing one aspect — nothing is cropped and nothing is letterboxed. */}
        <div className="columns-2 md:columns-3 gap-3 sm:gap-5">
          {photos.map((photo, i) => (
            <Motion key={photo.src} variant="scale" delay={Math.min(i, 8) * 60} className="break-inside-avoid mb-3 sm:mb-5">
              <button
                onClick={() => setOpenIndex(i)}
                aria-label={`View photo: ${photo.caption}`}
                className="group block w-full rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-lg transition-shadow cursor-pointer"
              >
                {/* No caption over the tile: the photos speak for themselves, and
                    the caption still reads under the photo in the lightbox. */}
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  className="w-full h-auto align-bottom group-hover:scale-105 transition-transform duration-500"
                />
              </button>
            </Motion>
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
