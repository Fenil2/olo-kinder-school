import { Motion } from '@/components/ui/motion'
import { Wave } from '@/components/ui/wave'

/* One sprig of the pair that frames the medallion: a white leaf with a few
   coloured veins, drawn rather than shipped as an image so it stays crisp at
   any size and picks its inks straight from the mascot tokens. It is drawn
   upright; the pair is tilted apart, and mirrored, in CSS. */
function Sprig({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 168"
      fill="none"
      aria-hidden="true"
      className={`pointer-events-none select-none ${className}`}
    >
      {/* Blade: a pointed oval, tip at the top, stem running out of the base. */}
      <path
        d="M50 2c34 34 44 82 22 122-6 12-14 24-22 40-8-16-16-28-22-40C6 84 16 36 50 2Z"
        fill="#fff"
      />
      {/* Midrib, then veins fanning off it in the four mascot inks. */}
      <path d="M50 150V26" stroke="var(--brand-plum)" strokeOpacity=".3" strokeWidth="3" strokeLinecap="round" />
      <path d="M50 116 33 100" stroke="var(--mascot-hexy)" strokeWidth="5" strokeLinecap="round" />
      <path d="M50 104 67 88" stroke="var(--mascot-roundy)" strokeWidth="5" strokeLinecap="round" />
      <path d="M50 86 36 72" stroke="var(--mascot-squarey)" strokeWidth="5" strokeLinecap="round" />
      <path d="M50 72 63 58" stroke="var(--mascot-starry)" strokeWidth="5" strokeLinecap="round" />
    </svg>
  )
}

/**
 * The banner that opens the home page.
 *
 * A full-bleed photo band scalloped along both edges, with the Olo Kinder
 * globe standing in a white medallion that straddles the lower edge. The
 * medallion is a circle of the page's own white, so it reads as the band
 * below bulging up around the logo rather than as a badge dropped on top.
 *
 * Everything is sized from `vw` between a floor and a ceiling: the band, the
 * medallion and the sprigs shrink together, which keeps the logo centred in
 * the same amount of photo on a phone as on a wide desktop.
 */
export function BannerSection() {
  return (
    <section className="relative bg-card overflow-hidden">
      {/* Photo band. A fixed 2.4:1 slot rather than the photo's own 16:9, which
          keeps the banner short enough that the hero below it stays on screen.
          The trim comes off the ceiling and the front of the table — the
          children and their towers sit mid-frame and survive it at every
          width. The scallops sit inside the band, biting into the photo. */}
      <div className="relative">
        <img
          src="/hero-image.jpg"
          alt="Olo Kinder children building with blocks together in the activity room"
          loading="eager"
          width={1440}
          height={812}
          className="block w-full aspect-[2.4/1] object-cover object-center"
        />
        <Wave flip className="text-card" height="sm" />
        <Wave className="text-card" height="sm" />
      </div>

      {/* The apron the medallion lands on: white below the band, deep enough
          to hold the part of the circle that hangs past the photo. */}
      <div className="h-[clamp(2rem,4.5vw,3.5rem)]" />

      {/* Medallion and sprigs, centred on the band's lower edge. */}
      <div className="absolute inset-x-0 bottom-[clamp(0.5rem,1.5vw,1rem)] z-2 flex justify-center pointer-events-none">
        <Motion variant="scale" className="relative">
          <div className="relative w-[clamp(7.5rem,18vw,13rem)] aspect-square rounded-full bg-card grid place-items-center">
            <img
              src="/images/brand/olo-globe.webp"
              alt="Olo Kinder"
              width={820}
              height={900}
              className="w-[78%] h-auto object-contain"
            />
          </div>

          {/* The pair leans away from the circle, tips up and outwards. */}
          <Sprig className="absolute top-1/2 -translate-y-1/2 right-full mr-[-6%] w-[clamp(2.75rem,6.5vw,4.75rem)] drop-shadow-sm -rotate-12" />
          <Sprig className="absolute top-1/2 -translate-y-1/2 left-full ml-[-6%] w-[clamp(2.75rem,6.5vw,4.75rem)] drop-shadow-sm rotate-12 -scale-x-100" />
        </Motion>
      </div>
    </section>
  )
}
