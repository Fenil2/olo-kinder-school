import { MdBuild, MdExtension, MdGroups, MdLibraryBooks, MdMusicNote, MdPalette } from 'react-icons/md'
import type { IconType } from 'react-icons'
import { Motion } from '@/components/ui/motion'
import { Doodle } from '@/components/ui/doodle'

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
    iconColor: 'text-mascot-roundy-dark',
    tagBg: 'bg-mascot-roundy/15',
    desc: 'Interactive stories, picture talks, and role play help children build imagination, vocabulary, listening skills, and confidence in expression.',
    skills: ['Imagination', 'Vocabulary', 'Listening'],
    img: '/images/storytelling-circle.jpg',
  },
  {
    title: 'Brain Games & Puzzles',
    Icon: MdExtension,
    iconColor: 'text-mascot-squarey-dark',
    tagBg: 'bg-mascot-squarey/15',
    desc: 'Age-appropriate puzzles, matching games, memory tasks, and logic activities strengthen focus, problem-solving, and early thinking skills.',
    skills: ['Focus', 'Problem-solving', 'Memory'],
    img: '/images/alphabet-puzzles.jpg',
  },
  {
    title: 'Art & Craft',
    Icon: MdPalette,
    iconColor: 'text-mascot-starry-dark',
    tagBg: 'bg-mascot-starry/15',
    desc: 'Drawing, colouring, painting, and craft work give children joyful ways to explore colours, textures, creativity, and fine motor control.',
    skills: ['Creativity', 'Fine motor skills', 'Self-expression'],
    img: '/images/art-and-coloring.jpg',
  },
  {
    title: 'DIY Projects',
    Icon: MdBuild,
    iconColor: 'text-mascot-hexy-dark',
    tagBg: 'bg-mascot-hexy/15',
    desc: 'Simple hands-on projects encourage children to plan, build, try ideas, and learn through practical making and discovery.',
    skills: ['Planning', 'Hands-on learning', 'Discovery'],
    img: '/images/montessori-materials.jpg',
  },
  {
    title: 'Dance & Music',
    Icon: MdMusicNote,
    iconColor: 'text-mascot-starry-dark',
    tagBg: 'bg-mascot-starry/15',
    desc: 'Songs, rhythm, movement, and dance activities support coordination, joyful expression, listening, and a natural sense of beat.',
    skills: ['Rhythm', 'Coordination', 'Expression'],
    img: '/images/music-and-movement.jpg',
  },
  {
    title: 'Group Activities & Social Skills',
    Icon: MdGroups,
    iconColor: 'text-mascot-roundy-dark',
    tagBg: 'bg-mascot-roundy/15',
    desc: 'Collaborative games and shared tasks help children practise teamwork, communication, turn-taking, empathy, and friendship skills.',
    skills: ['Teamwork', 'Communication', 'Empathy'],
    img: '/images/social-communication.jpg',
  },
]

export function ExperiencesSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      <Doodle name="cloud" className="top-8 right-10 w-28" opacity={70} />
      <Doodle name="fox" className="bottom-6 left-8 w-20" opacity={85} flip />
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiences.map((exp, i) => (
            <Motion key={i} variant="up" delay={i * 60}>
              <div className={`${exp.tagBg} rounded-2xl overflow-hidden border border-border hover:shadow-lg transition-shadow h-full flex flex-col`}>
                <div className="h-44 overflow-hidden">
                  <img src={exp.img} alt={exp.title} loading="lazy" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>

                <div className="p-5 flex flex-col gap-3 flex-1">
                  <div className="flex items-center gap-2">
                    <exp.Icon size={22} className={exp.iconColor} />
                    <h3 className="font-bold text-base text-heading leading-tight">{exp.title}</h3>
                  </div>
                  <p className="text-sm text-foreground/75 leading-relaxed">{exp.desc}</p>
                  <div className="flex flex-wrap gap-1.5 mt-auto pt-1">
                    {exp.skills.map((skill) => (
                      <span key={skill} className={`bg-white text-foreground/75 text-xs font-medium px-2.5 py-1 rounded-full`}>
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
