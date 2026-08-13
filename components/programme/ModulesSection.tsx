import { MdAutoStories } from 'react-icons/md'
import { Motion } from '@/components/ui/motion'
import type { Module } from '@/lib/programmes'

const palette = [
  { text: 'text-mascot-roundy-dark', bg: 'bg-mascot-roundy/15', ring: 'bg-mascot-roundy' },
  { text: 'text-mascot-squarey-dark', bg: 'bg-mascot-squarey/15',    ring: 'bg-mascot-squarey' },
  { text: 'text-mascot-starry-dark', bg: 'bg-mascot-starry/15', ring: 'bg-mascot-starry' },
  { text: 'text-mascot-hexy-dark', bg: 'bg-mascot-hexy/15',  ring: 'bg-mascot-hexy' },
]

export function ModulesSection({ modules }: { modules: Module[] }) {
  return (
    <section className="bg-surface-lilac py-20 px-4 sm:px-6 lg:px-8 bg-surface-lilac">
      <div className="max-w-6xl mx-auto">
        <Motion variant="up">
          <h2 className="text-3xl sm:text-4xl font-bold mb-14 sm:mb-20 text-center text-heading">Thematic Learning Modules</h2>
        </Motion>

        <div className="space-y-16 sm:space-y-24">
          {modules.map((module, i) => {
            const colors = palette[i % palette.length]
            const flipped = i % 2 === 1
            return (
              <div key={module.label} className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-14 items-center">
                {/* Cover */}
                <Motion variant={flipped ? 'right' : 'left'} className={flipped ? 'md:order-2' : ''}>
                  <div className={`${colors.bg} rounded-3xl p-5 sm:p-8 flex items-center justify-center min-h-70 sm:min-h-100`}>
                    <img
                      src={module.image}
                      alt={module.imageAlt}
                      loading="lazy"
                      className="w-auto max-w-full max-h-70 sm:max-h-100 rounded-xl shadow-lg"
                    />
                  </div>
                </Motion>

                {/* Text */}
                <Motion variant={flipped ? 'left' : 'right'} delay={80} className={flipped ? 'md:order-1' : ''}>
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <span className={`h-1 w-8 rounded-full ${colors.ring}`} />
                      <span className={`text-sm font-bold uppercase tracking-wide ${colors.text}`}>{module.label}</span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-bold text-heading mb-4 leading-tight">{module.name}</h3>
                    <p className="text-foreground/80 leading-relaxed text-base sm:text-lg">{module.desc}</p>

                    {module.storybook && (
                      <div className={`${colors.bg} rounded-2xl p-5 mt-6`}>
                        <div className="flex items-center gap-2 mb-1.5">
                          <MdAutoStories size={20} className={`shrink-0 ${colors.text}`} />
                          <span className="text-xs font-bold uppercase tracking-wide text-foreground/60">Storybook</span>
                        </div>
                        <p className="font-bold text-foreground text-base sm:text-lg">{module.storybook.name}</p>
                        {module.storybook.desc && (
                          <p className="text-foreground/75 text-sm sm:text-base leading-relaxed mt-1.5">{module.storybook.desc}</p>
                        )}
                      </div>
                    )}
                  </div>
                </Motion>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
