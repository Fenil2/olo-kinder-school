import { Motion } from '@/components/ui/motion'
import { Wave } from '@/components/ui/wave'
import { Doodle } from '@/components/ui/doodle'
import type { Accent, EnrichmentPage } from '@/lib/enrichment'

/**
 * Written out in full because Tailwind reads class names as literal text —
 * a string built from the accent name at runtime would never reach the
 * stylesheet.
 */
const ACCENT: Record<Accent, { chip: string; ink: string; rail: string }> = {
  roundy:  { chip: 'bg-mascot-roundy/15',  ink: 'text-mascot-roundy-dark',  rail: 'bg-mascot-roundy' },
  squarey: { chip: 'bg-mascot-squarey/15', ink: 'text-mascot-squarey-dark', rail: 'bg-mascot-squarey' },
  starry:  { chip: 'bg-mascot-starry/15',  ink: 'text-mascot-starry-dark',  rail: 'bg-mascot-starry' },
  hexy:    { chip: 'bg-mascot-hexy/15',    ink: 'text-mascot-hexy-dark',    rail: 'bg-mascot-hexy' },
}

/**
 * The body of an enrichment page: the programme portrait held on the left,
 * and the source page's lead-in headings with their points on the right.
 *
 * The two columns are deliberately uneven — the portrait is the smaller of
 * the pair and sticks as the list scrolls past it, so the reader keeps the
 * face of the programme in view while working down what it covers.
 */
export function ProgrammeSection({ page }: { page: EnrichmentPage }) {
  return (
    <section className="band-cream relative pt-14 sm:pt-20 pb-24 sm:pb-32 px-4 sm:px-6 lg:px-8">
      {/* The doodles get their own clipping box rather than the section taking
          `overflow-hidden`. An ancestor that hides its overflow becomes the
          scrollport for anything sticky inside it, and a box that cannot
          scroll never lets its sticky children move — which would quietly
          cancel the portrait's `lg:sticky` below. */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <Doodle name="cloud" className="top-10 right-[6%] w-28" opacity={60} />
        <Doodle name="leaf1" className="bottom-24 left-[4%] w-12" rotate={14} opacity={70} />
        <Doodle name="butterfly" className="top-[38%] left-[2%] w-12" rotate={-10} opacity={80} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-10 lg:gap-16 items-start">

        {/* Portrait, whole. The file olokinder.com serves has a decorative
            frame painted into the PNG; ours has that surround erased to
            transparency instead of being cropped away, so the entire
            photograph survives and the band shows through around its edge.
            Natural height, no fixed aspect and no `object-cover`, so no part
            of the picture is ever hidden. The shadow is a `drop-shadow`, not
            a box shadow — it has to follow the alpha edge rather than draw a
            rectangle around it. */}
        <Motion variant="left" className="lg:sticky lg:top-28">
          <div className="mx-auto max-w-md lg:max-w-none">
            <img
              src={page.portrait.src}
              alt={page.portrait.alt}
              className="block w-full h-auto drop-shadow-md"
            />
          </div>
        </Motion>

        {/* The points, grouped under the lead-in line each one belongs to. */}
        <div className="space-y-12">
          {page.groups.map((group, g) => (
            <div key={group.heading}>
              <Motion variant="up">
                <h2 className="text-2xl sm:text-3xl font-bold text-heading leading-snug text-balance">
                  {group.heading}
                </h2>
                <span aria-hidden="true" className="mt-4 block h-1.5 w-20 rounded-full bg-accent" />
              </Motion>

              <ul className="mt-7 space-y-4">
                {group.points.map((point, i) => {
                  const accent = ACCENT[point.accent]
                  return (
                    <Motion key={point.text} variant="up" delay={i * 70}>
                      <li className="surface-card relative flex items-start gap-4 overflow-hidden rounded-2xl border border-border p-5 pl-6 shadow-sm transition-shadow hover:shadow-lg">
                        {/* A colour rail rather than a tinted card: it keeps the
                            copy on white, where it reads at full contrast. */}
                        <span aria-hidden="true" className={`absolute inset-y-0 left-0 w-1.5 ${accent.rail}`} />
                        <span className={`shrink-0 grid place-items-center w-11 h-11 rounded-full ${accent.chip}`}>
                          <point.Icon size={22} className={accent.ink} aria-hidden="true" />
                        </span>
                        <p className="self-center text-base sm:text-lg font-semibold leading-relaxed text-foreground">
                          {point.text}
                        </p>
                      </li>
                    </Motion>
                  )
                })}
              </ul>

              {/* The cast turns up once, after the last group, rather than
                  beside every heading. */}
              {g === page.groups.length - 1 && (
                <Motion variant="up" delay={120}>
                  <img
                    src="/images/enrichment/7.png"
                    alt=""
                    aria-hidden="true"
                    loading="lazy"
                    className="mt-10 w-36 sm:w-44 mx-auto lg:mx-0 lg:ml-auto"
                  />
                </Motion>
              )}
            </div>
          ))}
        </div>
      </div>

      <Wave className="text-surface-sand" />
    </section>
  )
}
