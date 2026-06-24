import { MdSearch, MdEmojiEvents, MdPalette, MdVolunteerActivism } from 'react-icons/md'
import type { IconType } from 'react-icons'
import { Motion } from '@/components/ui/motion'

interface Value { label: string; Icon: IconType; color: string; bg: string }

const values: Value[] = [
  { label: 'Curious',        Icon: MdSearch,            color: 'text-mascot-squarey-dark', bg: 'bg-[#E8F7FB]' },
  { label: 'Confident',      Icon: MdEmojiEvents,       color: 'text-mascot-roundy-dark',  bg: 'bg-orange-50' },
  { label: 'Creative',       Icon: MdPalette,           color: 'text-mascot-starry-dark',  bg: 'bg-yellow-50' },
  { label: 'Compassionate',  Icon: MdVolunteerActivism, color: 'text-mascot-hexy-dark',    bg: 'bg-green-50'  },
]

export function WhoWeAreSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <Motion variant="left">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-foreground">Who We Are</h2>
              <p className="text-base sm:text-lg text-foreground/80 leading-relaxed mb-8">
                Olo Kinder is a unique early childhood learning initiative designed to nurture curious, confident, creative and compassionate young learners. We believe that the early years are the most critical period of a child&apos;s development, and we are committed to making those years joyful, meaningful, and enriching.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {values.map((v) => (
                  <div key={v.label} className={`${v.bg} rounded-2xl p-4 sm:p-5 flex items-center gap-3`}>
                    <v.Icon size={26} className={v.color} />
                    <span className={`font-bold text-sm sm:text-base ${v.color}`}>{v.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </Motion>
          <Motion variant="right">
            <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-4/3 w-full">
              <img
                src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&q=80"
                alt="Children at Olo Kinder"
                className="w-full h-full object-cover"
              />
            </div>
          </Motion>
        </div>
      </div>
    </section>
  )
}
