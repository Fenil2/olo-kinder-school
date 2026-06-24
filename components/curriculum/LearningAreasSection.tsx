import { MdRecordVoiceOver, MdCalculate, MdPalette, MdEco, MdFavorite, MdDirectionsRun, MdCheckCircle } from 'react-icons/md'
import type { IconType } from 'react-icons'
import { Motion } from '@/components/ui/motion'

interface Area {
  title: string
  Icon: IconType
  iconColor: string
  iconBg: string
  accent: string
  topics: string[]
  highlights: string[]
}

const areas: Area[] = [
  {
    title: 'Language & Literacy',
    Icon: MdRecordVoiceOver,
    iconColor: 'text-[#F27C5A]',
    iconBg: 'bg-orange-50',
    accent: 'border-t-[#F27C5A]',
    topics: ['Vocabulary', 'Reading', 'Communication'],
    highlights: ['Listening & comprehension', 'Expressive language', 'Pre-literacy skills'],
  },
  {
    title: 'Numeracy',
    Icon: MdCalculate,
    iconColor: 'text-[#0e7a94]',
    iconBg: 'bg-sky-50',
    accent: 'border-t-[#9ED8E8]',
    topics: ['Rhythmic Arithmetic', 'Number Concepts'],
    highlights: ['Number recognition', 'Pattern recognition', 'Spatial reasoning'],
  },
  {
    title: 'Creativity',
    Icon: MdPalette,
    iconColor: 'text-[#8a6a00]',
    iconBg: 'bg-yellow-50',
    accent: 'border-t-[#F4D46A]',
    topics: ['Art', 'Music', 'Storytelling'],
    highlights: ['Self-expression', 'Artistic skills', 'Musical awareness'],
  },
  {
    title: 'Nature & Environment',
    Icon: MdEco,
    iconColor: 'text-[#4a7a1e]',
    iconBg: 'bg-green-50',
    accent: 'border-t-[#B7D77A]',
    topics: ['Exploration', 'Observation', 'Nature'],
    highlights: ['Observation skills', 'Environmental awareness', 'Scientific reasoning'],
  },
  {
    title: 'Social & Emotional',
    Icon: MdFavorite,
    iconColor: 'text-pink-500',
    iconBg: 'bg-pink-50',
    accent: 'border-t-[#ec4899]',
    topics: ['Confidence', 'Teamwork', 'Communication'],
    highlights: ['Emotional awareness', 'Self-regulation', 'Empathy'],
  },
  {
    title: 'Physical Development',
    Icon: MdDirectionsRun,
    iconColor: 'text-[#F27C5A]',
    iconBg: 'bg-orange-50',
    accent: 'border-t-[#F27C5A]',
    topics: ['Play', 'Movement', 'Activities'],
    highlights: ['Gross & fine motor skills', 'Coordination', 'Love of active play'],
  },
]

export function LearningAreasSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F0EDF5]">
      <div className="max-w-6xl mx-auto">
        <Motion variant="up">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold mb-3 text-foreground">Six Essential Learning Areas</h2>
            <p className="text-base sm:text-lg text-foreground/75 max-w-lg mx-auto">Each area is woven together to support whole-child development.</p>
          </div>
        </Motion>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {areas.map((area, i) => (
            <Motion key={i} variant="scale" delay={i * 80}>
              <div className={`bg-white rounded-2xl border-t-4 ${area.accent} p-6 hover:shadow-lg transition-shadow h-full flex flex-col gap-4`}>
                {/* Icon + Title */}
                <div className="flex items-center gap-3">
                  <div className={`${area.iconBg} w-12 h-12 rounded-xl flex items-center justify-center shrink-0`}>
                    <area.Icon size={26} className={area.iconColor} />
                  </div>
                  <h3 className="text-lg font-bold text-foreground leading-tight">{area.title}</h3>
                </div>

                {/* Topic tags */}
                <div className="flex flex-wrap gap-2">
                  {area.topics.map((t) => (
                    <span key={t} className={`${area.iconBg} text-foreground/70 text-xs font-semibold px-3 py-1 rounded-full`}>{t}</span>
                  ))}
                </div>

                {/* Key highlights */}
                <ul className="space-y-1.5 mt-auto">
                  {area.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2 text-sm text-foreground/75">
                      <MdCheckCircle size={16} className={`shrink-0 ${area.iconColor}`} />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </Motion>
          ))}
        </div>
      </div>
    </section>
  )
}
