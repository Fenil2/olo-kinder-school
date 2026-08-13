// Content on this page is taken verbatim from olokinder.com
// (/pre-school/, /junior-kindergarten/, /senior-kindergarten/).

export interface Storybook {
  name: string
  desc?: string
}

export interface Module {
  label: string
  name: string
  desc: string
  image: string
  imageAlt: string
  storybook?: Storybook
}

export interface Programme {
  slug: string
  navLabel: string
  title: string
  heroImage: string
  heroImageAlt: string
  modules: Module[]
}

export const preSchool: Programme = {
  slug: 'pre-school',
  navLabel: 'Pre-School',
  title: 'Pre-School',
  heroImage: '/images/pretend-play-market.jpg',
  heroImageAlt: 'Pre-school children playing at a pretend market corner',
  modules: [
    {
      label: 'Module 1',
      name: 'Off to the super town market',
      image: '/images/programmes/pre-school-module-1.webp',
      imageAlt: 'Off to the super town market course book cover',
      desc: 'Join the four lively mascots as they embark on a fun-filled trip to the Super Town Market!',
      storybook: { name: 'Stories from far and near' },
    },
    {
      label: 'Module 2',
      name: 'My World of Animals',
      image: '/images/programmes/pre-school-module-2.webp',
      imageAlt: 'My World of Animals course book cover',
      desc: 'Through this book, children will explore animals from around the globe. The illustrations in the book will help students to understand the features and habitats of the common wild, domestic and aquatic animals.',
    },
    {
      label: 'Module 3',
      name: 'My favourites',
      image: '/images/programmes/pre-school-module-3.webp',
      imageAlt: 'My favourites course book cover',
      desc: 'This module helps students to make their choices and choose their favourite activities. They also get the opportunity to learn the names of many activities that they enjoy doing during their leisure time.',
    },
    {
      label: 'Module 4',
      name: 'Our good days and good ways',
      image: '/images/programmes/pre-school-module-4.webp',
      imageAlt: 'Our good days and good ways course book cover',
      desc: 'This book combines learning about the seasons and days with fun activities, helping children explore and enjoy the information about the change in weather conditions and the different choices of clothes during different seasons.',
    },
  ],
}

export const juniorKindergarten: Programme = {
  slug: 'junior-kindergarten',
  navLabel: 'Junior Kindergarten',
  title: 'Junior Kindergarten',
  heroImage: '/images/classroom-colorful-wide.jpg',
  heroImageAlt: 'A colourful Olo Kinder junior kindergarten classroom',
  modules: [
    {
      label: 'Module 1',
      name: 'Off to the town of colours',
      image: '/images/programmes/jkg-module-1.webp',
      imageAlt: 'Off to the town of colours course book cover',
      desc: 'Here, the mascots explore colours through rich experiences touring around the town. The module aims to integrate play-based activities, guiding children as they learn numbers and letters along the way.',
      storybook: {
        name: 'Fly to the sky',
        desc: 'This story talks about the flight of the kites and their fun-filled journey in the air while viewing the world of colours.',
      },
    },
    {
      label: 'Module 2',
      name: 'Off to the village fair',
      image: '/images/programmes/jkg-module-2.webp',
      imageAlt: 'Off to the village fair course book cover',
      desc: 'A vibrant village fair brimming with games, delicious food, fun activities, and plenty of things to buy, all while exploring the wondrous world of patterns and shapes',
      storybook: {
        name: 'Grandma’s Dosas',
        desc: 'The story is devised in the indigenous South Indian scenario while integrating concepts of colours, shapes and numbers.',
      },
    },
    {
      label: 'Module 3',
      name: 'Animals are our Pals',
      image: '/images/programmes/jkg-module-3.webp',
      imageAlt: 'Animals are our Pals course book cover',
      desc: 'It’s fun to learn about animals. This module enables young kids to discover a lot about animals-their names, features, colours, and their contributions to the human world. This book renders the thoughts to young kids that we share the planet, Earth with our animal friends and it’s important to care for them.',
      storybook: {
        name: 'Into the wild',
        desc: 'This story is an interesting trip of two young kids, Rani and Mani who venture into the wilderness and speak about the special features of the animals in the forest.',
      },
    },
    {
      label: 'Module 4',
      name: 'I am Unique',
      image: '/images/programmes/jkg-module-4.webp',
      imageAlt: 'I am Unique course book cover',
      desc: 'We all look alike, yet we are different. Here, the mascots help us learn about our body parts, senses, and their importance to make sense of our living world.',
      storybook: {
        name: 'Where’s my mom ?',
        desc: 'A cute chick goes looking for his mom and the story integrates the concepts of young ones, sounds of animals and the unique features of farm animals.',
      },
    },
    {
      label: 'Module 5',
      name: 'Off to meet our green friends',
      image: '/images/programmes/jkg-module-5.webp',
      imageAlt: 'Off to meet our green friends course book cover',
      desc: 'Nature is around us and plays a vital role in our lives; when we take care of it, nature takes care of us. This wonderful module connects the kids to nature’s valuable gifts like fruits, vegetables, and flowers. Let’s meet Govind Gardener and learn to respect our green friends!',
    },
  ],
}

