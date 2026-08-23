import { Motion } from '@/components/ui/motion'
import { Wave } from '@/components/ui/wave'
import { Photo } from '@/components/ui/photo'
import { Doodle } from '@/components/ui/doodle'

export function WhatIsSection() {
  return (
    <section className="pt-12 sm:pt-16 pb-20 sm:pb-28 px-4 sm:px-6 lg:px-8 band-cream relative overflow-hidden">
      <Doodle name="butterfly" className="top-10 right-8 w-16" opacity={80} />
      <Doodle name="leaf1" className="bottom-10 left-6 w-12" rotate={-12} opacity={70} />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* The page opener is centred and narrow. The sections below it are
            all grids and columns, so the one paragraph that frames the whole
            subject reads better as a single measured block than as the left
            half of yet another two-column row. */}
        <Motion variant="up">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-heading text-balance">
              What is Evaluation at Olo Kinder?
            </h2>
            <p className="text-lg sm:text-xl text-foreground/90 leading-relaxed text-pretty">
              At Olo Kinder, we regard assessment patterns and evaluation as a vital aspect of early childhood education. We believe that periodic evaluation of the activities within and beyond the boundaries of the classrooms will serve as a tool in understanding and fostering the holistic development of young children.
            </p>
          </div>
        </Motion>

        {/* The wide still sits under the opener as a full-width plate, with
            the cast standing on its lower edge. The frame is the file's own
            ratio — 1118 × 548 — so the whole photograph shows and there is
            nothing for `object-cover` to crop off the ends. */}
        <Motion variant="scale" delay={100}>
          <div className="relative mt-10 sm:mt-14">
            <Photo
              src="/images/evaluation/evaluation-one.png"
              alt="Olo Kinder children running across the school lawn flying kites together"
              className="rounded-[2rem] shadow-lg w-full aspect-1118/548"
              fit="object-contain"
            />
            <img
              src="/images/mascots/rolly.webp"
              alt=""
              aria-hidden="true"
              loading="lazy"
              className="pointer-events-none select-none absolute -bottom-5 left-4 sm:left-10 w-14 sm:w-20 drop-shadow-md"
            />
            <img
              src="/images/mascots/starry.webp"
              alt=""
              aria-hidden="true"
              loading="lazy"
              className="pointer-events-none select-none absolute -bottom-4 right-5 sm:right-12 w-12 sm:w-16 rotate-6 drop-shadow-md"
            />
          </div>
        </Motion>
      </div>

      <Wave className="text-surface-sky" />
    </section>
  )
}
