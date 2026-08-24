import { MdFactCheck, MdSchool } from 'react-icons/md'
import type { IconType } from 'react-icons'
import { Motion } from '@/components/ui/motion'
import { Wave } from '@/components/ui/wave'
import { Photo } from '@/components/ui/photo'
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

/* Pinned by hand, not stamped: each card leans a different way, and hovering
   one straightens it. */
const TILTS = ['-rotate-2', 'rotate-1', '-rotate-1', 'rotate-2']

export function LearningPillarsSection() {
  return (
    <section className="pt-12 sm:pt-16 pb-20 sm:pb-28 px-4 sm:px-6 lg:px-8 band-sky relative overflow-hidden">
      <Doodle name="rolly" className="bottom-6 right-8 w-16" opacity={85} rotate={-8} />
      <Doodle name="hexy" className="top-10 left-8 w-16" rotate={8} />
      {/* The pillars run the full width; the note cards keep the narrower
          measure below, where a long line of body copy gets hard to read. */}
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 max-w-6xl mx-auto">
          {notes.map((note, i) => (
            <Motion key={i} variant="up" delay={i * 100}>
              <div className={`${note.iconBg} rounded-3xl p-6 sm:p-8 h-full flex gap-5`}>
                <div className={`surface-card w-14 h-14 rounded-2xl flex items-center justify-center shrink-0`}>
                  <note.Icon size={28} className={note.iconColor} />
                </div>
                <p className="text-foreground/90 leading-relaxed text-base sm:text-lg">{note.text}</p>
              </div>
            </Motion>
          ))}
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {pillars.map((pillar, i) => (
            <Motion key={pillar.label} variant="scale" delay={i * 80}>
              {/* The same polaroid the photo strips use, with the pillar's
                  name as the caption in the mat. Four of them in a row read
                  as a set of pinned-up snapshots. */}
              <figure
                className={`surface-card rounded-2xl p-3 pb-4 shadow-md h-full transition-transform duration-300 hover:rotate-0 hover:-translate-y-1 ${TILTS[i % TILTS.length]}`}
              >
                <Photo src={pillar.img} alt={pillar.alt} className="aspect-square w-full rounded-lg" />
                <figcaption className="pt-3 text-center">
                  <span
                    className={`${pillar.bar} text-white inline-block rounded-full px-5 py-1.5 text-sm font-bold uppercase tracking-wide`}
                  >
                    {pillar.label}
                  </span>
                </figcaption>
              </figure>
            </Motion>
          ))}
        </div>
      </div>

      <Wave className="text-background" />
    </section>
  )
}
