import { Motion } from '@/components/ui/motion'
import { Wave } from '@/components/ui/wave'
import { Doodle } from '@/components/ui/doodle'
import type { EnrichmentPage } from '@/lib/enrichment'

/**
 * The photographs from the programme, laid out in masonry columns.
 *
 * The set mixes wide banners, squarish snaps and one portrait, and each file
 * already has rounded corners painted into it, so nothing is cropped to a
 * shared aspect ratio — a column flow lets every photo keep its own shape and
 * the transparent corners sit straight on the band.
 */
export function GallerySection({ page }: { page: EnrichmentPage }) {
  const isSingle = page.gallery.length === 1

  return (
    <section className="band-sun relative overflow-hidden pt-14 sm:pt-20 pb-24 sm:pb-32 px-4 sm:px-6 lg:px-8">
      <Doodle name="snail" className="bottom-10 left-[5%] w-20" opacity={85} />
      <Doodle name="fox" className="bottom-12 right-[6%] w-20" opacity={85} flip />
      <Doodle name="hexy" className="top-10 left-[7%] w-14" rotate={-8} />
      <Doodle name="starry" className="top-12 right-[8%] w-14" rotate={10} />

      <div className="relative z-10 max-w-6xl mx-auto">
        <Motion variant="up">
          <div className="text-center mb-10 sm:mb-12">
            <span className="inline-block surface-card text-primary text-sm font-bold uppercase tracking-wide px-4 py-1.5 rounded-full shadow-sm">
              In Pictures
            </span>
          </div>
        </Motion>

        {isSingle ? (
          /* One plate rather than a grid, and plain like the portrait above —
             no shape layered behind it. */
          <Motion variant="scale">
            <div className="mx-auto max-w-2xl">
              <img
                src={page.gallery[0].src}
                alt={page.gallery[0].alt}
                loading="lazy"
                className="block w-full h-auto drop-shadow-md"
              />
            </div>
          </Motion>
        ) : (
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 [column-fill:balance]">
            {page.gallery.map((photo, i) => (
              <Motion key={photo.src} variant="up" delay={(i % 3) * 80} className="mb-5 break-inside-avoid">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  className="w-full h-auto rounded-2xl drop-shadow-md transition-transform duration-300 hover:-translate-y-1"
                />
              </Motion>
            ))}
          </div>
        )}
      </div>

      <Wave className="text-surface-dark" />
    </section>
  )
}
