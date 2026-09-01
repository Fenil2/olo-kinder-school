import { MdChildCare, MdSchool, MdInsights, MdCheck } from 'react-icons/md'
import type { IconType } from 'react-icons'
import { Motion } from '@/components/ui/motion'
import { Wave } from '@/components/ui/wave'
import { Photo } from '@/components/ui/photo'
import { Doodle } from '@/components/ui/doodle'

/**
 * The source page names three audiences for evaluation — the children, the
 * teachers, the management — but runs them down the page as two bulleted lists
 * and a stray sentence, so the shape of the argument is lost.
 *
 * They were a row of three cards here, and that was the wrong shape for them.
 * The three carry four, two and one item: in equal columns that renders as one
 * full card beside two mostly-empty ones, and stretching them to a common
 * height only makes the empty space taller. Unevenness like that is what rows
 * absorb and columns cannot.
 *
 * So they are a split table now — a tinted cell naming the audience, a white
 * cell listing what it gets — stacked into one bordered plate. Every heading
 * sits on the same axis, every list starts at the same left edge, and a row
 * with one item is simply a short row instead of a hole in the layout.
 */
interface Audience {
  /** The audience itself, as the heading. */
  who: string
  /** The source page's own lead-in, which reads into the list beside it. */
  lead: string
  Icon: IconType
  /** Ink for the heading and the ticks. */
  ink: string
  /** Wash behind the naming cell. */
  panel: string
  /** The tick discs, at the same hue as the panel but a step up. */
  dot: string
  items: string[]
}

const audiences: Audience[] = [
  {
    who: 'Children',
    lead: 'Evaluation ensures that children',
    Icon: MdChildCare,
    ink: 'text-mascot-squarey-dark',
    panel: 'bg-surface-leaf',
    dot: 'bg-mascot-squarey/30',
    items: [
      'Reach the developmental milestones',
      'Achieve the standard benchmarks set for each grade level',
      'Showcase their learning through formative and summative tasks',
      'Receive the necessary support with the evidences of learning and thrive in their early learning environments',
    ],
  },
  {
    who: 'Teachers',
    lead: 'Evaluation allows teachers to',
    Icon: MdSchool,
    ink: 'text-mascot-roundy-dark',
    panel: 'bg-surface-blush',
    dot: 'bg-mascot-roundy/25',
    items: [
      'Review their teaching methods and approaches',
      'Redesign the methodology, if required, to suit the learning styles of their students',
    ],
  },
  {
    who: 'Management',
    lead: 'Evaluation enables the management to',
    Icon: MdInsights,
    ink: 'text-mascot-starry-dark',
    panel: 'bg-surface-sand',
    dot: 'bg-mascot-starry/40',
    items: ['Gauge the effectiveness of our Olo Kinder learning program'],
  },
]

