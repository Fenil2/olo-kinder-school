import Link from 'next/link'
import { MdGroups, MdExtension, MdDirectionsWalk, MdLibraryBooks, MdMusicNote, MdEco } from 'react-icons/md'
import type { IconType } from 'react-icons'
import { Motion } from '@/components/ui/motion'
import { Doodle } from '@/components/ui/doodle'
import { Wave } from '@/components/ui/wave'

interface Experience { title: string; Icon: IconType; desc: string }

const experiences: Experience[] = [
  { title: 'Circle Time', Icon: MdGroups, desc: 'An engaging time for greetings songs, conversation,and sharing that develop language, listening skills,and social connections while creating a joyful start of the day.' },
  { title: 'Play & Learn', Icon: MdExtension, desc: 'Child-led exploration through varied learning stations that invite creativity and discovery.' },
  { title: 'Walk & Talk', Icon: MdDirectionsWalk, desc: 'Outdoor explorations where children observe, discuss, and connect learning to the natural world.' },
  { title: 'Rhythmic Reading', Icon: MdLibraryBooks, desc: 'Language and literacy brought to life through rhythm, rhyme, and expressive storytelling.' },
  { title: 'Rhythmic Arithmetic', Icon: MdMusicNote, desc: 'Number concepts made fun and memorable through rhythmic patterns and musical counting.' },
  { title: 'Nature Exploration', Icon: MdEco, desc: 'Hands-on discovery of the natural environment, building curiosity and environmental awareness.' },
]

export function ExperiencesSection() {
  return (
    <section className="band-cream pt-12 sm:pt-16 pb-24 sm:pb-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <Doodle name="treeGreen" className="bottom-0 left-6 w-24" opacity={70} />
      <Doodle name="hexy" className="top-10 right-10 w-16" rotate={-8} />
      <div className="max-w-7xl mx-auto relative z-10">
        <Motion variant="up">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-heading mb-4">Learning Through Experiences</h2>
            <p className="text-base sm:text-lg text-foreground/90 max-w-xl mx-auto">Olo Kinder is filled with rich, purposeful experiences designed to inspire curiosity, encourage exploration, and engage young learners.</p>
          </div>
        </Motion>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {experiences.map((exp, i) => (
            <Motion key={i} variant="up" delay={i * 80}>
              <div className="flex gap-4 items-start p-5 sm:p-6 rounded-2xl border border-border hover:border-primary hover:shadow-sm transition-all h-full">
                <exp.Icon size={30} className="text-primary shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-base sm:text-lg text-heading mb-1">{exp.title}</h3>
                  <p className="text-sm text-foreground/90 leading-relaxed">{exp.desc}</p>
                </div>
              </div>
            </Motion>
          ))}
        </div>
        <Motion variant="up" delay={200}>
          <div className="text-center mt-8">
            <Link href="/learning-experiences" className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-full hover:bg-primary-hover transition-colors font-semibold">
              Explore All Experiences
            </Link>
          </div>
        </Motion>
      </div>

      <Wave className="text-surface-sky" />
    </section>
  )
}
