import Image from 'next/image'
import { Motion } from '@/components/ui/motion'
import { Doodle } from '@/components/ui/doodle'
import { Wave } from '@/components/ui/wave'

/* The four mascots are the thread that runs through every module — they are
   the characters on each course-book cover, so the page introduces them
   before the modules rather than leaving them as artwork nobody names. */
const guides = [
  { img: '/rolly.png',  alt: 'Rolly the Curious Explorer mascot',  ring: 'ring-mascot-roundy' },
  { img: '/squary.png', alt: 'Squary the Logical Thinker mascot',  ring: 'ring-mascot-squarey' },
  { img: '/Hexy.png',   alt: 'Hexy the Problem Solver mascot',     ring: 'ring-mascot-hexy' },
  { img: '/Starry.png', alt: 'Starry the Creative Dreamer mascot', ring: 'ring-mascot-starry' },
]

export function MascotGuidesSection() {
  return (
    <section className="band-cream pt-10 sm:pt-14 pb-20 sm:pb-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <Doodle name="cloud" className="top-8 left-8 w-24" opacity={65} />
      <Doodle name="butterfly" className="top-12 right-12 w-14" opacity={80} flip />

      <div className="max-w-5xl mx-auto relative z-10">
        <Motion variant="up">
          <div className="text-center mb-8 sm:mb-10">
            <span className="inline-block bg-mascot-starry/25 text-mascot-starry-dark text-sm font-bold uppercase tracking-wide px-4 py-1.5 rounded-full mb-4">
              Your child&apos;s guides
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-heading mb-3">
              Rolly, Squary, Hexy and Starry lead every module
            </h2>
            <p className="text-base sm:text-lg text-foreground/90 max-w-2xl mx-auto">
              The same four friends appear on every course book and storybook, so each new theme feels
              like the next chapter of an adventure children already know.
            </p>
          </div>
        </Motion>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {guides.map((g, i) => (
            <Motion key={g.img} variant="scale" delay={i * 90}>
              <div
                className={`relative aspect-square rounded-3xl overflow-hidden ring-4 ${g.ring} shadow-md hover:scale-105 transition-transform duration-300`}
              >
                <Image src={g.img} alt={g.alt} fill sizes="(max-width: 1024px) 45vw, 22vw" className="object-cover" />
              </div>
            </Motion>
          ))}
        </div>
      </div>

      <Wave variant="hill" className="text-surface-sky" />
    </section>
  )
}
