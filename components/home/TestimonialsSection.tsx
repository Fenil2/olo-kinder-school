import { MdFormatQuote } from 'react-icons/md'
import { Motion } from '@/components/ui/motion'
import { Doodle } from '@/components/ui/doodle'
import { Wave } from '@/components/ui/wave'

const testimonials = [
  {
    quote: 'Olo Kinder has transformed how my child sees learning. She wakes up excited every morning!',
    name: 'Parent',
    role: 'Mother of a 4-year-old',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=80',
  },
  {
    quote: 'The mascots make learning so engaging. My son talks about Rolly and Squary all day long.',
    name: 'Parent',
    role: 'Father of a 5-year-old',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80',
  },
  {
    quote: "The holistic approach here is unlike anything I've seen. My daughter has grown so much in confidence.",
    name: 'Parent',
    role: 'Mother of a 3-year-old',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80',
  },
]

export function TestimonialsSection() {
  return (
    <section className="pt-12 sm:pt-16 pb-24 sm:pb-32 px-4 sm:px-6 lg:px-8 band-green relative overflow-hidden">
      <Doodle name="snail" className="bottom-8 right-10 w-28" opacity={60} />
      <Doodle name="rolly" className="top-10 left-8 w-16" rotate={10} />
      <div className="max-w-6xl mx-auto relative z-10">
        <Motion variant="up">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-heading mb-4">What Parents Say</h2>
            {/* Full-opacity ink: #2A9D8F is the one palette colour that cannot
                reach AA for body copy, so don't spend any of it on opacity. */}
            <p className="text-lg sm:text-xl font-semibold text-foreground">Hear from the families who have experienced the Olo Kinder difference.</p>
          </div>
        </Motion>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <Motion key={i} variant="up" delay={i * 100}>
              <div className="surface-card rounded-2xl p-6 sm:p-8 border border-border h-full flex flex-col">
                <MdFormatQuote size={40} className="text-primary mb-4 shrink-0" />
                <p className="text-foreground/90 leading-relaxed mb-6 italic flex-1">{t.quote}</p>
                <div className="flex items-center gap-3">
                  <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground text-sm">{t.name}</p>
                    <p className="text-xs text-foreground/90">{t.role}</p>
                  </div>
                </div>
              </div>
            </Motion>
          ))}
        </div>
      </div>

      <Wave className="text-surface-dark" />
    </section>
  )
}
