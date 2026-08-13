import { MdCheckCircle, MdFlag, MdInsights, MdViewModule } from 'react-icons/md'
import { Motion } from '@/components/ui/motion'
import type { IntegratedStructure } from '@/lib/programmes'

const domainColors = [
  { iconColor: 'text-mascot-roundy-dark', iconBg: 'bg-mascot-roundy/15', accent: 'border-l-mascot-roundy' },
  { iconColor: 'text-mascot-squarey-dark', iconBg: 'bg-mascot-squarey/15',    accent: 'border-l-mascot-squarey' },
  { iconColor: 'text-mascot-starry-dark', iconBg: 'bg-mascot-starry/15', accent: 'border-l-mascot-starry' },
  { iconColor: 'text-mascot-hexy-dark', iconBg: 'bg-mascot-hexy/15',  accent: 'border-l-mascot-hexy' },
]

export function IntegratedStructureSection({ structure }: { structure: IntegratedStructure }) {
  return (
    <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8 bg-surface-mist">
      <img
        src="/images/programmes/mascot-roundy.webp"
        alt=""
        aria-hidden="true"
        className="hidden lg:block absolute -right-6 top-10 w-36 opacity-90 pointer-events-none select-none"
      />

      <div className="relative max-w-6xl mx-auto">
        <Motion variant="up">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-12 text-center text-heading max-w-4xl mx-auto leading-tight">
            {structure.heading}
          </h2>
        </Motion>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Content of the Module */}
          <Motion variant="up">
            <div className="bg-card rounded-2xl border-t-4 border-t-mascot-squarey p-6 sm:p-8 h-full">
              <div className="flex items-center gap-3 mb-5">
                <div className="bg-mascot-squarey/15 w-12 h-12 rounded-xl flex items-center justify-center shrink-0">
                  <MdViewModule size={26} className="text-mascot-squarey-dark" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-heading">Content of the Module</h3>
              </div>
              <ul className="space-y-3">
                {structure.content.map((item) => (
                  <li key={item.text} className="flex items-start gap-2 text-sm sm:text-base text-foreground/80 leading-relaxed">
                    <MdCheckCircle size={18} className="shrink-0 text-mascot-squarey-dark mt-0.5" />
                    <span>
                      {item.label && <span className="font-bold text-foreground">{item.label}: </span>}
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Motion>

          {/* Curricular Objectives */}
          <Motion variant="up" delay={80}>
            <div className="bg-card rounded-2xl border-t-4 border-t-mascot-roundy p-6 sm:p-8 h-full">
              <div className="flex items-center gap-3 mb-5">
                <div className="bg-mascot-roundy/15 w-12 h-12 rounded-xl flex items-center justify-center shrink-0">
                  <MdFlag size={26} className="text-mascot-roundy-dark" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-heading">Curricular Objectives</h3>
              </div>
              <ul className="space-y-3">
                {structure.objectives.map((objective) => (
                  <li key={objective} className="flex items-start gap-2 text-sm sm:text-base text-foreground/80 leading-relaxed">
                    <MdCheckCircle size={18} className="shrink-0 text-mascot-roundy-dark mt-0.5" />
                    <span>{objective}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Motion>
        </div>

        {/* Domain Development */}
        <Motion variant="up" delay={160}>
          <div className="bg-card rounded-2xl border-t-4 border-t-mascot-hexy p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-mascot-hexy/15 w-12 h-12 rounded-xl flex items-center justify-center shrink-0">
                <MdInsights size={26} className="text-mascot-hexy-dark" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-heading">Domain Development</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {structure.domains.map((domain, i) => {
                const colors = domainColors[i % domainColors.length]
                return (
                  <div key={domain.title} className={`${colors.iconBg} rounded-xl border-l-4 ${colors.accent} p-5`}>
                    <h4 className={`font-bold mb-1.5 ${colors.iconColor}`}>{domain.title}</h4>
                    <p className="text-foreground/80 leading-relaxed text-sm sm:text-base">{domain.text}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </Motion>
      </div>
    </section>
  )
}
