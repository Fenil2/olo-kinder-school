import { MdBuild, MdCheckCircle, MdExtension, MdGroups, MdLibraryBooks, MdMusicNote, MdPalette } from 'react-icons/md'
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
    title: 'Storytelling',
    Icon: MdLibraryBooks,
    iconColor: 'text-[#F27C5A]',
    iconBg: 'bg-orange-50',
    accent: 'border-t-[#F27C5A]',
    topics: ['Stories', 'Imagination', 'Listening'],
    highlights: ['Vocabulary building', 'Creative expression', 'Confidence in speaking'],
  },
  {
    title: 'Brain Games & Puzzles',
    Icon: MdExtension,
    iconColor: 'text-[#0e7a94]',
    iconBg: 'bg-sky-50',
    accent: 'border-t-[#9ED8E8]',
    topics: ['Puzzles', 'Memory', 'Logic'],
    highlights: ['Problem-solving skills', 'Focus and attention', 'Early reasoning'],
  },
  {
    title: 'Art & Craft',
    Icon: MdPalette,
    iconColor: 'text-[#8a6a00]',
    iconBg: 'bg-yellow-50',
    accent: 'border-t-[#F4D46A]',
    topics: ['Drawing', 'Colouring', 'Craft'],
    highlights: ['Fine motor practice', 'Colour and texture exploration', 'Self-expression'],
  },
  {
    title: 'DIY Projects',
    Icon: MdBuild,
    iconColor: 'text-[#4a7a1e]',
    iconBg: 'bg-green-50',
    accent: 'border-t-[#B7D77A]',
    topics: ['Making', 'Building', 'Discovery'],
    highlights: ['Hands-on learning', 'Planning and trying ideas', 'Independent thinking'],
  },
  {
    title: 'Dance & Music',
    Icon: MdMusicNote,
    iconColor: 'text-pink-500',
    iconBg: 'bg-pink-50',
    accent: 'border-t-[#ec4899]',
    topics: ['Songs', 'Rhythm', 'Movement'],
    highlights: ['Body coordination', 'Musical awareness', 'Joyful expression'],
  },
  {
    title: 'Group Activities & Social Skills',
    Icon: MdGroups,
    iconColor: 'text-[#F27C5A]',
    iconBg: 'bg-orange-50',
    accent: 'border-t-[#F27C5A]',
    topics: ['Teamwork', 'Sharing', 'Friendship'],
    highlights: ['Communication skills', 'Turn-taking and cooperation', 'Empathy and confidence'],
  },
]

export function LearningAreasSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F0EDF5]">
      <div className="max-w-6xl mx-auto">
        <Motion variant="up">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold mb-3 text-foreground">Our Learning Experiences</h2>
            <p className="text-base sm:text-lg text-foreground/75 max-w-lg mx-auto">Purposeful activities designed to make every day joyful, creative, and social.</p>
          </div>
        </Motion>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {areas.map((area, i) => (
            <Motion key={i} variant="scale" delay={i * 80}>
              <div className={`bg-white rounded-2xl border-t-4 ${area.accent} p-6 hover:shadow-lg transition-shadow h-full flex flex-col gap-4`}>
                <div className="flex items-center gap-3">
                  <div className={`${area.iconBg} w-12 h-12 rounded-xl flex items-center justify-center shrink-0`}>
                    <area.Icon size={26} className={area.iconColor} />
                  </div>
                  <h3 className="text-lg font-bold text-foreground leading-tight">{area.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {area.topics.map((topic) => (
                    <span key={topic} className={`${area.iconBg} text-foreground/70 text-xs font-semibold px-3 py-1 rounded-full`}>
                      {topic}
                    </span>
                  ))}
                </div>

                <ul className="space-y-1.5 mt-auto">
                  {area.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-center gap-2 text-sm text-foreground/75">
                      <MdCheckCircle size={16} className={`shrink-0 ${area.iconColor}`} />
                      {highlight}
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
