import Link from 'next/link'
import { Motion } from '@/components/ui/motion'
import { CtaMascots } from '@/components/ui/cta-mascots'

export function CtaSection() {
  return (
    <section className="relative overflow-hidden py-12 sm:py-16 px-4 sm:px-6 lg:px-8 band-plum">
      <CtaMascots />
      <Motion variant="up">
        <div className="relative z-10 max-w-4xl mx-auto text-center text-foreground">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8">Join the Olo Kinder Family Today</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/admissions#enquiry"
              className="bg-accent text-accent-foreground px-8 py-3 rounded-full hover:bg-accent-hover transition-colors font-semibold"
            >
              Enroll
            </Link>
            <Link
              href="/contact#enquiry"
              className="border-2 border-foreground/60 text-foreground px-8 py-3 rounded-full hover:bg-foreground/10 transition-colors font-semibold"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </Motion>
    </section>
  )
}