export const seniorKindergarten: Programme = {
  slug: 'senior-kindergarten',
  navLabel: 'Senior Kindergarten',
  title: 'Senior Kindergarten',
  heroImage: '/images/classroom-writing-wide.jpg',
  heroImageAlt: 'Senior kindergarten children practising writing at their desks',
  modules: [
    {
      label: 'Module 1',
      name: 'Off to school',
      image: '/images/programmes/skg-module-1.webp',
      imageAlt: 'Off to school course book cover',
      desc: 'Returning to school after a long break can be tough but the four mascots make it exciting for young learners to make an entry into a colourful classroom and guide us to learn, play and explore the various fun factors in the school premises.',
      storybook: {
        name: 'Small things make a big world',
        desc: 'This story teaches kids the value of every little thing they gain from this world and helps them understand that this big, blue planet is made from small things.',
      },
    },
    {
      label: 'Module 2',
      name: 'Animals are our pals',
      image: '/images/programmes/skg-module-2.webp',
      imageAlt: 'Animals are our pals course book cover',
      desc: 'The mascots lead children on an exciting journey to explore the amazing world of animals—whether in the wild, in water, in the sky, or on flowers. They discover where animals live and how their homes are made, sparking endless curiosity and wonder.',
      storybook: {
        name: 'The sports day',
        desc: 'The story aims to give the information to young learners about the special capabilities of various animals. There’s also the hidden fact that not all of us are good in all that we do and we should focus on our strengths to achieve our goals.',
      },
    },
    {
      label: 'Module 3',
      name: 'Shapes on wheels',
      image: '/images/programmes/skg-module-3.webp',
      imageAlt: 'Shapes on wheels course book cover',
      desc: 'Embarking on an exciting journey to the town, neighbouring cities, and places around the world, the mascots use various modes of transport while learning to appreciate their capabilities to fly in the air or run on the rails and the special features of each vehicle.',
    },
    {
      label: 'Module 4',
      name: 'I am Unique',
      image: '/images/programmes/skg-module-4.webp',
      imageAlt: 'I am Unique course book cover',
      desc: 'This module helps young learners to understand their body parts and sense organs. The mascots help children discover that the sense organs help them to sense this wondrous world while giving importance to healthy habits and good behaviour to keep us and others happy and healthy.',
      storybook: {
        name: 'The Tale of Mr. Bear’s tail',
        desc: 'This story is devised to teach the concept of addition and subtraction to young children without abstract symbols. Children enjoy the funny movements in the story and also understand the value that they ought to be happy with what they have.',
      },
    },
    {
      label: 'Module 5',
      name: 'Off to meet our green friends',
      image: '/images/programmes/skg-module-5.webp',
      imageAlt: 'Off to meet our green friends course book cover',
      desc: 'The module is an interesting assemblage of facts from Govind Grandpa’s Garden. Students learn that there are many types of plants—tall or short, bearing various fruits and vegetables—each growing differently, whether underground, on walls, in ponds, with single seeds or multiple seeds. It’s time to explore the green world!',
      storybook: {
        name: 'Leave no friend behind',
        desc: 'This story beautifully illustrates the value of friendship, our rich traditions, and provides an opportunity for children to explore math concepts.',
      },
    },
  ],
}

export const programmes: Programme[] = [preSchool, juniorKindergarten, seniorKindergarten]
