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
    img: 'https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Play & Learn', Icon: MdExtension, iconColor: 'text-[#F27C5A]', tagBg: 'bg-orange-50',
    desc: 'Child-led exploration through learning stations — art, building, dramatic play, and sensory discovery.',
    skills: ['Creativity', 'Problem-solving', 'Independence'],
    img: 'https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Walk & Talk', Icon: MdDirectionsWalk, iconColor: 'text-[#4a7a1e]', tagBg: 'bg-green-50',
    desc: 'Outdoor explorations connecting learning to the natural world through observation and guided discussion.',
    skills: ['Vocabulary', 'Observation', 'Communication'],
    img: 'https://images.unsplash.com/photo-1526976668912-1a811878dd37?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Rhythmic Reading', Icon: MdLibraryBooks, iconColor: 'text-[#8a6a00]', tagBg: 'bg-yellow-50',
    desc: 'Literacy brought to life through rhythm, rhyme, and expressive storytelling with movement.',
    skills: ['Pre-literacy', 'Phonological awareness', 'Love of reading'],
    img: 'https://images.unsplash.com/photo-1503676260728-1c657d096d18?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Rhythmic Arithmetic', Icon: MdMusicNote, iconColor: 'text-[#0e7a94]', tagBg: 'bg-sky-50',
    desc: 'Number sense built naturally through rhythmic patterns, clapping, songs, and musical counting.',
    skills: ['Number sense', 'Pattern recognition', 'Memory'],
    img: 'https://images.unsplash.com/photo-1543730435-cd2a6fa2a72a?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Fact Fun', Icon: MdLightbulb, iconColor: 'text-[#F27C5A]', tagBg: 'bg-orange-50',
    desc: 'Bite-sized fascinating facts spark curiosity about the world and build a love of critical thinking.',
    skills: ['Critical thinking', 'General knowledge', 'Curiosity'],
    img: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Connecting with Nature', Icon: MdEco, iconColor: 'text-[#4a7a1e]', tagBg: 'bg-green-50',
    desc: 'Hands-on nature experiences — gardening, bug observation, and outdoor science — build environmental care.',
    skills: ['Environmental awareness', 'Responsibility', 'Scientific thinking'],
    img: 'https://images.unsplash.com/photo-1484863137850-59afcfe05386?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Creative Tasks', Icon: MdBrush, iconColor: 'text-[#8a6a00]', tagBg: 'bg-yellow-50',
    desc: 'Open-ended art and design projects invite children to express ideas and bring imagination to life.',
    skills: ['Creativity', 'Self-expression', 'Fine motor skills'],
    img: 'https://images.unsplash.com/photo-1541647376583-8934aaf3448a?auto=format&fit=crop&w=600&q=80',
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
                  <img src={exp.img} alt={exp.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
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
