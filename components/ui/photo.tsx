interface PhotoProps {
  src: string
  alt: string
  /** Frame classes: the aspect ratio or height, plus any rounding. */
  className?: string
  /** Extra classes on the photo itself, e.g. a hover zoom. */
  imgClassName?: string
  /**
   * Which part of the photo to keep when the frame crops it. Defaults to the
   * centre; tall portraits usually want `object-top` so faces survive.
   */
  focus?: string
  /** Skip lazy-loading for the photo above the fold. */
  priority?: boolean
}

/**
 * A photo that fills its frame edge to edge.
 *
 * The library mixes 9:16 phone stills with 4:3 and 16:9 photos, so nothing can
 * be sized from the source. The frame takes whatever fixed aspect or height its
 * parent asks for and the photo covers it with `object-cover` — every card in a
 * grid stays the same size and no letterbox bars appear around the odd shapes.
 * Pass `focus` to move the crop off centre when the subject sits high or low.
 */
export function Photo({
  src,
  alt,
  className = '',
  imgClassName = '',
  focus = 'object-center',
  priority = false,
}: PhotoProps) {
  return (
    <div className={`relative overflow-hidden bg-surface-mist ${className}`}>
      <img
        src={src}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        className={`block w-full h-full object-cover ${focus} ${imgClassName}`}
      />
    </div>
  )
}
