import { Motion } from '@/components/ui/motion'
import { Doodle } from '@/components/ui/doodle'

export function EnquiryFormSection() {
  return (
    <section id="enquiry" className="scroll-mt-20 py-12 sm:py-16 px-4 sm:px-6 lg:px-8 band-pale relative overflow-hidden">
      <Doodle name="treeGreen" className="bottom-0 left-6 w-24" opacity={70} />
      <div className="max-w-2xl mx-auto relative z-10">
        <Motion variant="up">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-heading mb-4">Submit Your Enquiry</h2>
            <p className="text-base sm:text-lg text-foreground/80">Fill in the form below and our admissions team will be in touch shortly.</p>
          </div>
        </Motion>
        <Motion variant="scale" delay={100}>
          <div className="surface-card rounded-3xl p-6 sm:p-8 md:p-12 shadow-sm">
            <form className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-foreground mb-1.5">Parent Name <span className="text-primary">*</span></label>
                <input type="text" placeholder="Your full name" className="w-full px-4 py-3 rounded-xl border border-border bg-muted/20 text-foreground placeholder:text-foreground/35 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-foreground mb-1.5">Child Name <span className="text-primary">*</span></label>
                <input type="text" placeholder="Child's full name" className="w-full px-4 py-3 rounded-xl border border-border bg-muted/20 text-foreground placeholder:text-foreground/35 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-1.5">Child&apos;s Age <span className="text-primary">*</span></label>
                  <input type="number" placeholder="Age in years" min="1" max="10" className="w-full px-4 py-3 rounded-xl border border-border bg-muted/20 text-foreground placeholder:text-foreground/35 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-1.5">Phone Number <span className="text-primary">*</span></label>
                  <input type="tel" placeholder="Your phone number" className="w-full px-4 py-3 rounded-xl border border-border bg-muted/20 text-foreground placeholder:text-foreground/35 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-foreground mb-1.5">Email Address <span className="text-primary">*</span></label>
                <input type="email" placeholder="Your email address" className="w-full px-4 py-3 rounded-xl border border-border bg-muted/20 text-foreground placeholder:text-foreground/35 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition" />
              </div>
              <button type="submit" className="w-full bg-accent text-accent-foreground py-3.5 rounded-full font-semibold hover:bg-accent-hover transition-colors text-base mt-2">
                Admissions Open Now
              </button>
              <p className="text-xs text-foreground/65 text-center">We respect your privacy. Your details will only be used to contact you about admissions.</p>
            </form>
          </div>
        </Motion>
      </div>
    </section>
  )
}
