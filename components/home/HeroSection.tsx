import Link from 'next/link'
import { Motion } from '@/components/ui/motion'

const mascots = [
  { name: 'Roundy', role: 'Curious Explorer', color: 'text-mascot-roundy-dark', bg: 'bg-orange-50' },
  { name: 'Squarey', role: 'Logical Thinker', color: 'text-mascot-squarey-dark', bg: 'bg-sky-50' },
  { name: 'Starry', role: 'Creative Dreamer', color: 'text-mascot-starry-dark', bg: 'bg-yellow-50' },
  { name: 'Hexy', role: 'Problem Solver', color: 'text-mascot-hexy-dark', bg: 'bg-green-50' },
]

export function HeroSection() {
  return (
    <section className="min-h-[calc(100vh-5rem)] flex items-center px-4 sm:px-6 lg:px-8 bg-linear-to-br from-[#FFFDF8] via-[#E8F7FB] to-[#EFF8E0] py-16">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 items-center">

          <div className="space-y-7 text-center lg:text-left">
            <Motion variant="down" delay={0}>
              <span className="inline-block bg-highlight/30 text-foreground text-sm font-semibold px-4 py-1.5 rounded-full">
                Welcome to Olo Kinder
              </span>
            </Motion>
            <Motion variant="up" delay={100}>
              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-bold text-foreground leading-tight text-pretty">
                Where Curiosity Begins and{' '}
                <span className="text-accent">Learning Comes Alive</span>
              </h1>
            </Motion>
            <Motion variant="up" delay={200}>
              <p className="text-base sm:text-lg text-foreground/75 leading-relaxed text-pretty max-w-xl mx-auto lg:mx-0">
                At Olo Kinder, children embark on a joyful learning journey guided by Roundy, Squarey, Starry, and Hexy. Through play, exploration, creativity, and discovery, every child develops the confidence and skills needed for the future.
              </p>
            </Motion>
            <Motion variant="up" delay={300}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
                <Link href="/admissions" className="bg-accent text-white px-8 py-3.5 rounded-full hover:bg-orange-500 transition-colors font-semibold text-center shadow-sm">
                  Admission Open Soon
                </Link>
                <Link href="/about" className="border-2 border-foreground/30 text-foreground px-8 py-3.5 rounded-full hover:border-accent hover:text-accent transition-colors font-semibold text-center">
                  Explore Olo Kinder
                </Link>
              </div>
            </Motion>
          </div>

          <Motion variant="scale" delay={150} className="w-full">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-4/3 sm:aspect-3/2 lg:aspect-4/3">
              <img
                src="/images/hero-school-entrance.jpg"
                alt="Olo Kinder children running happily towards the school entrance"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex gap-2 justify-center flex-wrap">
                {mascots.map((m) => (
                  <span key={m.name} className={`${m.bg} ${m.color} text-xs font-bold px-3 py-1 rounded-full shadow-sm`}>
                    {m.name} · {m.role}
                  </span>
                ))}
              </div>
            </div>
          </Motion>

        </div>
      </div>
    </section>
  )
}
