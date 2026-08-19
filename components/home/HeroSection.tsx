import Link from 'next/link'
import { Motion } from '@/components/ui/motion'
import { Photo } from '@/components/ui/photo'
import { Wave } from '@/components/ui/wave'

export function HeroSection() {
  return (
    <section className="relative overflow-hidden min-h-[calc(85vh-5rem)] flex items-center px-4 sm:px-6 lg:px-8 bg-linear-to-br from-secondary via-surface-blush to-background pt-10 sm:pt-14 pb-24 sm:pb-36">
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-14 items-center">

          <div className="space-y-5 text-center lg:text-left">
            <Motion variant="down" delay={0}>
              <span className="inline-block bg-highlight/30 text-foreground text-sm font-semibold px-4 py-1.5 rounded-full">
                Welcome to Olo Kinder
              </span>
            </Motion>
            {/* The reference sets each phrase of the headline in a different
                brand colour rather than one accent span. Same words, four inks. */}
            <Motion variant="up" delay={100}>
              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-bold leading-[1.15] text-pretty">
                <span className="ink-plum">Where Curiosity</span>{' '}
                <span className="ink-coral">Begins</span>{' '}
                <span className="ink-plum">and</span>{' '}
                <span className="ink-green scribble-under">Learning</span>{' '}
                <span className="ink-sky">Comes Alive</span>
              </h1>
            </Motion>
            <Motion variant="up" delay={200}>
              <p className="text-base sm:text-lg text-foreground/90 leading-relaxed text-pretty max-w-xl mx-auto lg:mx-0">
                At Olo Kinder, children embark on a joyful learning journey guided by Rolly, Squary, Starry, and Hexy. Through play, exploration, creativity, and discovery, every child develops the confidence and skills needed for the future.
              </p>
            </Motion>
            <Motion variant="up" delay={300}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
                <Link href="/admissions#enquiry" className="bg-accent text-accent-foreground px-8 py-3.5 rounded-full hover:bg-accent-hover transition-colors font-semibold text-center shadow-sm">
                  Admissions Open Now
                </Link>
                <Link href="/about" className="border-2 border-foreground/30 text-foreground px-8 py-3.5 rounded-full hover:border-primary hover:text-primary transition-colors font-semibold text-center">
                  Explore Olo Kinder
                </Link>
              </div>
            </Motion>
          </div>

          {/* Photo in a blob, with the cast standing around it — reference 01 */}
          <Motion variant="scale" delay={150} className="w-full">
            <div className="relative mx-auto max-w-lg lg:max-w-none px-8 sm:px-10">
              {/* A second blob peeking out from behind, offset rather than
                  concentric — a ring of even thickness reads as a border. */}
              <span
                aria-hidden
                className="blob-alt absolute -top-5 -bottom-1 left-2 -right-3 bg-mascot-starry/45"
              />
              <Photo
                src="/images/hero-school-entrance.jpg"
                alt="Olo Kinder children building with blocks together in the activity room"
                className="blob relative shadow-lg aspect-4/3 sm:aspect-3/2 lg:aspect-4/3"
                priority
              />

              {/* The cast stands ON the blob's edge, not floating beside it */}
              <img
                src="/images/doodles/mascot-roundy.webp"
                alt=""
                aria-hidden="true"
                className="pointer-events-none select-none absolute bottom-4 -left-1 sm:left-0 w-14 sm:w-20 drop-shadow-md"
              />
              <img
                src="/images/doodles/mascot-hexy.webp"
                alt=""
                aria-hidden="true"
                className="pointer-events-none select-none absolute -bottom-2 right-4 sm:right-8 w-14 sm:w-20 drop-shadow-md"
              />
            </div>
          </Motion>

        </div>
      </div>

      <Wave variant="ribbon" className="text-background" height="lg" />
    </section>
  )
}
