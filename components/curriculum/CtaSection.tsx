import Link from 'next/link'
import { Motion } from '@/components/ui/motion'

export function CtaSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-accent">
      <Motion variant="up">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Experience Our Curriculum?</h2>
          <p className="text-base sm:text-xl mb-8 opacity-90">Schedule a tour and see our learning environment in action!</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/admissions#enquiry" className="bg-white text-accent px-8 py-3 rounded-full hover:bg-muted transition-colors font-semibold">
              Admissions Open Now
            </Link>
            <Link href="/learning-experiences" className="border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white/10 transition-colors font-semibold">
              Explore Learning Experiences
            </Link>
          </div>
        </div>
      </Motion>
    </section>
  )
}
