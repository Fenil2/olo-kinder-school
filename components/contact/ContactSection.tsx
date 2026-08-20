import { MdMap, MdSend, MdSchedule } from 'react-icons/md'
import { Motion } from '@/components/ui/motion'
import { Wave } from '@/components/ui/wave'
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
              <Photo
                src="/images/playground-play.jpg"
                alt="Children playing on the lawn and playground outside the Olo Kinder campus building"
                className="w-full h-full"
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
              <form className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-1.5">Parent Name <span className="text-primary">*</span></label>
                    <input type="text" placeholder="Your full name" className="w-full px-4 py-3 rounded-xl border border-border bg-input text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-1.5">Child Name <span className="text-primary">*</span></label>
                    <input type="text" placeholder="Child's full name" className="w-full px-4 py-3 rounded-xl border border-border bg-input text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition" />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-1.5">Child&apos;s Age <span className="text-primary">*</span></label>
                    <input type="number" placeholder="Age in years" min="1" max="10" className="w-full px-4 py-3 rounded-xl border border-border bg-input text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-1.5">Phone <span className="text-primary">*</span></label>
                    <input type="tel" placeholder="Your phone number" className="w-full px-4 py-3 rounded-xl border border-border bg-input text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-1.5">Email <span className="text-primary">*</span></label>
                  <input type="email" placeholder="Your email address" className="w-full px-4 py-3 rounded-xl border border-border bg-input text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-1.5">How can we help?</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-border bg-input text-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition">
                    <option value="">Select a topic</option>
                    <option value="admissions">Admissions enquiry</option>
                    <option value="curriculum">Curriculum information</option>
                    <option value="visit">Schedule a campus visit</option>
                    <option value="fees">Fees and payment</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-1.5">Message</label>
                  <textarea placeholder="Tell us a bit about your child and what you'd like to know..." rows={4} className="w-full px-4 py-3 rounded-xl border border-border bg-input text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition resize-none" />
                </div>
                <button type="submit" className="w-full bg-accent text-accent-foreground py-3.5 rounded-full font-semibold hover:bg-accent-hover transition-colors text-base flex items-center justify-center gap-2">
                  <MdSend size={18} />
                  Send Message
                </button>
                <p className="text-xs text-foreground/80 text-center">We respect your privacy. Your details will only be used to contact you about your enquiry.</p>
              </form>
            </div>
          </div>
        </Motion>

      </div>

      <Wave className="text-surface-dark" />
    </section>
  )
}
