import { MdAutoStories } from 'react-icons/md'
import { Motion } from '@/components/ui/motion'
import type { Module } from '@/lib/programmes'
import { Doodle } from '@/components/ui/doodle'
import { Wave } from '@/components/ui/wave'

const palette = [
  { text: 'text-mascot-roundy-dark',  bg: 'bg-mascot-roundy/15',  solid: 'bg-mascot-roundy',  ring: 'ring-mascot-roundy' },
  { text: 'text-mascot-squarey-dark', bg: 'bg-mascot-squarey/15', solid: 'bg-mascot-squarey', ring: 'ring-mascot-squarey' },
  { text: 'text-mascot-starry-dark',  bg: 'bg-mascot-starry/15',  solid: 'bg-mascot-starry',  ring: 'ring-mascot-starry' },
  { text: 'text-mascot-hexy-dark',    bg: 'bg-mascot-hexy/15',    solid: 'bg-mascot-hexy',    ring: 'ring-mascot-hexy' },
]

export function ModulesSection({ modules }: { modules: Module[] }) {
  return (
    <section className="band-sky pt-12 sm:pt-16 pb-24 sm:pb-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <Doodle name="cloud" className="top-12 left-8 w-28" opacity={60} />
      <Doodle name="butterfly" className="top-10 right-10 w-16" opacity={80} flip />
      <Doodle name="treeGreen" className="bottom-28 left-4 w-20" opacity={70} />
      <Doodle name="fox" className="bottom-24 right-8 w-20" opacity={80} />
      <Doodle name="starry" className="top-1/3 left-6 w-14" rotate={-11} />
      <Doodle name="rolly" className="bottom-1/2 right-6 w-14" rotate={10} />

      <div className="max-w-6xl mx-auto relative z-10">
        <Motion variant="up">
          <div className="text-center mb-10 sm:mb-14">
            <span className="inline-block surface-card text-primary text-sm font-bold uppercase tracking-wide px-4 py-1.5 rounded-full mb-4 shadow-sm">
              What your child learns
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-heading">Thematic Learning Modules</h2>
            <p className="text-base sm:text-lg text-foreground/90 max-w-2xl mx-auto mt-4">
              Every module is a themed adventure — a course book, hands-on activities and, in most
              modules, a storybook that carries the same theme home.
            </p>
          </div>
        </Motion>

        <div className="space-y-8 sm:space-y-10">
          {modules.map((module, i) => {
            const colors = palette[i % palette.length]
            const flipped = i % 2 === 1
            return (
              <Motion key={module.label} variant="up">
                {/* One card per module rather than a bare row: the cover, the
                    number and the storybook all belong to the same theme, and
                    the card is what makes that grouping visible. */}
                <div className="surface-card rounded-4xl border border-border shadow-md overflow-hidden grid grid-cols-1 md:grid-cols-2">
                  {/* Cover */}
                  <div
                    className={`${colors.bg} relative flex items-center justify-center p-6 sm:p-10 ${
                      flipped ? 'md:order-2' : ''
                    }`}
                  >
                    <span
                      aria-hidden
                      className={`absolute top-4 left-4 ${colors.solid} text-white w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center text-xl sm:text-2xl font-bold shadow-md`}
                    >
                      {i + 1}
                    </span>
                    <img
                      src={module.image}
                      alt={module.imageAlt}
                      loading="lazy"
                      className={`w-auto max-w-full max-h-64 sm:max-h-80 rounded-2xl shadow-lg ring-4 ${colors.ring} ${
                        flipped ? 'rotate-2' : '-rotate-2'
                      } hover:rotate-0 transition-transform duration-500`}
                    />
                  </div>

                  {/* Text */}
                  <div className={`p-6 sm:p-9 flex flex-col justify-center ${flipped ? 'md:order-1' : ''}`}>
                    <div className="flex items-center gap-3 mb-3">
                      <span className={`h-1.5 w-8 rounded-full ${colors.solid}`} />
                      <span className={`text-base font-bold uppercase tracking-wide ${colors.text}`}>{module.label}</span>
                    </div>

                    <h3 className="text-3xl sm:text-4xl font-bold text-heading mb-4 leading-tight">{module.name}</h3>
                    <p className="text-foreground/90 leading-relaxed text-lg sm:text-xl">{module.desc}</p>

                    {module.storybook && (
                      <div className={`${colors.bg} rounded-2xl p-5 mt-6`}>
                        <div className="flex items-center gap-2 mb-1.5">
                          <MdAutoStories size={20} className={`shrink-0 ${colors.text}`} />
                          <span className="text-sm font-bold uppercase tracking-wide text-foreground/80">Storybook</span>
                        </div>
                        <p className="font-bold text-foreground text-lg sm:text-xl">{module.storybook.name}</p>
                        {module.storybook.desc && (
                          <p className="text-foreground/90 text-base sm:text-lg leading-relaxed mt-1.5">
                            {module.storybook.desc}
                          </p>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </Motion>
            )
          })}
        </div>
      </div>

      {/* Filled with the CTA band that follows, so the two interlock. */}
      <Wave className="text-brand-plum" />
    </section>
  )
}
