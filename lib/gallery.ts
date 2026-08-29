export interface GalleryCategory {
  id: string
  label: string
}

export interface GalleryPhoto {
  src: string
  /**
   * Natural width ÷ height, measured from the file itself. The grid needs it
   * twice over: to reserve each tile's exact space before the photo loads, and
   * to balance the columns by predicted height rather than by photo count.
   */
  ratio: number
  alt: string
  /** Caption shown under the photo in the lightbox. */
  caption: string
  category: GalleryCategory['id']
}

export const galleryCategories: GalleryCategory[] = [
  { id: 'classrooms', label: 'Classrooms' },
  { id: 'learning', label: 'Learning & Activities' },
  { id: 'play', label: 'Play & Outdoors' },
  { id: 'events', label: 'Events & Celebrations' },
]

export const galleryPhotos: GalleryPhoto[] = [
  /* ── Classrooms ───────────────────────────────────────────────── */
  {
    src: '/images/hero-school-entrance.jpg',
    ratio: 1.4,
    alt: 'Four Olo Kinder children building towers from large plastic blocks at a classroom table',
    caption: 'Block play in the activity room',
    category: 'classrooms',
  },
  {
    src: '/images/classroom-colorful-wide.jpg',
    ratio: 1.935,
    alt: 'A bright, colourful Olo Kinder classroom set up for a group session',
    caption: 'Our classrooms, ready for the day',
    category: 'classrooms',
  },
  {
    src: '/images/hero-admissions.jpg',
    ratio: 1.773,
    alt: 'Children sharing a table full of building blocks in the Olo Kinder activity room',
    caption: 'Everything within reach, everything shared',
    category: 'classrooms',
  },
  {
    src: '/images/classroom-whiteboard-wide.jpg',
    ratio: 1.5,
    alt: 'A child painting with poster colours at a classroom table',
    caption: 'Poster colours and a steady brush',
    category: 'classrooms',
  },
  {
    src: '/images/classroom-writing-wide.jpg',
    ratio: 1.935,
    alt: 'Children practising early writing at their classroom desks',
    caption: 'First strokes, first letters',
    category: 'classrooms',
  },
  {
    src: '/images/hero-jkg.jpg',
    ratio: 1.935,
    alt: 'Junior Kindergarten children constructing block models together',
    caption: 'Junior Kindergarten in full flow',
    category: 'classrooms',
  },
  {
    src: '/images/group-photo.jpg',
    ratio: 1.331,
    alt: 'A close view of Olo Kinder children absorbed in a shared block-building activity',
    caption: 'Heads together over a big idea',
    category: 'classrooms',
  },
  {
    src: '/images/gallery/shape-tray-group.jpg',
    ratio: 1.5,
    alt: 'Five Olo Kinder children gathered around a table working with a wooden shape puzzle and sand trays',
    caption: 'Five heads, one puzzle',
    category: 'classrooms',
  },
  {
    src: '/images/gallery/threading-toy.jpg',
    ratio: 0.667,
    alt: 'An Olo Kinder boy sitting cross-legged, threading a lace through a wooden dinosaur board',
    caption: 'Threading, one hole at a time',
    category: 'classrooms',
  },
  {
    src: '/images/gallery/dressing-dolls.jpg',
    ratio: 1.333,
    alt: 'Four Olo Kinder children dressing small wooden dolls in fabric at a classroom table',
    caption: 'Dressing the dolls in class',
    category: 'classrooms',
  },

  /* ── Learning & Activities ────────────────────────────────────── */
  {
    src: '/images/moments/vowel-sounds.jpeg',
    ratio: 0.563,
    alt: 'A child sounding out vowels at her table in front of a hand-shaped a-e-i-o-u wall chart',
    caption: 'Sounding out the vowels',
    category: 'learning',
  },
  {
    src: '/images/moments/block-tower.jpeg',
    ratio: 0.563,
    alt: 'A child carefully balancing the top brick on a tall rainbow block tower',
    caption: 'One more brick, very carefully',
    category: 'learning',
  },
  {
    src: '/images/alphabet-puzzles.jpg',
    ratio: 2.049,
    alt: 'Children fitting together alphabet puzzle pieces',
    caption: 'Alphabet puzzles and matching games',
    category: 'learning',
  },
  {
    src: '/images/moments/letter-collage-a.jpeg',
    ratio: 1.333,
    alt: 'A child pressing coloured paper squares onto a printed letter worksheet',
    caption: 'Filling in the letter of the week',
    category: 'learning',
  },
  {
    src: '/images/numeracy-teacher.jpg',
    ratio: 1.501,
    alt: 'Two Olo Kinder children matching number cards at their classroom table',
    caption: 'Early numbers, one step at a time',
    category: 'learning',
  },
  {
    src: '/images/moments/letter-collage-b.jpeg',
    ratio: 1.333,
    alt: 'A child reaching for paper cut-outs while decorating a letter worksheet',
    caption: 'Choosing the next colour',
    category: 'learning',
  },
  {
    src: '/images/montessori-materials.jpg',
    ratio: 1.498,
    alt: 'Children working with hands-on Montessori puzzles and counting materials',
    caption: 'Hands-on Montessori materials',
    category: 'learning',
  },
  {
    src: '/images/moments/letter-collage-c.jpeg',
    ratio: 1.333,
    alt: 'A child carefully placing paper pieces inside the outline of a letter',
    caption: 'Fine motor practice, disguised as craft',
    category: 'learning',
  },
  {
    src: '/images/storytelling-circle.jpg',
    ratio: 2.053,
    alt: 'Children gathered in a circle listening to a story',
    caption: 'Storytelling circle',
    category: 'learning',
  },
  {
    src: '/images/moments/block-stacking.jpeg',
    ratio: 1.333,
    alt: 'A child stacking oversized yellow and purple building blocks',
    caption: 'Stacking, balancing, starting again',
    category: 'learning',
  },
  // {
  //   src: '/images/show-and-tell.jpg',
  //   alt: 'A child presenting a paper flower to her classmates during a show and tell circle',
  //   caption: 'Show and tell',
  //   category: 'learning',
  // },
  {
    src: '/images/moments/link-shapes-focus.jpeg',
    ratio: 0.75,
    alt: 'A child joining green plastic linking shapes together at a table',
    caption: 'Linking shapes into a chain',
    category: 'learning',
  },
  {
    src: '/images/art-and-coloring.jpg',
    ratio: 1.5,
    alt: 'Children colouring at a classroom table and holding up their finished drawings',
    caption: 'Art and colouring',
    category: 'learning',
  },
  {
    src: '/images/moments/link-shapes-building.jpeg',
    ratio: 0.75,
    alt: 'A child concentrating on connecting green linking shapes',
    caption: 'Working it out, quietly',
    category: 'learning',
  },
  {
    src: '/images/hero-curriculum.jpg',
    ratio: 1.935,
    alt: 'A child painting with a brush and poster colours beside a classmate',
    caption: 'Poster paints and steady hands',
    category: 'learning',
  },
  {
    src: '/images/moments/link-shapes-pair.jpeg',
    ratio: 1.333,
    alt: 'Two children building side by side with colourful plastic linking shapes',
    caption: 'Better with a partner',
    category: 'learning',
  },
  {
    src: '/images/music-and-movement.jpg',
    ratio: 1.501,
    alt: 'A child playing a musical instrument during a music session',
    caption: 'Music and movement',
    category: 'learning',
  },
  {
    src: '/images/moments/link-shapes-smiles.jpeg',
    ratio: 1.333,
    alt: 'Two children smiling over a table covered in coloured linking shapes',
    caption: 'The best part of a good activity',
    category: 'learning',
  },
  {
    src: '/images/hero-learning.jpg',
    ratio: 2.136,
    alt: 'Four children decorating painted tree outlines with fresh flowers on the lawn',
    caption: 'Nature collage on the lawn',
    category: 'learning',
  },
  {
    src: '/images/pretend-play-market.jpg',
    ratio: 1.5,
    alt: 'Children running a pretend market stall during dramatic play',
    caption: 'The classroom market opens for business',
    category: 'learning',
  },
  {
    src: '/images/gallery/library-reading.jpg',
    ratio: 1.45,
    alt: 'Two Olo Kinder children sharing a picture book at a table in the school library',
    caption: 'A book worth sharing',
    category: 'learning',
  },

  /* ── Play & Outdoors ──────────────────────────────────────────── */
  {
    src: '/images/playground-play.jpg',
    ratio: 2.299,
    alt: 'Children playing on the lawn and playground outside the Olo Kinder campus building',
    caption: 'Free play on the playground',
    category: 'play',
  },
  {
    src: '/images/outdoor-sports.jpg',
    ratio: 1.332,
    alt: 'Children playing an outdoor ball game together',
    caption: 'Outdoor games and sport',
    category: 'play',
  },
  {
    src: '/images/nature-discovery.jpg',
    ratio: 1.329,
    alt: 'A child examining a plant closely during a nature activity',
    caption: 'A closer look at a leaf',
    category: 'play',
  },
  {
    src: '/images/gallery/slide-climb.jpg',
    ratio: 0.75,
    alt: 'An Olo Kinder girl grinning as she climbs up the rock holds on the orange playground slide',
    caption: 'Up the slide, the hard way',
    category: 'play',
  },
  {
    src: '/images/gallery/rainy-day-umbrellas.jpg',
    ratio: 1.779,
    alt: 'Olo Kinder children in raincoats walking on the lawn with bright umbrellas in the rain',
    caption: 'Raincoats, umbrellas, and a rainy-day walk',
    category: 'play',
  },

  /* ── Events & Celebrations ────────────────────────────────────── */
  {
    src: '/images/moments/stage-microphone.jpeg',
    ratio: 0.563,
    alt: 'A child in festival dress speaking into a microphone on stage in front of her classmates',
    caption: 'Her turn at the microphone',
    category: 'events',
  },
  {
    src: '/images/moments/flag-painting.jpeg',
    ratio: 0.646,
    alt: 'Children around a round table painting Indian tricolour flags for Independence Day',
    caption: 'Painting flags for Independence Day',
    category: 'events',
  },
  {
    src: '/images/moments/action-song.jpeg',
    ratio: 0.563,
    alt: 'Three children in white dresses performing the actions to a song together',
    caption: 'Action song, all together now',
    category: 'events',
  },
  {
    src: '/images/moments/aviary-visit.jpeg',
    ratio: 0.748,
    alt: 'Children feeding parrots from a bowl during a visit to a bird aviary',
    caption: 'Feeding the parrots on a field trip',
    category: 'events',
  },
  {
    src: '/images/gallery/janmashtami-pot.jpg',
    ratio: 0.735,
    alt: 'A child dressed as Krishna reaching up with a stick to break the decorated pot on Janmashtami',
    caption: 'Reaching for the pot on Janmashtami',
    category: 'events',
  },
  {
    src: '/images/gallery/junior-chef-sandwich.jpg',
    ratio: 1.333,
    alt: 'A child in a chef hat and apron layering a sandwich on a steel plate during a junior chef session',
    caption: 'Junior chef at work',
    category: 'events',
  },
]
