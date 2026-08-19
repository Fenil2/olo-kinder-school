import { MdPhone, MdLocationOn } from 'react-icons/md'
import { Motion } from '@/components/ui/motion'
import { PageHero } from '@/components/ui/page-hero'

const details = [
  { icon: MdLocationOn, bg: 'bg-mascot-squarey/15', color: 'text-mascot-squarey-dark', label: 'Address', value: '1470 B, Kathiravan Colony Main Road, Anna Nagar West, Chennai - 600040' },
  { icon: MdPhone,      bg: 'bg-mascot-roundy/15',  color: 'text-mascot-roundy-dark',  label: 'Phone',   value: '98406 04197' },
]

export function HeroSection() {
  return (
    <>
      <PageHero
        eyebrow="Get in Touch"
        title="We'd Love to"
        titleAccent="Hear From You"
        subtitle="Reach out to learn more about Olo Kinder, our curriculum, or to schedule a campus visit. Our team is happy to help."
      />

      <section className="px-4 sm:px-6 lg:px-8 py-8 band-white">
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-5">
          {details.map((item, i) => (
            <Motion key={item.label} variant="up" delay={i * 100}>
              <div className="surface-card rounded-2xl p-5 sm:p-6 flex items-center gap-4 shadow-sm border border-border h-full">
                <div className={`w-14 h-14 ${item.bg} rounded-xl flex items-center justify-center shrink-0`}>
                  <item.icon size={26} className={item.color} />
                </div>
                <div>
                  <p className="text-xs font-bold text-foreground/60 uppercase tracking-wide mb-0.5">{item.label}</p>
                  <p className="text-foreground font-medium text-base">{item.value}</p>
                </div>
              </div>
            </Motion>
          ))}
        </div>
      </section>
    </>
  )
}
