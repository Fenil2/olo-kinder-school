import Link from 'next/link'
import { Motion } from '@/components/ui/motion'
import { programmes } from '@/lib/programmes'

const palette = [
  { text: 'text-mascot-roundy-dark', bg: 'bg-mascot-roundy/15', accent: 'border-t-mascot-roundy' },
  { text: 'text-mascot-squarey-dark', bg: 'bg-mascot-squarey/15',    accent: 'border-t-mascot-squarey' },
  { text: 'text-mascot-hexy-dark', bg: 'bg-mascot-hexy/15',  accent: 'border-t-mascot-hexy' },
]

export function ProgrammesSection() {
  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <Motion variant="up">
          <h2 className="text-3xl sm:text-4xl font-bold mb-14 text-center text-heading">Thematic Learning Modules</h2>
        </Motion>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {programmes.map((programme, i) => {
            const colors = palette[i % palette.length]
            return (
              <Motion key={programme.slug} variant="scale" delay={i * 80}>
                <Link
                  href={`/curriculum/${programme.slug}`}
                  className={`${colors.bg} rounded-2xl border-t-4 ${colors.accent} overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col`}
                >
                  <div className={"bg-white/70 p-6 h-64 flex items-center justify-center"}>
                    <img
                      src={programme.modules[0].image}
                      alt={programme.modules[0].imageAlt}
                      loading="lazy"
                      className="w-auto max-w-full max-h-full rounded-lg shadow-md"
                    />
                  </div>

                  <div className="p-6 flex flex-col gap-3">
                    <h3 className="text-xl font-bold text-heading leading-tight">{programme.title}</h3>
                    <ul className="space-y-1.5">
                      {programme.modules.map((module) => (
                        <li key={module.label} className="text-sm text-foreground/75 leading-relaxed">
                          <span className={`font-semibold ${colors.text}`}>{module.label}:</span> {module.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Link>
              </Motion>
            )
          })}
        </div>
      </div>
    </section>
  )
}
