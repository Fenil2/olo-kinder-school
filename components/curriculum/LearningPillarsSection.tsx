import { MdFactCheck, MdSchool } from 'react-icons/md'
import type { IconType } from 'react-icons'
import { Motion } from '@/components/ui/motion'
import { Doodle } from '@/components/ui/doodle'

interface Note {
  Icon: IconType
  iconColor: string
  iconBg: string
  text: string
}

const notes: Note[] = [
  {
    Icon: MdSchool,
    iconColor: 'text-mascot-roundy-dark',
    iconBg: 'bg-mascot-roundy/15',
    text: 'Trained educators design each day to balance structured learning with open-ended play, ensuring a safe, inclusive setting where every child can thrive.',
  },
  {
    Icon: MdFactCheck,
    iconColor: 'text-mascot-squarey-dark',
    iconBg: 'bg-mascot-squarey/15',
    text: 'We also integrate playful assessments and ongoing observation to celebrate progress and tailor activities to individual needs.',
  },
]

const pillars = [
  { label: 'Explore', bar: 'bg-mascot-roundy-dark',  img: '/images/art-and-coloring.jpg',    alt: 'A child drawing and colouring at an Olo Kinder table' },
  { label: 'Discover', bar: 'bg-mascot-hexy-dark',   img: '/images/nature-discovery.jpg',    alt: 'A child examining a plant closely during a nature activity' },
  { label: 'Create', bar: 'bg-mascot-squarey-dark',  img: '/images/music-and-movement.jpg',  alt: 'A child playing a musical instrument during a music session' },
  { label: 'Grow', bar: 'bg-mascot-starry-dark',     img: '/images/outdoor-sports.jpg',      alt: 'Children playing an outdoor ball game together' },
]

export function LearningPillarsSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      <Doodle name="fox" className="bottom-6 right-8 w-20" opacity={85} />
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {notes.map((note, i) => (
            <Motion key={i} variant="up" delay={i * 100}>
              <div className={`${note.iconBg} rounded-3xl p-6 sm:p-8 h-full flex gap-5`}>
                <div className={`bg-white w-14 h-14 rounded-2xl flex items-center justify-center shrink-0`}>
                  <note.Icon size={28} className={note.iconColor} />
                </div>
                <p className="text-foreground/80 leading-relaxed text-base sm:text-lg">{note.text}</p>
              </div>
            </Motion>
          ))}
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {pillars.map((pillar, i) => (
            <Motion key={pillar.label} variant="scale" delay={i * 80}>
              <div className="rounded-2xl overflow-hidden border border-border shadow-sm h-full">
                <div className="aspect-4/3 overflow-hidden">
                  <img src={pillar.img} alt={pillar.alt} loading="lazy" className="w-full h-full object-cover" />
                </div>
                <div className={`${pillar.bar} text-white text-center text-sm font-bold uppercase tracking-wide py-2.5`}>
                  {pillar.label}
                </div>
              </div>
            </Motion>
          ))}
        </div>
      </div>
    </section>
  )
}
