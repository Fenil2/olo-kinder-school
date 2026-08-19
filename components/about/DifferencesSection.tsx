import { MdAnimation, MdStars, MdNaturePeople, MdChildFriendly, MdJoinFull, MdSelfImprovement } from 'react-icons/md'
import type { IconType } from 'react-icons'
import { Motion } from '@/components/ui/motion'
import { Doodle } from '@/components/ui/doodle'

interface Difference { title: string; Icon: IconType; desc: string }

const differences: Difference[] = [
  // { title: 'Cartoon-Based Learning',  Icon: MdAnimation,       desc: 'Engaging animated characters and stories make learning irresistible for young minds.' },
  { title: 'Mascot-Driven Learning',  Icon: MdStars,           desc: 'Rolly, Squary, Starry, and Hexy guide every learning experience with personality and purpose.' },
  { title: 'Experiential Learning',   Icon: MdNaturePeople,    desc: 'Children learn by doing — touching, exploring, creating, and experiencing the world firsthand.' },
  { title: 'Child-Friendly Modules',  Icon: MdChildFriendly,   desc: 'Every lesson is designed with young children in mind — joyful, simple, and deeply engaging.' },
  { title: 'Integrated Curriculum',   Icon: MdJoinFull,        desc: 'Learning areas are woven together seamlessly so children develop holistically, not in isolation.' },
  { title: 'Holistic Development',    Icon: MdSelfImprovement, desc: 'We nurture intellectual, social, emotional, creative, and physical growth in equal measure.' },
]

export function DifferencesSection() {
  return (
    <section className="band-sun py-12 sm:py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <Doodle name="fox" className="bottom-6 left-8 w-20" opacity={85} flip />
      <div className="max-w-6xl mx-auto relative z-10">
        <Motion variant="up">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-heading">What Makes Olo Kinder Different</h2>
            <p className="text-base sm:text-lg text-foreground/90 max-w-xl mx-auto">A one-of-a-kind approach that puts children at the heart of everything we do.</p>
          </div>
        </Motion>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {differences.map((item, i) => (
            <Motion key={i} variant="up" delay={i * 80}>
              <div className="rounded-2xl p-6 sm:p-8 border border-border hover:border-primary hover:shadow-md transition-all h-full">
                <item.Icon size={40} className="text-primary mb-4" />
                <h3 className="text-lg sm:text-xl font-bold mb-3 text-heading">{item.title}</h3>
                <p className="text-foreground/90 leading-relaxed text-sm sm:text-base">{item.desc}</p>
              </div>
            </Motion>
          ))}
        </div>
      </div>
    </section>
  )
}
