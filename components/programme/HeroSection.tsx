import { Motion } from '@/components/ui/motion'

export function HeroSection({ title }: { title: string }) {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-background via-surface-sky to-surface-leaf">
      {/* Mascot decorations */}
      <img
        src="/images/programmes/mascot-roundy.webp"
        alt=""
        aria-hidden="true"
        className="hidden md:block absolute left-4 lg:left-16 bottom-0 w-32 lg:w-44 pointer-events-none select-none"
      />
      <img
        src="/images/programmes/mascot-hexy.webp"
        alt=""
        aria-hidden="true"
        className="hidden md:block absolute right-4 lg:right-16 bottom-2 w-24 lg:w-32 pointer-events-none select-none"
      />

      <div className="relative max-w-4xl mx-auto text-center">
        <Motion variant="up">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-heading">{title}</h1>
        </Motion>
      </div>
    </section>
  )
}
