import Link from 'next/link'
import { Motion } from '@/components/ui/motion'
import { CtaMascots } from '@/components/ui/cta-mascots'

export function CtaSection() {
  return (
    <section className="relative overflow-hidden py-12 sm:py-16 px-4 sm:px-6 lg:px-8 band-plum">
      <CtaMascots />

      <Motion variant="up">
        <div className="relative z-10 max-w-4xl mx-auto text-center text-foreground">
          <h2 className="text-4xl sm:text-5xl font-bold mb-8">Join the Olo Kinder Family Today</h2>
          <div className="flex justify-center">
            <Link href="/admissions#enquiry" className="bg-accent text-accent-foreground px-10 py-4 rounded-full text-lg hover:bg-accent-hover transition-colors font-semibold shadow-sm">
              Enroll
            </Link>
          </div>
        </div>
      </Motion>
    </section>
  )
}
