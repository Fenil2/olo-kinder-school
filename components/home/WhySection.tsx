import { MdSearch, MdAutoAwesome, MdNature, MdFavorite, MdMenuBook, MdCalculate } from 'react-icons/md'
import type { IconType } from 'react-icons'
import { Motion } from '@/components/ui/motion'
import { Doodle } from '@/components/ui/doodle'

interface WhyCard { title: string; Icon: IconType; desc: string }

const whyCards: WhyCard[] = [
  { title: 'Inquiry-Based Learning', Icon: MdSearch, desc: 'Children ask questions, investigate ideas, and discover answers through guided exploration.' },
  { title: 'Discovery Learning', Icon: MdAutoAwesome, desc: 'Every activity is designed to spark curiosity and allow children to uncover new concepts naturally.' },
  { title: 'Experiential Learning', Icon: MdNature, desc: 'Hands-on experiences connect learning to the real world, making every lesson meaningful.' },
  { title: 'Holistic Development', Icon: MdFavorite, desc: 'We nurture intellectual, social, emotional, and physical growth in every child.' },
  { title: 'Foundation Literacy', Icon: MdMenuBook, desc: 'Building strong language and reading foundations through stories, songs, and conversations.' },
  { title: 'Foundation Numeracy', Icon: MdCalculate, desc: 'Developing number sense and mathematical thinking through rhythmic, play-based activities.' },
]

export function WhySection() {
  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 band-gold relative overflow-hidden">
      <Doodle name="fox" className="bottom-6 right-8 w-20" opacity={85} />
      <div className="max-w-7xl mx-auto relative z-10">
        <Motion variant="up">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-heading mb-4">Why Olo Kinder</h2>
            <p className="text-base sm:text-lg text-foreground/80 max-w-xl mx-auto">A thoughtfully designed approach that sets the foundation for lifelong learning.</p>
          </div>
        </Motion>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyCards.map((card, i) => (
            <Motion key={i} variant="up" delay={i * 80}>
              <div className="surface-card rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow h-full">
                <card.Icon size={40} className="text-primary mb-4" />
                <h3 className="text-lg sm:text-xl font-bold mb-3 text-heading">{card.title}</h3>
                <p className="text-foreground/80 leading-relaxed text-sm sm:text-base">{card.desc}</p>
              </div>
            </Motion>
          ))}
        </div>
      </div>
    </section>
  )
}
