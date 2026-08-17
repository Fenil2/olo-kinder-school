import { MdForum, MdMenuBook } from 'react-icons/md'
import type { IconType } from 'react-icons'
import { Motion } from '@/components/ui/motion'
import { Doodle } from '@/components/ui/doodle'

interface Point {
  Icon: IconType
  iconColor: string
  iconBg: string
  accent: string
  text: string
}

const points: Point[] = [
  {
    Icon: MdMenuBook,
    iconColor: 'text-mascot-roundy-dark',
    iconBg: 'bg-mascot-roundy/15',
    accent: 'border-t-mascot-roundy',
    text: 'Our curriculum emphasizes listening, speaking, music, vocabulary growth, and expressive language through interactive read-aloud sessions, group conversations, musical activities, dramatic play, and language-rich environments.',
  },
  {
    Icon: MdForum,
    iconColor: 'text-mascot-hexy-dark',
    iconBg: 'bg-mascot-hexy/15',
    accent: 'border-t-mascot-hexy',
    text: 'Focus on the development of early communication skills through storytelling and collaborative activities that build confidence in expressing ideas and understanding others.',
  },
]

export function CoreFocusSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      <Doodle name="butterfly" className="top-10 left-8 w-16" opacity={80} />
      <Doodle name="leaf2" className="bottom-8 right-10 w-14" rotate={-20} opacity={70} />
      <div className="max-w-5xl mx-auto relative z-10">
        <Motion variant="down">
          <div className="text-center">
            <span className="inline-block bg-accent text-accent-foreground text-xs sm:text-sm font-bold uppercase tracking-wide px-5 py-2 rounded-full mb-5">
              Our Central Approach (Core Focus)
            </span>
          </div>
        </Motion>

        <Motion variant="up" delay={100}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 leading-tight text-heading">
            Every Child is a <span className="text-mascot-squarey-dark">Good Communicator</span>
          </h2>
        </Motion>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {points.map((point, i) => (
            <Motion key={i} variant="up" delay={i * 100}>
              <div className={`${point.iconBg} rounded-3xl border-t-4 ${point.accent} p-6 sm:p-8 h-full`}>
                <div className={`bg-white w-14 h-14 rounded-2xl flex items-center justify-center mb-5`}>
                  <point.Icon size={28} className={point.iconColor} />
                </div>
                <p className="text-foreground/80 leading-relaxed text-base sm:text-lg">{point.text}</p>
              </div>
            </Motion>
          ))}
        </div>
      </div>
    </section>
  )
}
