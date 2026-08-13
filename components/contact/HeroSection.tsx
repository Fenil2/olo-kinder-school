import { MdPhone, MdLocationOn } from 'react-icons/md'
import { Motion } from '@/components/ui/motion'

export function HeroSection() {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-background via-surface-sky to-surface-leaf">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-5 text-center md:text-left">
            <Motion variant="down">
              <span className="inline-block bg-accent/15 text-accent text-sm font-semibold px-4 py-1.5 rounded-full">Get in Touch</span>
            </Motion>
            <Motion variant="up" delay={100}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-heading leading-tight">
                We&apos;d Love to{' '}
                <span className="text-accent">Hear From You</span>
              </h1>
            </Motion>
            <Motion variant="up" delay={200}>
              <p className="text-base sm:text-lg text-foreground/80 leading-relaxed max-w-lg mx-auto md:mx-0">
                Reach out to learn more about Olo Kinder, our curriculum, or to schedule a campus visit. Our team is happy to help.
              </p>
            </Motion>
          </div>

          <div className="flex flex-col gap-4">
            {[
              { icon: MdLocationOn, bg: 'bg-surface-sky', color: 'text-mascot-squarey-dark', label: 'Address', value: '1470 B, Kathiravan Colony Main Road, Anna Nagar West, Chennai - 600040' },
              { icon: MdPhone,      bg: 'bg-mascot-roundy/15',  color: 'text-mascot-roundy-dark',  label: 'Phone',   value: '98406 04197' },
            ].map((item, i) => (
              <Motion key={item.label} variant="right" delay={i * 100}>
                <div className="bg-card rounded-2xl p-4 sm:p-5 flex items-center gap-4 shadow-sm border border-border">
                  <div className={`w-12 h-12 ${item.bg} rounded-xl flex items-center justify-center shrink-0`}>
                    <item.icon size={24} className={item.color} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-foreground/60 uppercase tracking-wide">{item.label}</p>
                    <p className="text-foreground font-medium text-sm">{item.value}</p>
                  </div>
                </div>
              </Motion>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
