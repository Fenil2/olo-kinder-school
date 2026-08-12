import { MdBuild, MdExtension, MdGroups, MdLibraryBooks, MdMusicNote, MdPalette } from 'react-icons/md'
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
    title: 'Storytelling',
    Icon: MdLibraryBooks,
    iconColor: 'text-[#F27C5A]',
    tagBg: 'bg-orange-50',
    desc: 'Interactive stories, picture talks, and role play help children build imagination, vocabulary, listening skills, and confidence in expression.',
    skills: ['Imagination', 'Vocabulary', 'Listening'],
    img: '/images/storytelling-circle.jpg',
  },
  {
    title: 'Brain Games & Puzzles',
    Icon: MdExtension,
    iconColor: 'text-[#0e7a94]',
    tagBg: 'bg-sky-50',
    desc: 'Age-appropriate puzzles, matching games, memory tasks, and logic activities strengthen focus, problem-solving, and early thinking skills.',
    skills: ['Focus', 'Problem-solving', 'Memory'],
    img: '/images/alphabet-puzzles.jpg',
  },
  {
    title: 'Art & Craft',
    Icon: MdPalette,
    iconColor: 'text-[#8a6a00]',
    tagBg: 'bg-yellow-50',
    desc: 'Drawing, colouring, painting, and craft work give children joyful ways to explore colours, textures, creativity, and fine motor control.',
    skills: ['Creativity', 'Fine motor skills', 'Self-expression'],
    img: '/images/art-and-coloring.jpg',
  },
  {
    title: 'DIY Projects',
    Icon: MdBuild,
    iconColor: 'text-[#4a7a1e]',
    tagBg: 'bg-green-50',
    desc: 'Simple hands-on projects encourage children to plan, build, try ideas, and learn through practical making and discovery.',
    skills: ['Planning', 'Hands-on learning', 'Discovery'],
    img: '/images/montessori-materials.jpg',
  },
  {
    title: 'Dance & Music',
    Icon: MdMusicNote,
    iconColor: 'text-pink-500',
    tagBg: 'bg-pink-50',
    desc: 'Songs, rhythm, movement, and dance activities support coordination, joyful expression, listening, and a natural sense of beat.',
    skills: ['Rhythm', 'Coordination', 'Expression'],
    img: '/images/music-and-movement.jpg',
  },
  {
    title: 'Group Activities & Social Skills',
    Icon: MdGroups,
    iconColor: 'text-[#F27C5A]',
    tagBg: 'bg-orange-50',
    desc: 'Collaborative games and shared tasks help children practise teamwork, communication, turn-taking, empathy, and friendship skills.',
    skills: ['Teamwork', 'Communication', 'Empathy'],
    img: '/images/social-communication.jpg',
  },
]

export function ExperiencesSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiences.map((exp, i) => (
            <Motion key={i} variant="up" delay={i * 60}>
              <div className="bg-[#FFFDF8] rounded-2xl overflow-hidden border border-border hover:shadow-lg transition-shadow h-full flex flex-col">
                <div className="h-44 overflow-hidden">
                  <img src={exp.img} alt={exp.title} loading="lazy" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>

                <div className="p-5 flex flex-col gap-3 flex-1">
                  <div className="flex items-center gap-2">
                    <exp.Icon size={22} className={exp.iconColor} />
                    <h3 className="font-bold text-base text-foreground leading-tight">{exp.title}</h3>
                  </div>
                  <p className="text-sm text-foreground/70 leading-relaxed">{exp.desc}</p>
                  <div className="flex flex-wrap gap-1.5 mt-auto pt-1">
                    {exp.skills.map((skill) => (
                      <span key={skill} className={`${exp.tagBg} text-foreground/70 text-xs font-medium px-2.5 py-1 rounded-full`}>
                        {skill}
                      </span>
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
