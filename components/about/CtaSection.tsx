import Link from 'next/link'
import { Motion } from '@/components/ui/motion'

export function CtaSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-accent">
      <Motion variant="up">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Learn More?</h2>
          <p className="text-base sm:text-xl mb-8 opacity-90">Explore our curriculum or take the first step towards enrolling your child at Olo Kinder.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/curriculum" className="bg-white text-accent px-8 py-3 rounded-full hover:bg-gray-100 transition-colors font-semibold">
              Explore Curriculum
            </Link>
            <Link href="/admissions" className="border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white/10 transition-colors font-semibold">
              Admissions
            </Link>
          </div>
        </div>
      </Motion>
    </section>
  )
}