export function WhyImportantSection() {
  return (
    <section className="pt-12 sm:pt-16 pb-20 sm:pb-28 px-4 sm:px-6 lg:px-8 band-sky relative overflow-hidden">
      <Doodle name="hexy" className="top-12 right-6 w-14" rotate={8} opacity={70} />
      <Doodle name="leaf2" className="bottom-16 left-5 w-14" rotate={-16} opacity={60} />

      {/* Full width: no content column. The section spans the band, held off
          the window edge only by the section's own gutters — the same `w-full
          px-4 sm:px-6 lg:px-8` the nav bar uses. What still needs a measure
          asks for one individually below, because a line of text 1,500px long
          is not readable however wide the room is. */}
      <div className="w-full relative z-10">
        {/* The opener is centred and measured, and it stands alone. Pairing it
            with the portrait put a three-line paragraph beside a tall picture
            and left a column of empty band between them — the text was centred
            in a space the photograph's height had set. The photograph has gone
            down beside the plate, where there is a tall thing for it to match. */}
        <Motion variant="up">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-5 text-heading text-balance">
              Why is Evaluation Important?
            </h2>
            <p className="text-lg sm:text-xl text-foreground/90 leading-relaxed text-pretty">
              Evaluation enables educators, parents, and the school management to gather important information pertaining to a child&apos;s progress in their learning journey.
            </p>
          </div>
        </Motion>

        {/* The plate and the photograph, side by side from `lg`.
            Both cells stretch, and only the plate has a height of its own, so
            the frame takes the plate's — the two line up top and bottom
            because they are one row, not because two natural heights happened
            to agree. Below `lg` the photograph drops under the plate and takes
            a fixed height instead, since there is nothing beside it to match. */}
        {/* The photograph's column is a width, not a fraction. As a fraction
            it grew with the window, and a 417×551 portrait stretched across
            600px of a wide monitor is a letterbox with the sides thrown away.
            Fixed at roughly its own width, it stays a portrait and the plate
            takes everything the window adds. */}
        <div className="mt-10 sm:mt-14 grid gap-7 lg:grid-cols-[minmax(0,1fr)_22rem] xl:grid-cols-[minmax(0,1fr)_26rem] lg:gap-10">
          {/* One plate, three rows. The naming cells are a fixed column so the
              three headings and the three lists each share an edge; below `sm`
              the cell becomes a full-width header for the list under it, which
              is the same relationship stacked. */}
          <Motion variant="up" className="h-full">
            <div className="surface-card h-full overflow-hidden rounded-[2rem] border border-border shadow-md divide-y divide-border">
              {audiences.map((a) => (
                <div key={a.who} className="grid sm:grid-cols-[14rem_1fr] lg:grid-cols-[15rem_1fr] xl:grid-cols-[17rem_1fr]">
                  <div className={`${a.panel} flex items-center gap-4 p-5 sm:p-7`}>
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-white/70 shadow-sm">
                      <a.Icon size={26} className={a.ink} />
                    </span>
                    <div className="min-w-0">
                      <h3 className={`font-heading text-xl sm:text-2xl font-bold leading-tight ${a.ink}`}>
                        {a.who}
                      </h3>
                      {/* The verbatim lead-in, kept because it is the sentence
                          the list finishes. It reads into the cell beside it
                          the way a table header reads into its column. */}
                      <p className="mt-1 text-sm text-foreground/75 leading-snug text-pretty">{a.lead}</p>
                    </div>
                  </div>

                  {/* Capped: the list cell now grows with the window, and a
                      bullet set across the whole of it would run past the
                      width an eye can track back from. */}
                  <ul className="grid content-center gap-3.5 p-5 sm:p-7 max-w-3xl">
                    {a.items.map((item) => (
                      <li key={item} className="flex gap-3.5">
                        <span
                          aria-hidden="true"
                          className={`mt-1 grid h-6 w-6 shrink-0 place-items-center rounded-full ${a.dot}`}
                        >
                          <MdCheck size={15} className={a.ink} />
                        </span>
                        <span className="text-base sm:text-lg text-foreground/90 leading-relaxed text-pretty">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Motion>

          {/* From `lg` the frame is taken out of flow and pinned to its grid
              area. A stretched cell is already the row's full height, so this
              fills the plate exactly — and, contributing nothing to the row's
              intrinsic height, it cannot be what sets that height. Left in
              flow, a 417×551 portrait would push the row taller than the
              plate and put the empty space back. */}
          {/* `order-first` below `lg` only: stacked, the photograph belongs
              directly under the paragraph it illustrates, not stranded at the
              foot of three cards. It keeps its place after the plate in the
              markup, so a screen reader still reaches the substance of the
              section before the picture of it at every width. */}
          <Motion variant="right" delay={120} className="order-first lg:order-0 lg:relative">
            <Photo
              src="/images/evaluation/D.png"
              alt="An Olo Kinder teacher helping two children water a young sapling in the school garden"
              className="h-64 sm:h-80 w-full rounded-[2rem] shadow-lg lg:absolute lg:inset-0 lg:h-full"
              /* The teacher and the two children sit just below the middle of
                 a tall frame; a centred crop cuts the sapling out from under
                 them. */
              focus="object-[50%_42%]"
            />
          </Motion>
        </div>

        {/* The Christmas frame is 2.68:1 — far too wide to share a row with
            anything, so it runs as a band of its own.

            It is the one thing here that does NOT go the full width: the file
            is 1119px across, and on a wide monitor an unbounded plate would
            scale it half as wide again and soften it. The cap is a shade over
            its own size, which is as far as it goes before that shows. */}
        <Motion variant="scale">
          <Photo
            src="/images/evaluation/evaluation-two.png"
            alt="An Olo Kinder child dressed as Santa carrying a large wrapped gift at the Christmas celebration"
            className="rounded-[2rem] shadow-lg w-full max-w-7xl mx-auto aspect-1119/417 mt-12 sm:mt-16"
            fit="object-contain"
          />
        </Motion>
      </div>

      <Wave className="text-background" />
    </section>
  )
}
