import { Motion } from '@/components/ui/motion'
import { Wave } from '@/components/ui/wave'
import { LeadForm } from '@/components/forms/LeadForm'

export function AdmissionsCtaSection() {
  return (
    <section className="pt-12 sm:pt-16 pb-24 sm:pb-32 px-4 sm:px-6 lg:px-8 band-plum relative overflow-hidden">
      {/* The cast flanks the enquiry card rather than standing along the
          bottom edge, which the scalloped wave already occupies. */}
      <img
        src="/images/mascots/rolly.webp"
        alt=""
        aria-hidden="true"
        className="pointer-events-none select-none absolute z-0 left-4 xl:left-16 top-1/3 w-12 sm:w-20 xl:w-28 -rotate-6 drop-shadow-md"
      />
      <img
        src="/images/mascots/squary.webp"
        alt=""
        aria-hidden="true"
        className="pointer-events-none select-none absolute z-0 left-8 xl:left-24 bottom-28 w-10 sm:w-16 xl:w-20 rotate-6 drop-shadow-md hidden sm:block"
      />
      <img
        src="/images/mascots/starry.webp"
        alt=""
        aria-hidden="true"
        className="pointer-events-none select-none absolute z-0 right-8 xl:right-24 bottom-28 w-10 sm:w-16 xl:w-20 -rotate-6 drop-shadow-md hidden sm:block"
      />
      <img
        src="/images/mascots/hexy.webp"
        alt=""
        aria-hidden="true"
        className="pointer-events-none select-none absolute z-0 right-4 xl:right-16 top-1/3 w-12 sm:w-20 xl:w-28 rotate-6 drop-shadow-md"
      />

      <div className="relative z-10 max-w-4xl mx-auto">
        <Motion variant="up">
          <div className="text-center text-foreground mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Join the Olo Kinder Family?</h2>
            <p className="text-base sm:text-xl opacity-90">Experience the difference for yourself. Admissions are open now.</p>
          </div>
        </Motion>
        <Motion variant="scale" delay={150}>
          <div className="surface-card rounded-3xl p-6 sm:p-8 md:p-12 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold text-heading mb-6 text-center">Enquiry Form</h3>
            <LeadForm source="HOME" variant="home" submitLabel="Admissions Open Now" />
          </div>
        </Motion>
      </div>

      <Wave className="text-background" />
    </section>
  )
}
