import Image from 'next/image'
import { Motion } from '@/components/ui/motion'
import { Doodle } from '@/components/ui/doodle'
import { Wave } from '@/components/ui/wave'

/**
 * This section keeps the illustrated character cards, deliberately — it is the
 * one place on the site that does NOT use `lib/mascots.ts`.
 *
 * Each card is a full scene with the character's name and role lettered into
 * the artwork, so it needs no caption underneath and no tinted disc behind it;
 * everywhere else uses the cut-out brand mascots, which do.
 */
const cards = [
  { name: 'Rolly',  role: 'Curious Explorer', img: '/rolly.png' },
  { name: 'Squary', role: 'Logical Thinker',  img: '/squary.png' },
  { name: 'Starry', role: 'Creative Dreamer', img: '/Starry.png' },
  { name: 'Hexy',   role: 'Problem Solver',   img: '/Hexy.png' },
]

export function MascotsSection() {
  return (
    <section className="band-cream pt-12 sm:pt-16 pb-24 sm:pb-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <Doodle name="cloud" className="top-10 right-8 w-28" opacity={70} />
      <Doodle name="butterfly" className="top-16 left-10 w-16" opacity={80} />
      <div className="max-w-7xl mx-auto relative z-10">
        <Motion variant="up">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-heading mb-4">Meet Your Child&apos;s First Learning Friends</h2>
            <p className="text-base sm:text-lg text-foreground/90 max-w-2xl mx-auto">
              Four unique mascots, each with their own personality and learning superpower, guide children through every step of the Olo Kinder journey.
            </p>
          </div>
        </Motion>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {cards.map((c, i) => (
            <Motion key={c.name} variant="scale" delay={i * 100}>
              <div className="flex flex-col items-center text-center group">
                <div className="relative w-full max-w-50 sm:max-w-60 mx-auto aspect-square mb-4 drop-shadow-lg group-hover:scale-105 transition-transform duration-300">
                  <Image
                    src={c.img}
                    alt={`${c.name}, the ${c.role} — one of the four Olo Kinder mascots`}
                    fill
                    sizes="(max-width: 1024px) 45vw, 240px"
                    className="object-contain"
                  />
                </div>
              </div>
            </Motion>
          ))}
        </div>
      </div>

      <Wave className="text-surface-sand" />
    </section>
  )
}
