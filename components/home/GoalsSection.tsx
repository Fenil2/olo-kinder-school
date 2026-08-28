'use client'

import { useEffect, useRef } from 'react'
import { Motion } from '@/components/ui/motion'
import { Doodle } from '@/components/ui/doodle'
import { Photo } from '@/components/ui/photo'
import { Wave } from '@/components/ui/wave'

interface Goal {
  /** Short label for the card's spine — the only part still visible once the
   *  next card has slid over it, so it has to name the goal on its own. */
  label: string
  text: string
  /** Saturated ink twin for the spine; white type sits on it. */
  spine: string
  /** Soft wash of the same hue for the card body. */
  body: string
  /** The same hue again, raw, for the ghost numeral behind the copy. */
  tint: string
  image: string
  alt: string
  /** Crop for photos whose subject is not centred. */
  focus?: string
  mascot: 'rolly' | 'squary' | 'starry' | 'hexy'
}

/**
 * Six goals, six colours, drawn from the brand cast in the order the logo
 * reads. The spine takes each hue's ink twin rather than the pastel: white
 * type on raw coral is 3.3:1, on the twin it is 5.3:1.
 */
const GOALS: Goal[] = [
  {
    label: 'A Joyful Community',
    text: 'To cultivate an enthusiastic community of young learners through quality ECE programmes.',
    spine: 'bg-mascot-roundy-dark',
    body: 'bg-surface-blush',
    tint: 'text-mascot-roundy',
    image: '/images/moments/link-shapes-smiles.jpeg',
    alt: 'An Olo Kinder child beaming at the camera while linking coloured plastic shapes with a friend',
    /* Her face sits in the top third of a 4:3 frame; centred, the wide crop
       would take it off the top. */
    focus: 'object-[50%_28%]',
    mascot: 'rolly',
  },
  {
    label: 'Thematic Learning',
    text: 'To present thematic learning modules that focus on enriching the creative and divergent thinking skills, and collaboration among students.',
    spine: 'bg-mascot-starry-dark',
    body: 'bg-surface-sand',
    tint: 'text-mascot-starry',
    image: '/images/art-and-coloring.jpg',
    alt: 'Three Olo Kinder children colouring picture worksheets with pencils at a shared table',
    mascot: 'starry',
  },
  {
    label: 'Whole-Child Growth',
    text: 'To enhance cognitive, emotional, social, and physical development through play-based and experiential learning activities.',
    spine: 'bg-mascot-hexy-dark',
    body: 'bg-surface-sky',
    tint: 'text-mascot-hexy',
    image: '/images/moments/block-stacking.jpeg',
    alt: 'An Olo Kinder child stacking oversized building blocks in front of a painted mural',
    mascot: 'hexy',
  },
  {
    label: 'Families & Community',
    text: 'To work in partnership with families and the community to cultivate a foundation and passion for lifelong learning.',
    spine: 'bg-brand-plum',
    body: 'bg-surface-lilac',
    tint: 'text-brand-plum',
    image: '/images/enrichment/parents-banner-1.jpg',
    alt: 'Families and grandparents gathered in the school courtyard for a community day',
    mascot: 'squary',
  },
  {
    label: 'Wonder & Nature',
    text: 'To value the wonders of the world around young learners and respect earthy belongings.',
    spine: 'bg-mascot-squarey-dark',
    body: 'bg-surface-leaf',
    tint: 'text-mascot-squarey',
    image: '/images/nature-discovery.jpg',
    alt: 'Two Olo Kinder children leaning in to look closely at a bush of pink flowers',
    mascot: 'squary',
  },
  {
    label: 'Voice & Expression',
    text: 'To support young kids to showcase their conceptual understanding through clarity of thoughts and expressions.',
    spine: 'bg-mascot-roundy-dark',
    body: 'bg-surface-blush',
    tint: 'text-mascot-roundy',
    image: '/images/moments/stage-microphone.jpeg',
    alt: 'An Olo Kinder child speaking into a microphone on stage, smiling at the audience',
    /* A 9:16 still in a landscape frame: centred, the crop starts just under
       her chin. Held high so the face survives. */
    focus: 'object-[50%_28%]',
    mascot: 'hexy',
  },
]

/**
 * How far each card is offset below the one before it, and how tall the spine
 * is — the two are the same number so the spines land in an even row, like the
 * tabs of a card index. Kept in sync with `--goal-peek` in globals.css.
 */
const PEEK = 48

/**
 * "Our Goals" as a deck of cards dealt by the scroll.
 *
 * Each card is `sticky` at its own top offset, so it parks under the nav and
 * the next card rides up over it, leaving only its coloured spine showing. Six
 * paragraphs that would otherwise be a wall of bullets are read one at a time,
 * and the spines above build into a table of contents as you go.
 *
 * Two things this rules out for every ancestor up to `<body>`:
 * `overflow: hidden`, which turns the ancestor into a scrollport the cards can
 * never leave (hence `overflow-x-clip` on the section, which clips the doodles
 * without creating one), and any `transform`, which would make the ancestor the
 * containing block and pin the cards to it.
 */
