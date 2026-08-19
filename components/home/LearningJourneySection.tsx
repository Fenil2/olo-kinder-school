import { Motion } from '@/components/ui/motion'
import { Doodle } from '@/components/ui/doodle'

const journey = [
  // textColor is paired to the fill's luminance: light fills take slate ink,
  // the teal and slate fills take off-white.
  { step: 1, word: 'Explore',      desc: 'Children freely discover their environment and interests.',      color: 'bg-mascot-squarey', textColor: 'text-white' },
  { step: 2, word: 'Discover',     desc: 'Guided discovery deepens understanding through play.',           color: 'bg-mascot-starry',  textColor: 'text-foreground' },
  { step: 3, word: 'Learn',        desc: 'Concepts are introduced in child-friendly, meaningful ways.',   color: 'bg-mascot-hexy',    textColor: 'text-white' },
  { step: 4, word: 'Create',       desc: 'Children express what they know through art and making.',       color: 'bg-mascot-roundy',  textColor: 'text-foreground' },
  { step: 5, word: 'Communicate',  desc: 'Sharing ideas builds confidence and language skills.',          color: 'bg-primary',        textColor: 'text-primary-foreground' },
  { step: 6, word: 'Grow',         desc: 'Skills and confidence develop across all learning areas.',      color: 'bg-highlight',      textColor: 'text-foreground' },
]

export function LearningJourneySection() {
  return (
    <section className="band-pale py-12 sm:py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <Doodle name="leaf2" className="top-10 left-10 w-14" rotate={15} opacity={70} />
      <div className="max-w-5xl mx-auto relative z-10">
        <Motion variant="up">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-heading mb-4">Our Learning Journey</h2>
            <p className="text-base sm:text-lg text-foreground/80">Six purposeful stages that guide every child from curiosity to confidence.</p>
          </div>
        </Motion>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {journey.map((j, i) => (
            <Motion key={j.step} variant="scale" delay={i * 100}>
              <div className="flex flex-col items-center text-center">
                <div className={`${j.color} w-14 h-14 rounded-full flex items-center justify-center ${j.textColor} font-bold text-xl mb-3 shadow-sm`}>
                  {j.step}
                </div>
                <h3 className="font-bold text-heading text-sm sm:text-base mb-1">{j.word}</h3>
                <p className="text-xs text-foreground/75 leading-snug">{j.desc}</p>
              </div>
            </Motion>
          ))}
        </div>
      </div>
    </section>
  )
}
