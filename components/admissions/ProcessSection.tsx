import { MdAssignment, MdHandshake, MdSchool, MdCelebration } from 'react-icons/md'
import type { IconType } from 'react-icons'
import { Motion } from '@/components/ui/motion'

interface Step { step: number; title: string; Icon: IconType; desc: string; color: string; iconColor: string }

const steps: Step[] = [
  { step: 1, title: 'Submit Enquiry',        Icon: MdAssignment,  desc: "Fill in our simple enquiry form with your child's details. Our team will get in touch within 24 hours.", color: 'bg-[#E8F7FB]',    iconColor: 'text-mascot-squarey-dark' },
  { step: 2, title: 'School Interaction',    Icon: MdHandshake,   desc: 'Meet our educators online or in person to learn about our programme, philosophy, and what to expect.',   color: 'bg-yellow-50',    iconColor: 'text-mascot-starry-dark'  },
  { step: 3, title: 'Campus Visit',          Icon: MdSchool,      desc: 'Bring your child for a guided visit so they can experience the Olo Kinder environment firsthand.',      color: 'bg-green-50',     iconColor: 'text-mascot-hexy-dark'    },
  { step: 4, title: 'Admission Confirmation',Icon: MdCelebration, desc: 'Complete the enrolment process and welcome your child to the Olo Kinder family!',                      color: 'bg-orange-50',    iconColor: 'text-mascot-roundy-dark'  },
]

export function ProcessSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-5xl mx-auto">
        <Motion variant="up">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Simple Admissions Process</h2>
            <p className="text-base sm:text-lg text-foreground/80">Four easy steps to join the Olo Kinder family.</p>
          </div>
        </Motion>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <Motion key={s.step} variant="up" delay={i * 100}>
              <div className={`${s.color} rounded-2xl p-6 sm:p-8 text-center hover:shadow-md transition-shadow h-full`}>
                <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center mx-auto mb-4 shadow-sm">
                  <s.Icon size={30} className={s.iconColor} />
                </div>
                <div className="text-xs font-bold text-foreground/65 uppercase tracking-wide mb-1">Step {s.step}</div>
                <h3 className="text-base sm:text-lg font-bold text-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-foreground/80 leading-relaxed">{s.desc}</p>
              </div>
            </Motion>
          ))}
        </div>
      </div>
    </section>
  )
}