export function GoalsSection() {
  const cards = useRef<(HTMLDivElement | null)[]>([])

  /**
   * The covered card shrinks a little as the next one buries it, which is what
   * sells a stack of paper rather than six panels sliding past each other.
   *
   * It has to be measured rather than declared: the amount of shrink depends on
   * how far the *next* card has travelled, which no CSS scroll trigger short of
   * `animation-timeline` can express — and that is still missing from Firefox.
   * So each card publishes a 0→1 `--covered` and the stylesheet owns the look.
   */
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let frame = 0
    const measure = () => {
      frame = 0
      const els = cards.current
      els.forEach((el, i) => {
        const next = els[i + 1]
        const inner = el?.firstElementChild as HTMLElement | undefined
        if (!el || !inner) return
        let covered = 0
        if (next) {
          // Distance from this card's top to the next one's. It closes from a
          // full card height down to the spine as the next card slides over.
          const gap = next.getBoundingClientRect().top - el.getBoundingClientRect().top
          const travel = el.offsetHeight - PEEK
          if (travel > 0) covered = 1 - Math.min(Math.max((gap - PEEK) / travel, 0), 1)
        }
        inner.style.setProperty('--covered', covered.toFixed(3))
      })
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
    <section className="band-cream relative overflow-x-clip pt-12 sm:pt-16 pb-28 sm:pb-36 px-4 sm:px-6 lg:px-8">
      {/* The deck is capped at `max-w-4xl`, which leaves a wide cream margin
          either side of it on a desktop. The cast and the doodles are scattered
          down that margin — positioned in percentages so they spread over the
          section's full scroll height rather than bunching at its two ends.

          The ones without a breakpoint are the two the phone sees, above and
          below the deck. The rest are held back until there is margin to put
          them in: on a phone the cards run nearly edge to edge and a doodle
          behind them is just a shape nobody ever sees. */}
      <Doodle name="cloud" className="top-6 right-4 w-24" opacity={70} />
      <Doodle name="butterfly" className="hidden md:block top-[13%] left-[4%] w-14" rotate={-12} opacity={85} />
      <Doodle name="leaf1" className="hidden md:block top-[24%] right-[4%] w-16" rotate={20} opacity={70} />
      <Doodle name="starry" className="hidden lg:block top-[34%] left-[3%] w-16" rotate={-10} opacity={90} />
      <Doodle name="cloud" className="hidden lg:block top-[45%] right-[5%] w-20" opacity={55} />
      <Doodle name="snail" className="hidden lg:block top-[56%] left-[5%] w-16" opacity={80} />
      <Doodle name="hexy" className="hidden lg:block top-[66%] right-[3%] w-14" rotate={9} opacity={90} />
      <Doodle name="leaf2" className="hidden md:block top-[76%] left-[4%] w-14" rotate={-18} opacity={70} />
      <Doodle name="treeOrange" className="hidden sm:block bottom-16 right-6 w-20" opacity={70} />
      <Doodle name="treeGreen" className="bottom-14 left-2 w-24" opacity={70} />

      <div className="max-w-4xl mx-auto relative z-10">
        <Motion variant="up">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-heading">
              Our <span className="ink-coral">Goals</span>
            </h2>
            <p className="mt-3 text-base sm:text-lg text-foreground/90 max-w-xl mx-auto">
              Six promises that shape every day at Olo Kinder. Keep scrolling — they stack up.
            </p>
          </div>
        </Motion>

        <div className="goal-deck">
          {GOALS.map((goal, i) => (
            <div
              key={goal.label}
              ref={(el) => {
                cards.current[i] = el
              }}
              /* Each card parks one spine lower than the one before it, and
                 later cards paint over earlier ones. */
              className="sticky mb-5 sm:mb-6"
              style={{ top: `calc(var(--goal-top) + ${i} * var(--goal-peek))`, zIndex: i + 1 }}
            >
              <article className="goal-card overflow-hidden rounded-3xl border-2 border-white shadow-[0_20px_45px_-22px_rgba(74,61,86,0.55)]">
                {/* The spine. Its height is exactly one peek, so once the deck
                    is stacked the six read as an even row of tabs. */}
                <div className={`flex h-12 items-center gap-3 px-4 sm:px-6 text-white ${goal.spine}`}>
                  <span className="font-heading text-lg font-extrabold tabular-nums">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="h-4 w-px bg-white/45" />
                  <h3 className="min-w-0 truncate font-heading text-base sm:text-lg font-bold tracking-wide">
                    {goal.label}
                  </h3>
                  <img
                    src={`/images/mascots/${goal.mascot}.webp`}
                    alt=""
                    aria-hidden="true"
                    loading="lazy"
                    className="bob ml-auto w-8 sm:w-9 shrink-0 drop-shadow"
                  />
                </div>

                <div className={`relative ${goal.body}`}>
                  {/* The numeral again, huge and faint, so the card still has
                      something going on behind the copy. */}
                  <span
                    aria-hidden="true"
                    className={`pointer-events-none absolute -bottom-8 -right-3 font-heading text-[9rem] leading-none font-extrabold opacity-15 select-none ${goal.tint}`}
                  >
                    {i + 1}
                  </span>

                  <div className="relative grid items-center gap-6 p-5 sm:p-7 md:grid-cols-[1.15fr_1fr]">
                    <p className="font-heading text-lg sm:text-xl md:text-2xl font-bold leading-snug text-heading text-pretty">
                      {goal.text}
                    </p>
                    {/* The photo is desktop-only. On a phone the whole point is
                        that a card fits on screen with room for the spines
                        above it; a picture makes it taller than the viewport
                        and the deck stops reading as a deck. */}
                    <Photo
                      src={goal.image}
                      alt={goal.alt}
                      focus={goal.focus}
                      className="hidden md:block h-44 rotate-[-1.5deg] rounded-2xl border-4 border-white shadow-md"
                    />
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>

      <Wave className="text-surface-sky" />
    </section>
  )
}
