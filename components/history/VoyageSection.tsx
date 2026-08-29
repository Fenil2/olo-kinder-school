import type { ReactNode } from 'react'
import { Motion } from '@/components/ui/motion'
import { Photo } from '@/components/ui/photo'
import { Doodle } from '@/components/ui/doodle'
import { Wave } from '@/components/ui/wave'
import { VoyageRoute } from '@/components/history/VoyageRoute'

interface Stop {
  text: ReactNode
  image: string
  alt: string
  /** Crop anchor for photos whose subject does not sit in the middle. */
  focus?: string
  /** Classroom stills take a hand-drawn blob; module artwork takes a frame. */
  frame: string
  /** Tinted paper for the copy card. */
  card: string
  /** Ring around the photo and the route marker. */
  ring: string
  /** Who stands on the route beside this stop. */
  mascot: string
  tilt: string
}

const STOPS: Stop[] = [
  {
    text: 'Olo Kinder is a package of learning modules that aims to develop the divergent thinking skills of young learners between the age group of 3 to 5 years.',
    image: '/images/moments/link-shapes-building.jpeg',
    alt: 'An Olo Kinder child concentrating as she links green plastic shapes together at a classroom table',
    /* A 3:4 still: her face sits in the upper third, so a landscape frame has
       to be held high to keep it. */
    focus: 'object-[50%_26%]',
    frame: 'blob-soft w-full h-72 sm:h-80',
    card: 'bg-surface-blush',
    ring: 'ring-mascot-roundy',
    mascot: '/images/mascots/rolly.webp',
    tilt: '-rotate-2',
  },
  {
    text: (
      <>
        Every thematic module is conceptualized carefully by{' '}
        <strong className="font-bold text-heading">Mrs. Geethanjali Sasikumar</strong>, the Academic
        Director of Velammal Schools and also the Founder of{' '}
        <strong className="font-bold text-heading">Skill Gro</strong>, an organization that focuses
        on creating real world experiences within the boundaries of the classroom scenario to help
        students gain the relevant aptitude to read, write and speak fluently.
      </>
    ),
    image: '/images/about-5.jpg',
    alt: 'Pages from Olo Kinder thematic modules — a blended learning station and a storybook spread depicting Indian culture — with the brand cast walking below them',
    /* Module artwork, not a photograph: it takes a plain rounded frame at the
       source file's own 3:2, so the labels printed in it survive. A blob would
       cut the corners the artwork puts its titles in. */
    frame: 'w-full aspect-3/2 rounded-[2rem]',
    card: 'bg-surface-sky',
    ring: 'ring-mascot-hexy',
    mascot: '/images/mascots/hexy.webp',
    tilt: 'rotate-0',
  },
  {
    text: 'We believe that students will gain rich experiences through Olo Kinder modules that will enable them to construct their knowledge meaningfully and develop a deeper understanding of the world around them.',
    image: '/images/about-4.jpg',
    alt: 'Three Olo Kinder children drawing and colouring their module worksheets with coloured pencils at a classroom table',
    focus: 'object-[55%_50%]',
    frame: 'blob-alt w-full h-72 sm:h-80',
    card: 'bg-surface-leaf',
    ring: 'ring-mascot-squarey',
    mascot: '/images/mascots/squary.webp',
    tilt: 'rotate-2',
  },
]

/**
 * The rest of the story, drawn as the voyage the quote above names.
 *
 * A single dashed route runs the height of the section — down the middle on a
 * desktop, down the left margin on a phone — and each stop hangs off it: a
 * mascot standing on the line, a photo in a hand-drawn frame on one side, the
 * paragraph on tinted paper on the other. Stops alternate sides, so the eye is
 * handed across the route rather than down a column, and three paragraphs that
 * would otherwise be one block of prose are read one at a time.
 *
 * The whole thing is scored to the scroll: the route fills in behind a
 * travelling bead (`VoyageRoute`), each stop's photo arrives from its own side
 * of the line with the copy a beat behind it, and the mascots on the markers
 * bob on staggered clocks so the three never rise together. Every piece of that
 * stops for `prefers-reduced-motion`.
 */
export function VoyageSection() {
  return (
    <section className="band-cream relative overflow-hidden px-4 sm:px-6 lg:px-8 pt-14 sm:pt-20 pb-24 sm:pb-32">
      <Doodle name="butterfly" className="top-16 right-6 w-14" rotate={-12} opacity={80} />
      <Doodle name="leaf1" className="top-[42%] left-3 w-14" rotate={18} opacity={60} />
      <Doodle name="snail" className="hidden lg:block bottom-40 right-4 w-16" opacity={75} />
      <Doodle name="treeGreen" className="bottom-10 left-2 w-24" opacity={70} />
      <Doodle name="treeOrange" className="hidden sm:block bottom-12 right-6 w-20" opacity={70} />

      <div className="relative z-10 mx-auto max-w-5xl">
        {/* The route, drawn in as the reader travels it. */}
        <VoyageRoute />

        <div className="space-y-16 sm:space-y-24">
          {STOPS.map((stop, i) => {
            const flip = i % 2 === 1
            return (
              <div
                key={i}
                className="relative pl-16 md:grid md:grid-cols-2 md:items-center md:gap-16 md:pl-0"
              >
                {/* The marker, standing on the route. The mascot inside it
                    floats; the ring around it does not, so the marker stays
                    pinned to the line while its passenger bobs. */}
                <span
                  aria-hidden
                  className={`surface-card absolute left-5 top-4 z-10 flex h-14 w-14 -translate-x-1/2 items-center justify-center rounded-full shadow-md ring-4 md:left-1/2 md:top-1/2 md:-translate-y-1/2 ${stop.ring}`}
                >
                  <img
                    src={stop.mascot}
                    alt=""
                    loading="lazy"
                    /* Staggered so the three never rise and fall together. */
                    style={{ animationDelay: `${i * 700}ms` }}
                    className="bob w-9"
                  />
                </span>

                {/* Photo. On a phone it always leads; on a desktop it swaps
                    sides with the copy, which is what makes the route read
                    as a path rather than as a divider. It arrives from its own
                    side of the route, and the copy follows a beat later. */}
                <Motion variant={flip ? 'right' : 'left'} className={flip ? 'md:order-2' : ''}>
                  <Photo
                    src={stop.image}
                    alt={stop.alt}
                    focus={stop.focus}
                    className={`border-4 border-white shadow-lg ring-4 transition-[transform,box-shadow] duration-500 ease-out hover:-translate-y-1.5 hover:rotate-0 hover:shadow-2xl ${stop.ring} ${stop.frame} ${stop.tilt}`}
                  />
                </Motion>

                <Motion
                  variant="up"
                  delay={160}
                  className={`mt-6 md:mt-0 ${flip ? 'md:order-1' : ''}`}
                >
                  <div
                    className={`rounded-[2rem] border border-border/70 p-6 shadow-sm sm:p-8 ${stop.card}`}
                  >
                    <p className="text-lg leading-relaxed text-pretty text-foreground/85 sm:text-xl">
                      {stop.text}
                    </p>
                  </div>
                </Motion>
              </div>
            )
          })}
        </div>
      </div>

      <Wave className="text-surface-dark" />
    </section>
  )
}
