import { Motion } from '@/components/ui/motion'

const approachItems = [
  { title: 'Play-Based Learning',    desc: 'Through play, children develop creativity, problem-solving skills, and social competence. Our classrooms are designed to invite exploration and discovery.' },
  { title: 'Individualised Pacing', desc: "We recognise that each child develops at their own pace. Our educators observe and respond to each child's readiness and interests." },
  { title: 'Small Group Learning',  desc: 'Smaller class sizes allow for meaningful teacher-child relationships and targeted learning experiences tailored to individual needs.' },
  { title: 'Family Partnership',    desc: "We work closely with families to understand each child's unique context and support learning both at school and home." },
]

export function ApproachSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-surface-sand">
      <div className="max-w-6xl mx-auto">
        <Motion variant="up">
          <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-center text-heading">Our Approach</h2>
        </Motion>
        <Motion variant="scale" delay={100}>
          <div className="bg-linear-to-r from-primary/10 to-secondary/10 rounded-3xl p-8 sm:p-10 md:p-14 mb-12">
            <p className="text-base sm:text-lg text-foreground/80 leading-relaxed text-center max-w-3xl mx-auto">
              At Olo Kinder, our curriculum is built on the belief that children learn best through play, exploration, and meaningful relationships. We combine inquiry-based, discovery, and experiential learning into a child-friendly, integrated framework that honours each child&apos;s developmental stage.
            </p>
          </div>
        </Motion>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {approachItems.map((item, i) => (
            <Motion key={i} variant="up" delay={i * 80}>
              <div className="border-l-4 border-primary pl-6 h-full">
                <h3 className="text-lg sm:text-xl font-bold mb-2 text-heading">{item.title}</h3>
                <p className="text-foreground/80 leading-relaxed text-sm sm:text-base">{item.desc}</p>
              </div>
            </Motion>
          ))}
        </div>
      </div>
    </section>
  )
}
