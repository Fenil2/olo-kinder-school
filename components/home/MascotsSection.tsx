import Image from 'next/image'
import { Motion } from '@/components/ui/motion'
import { Doodle } from '@/components/ui/doodle'

const mascots = [
  { name: 'Rolly', role: 'Curious Explorer', img: '/rolly.png', color: 'text-mascot-roundy-dark' },
  { name: 'Squary', role: 'Logical Thinker', img: '/squary.png', color: 'text-mascot-squarey-dark' },
  { name: 'Starry', role: 'Creative Dreamer', img: '/Hexy.png', color: 'text-mascot-starry-dark' },
  { name: 'Hexy', role: 'Problem Solver', img: '/Starry.png', color: 'text-mascot-hexy-dark' },
]

export function MascotsSection() {
  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <Doodle name="cloud" className="top-10 right-8 w-28" opacity={70} />
      <Doodle name="butterfly" className="top-16 left-10 w-16" opacity={80} />
      <div className="max-w-7xl mx-auto relative z-10">
        <Motion variant="up">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-heading mb-4">Meet Your Child&apos;s First Learning Friends</h2>
            <p className="text-base sm:text-lg text-foreground/80 max-w-2xl mx-auto">
              Four unique mascots, each with their own personality and learning superpower, guide children through every step of the Olo Kinder journey.
            </p>
          </div>
        </Motion>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {mascots.map((m, i) => (
            <Motion key={m.name} variant="scale" delay={i * 100}>
              <div className="flex flex-col items-center text-center group">
                <div className="relative w-full max-w-[200px] sm:max-w-[240px] mx-auto aspect-square mb-4 drop-shadow-lg group-hover:scale-105 transition-transform duration-300">
                  <Image src={m.img} alt={`${m.name} mascot`} fill className="object-contain" />
                </div>
              </div>
            </Motion>
          ))}
        </div>
      </div>
    </section>
  )
}
