import { MdAutoAwesome, MdTrackChanges } from 'react-icons/md'
import { Motion } from '@/components/ui/motion'
import { Wave } from '@/components/ui/wave'
import { Doodle } from '@/components/ui/doodle'

export function VisionMissionSection() {
  return (
    <section className="pt-12 sm:pt-16 pb-20 sm:pb-28 px-4 sm:px-6 lg:px-8 band-sky relative overflow-hidden">
      <Doodle name="cloud" className="top-8 left-8 w-28" opacity={70} />
      <Doodle name="hexy" className="bottom-8 right-10 w-16" rotate={9} />
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <Motion variant="left" delay={0}>
            <div className="surface-card rounded-3xl p-8 sm:p-10 border-t-4 border-primary h-full">
              <MdAutoAwesome size={44} className="text-primary mb-4" />
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-heading">Our Vision</h2>
              <p className="text-base sm:text-lg text-foreground/90 leading-relaxed">
                Olo Kinder envisages nurturing a generation of confident, compassionate, and curious learners in a safe, inclusive, and inspiring learning ambience, where the innate potential of every child is celebrated.
              </p>
            </div>
          </Motion>
          <Motion variant="right" delay={100}>
            <div className="surface-card rounded-3xl p-8 sm:p-10 border-t-4 border-primary h-full">
              <MdTrackChanges size={44} className="text-primary mb-4" />
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-heading">Our Mission</h2>
              <p className="text-base sm:text-lg text-foreground/90 leading-relaxed">
                To provide a joyful, child-centric learning experience that blends creativity, literacy, numeracy, values and real-world experiences.
              </p>
            </div>
          </Motion>
        </div>
      </div>

      <Wave className="text-background" />
    </section>
  )
}
