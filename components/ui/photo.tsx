interface PhotoProps {
  src: string
  alt: string
  /** Frame classes: the aspect ratio or height, plus any rounding. */
  className?: string
  /** Extra classes on the photo itself, e.g. a hover zoom. */
  imgClassName?: string
  /** Skip lazy-loading for the photo above the fold. */
  priority?: boolean
}

/**
 * A photo shown in full, never cropped.
 *
 * The frame keeps whatever fixed aspect its parent asks for, so grids and
 * heroes stay even. Inside it the photo is letterboxed with `object-contain`
 * — nothing is cut off, whatever shape the original is — and a blurred,
 * over-scaled copy of the same photo fills the leftover space, so the
 * letterbox reads as a soft vignette rather than as empty bars.
 */
export function Photo({ src, alt, className = '', imgClassName = '', priority = false }: PhotoProps) {
  const loading = priority ? 'eager' : 'lazy'
  return (
    <div className={`relative overflow-hidden bg-surface-mist ${className}`}>
      <img
        src={src}
        alt=""
        aria-hidden="true"
        loading={loading}
        className="absolute inset-0 w-full h-full object-cover scale-150 blur-2xl brightness-90 saturate-75"
      />
      <img
        src={src}
        alt={alt}
        loading={loading}
        className={`relative w-full h-full object-contain ${imgClassName}`}
      />
    </div>
  )
}
