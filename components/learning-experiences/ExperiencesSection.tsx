import { MdGroups, MdExtension, MdDirectionsWalk, MdLibraryBooks, MdMusicNote, MdLightbulb, MdEco, MdBrush } from 'react-icons/md'
import type { IconType } from 'react-icons'
import { Motion } from '@/components/ui/motion'

interface Exp {
  title: string
  Icon: IconType
  iconColor: string
  tagBg: string
  desc: string
  skills: string[]
  img: string
}

const experiences: Exp[] = [
  {
    title: 'Circle Time', Icon: MdGroups, iconColor: 'text-[#0e7a94]', tagBg: 'bg-sky-50',
    desc: 'Morning greetings, songs, and conversations that build community and set a joyful tone for the day.',
    skills: ['Language', 'Social connection', 'Listening'],
    img: '/images/storytelling-circle.jpg',
  },
  {
    title: 'Play & Learn', Icon: MdExtension, iconColor: 'text-[#F27C5A]', tagBg: 'bg-orange-50',
    desc: 'Child-led exploration through learning stations — art, building, dramatic play, and sensory discovery.',
    skills: ['Creativity', 'Problem-solving', 'Independence'],
    img: '/images/building-blocks.jpg',
  },
  {
    title: 'Walk & Talk', Icon: MdDirectionsWalk, iconColor: 'text-[#4a7a1e]', tagBg: 'bg-green-50',
    desc: 'Outdoor explorations connecting learning to the natural world through observation and guided discussion.',
    skills: ['Vocabulary', 'Observation', 'Communication'],
    img: '/images/campus-walk.jpg',
  },
  {
    title: 'Rhythmic Reading', Icon: MdLibraryBooks, iconColor: 'text-[#8a6a00]', tagBg: 'bg-yellow-50',
    desc: 'Literacy brought to life through rhythm, rhyme, and expressive storytelling with movement.',
    skills: ['Pre-literacy', 'Phonological awareness', 'Love of reading'],
    img: '/images/reading-corner.jpg',
  },
  {
    title: 'Rhythmic Arithmetic', Icon: MdMusicNote, iconColor: 'text-[#0e7a94]', tagBg: 'bg-sky-50',
    desc: 'Number sense built naturally through rhythmic patterns, clapping, songs, and musical counting.',
    skills: ['Number sense', 'Pattern recognition', 'Memory'],
    img: '/images/number-mat-movement.jpg',
  },
  {
    title: 'Fact Fun', Icon: MdLightbulb, iconColor: 'text-[#F27C5A]', tagBg: 'bg-orange-50',
    desc: 'Bite-sized fascinating facts spark curiosity about the world and build a love of critical thinking.',
    skills: ['Critical thinking', 'General knowledge', 'Curiosity'],
    img: '/images/show-and-tell.jpg',
  },
  {
    title: 'Connecting with Nature', Icon: MdEco, iconColor: 'text-[#4a7a1e]', tagBg: 'bg-green-50',
    desc: 'Hands-on nature experiences — gardening, bug observation, and outdoor science — build environmental care.',
    skills: ['Environmental awareness', 'Responsibility', 'Scientific thinking'],
    img: '/images/nature-discovery.jpg',
  },
  {
    title: 'Creative Tasks', Icon: MdBrush, iconColor: 'text-[#8a6a00]', tagBg: 'bg-yellow-50',
    desc: 'Open-ended art and design projects invite children to express ideas and bring imagination to life.',
    skills: ['Creativity', 'Self-expression', 'Fine motor skills'],
    img: '/images/art-and-coloring.jpg',
  },
]

export function ExperiencesSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {experiences.map((exp, i) => (
            <Motion key={i} variant="up" delay={i * 60}>
              <div className="bg-[#FFFDF8] rounded-2xl overflow-hidden border border-border hover:shadow-lg transition-shadow h-full flex flex-col">
                {/* Image */}
                <div className="h-44 overflow-hidden">
                  <img src={exp.img} alt={exp.title} loading="lazy" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col gap-3 flex-1">
                  <div className="flex items-center gap-2">
                    <exp.Icon size={22} className={exp.iconColor} />
                    <h3 className="font-bold text-base text-foreground">{exp.title}</h3>
                  </div>
                  <p className="text-sm text-foreground/70 leading-relaxed">{exp.desc}</p>
                  <div className="flex flex-wrap gap-1.5 mt-auto pt-1">
                    {exp.skills.map((s) => (
                      <span key={s} className={`${exp.tagBg} text-foreground/70 text-xs font-medium px-2.5 py-1 rounded-full`}>{s}</span>
                    ))}
                  </div>
                </div>
              </div>
            </Motion>
          ))}
        </div>
      </div>
    </section>
  )
}
