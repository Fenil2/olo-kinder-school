import { MdChildCare, MdSchool, MdInsights } from 'react-icons/md'
import type { IconType } from 'react-icons'
import { Motion } from '@/components/ui/motion'
import { Wave } from '@/components/ui/wave'
import { Photo } from '@/components/ui/photo'
import { Doodle } from '@/components/ui/doodle'

/**
 * The source page names three audiences for evaluation — the children, the
 * teachers, the management — but runs them down the page as two bulleted
 * lists and a stray sentence, so the shape of the argument is lost. They are
 * one row of three here, which is what the content actually is.
 *
 * The three do not carry the same amount of text, and no attempt is made to
 * pad them into matching lengths: the cards stretch to a common height and
 * each list starts at the top, so the row stays even while the writing stays
 * as it was written.
 */
interface Audience {
  who: string
  Icon: IconType
  items: string[]
  ink: string
  tint: string
  bar: string
}

const audiences: Audience[] = [
  {
    who: 'This ensures that children',
    Icon: MdChildCare,
    ink: 'ink-green',
    tint: 'text-mascot-squarey-dark',
    bar: 'bg-mascot-squarey',
    items: [
      'Reach the developmental milestones',
      'Achieve the standard benchmarks set for each grade level',
      'Showcase their learning through formative and summative tasks',
      'Receive the necessary support with the evidences of learning and thrive in their early learning environments',
    ],
  },
  {
    who: 'Evaluation allows teachers to',
    Icon: MdSchool,
    ink: 'ink-coral',
    tint: 'text-mascot-roundy-dark',
    bar: 'bg-mascot-roundy',
    items: [
      'Review their teaching methods and approaches',
      'Redesign the methodology, if required, to suit the learning styles of their students',
    ],
  },
  {
    who: 'Evaluation enables the management to',
    Icon: MdInsights,
    ink: 'ink-sun',
    tint: 'text-mascot-starry-dark',
    bar: 'bg-mascot-starry',
    items: ['Gauge the effectiveness of our Olo Kinder learning program'],
  },
]

export function WhyImportantSection() {
  return (
    <section className="pt-12 sm:pt-16 pb-20 sm:pb-28 px-4 sm:px-6 lg:px-8 band-sky relative overflow-hidden">
      <Doodle name="hexy" className="top-12 right-6 w-14" rotate={8} opacity={70} />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* The portrait sits beside the opening copy, which is the one place
            on this page a tall frame belongs — a column of text is the only
            thing on the page with a matching height. */}
        <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-8 lg:gap-14 items-center mb-12 sm:mb-16">
          <Motion variant="left">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-5 text-heading text-balance">
                Why is Evaluation Important?
              </h2>
              <p className="text-lg sm:text-xl text-foreground/90 leading-relaxed text-pretty">
                Evaluation enables educators, parents, and the school management to gather important information pertaining to a child&apos;s progress in their learning journey.
              </p>
            </div>
          </Motion>
          <Motion variant="right" delay={100}>
            <Photo
              src="/images/evaluation/D.png"
              alt="An Olo Kinder teacher helping two children water a young sapling in the school garden"
              className="rounded-3xl shadow-lg w-full aspect-417/551 max-w-xs mx-auto md:mx-0 md:ml-auto"
              fit="object-contain"
            />
          </Motion>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-7 items-stretch">
          {audiences.map((a, i) => (
            <Motion key={a.who} variant="up" delay={i * 100} className="h-full">
              <div className="bg-card rounded-3xl border border-border shadow-sm overflow-hidden h-full flex flex-col">
                <div aria-hidden="true" className={`h-1.5 ${a.bar}`} />
                <div className="p-6 sm:p-7 flex flex-col gap-5">
                  <a.Icon size={34} className={a.tint} />
                  <h3 className={`text-lg sm:text-xl font-bold leading-snug ${a.ink}`}>{a.who}</h3>
                  <ul className="space-y-3.5">
                    {a.items.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span
                          aria-hidden="true"
                          className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${a.bar}`}
                        />
                        <span className="text-base text-foreground/90 leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Motion>
          ))}
        </div>

        {/* The Christmas frame is 2.68:1 — far too wide to share a row with
            anything. Run the width of the section it reads as a band; boxed
            into a third of a grid it became a letterbox slot. */}
        <Motion variant="scale">
          <Photo
            src="/images/evaluation/evaluation-two.png"
            alt="An Olo Kinder child dressed as Santa carrying a large wrapped gift at the Christmas celebration"
            className="rounded-[2rem] shadow-lg w-full aspect-1119/417 mt-12 sm:mt-16"
            fit="object-contain"
          />
        </Motion>
      </div>

      <Wave className="text-background" />
    </section>
  )
}
