import { Motion } from '@/components/ui/motion'

export function AdmissionsCtaSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-accent">
      <div className="max-w-4xl mx-auto">
        <Motion variant="up">
          <div className="text-center text-white mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Join the Olo Kinder Family?</h2>
            <p className="text-base sm:text-xl opacity-90">Experience the difference for yourself. Enquire about admissions today.</p>
          </div>
        </Motion>
        <Motion variant="scale" delay={150}>
          <div className="bg-white rounded-3xl p-6 sm:p-8 md:p-12 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-6 text-center">Enquiry Form</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Parent Name</label>
                  <input type="text" placeholder="Your full name" className="w-full px-4 py-3 rounded-xl border border-border bg-muted/30 text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Child Name</label>
                  <input type="text" placeholder="Child's name" className="w-full px-4 py-3 rounded-xl border border-border bg-muted/30 text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition" />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Child&apos;s Age</label>
                  <input type="number" placeholder="Age in years" min="1" max="10" className="w-full px-4 py-3 rounded-xl border border-border bg-muted/30 text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Phone Number</label>
                  <input type="tel" placeholder="Your phone number" className="w-full px-4 py-3 rounded-xl border border-border bg-muted/30 text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Email Address</label>
                <input type="email" placeholder="Your email address" className="w-full px-4 py-3 rounded-xl border border-border bg-muted/30 text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition" />
              </div>
              <button type="submit" className="w-full bg-accent text-white py-3.5 rounded-full font-semibold hover:bg-orange-500 transition-colors mt-2">
                Submit Enquiry
              </button>
            </form>
          </div>
        </Motion>
      </div>
    </section>
  )
}
