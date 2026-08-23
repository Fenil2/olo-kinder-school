import { MdVisibility, MdForum } from 'react-icons/md'
import { Motion } from '@/components/ui/motion'
import { Wave } from '@/components/ui/wave'
import { Photo } from '@/components/ui/photo'

/* The two things the ongoing half of the process involves, as the source
   page lists them. */
const ongoing = [
  { label: 'Informal observations', Icon: MdVisibility, bg: 'bg-surface-leaf', ink: 'text-mascot-squarey-dark' },
  { label: 'Classroom conversations and play-based activities', Icon: MdForum, bg: 'bg-surface-blush', ink: 'text-mascot-roundy-dark' },
]

/* The rail's three markers. The step headings are structural labels for the
   three stages the source page describes in prose — day to day, end of term,
   and the report that follows — not claims of their own. */
const STEPS = [
  { n: '1', label: 'Ongoing, in the classroom', bg: 'bg-mascot-squarey', ink: 'text-white' },
  { n: '2', label: 'At the end of every term', bg: 'bg-mascot-hexy', ink: 'text-foreground' },
  { n: '3', label: 'The Holistic Progress Card', bg: 'bg-mascot-starry', ink: 'text-foreground' },
] as const

/**
 * One marker on the rail.
 *
 * It must be a direct child of the `<li>`, NOT of the `<Motion>` inside it.
 * `.motion-up` animates a transform with `fill: both`, so the Motion element
 * keeps a transform once the animation settles — and a transformed element
 * becomes the containing block for its absolutely positioned descendants.
 * Nested inside it, `left-0` resolved against Motion's content box, which
 * starts after the `<li>`'s left padding: the number landed directly on top
 * of the heading it was meant to sit beside.
 */
function Marker({ step }: { step: (typeof STEPS)[number] }) {
  return (
    <span
      aria-hidden="true"
      className={`absolute left-0 top-0 grid h-10 w-10 sm:h-12 sm:w-12 place-items-center rounded-full font-heading text-lg sm:text-xl font-bold shadow-sm ${step.bg} ${step.ink}`}
    >
      {step.n}
    </span>
  )
}

/* The heading is given the marker's own height and centres inside it, so the
   number and the words it labels share a centre line at both sizes. */
const HEADING = 'flex items-center min-h-10 sm:min-h-12 text-xl sm:text-2xl font-bold text-heading'

export function HowConductedSection() {
  return (
    <section className="pt-12 sm:pt-16 pb-20 sm:pb-28 px-4 sm:px-6 lg:px-8 band-cream relative overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">
        <Motion variant="up">
          <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-5 text-heading text-balance">
              How is Evaluation Conducted?
            </h2>
            <p className="text-base sm:text-lg text-foreground/90 leading-relaxed text-pretty">
              Evaluation is an ongoing process in our Olo Kinder classrooms that involves
            </p>
          </div>
        </Motion>

        {/* A rail rather than three more cards: evaluation here runs on a
            calendar — every day, then each term end, then the report — and a
            grid of equal boxes would flatten that order out. */}
        <ol className="relative space-y-12 sm:space-y-16">
          {/* The line the markers sit on. It stops short at both ends so it
              runs between the first and last numbers rather than past them. */}
          <span
            aria-hidden="true"
            className="absolute left-5 sm:left-6 top-10 bottom-10 w-0.5 bg-border"
          />

          {/* 1 — every day */}
          <li className="relative pl-16 sm:pl-20">
            <Marker step={STEPS[0]} />
            <Motion variant="up">
              <h3 className={`${HEADING} mb-5`}>{STEPS[0].label}</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                {ongoing.map((item) => (
                  <li key={item.label} className={`${item.bg} rounded-2xl p-5 flex items-center gap-4`}>
                    <item.Icon size={28} className={`shrink-0 ${item.ink}`} />
                    <span className="font-bold text-base text-foreground">{item.label}</span>
                  </li>
                ))}
              </ul>
              {/* Natural ratio, so the frame is exactly the shape of the file
                  and `object-cover` has nothing to crop away. */}
              <Photo
                src="/images/evaluation/evaluation-three.png"
                alt="Four Olo Kinder children standing at a table, examining handmade dolls and craft materials"
                className="rounded-3xl shadow-lg w-full aspect-501/374 max-w-xl"
                fit="object-contain"
              />
            </Motion>
          </li>

          {/* 2 — each term end. The library frame is a shade under 16:9, so
              it sits beside the paragraph at close to the same height rather
              than pushing it down the page. */}
          <li className="relative pl-16 sm:pl-20">
            <Marker step={STEPS[1]} />
            <Motion variant="up">
              <h3 className={`${HEADING} mb-4`}>{STEPS[1].label}</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center">
                <p className="text-base sm:text-lg text-foreground/90 leading-relaxed">
                  Every year, the students also take up the Summative Tasks at the end of every term. The two terminal assessments are planned to evaluate the learning progression of every child based on the concepts integrated in the Thematic Learning Modules.
                </p>
                <Photo
                  src="/images/evaluation/Frame-193.png"
                  alt="Three Olo Kinder children sitting on the library floor, working with wooden puppets"
                  className="rounded-3xl shadow-lg w-full aspect-501/281"
                  fit="object-contain"
                />
              </div>
            </Motion>
          </li>

          {/* 3 — the report that follows */}
          <li className="relative pl-16 sm:pl-20">
            <Marker step={STEPS[2]} />
            <Motion variant="up">
              <h3 className={`${HEADING} mb-4`}>{STEPS[2].label}</h3>
              <p className="text-base sm:text-lg text-foreground/90 leading-relaxed max-w-3xl">
                Students receive the Holistic Progress Card as directed by the CBSE at the end of every term and rubrics are used to help teachers assess the developmental domains in a more structured and comprehensive manner.
              </p>
            </Motion>
          </li>
        </ol>

        {/* Hexy and Squary close the section, standing on the wave below. */}
        <Motion variant="scale">
          <img
            src="/images/evaluation/Group-27.png"
            alt=""
            aria-hidden="true"
            loading="lazy"
            width={727}
            height={231}
            className="pointer-events-none select-none mx-auto mt-12 sm:mt-16 w-full max-w-sm h-auto"
          />
        </Motion>
      </div>

      <Wave className="text-surface-sand" />
    </section>
  )
}
