import { MdAutoAwesome, MdTrackChanges } from 'react-icons/md'
import { Motion } from '@/components/ui/motion'

export function VisionMissionSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F0EDF5]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <Motion variant="left" delay={0}>
            <div className="bg-white rounded-3xl p-8 sm:p-10 border-t-4 border-primary h-full">
              <MdAutoAwesome size={44} className="text-primary mb-4" />
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-foreground">Our Vision</h2>
              <p className="text-base sm:text-lg text-foreground/75 leading-relaxed">
                To create lifelong learners who explore, discover, communicate and grow with confidence.
              </p>
            </div>
          </Motion>
          <Motion variant="right" delay={100}>
            <div className="bg-white rounded-3xl p-8 sm:p-10 border-t-4 border-accent h-full">
              <MdTrackChanges size={44} className="text-accent mb-4" />
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-foreground">Our Mission</h2>
              <p className="text-base sm:text-lg text-foreground/75 leading-relaxed">
                To provide a joyful, child-centric learning experience that blends creativity, literacy, numeracy, values and real-world experiences.
              </p>
            </div>
          </Motion>
        </div>
      </div>
    </section>
  )
}
