import Link from 'next/link'
import { Motion } from '@/components/ui/motion'

export function CtaSection() {
  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 band-slate">
      <Motion variant="up">
        <div className="max-w-4xl mx-auto text-center text-foreground">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Come See It For Yourself</h2>
          <p className="text-base sm:text-xl mb-8 opacity-90">
            Photos only go so far. Visit our campus and watch a day at Olo Kinder unfold.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/admissions#enquiry"
              className="bg-accent text-accent-foreground px-8 py-3 rounded-full hover:bg-accent-hover transition-colors font-semibold"
            >
              Admissions Open Now
            </Link>
            <Link
              href="/contact#enquiry"
              className="border-2 border-foreground/60 text-foreground px-8 py-3 rounded-full hover:bg-foreground/10 transition-colors font-semibold"
            >
              Book a Campus Visit
            </Link>
          </div>
        </div>
      </Motion>
    </section>
  )
}
