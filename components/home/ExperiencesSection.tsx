import Link from 'next/link'
import { MdGroups, MdExtension, MdDirectionsWalk, MdLibraryBooks, MdMusicNote, MdEco } from 'react-icons/md'
import type { IconType } from 'react-icons'
import { Motion } from '@/components/ui/motion'

interface Experience { title: string; Icon: IconType; desc: string }

const experiences: Experience[] = [
  { title: 'Circle Time', Icon: MdGroups, desc: 'Morning greetings, songs, and meaningful conversations that set a joyful tone for the day.' },
  { title: 'Play & Learn', Icon: MdExtension, desc: 'Child-led exploration through varied learning stations that invite creativity and discovery.' },
  { title: 'Walk & Talk', Icon: MdDirectionsWalk, desc: 'Outdoor explorations where children observe, discuss, and connect learning to the natural world.' },
  { title: 'Rhythmic Reading', Icon: MdLibraryBooks, desc: 'Language and literacy brought to life through rhythm, rhyme, and expressive storytelling.' },
  { title: 'Rhythmic Arithmetic', Icon: MdMusicNote, desc: 'Number concepts made fun and memorable through rhythmic patterns and musical counting.' },
  { title: 'Nature Exploration', Icon: MdEco, desc: 'Hands-on discovery of the natural environment, building curiosity and environmental awareness.' },
]

export function ExperiencesSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <Motion variant="up">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Learning Through Experiences</h2>
            <p className="text-base sm:text-lg text-foreground/80 max-w-xl mx-auto">Every day at Olo Kinder is filled with rich, purposeful experiences designed to inspire and engage.</p>
          </div>
        </Motion>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {experiences.map((exp, i) => (
            <Motion key={i} variant="up" delay={i * 80}>
              <div className="flex gap-4 items-start p-5 sm:p-6 rounded-2xl border border-border hover:border-primary hover:shadow-sm transition-all h-full">
                <exp.Icon size={30} className="text-primary shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-base sm:text-lg text-foreground mb-1">{exp.title}</h3>
                  <p className="text-sm text-foreground/80 leading-relaxed">{exp.desc}</p>
                </div>
              </div>
            </Motion>
          ))}
        </div>
        <Motion variant="up" delay={200}>
          <div className="text-center mt-10">
            <Link href="/learning-experiences" className="inline-block bg-primary text-foreground px-8 py-3 rounded-full hover:bg-sky-300 transition-colors font-semibold">
              Explore All Experiences
            </Link>
          </div>
        </Motion>
      </div>
    </section>
  )
}
