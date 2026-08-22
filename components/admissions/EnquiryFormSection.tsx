import { Motion } from '@/components/ui/motion'
import { Wave } from '@/components/ui/wave'
import { Doodle } from '@/components/ui/doodle'
import { LeadForm } from '@/components/forms/LeadForm'

export function EnquiryFormSection() {
  return (
    <section id="enquiry" className="scroll-mt-20 pt-12 sm:pt-16 pb-20 sm:pb-28 px-4 sm:px-6 lg:px-8 band-sky relative overflow-hidden">
      <Doodle name="treeGreen" className="bottom-0 left-6 w-24" opacity={70} />
      <Doodle name="starry" className="top-10 right-10 w-16" rotate={12} />
      <div className="max-w-2xl mx-auto relative z-10">
        <Motion variant="up">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-heading mb-4">Submit Your Enquiry</h2>
            <p className="text-base sm:text-lg text-foreground/90">Fill in the form below and our admissions team will be in touch shortly.</p>
          </div>
        </Motion>
        <Motion variant="scale" delay={100}>
          <div className="surface-card rounded-3xl p-6 sm:p-8 md:p-12 shadow-sm">
            <LeadForm
              source="ADMISSIONS"
              variant="admissions"
              markRequired
              submitLabel="Admissions Open Now"
              note="We respect your privacy. Your details will only be used to contact you about admissions."
            />
          </div>
        </Motion>
      </div>

      <Wave className="text-surface-dark" />
    </section>
  )
}
