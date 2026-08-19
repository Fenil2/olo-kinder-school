import Link from 'next/link'
import { MdMap, MdLocationOn, MdPhone, MdSchedule } from 'react-icons/md'
import { Motion } from '@/components/ui/motion'
import { Doodle } from '@/components/ui/doodle'
import { Wave } from '@/components/ui/wave'

const address = '1470 B, Kathiravan Colony Main Road, Anna Nagar West, Chennai - 600040'
const mapQuery = encodeURIComponent(address)
const PHONE = '98406 04197'
const PHONE_HREF = 'tel:+919840604197'

const details = [
  { Icon: MdLocationOn, bg: 'bg-surface-sky', color: 'text-mascot-squarey-dark', label: 'Address', value: address },
  { Icon: MdPhone,      bg: 'bg-mascot-roundy/15',  color: 'text-mascot-roundy-dark',  label: 'Phone',   value: PHONE, href: PHONE_HREF },
  { Icon: MdSchedule,   bg: 'bg-surface-leaf',  color: 'text-mascot-hexy-dark',    label: 'Timings', value: 'Pre KG & JKG: 9:00 AM - 12:00 Noon | SKG: 9:00 AM - 1:00 PM' },
]

export function MapSection() {
  return (
    <section className="pt-12 sm:pt-16 pb-24 sm:pb-32 px-4 sm:px-6 lg:px-8 band-cream relative overflow-hidden">
      <Doodle name="leaf1" className="top-10 right-10 w-14" rotate={-15} opacity={70} />
      <div className="max-w-7xl mx-auto relative z-10">
        <Motion variant="up">
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-heading mb-4">Visit Our Campus</h2>
            <p className="text-base sm:text-lg text-foreground/90 max-w-2xl mx-auto text-pretty">
              We are right in the heart of Anna Nagar West, Chennai. Drop by for a campus tour and see the Olo Kinder experience for yourself.
            </p>
          </div>
        </Motion>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          <Motion variant="left" className="lg:col-span-2">
            <div className="relative rounded-3xl overflow-hidden h-72 sm:h-96 lg:h-full min-h-72 border border-border shadow-sm bg-surface-sky">
              <iframe
                src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
                title="Olo Kinder location map"
                className="absolute inset-0 h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Motion>

          <Motion variant="right" delay={150}>
            <div className="surface-card rounded-3xl p-6 sm:p-8 border border-border h-full flex flex-col">
              <h3 className="text-xl font-bold text-heading mb-6">Olo Kinder</h3>
              <ul className="space-y-5 flex-1">
                {details.map((d) => (
                  <li key={d.label} className="flex gap-4">
                    <span className={`${d.bg} ${d.color} shrink-0 w-11 h-11 rounded-xl flex items-center justify-center`}>
                      <d.Icon size={22} />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-foreground">{d.label}</p>
                      {d.href ? (
                        <a href={d.href} className="text-sm text-foreground/90 leading-relaxed hover:text-primary transition-colors">
                          {d.value}
                        </a>
                      ) : (
                        <p className="text-sm text-foreground/90 leading-relaxed">{d.value}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row lg:flex-col gap-3 mt-8">
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent-hover"
                >
                  <MdMap size={18} />
                  Get Directions
                </a>
                <Link
                  href="/contact#enquiry"
                  className="inline-flex items-center justify-center rounded-full border-2 border-foreground/20 px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </Motion>
        </div>
      </div>

      <Wave variant="hill" className="text-surface-dark" />
    </section>
  )
}
