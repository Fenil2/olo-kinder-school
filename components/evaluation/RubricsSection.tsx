import { Motion } from '@/components/ui/motion'
import { Wave } from '@/components/ui/wave'

/**
 * The sample rubrics.
 *
 * These ship from the source site as one flat screenshot
 * (`/images/evaluation/report-card.jpg`, still in the repo). Set as real
 * tables instead, they reflow, stay sharp at any zoom, are read correctly by
 * a screen reader, and pick up the brand's own ink — none of which a picture
 * of a table can do. The wording is transcribed from that screenshot exactly.
 */
const GRADES = ['Proficient', 'Progressing', 'Emerging'] as const

interface Rubric {
  title: string
  bar: string
  criteria: string[]
}

const rubrics: Rubric[] = [
  {
    title: 'Listening and Speaking Skills',
    bar: 'bg-mascot-hexy-dark',
    criteria: [
      'Interest shown in listening to stories and conversations',
      'Ability to learn new vocabulary through stories',
      'Competence displayed in recognizing characters in the story',
      'Ability to correlate pictures to the events of the story',
      'Ability to comprehend the flow of events in a story',
      'Comprehensive skills gained to perceive values from the theme of the story',
    ],
  },
  {
    title: 'Writing Skills',
    bar: 'bg-mascot-roundy-dark',
    criteria: [
      'Ability to identify and match the beginning letter of the given objects',
      'Proficiency displayed in writing the first letter of the given naming words',
      'Concern shown to write neatly with good letter formation',
      'Aptitude displayed to complete three - letter words to match the pictures',
    ],
  },
]

function RubricTable({ rubric }: { rubric: Rubric }) {
  return (
    <div className="bg-card rounded-3xl border border-border shadow-lg overflow-hidden">
      {/* Narrow windows scroll the table sideways rather than crushing four
          columns into a phone's width. */}
      <div className="overflow-x-auto">
        <table className="w-full min-w-[36rem] border-collapse text-left">
          <caption className="sr-only">
            {rubric.title}. Each criterion is graded Proficient, Progressing or Emerging; the
            grade columns are left blank on this sample for the teacher to mark.
          </caption>
          <thead>
            <tr className={`${rubric.bar} text-white`}>
              <th scope="col" className="px-5 sm:px-6 py-4 font-heading text-base sm:text-lg font-bold">
                {rubric.title}
              </th>
              {GRADES.map((grade) => (
                <th
                  key={grade}
                  scope="col"
                  className="w-28 px-3 py-4 text-center text-xs sm:text-sm font-semibold"
                >
                  {grade}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rubric.criteria.map((criterion, i) => (
              <tr key={criterion} className={i % 2 === 1 ? 'bg-muted/50' : undefined}>
                <th
                  scope="row"
                  className="px-5 sm:px-6 py-3.5 border-t border-border font-normal text-sm sm:text-base text-foreground/90 leading-relaxed"
                >
                  {criterion}
                </th>
                {GRADES.map((grade) => (
                  <td key={grade} className="border-t border-l border-border px-3 py-3.5">
                    {/* The blank a teacher ticks. Decorative — the column
                        header already names the grade for a screen reader. */}
                    <span
                      aria-hidden="true"
                      className="mx-auto block h-4 w-4 rounded-full border-2 border-border"
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export function RubricsSection() {
  return (
    <section className="pt-12 sm:pt-16 pb-20 sm:pb-28 px-4 sm:px-6 lg:px-8 band-sun relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        <Motion variant="up">
          <div className="text-center mb-10 sm:mb-12">
            {/* Starry at the mic, announcing the section, as on the source page. */}
            <img
              src="/images/evaluation/star-with-mic.png"
              alt=""
              aria-hidden="true"
              loading="lazy"
              className="pointer-events-none select-none mx-auto w-20 sm:w-24 h-auto mb-5"
            />
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-heading text-balance">
              A few sample rubrics used to evaluate literacy skills in young children
            </h2>
          </div>
        </Motion>

        <div className="space-y-8 sm:space-y-10">
          {rubrics.map((rubric, i) => (
            <Motion key={rubric.title} variant="up" delay={i * 100}>
              <RubricTable rubric={rubric} />
            </Motion>
          ))}
        </div>
      </div>

      <Wave className="text-surface-dark" />
    </section>
  )
}
