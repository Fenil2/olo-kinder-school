import { MdFormatQuote } from 'react-icons/md'
import { Motion } from '@/components/ui/motion'
import { Wave } from '@/components/ui/wave'
import { Doodle } from '@/components/ui/doodle'

interface Leader {
  role: string
  name: string
  heading: string
  /** Square portrait, pre-cropped around the face — it is masked to a circle. */
  portrait: string
  /** Per-photo framing; both shots are already cropped square around the face. */
  portraitFit: string
  alt: string
  quote: string
  attribution?: string
  quoteColor: string
  quoteMark: string
  message: string[]
  reverse?: boolean
}

const leaders: Leader[] = [
  {
    role: 'Founder & Chairman',
    name: 'Shri. M.V.M. Sasikumar',
    heading: "Founder's Message",
    portrait: '/leader-sasikumar.png',
    portraitFit: 'object-center',
    alt: 'Shri. M.V.M. Sasikumar, Founder and Chairman of Olo Kinder school',
    quote: 'If the path is beautiful, ask where it leads to. But if the destination is beautiful, never mind about the path, keep walking!',
    quoteColor: 'text-mascot-roundy-dark',
    quoteMark: 'text-mascot-roundy-dark/40',
    message: [
      'The school always recognizes the innate talents of individual students and provides them with a platform to accomplish, enhance and explore their dreams confidently.',
      'As always, may this new academic year be filled with laurels and may the Olo Kinder kids march forward with all happiness and positivity.',
    ],
  },
  {
    role: 'Co-Founder & Director of Academics',
    name: 'Mrs. Geethanjali Sasikumar',
    heading: "Director's Message",
    portrait: '/leader-geethanjali.png',
    portraitFit: 'object-center',
    alt: 'Mrs. Geethanjali Sasikumar, Co-Founder and Director of Academics at Olo Kinder school',
    quote: 'Storytelling is the most powerful way to put ideas into the world today.',
    attribution: '— Robert McKee',
    quoteColor: 'text-mascot-hexy-dark',
    quoteMark: 'text-mascot-hexy-dark/40',
    message: [
      'Every child deserves the freedom to speak, to express themselves, and to be heard as a vital part of their early learning journey. Our Olo Kinder program champions communication as a core art of human connection, nurtured from the very start of childhood.',
      'We commit to creating welcoming spaces where every voice is valued, respected, and encouraged to grow. We look forward to extending this inclusive, expressive approach as we expand to new areas and audiences.',
    ],
    reverse: true,
  },
]

export function LeadershipSection() {
  return (
    <section className="band-cream pt-12 sm:pt-16 pb-20 sm:pb-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <Doodle name="treeOrange" className="bottom-0 right-6 w-24" opacity={70} />
      <Doodle name="starry" className="top-10 left-8 w-16" rotate={11} />
      <div className="max-w-6xl mx-auto space-y-14 relative z-10">
        {leaders.map((l) => (
          <div
            key={l.name}
            className={`flex flex-col items-center gap-8 lg:gap-12 md:items-start ${
              l.reverse ? 'md:flex-row-reverse' : 'md:flex-row'
            }`}
          >
            <Motion variant={l.reverse ? 'right' : 'left'} className="shrink-0">
              <div className="relative w-72 sm:w-80 lg:w-88">
                <div className="relative aspect-square rounded-full overflow-hidden surface-card shadow-lg ring-8 ring-mascot-squarey">
                  <img
                    src={l.portrait}
                    alt={l.alt}
                    loading="lazy"
                    className={`w-full h-full object-contain origin-top ${l.portraitFit}`}
                  />
                </div>
                {/* Confetti dots, echoing the brochure artwork */}
                <span aria-hidden className="absolute -top-2 left-6 w-5 h-5 rounded-full bg-mascot-starry" />
                <span aria-hidden className="absolute top-2 -right-1 w-6 h-6 rounded-full bg-mascot-hexy" />
                <span aria-hidden className="absolute bottom-10 -left-3 w-7 h-7 rounded-full bg-mascot-roundy" />
              </div>
            </Motion>

            <Motion variant={l.reverse ? 'left' : 'right'} delay={100} className="min-w-0 flex-1">
              <div className="text-center md:text-left">
                <p className="text-sm font-semibold tracking-wide text-foreground/80 uppercase">{l.role}</p>
                <p className="text-xl sm:text-2xl font-semibold text-foreground mt-1">{l.name}</p>
                <h2 className="text-3xl sm:text-4xl font-bold text-primary uppercase leading-tight mt-5">
                  {l.heading}
                </h2>

                <div className="relative surface-card rounded-3xl border border-border shadow-sm p-6 sm:p-8 mt-6 text-left">
                  <MdFormatQuote size={34} className={`${l.quoteMark} mb-2`} />
                  <blockquote className={`text-base sm:text-lg font-semibold leading-relaxed text-pretty ${l.quoteColor}`}>
                    {l.quote}
                  </blockquote>
                  {l.attribution && (
                    <cite className="block text-sm text-foreground/80 not-italic mt-3">{l.attribution}</cite>
                  )}
                </div>

                <div className="space-y-4 mt-6 text-base sm:text-lg text-foreground/90 leading-relaxed text-pretty text-left">
                  {l.message.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </div>
              </div>
            </Motion>
          </div>
        ))}
      </div>

      <Wave className="text-surface-sand" />
    </section>
  )
}
