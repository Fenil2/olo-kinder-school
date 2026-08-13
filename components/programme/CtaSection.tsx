import Link from 'next/link'
import { Motion } from '@/components/ui/motion'

export function CtaSection() {
  return (
    <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8 bg-accent">
      <img
        src="/images/programmes/mascot-hexy.webp"
        alt=""
        aria-hidden="true"
        className="hidden md:block absolute left-8 lg:left-24 bottom-0 w-28 lg:w-36 pointer-events-none select-none"
      />
      <img
        src="/images/programmes/mascot-roundy.webp"
        alt=""
        aria-hidden="true"
        className="hidden md:block absolute right-6 lg:right-20 bottom-2 w-32 lg:w-44 pointer-events-none select-none"
      />

      <Motion variant="up">
        <div className="relative max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8">Join the Olo Kinder Family Today</h2>
          <div className="flex justify-center">
            <Link href="/admissions#enquiry" className="bg-white text-accent px-10 py-3 rounded-full hover:bg-muted transition-colors font-semibold shadow-sm">
              Enroll
            </Link>
          </div>
        </div>
      </Motion>
    </section>
  )
}
