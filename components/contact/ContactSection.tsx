import { MdMap, MdSchedule } from 'react-icons/md'
import { Motion } from '@/components/ui/motion'
import { Wave } from '@/components/ui/wave'
import { LeadForm } from '@/components/forms/LeadForm'
import { Photo } from '@/components/ui/photo'
import { Doodle } from '@/components/ui/doodle'

const address = '1470 B, Kathiravan Colony Main Road, Anna Nagar West, Chennai - 600040'
const mapQuery = encodeURIComponent(address)

const hours = [
  { day: 'Pre KG & JKG', time: '9:00 AM - 12:00 Noon' },
  { day: 'SKG',          time: '9:00 AM - 1:00 PM'    },
]

export function ContactSection() {
  return (
    <section id="enquiry" className="scroll-mt-20 pt-12 sm:pt-16 pb-20 sm:pb-28 px-4 sm:px-6 lg:px-8 band-sky relative overflow-hidden">
      <Doodle name="cloud" className="top-8 right-10 w-28" opacity={70} />
      <Doodle name="snail" className="bottom-8 left-10 w-28" opacity={60} flip />
      <Doodle name="rolly" className="bottom-10 right-10 w-16" rotate={-10} />
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 relative z-10">

        <div className="space-y-8">
          <Motion variant="left">
            <div>
              <h2 className="text-2xl font-bold text-heading mb-5">Find Us</h2>
              <div className="relative rounded-2xl overflow-hidden h-64 sm:h-80 border border-border shadow-sm bg-surface-sky">
                <iframe
                  src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
                  title="Olo Kinder location map"
                  className="absolute inset-0 h-full w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <div className="absolute left-4 right-4 bottom-4 rounded-xl bg-card/95 p-4 shadow-sm backdrop-blur">
                  <p className="text-foreground font-semibold text-sm">Olo Kinder</p>
                  <p className="text-foreground/85 text-xs leading-relaxed mt-1">{address}</p>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-xs font-semibold text-accent-foreground transition-colors hover:bg-accent-hover"
                  >
                    <MdMap size={16} />
                    Open in Google Maps
                  </a>
                </div>
              </div>
            </div>
          </Motion>

          <Motion variant="left" delay={100}>
            <div className="relative rounded-2xl overflow-hidden h-48 sm:h-52">
              {/* Lifted a stop: this frame is a third darker than the rest of
                  the library, and the label's gradient sits on top of it. */}
              <Photo
                src="/images/hero-learning.jpg"
                alt="Olo Kinder children making leaf and flower collages together on the school lawn"
                className="w-full h-full"
                imgClassName="brightness-[1.2] saturate-[1.1]"
              />
              <div className="absolute inset-0 bg-linear-to-t from-foreground/40 to-transparent" />
              <p className="absolute bottom-4 left-4 text-white font-semibold text-sm">Olo Kinder Campus</p>
            </div>
          </Motion>

          <Motion variant="left" delay={200}>
            <div className="bg-muted rounded-2xl p-5 sm:p-6">
              <div className="flex items-center gap-2 mb-4">
                <MdSchedule size={22} className="text-primary" />
                <h3 className="font-bold text-heading text-base">Class Timings</h3>
              </div>
              <ul className="space-y-3">
                {hours.map((h) => (
                  <li key={h.day} className="flex justify-between items-center text-sm">
                    <span className="text-foreground/90 font-semibold">{h.day}</span>
                    <span className="font-semibold text-mascot-hexy-dark">{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Motion>
        </div>

        <Motion variant="right">
          <div>
            <h2 className="text-2xl font-bold text-heading mb-2">Send Us a Message</h2>
            <p className="text-foreground/90 mb-6 text-sm leading-relaxed">
              Fill in the form below and our admissions team will respond within 24 hours.
            </p>
            <div className="surface-card rounded-3xl p-6 sm:p-8 border border-border">
              <LeadForm
                source="CONTACT"
                variant="contact"
                markRequired
                withMessage
                submitLabel="Send Message"
                note="We respect your privacy. Your details will only be used to contact you about your enquiry."
              />
            </div>
          </div>
        </Motion>

      </div>

      <Wave className="text-surface-dark" />
    </section>
  )
}
