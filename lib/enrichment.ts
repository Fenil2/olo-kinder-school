// Content on these pages is taken verbatim from olokinder.com
// (/enrichment-programme-for-teachers/, -for-parents/, -for-students/).
// The photographs are the same files the source pages serve, re-hosted on
// Cloudinary.

import type { IconType } from 'react-icons'
import {
  MdForum,
  MdFavorite,
  MdGroups,
  MdLightbulb,
  MdMenuBook,
  MdPalette,
  MdPsychology,
  MdPublic,
  MdRestaurant,
  MdScience,
  MdSchool,
  MdTheaterComedy,
  MdTrendingUp,
} from 'react-icons/md'

/**
 * Which character's colour a card wears. The four names match the mascot
 * tokens in globals.css; the class strings live in the component, because
 * Tailwind only keeps classes it can see written out in full.
 */
export type Accent = 'roundy' | 'squarey' | 'starry' | 'hexy'

export interface Point {
  text: string
  Icon: IconType
  accent: Accent
}

/** A verbatim lead-in line from the source page, with the points it introduces. */
export interface PointGroup {
  heading: string
  points: Point[]
}

export interface Photo {
  src: string
  alt: string
}

/**
 * One photograph behind the page's opening band.
 *
 * These pages open with the same full-bleed banner the home page uses, so
 * every file has to be banner grade: wide, and large enough to cross a
 * desktop without softening. The programme's own gallery photographs are not
 * — they are 400-600px with a decorative blob painted into the PNG, which a
 * full-bleed crop cuts through — so the banners are their own set of
 * untouched originals, named `<page>-banner-*` on Cloudinary.
 * The numbered names are the original three per page; anything added since
 * is named for what it shows, since the numbers no longer track the order.
 *
 * `lift` is the same correction the home banner applies. These originals were
 * not graded dark the way the main library's stills were, so the corrections
 * here are small: a nudge of brightness on the indoor frames and a little
 * saturation on the flat, overcast ones.
 */
export interface Banner extends Photo {
  lift: string
  /**
   * Which part of the still the band's crop keeps, as a Tailwind
   * `object-position` class. Defaults to `object-center`.
   *
   * The band is much wider than these originals are, so `object-cover` throws
   * away most of their height. Where the subject does not sit in the middle
   * of the frame, naming a lower percentage moves the crop up the photograph
   * — which shows the picture sitting further down inside the band.
   */
  position?: string
}

export interface EnrichmentPage {
  slug: string
  /** Label for the sub-nav pills. */
  navLabel: string
  title: string
  /** Rendered in the accent colour after `title`. */
  titleAccent: string
  /** The stills behind the opening band, in the order they cycle. */
  banners: Banner[]
  /**
   * The portrait beside the programme copy.
   *
   * The files olokinder.com serves for these have a decorative frame — a flat
   * colour blob and a coral outline — painted into the PNG itself. That frame
   * is not ours and cannot be restyled, so the photograph is cropped free of
   * it and re-framed in the house blob at the point of use. The originals are
   * kept alongside, under their upstream names.
   */
  portrait: Photo
  groups: PointGroup[]
  gallery: Photo[]
}

export const forTeachers: EnrichmentPage = {
  slug: 'for-teachers',
  navLabel: 'For Teachers',
  title: 'Enrichment Programmes',
  titleAccent: 'For Teachers',
  // The orientation the year opens with, and the staff the programme is run
  // for. The two older session frames — the full hall and the circle it
  // breaks into — were dropped.
  banners: [
  
    {
      // Shot flat under an overcast sky, so this one takes a large lift —
      // most of it in saturation, to bring the sarees back.
      src: 'https://res.cloudinary.com/xscf9i08/image/upload/Goal-bg',
      alt: 'The Olo Kinder teaching staff lined up together outside the school',
      lift: 'brightness-[1.05] saturate-[1.08]',
      // A little above centre, so the group sits lower in the band and the
      // building behind them comes back into the top of the frame.
      position: 'object-[center_35%]',
    },
  ],
  portrait: {
    src: 'https://res.cloudinary.com/xscf9i08/image/upload/teachers-portrait',
    alt: 'A trainer addressing a hall of teachers at an Olo Kinder workshop',
  },
  groups: [
    {
      heading: 'Enrichment programmes for teachers are designed',
      points: [
        {
          text: 'To enhance their professional growth',
          Icon: MdTrendingUp,
          accent: 'roundy',
        },
        {
          text: 'To equip teachers with innovative teaching strategies, using advanced pedagogical skills',
          Icon: MdLightbulb,
          accent: 'starry',
        },
      ],
    },
    {
      heading: 'These programmes offer opportunities for',
      points: [
        {
          text: 'Collaborative learning and sharing of best practices',
          Icon: MdGroups,
          accent: 'squarey',
        },
        {
          text: 'Acquiring expertise in storytelling, puppetry, and phonics, through hands-on workshops',
          Icon: MdTheaterComedy,
          accent: 'hexy',
        },
        {
          text: 'Interaction with experts to gain access to the latest educational research',
          Icon: MdSchool,
          accent: 'roundy',
        },
      ],
    },
  ],
  // No gallery band on this page — the portrait above is the one photograph
  // it needs, so `for-teachers/page.tsx` leaves `GallerySection` out.
  gallery: [],
}

export const forParents: EnrichmentPage = {
  slug: 'for-parents',
  navLabel: 'For Parents',
  title: 'Enrichment Programmes',
  titleAccent: 'For Parents',
  // Grown-ups and children together, which is what these programmes are for.
  // The courtyard game and the orientation frame were both dropped; the one
  // that stays is a mother and son on stage.
  banners: [
    {
      src: 'https://res.cloudinary.com/xscf9i08/image/upload/parents-banner-2',
      alt: 'A mother and her son receiving a prize on stage at the Mom & Kids celebration',
      lift: 'brightness-[1.02] saturate-[1.02]',
    },
  ],
  portrait: {
    src: 'https://res.cloudinary.com/xscf9i08/image/upload/parents-portrait',
    alt: 'A mother and her daughter behind a decorated Mom & Kids photo frame',
  },
  groups: [
    {
      heading: 'These programmes offer workshops, seminars, and interactive sessions on',
      points: [
        {
          text: 'Nutrition and healthy-eating habits',
          Icon: MdRestaurant,
          accent: 'squarey',
        },
        {
          text: 'Effective communication between a parent and a child',
          Icon: MdForum,
          accent: 'hexy',
        },
        {
          text: 'Guiding children towards good behaviour',
          Icon: MdFavorite,
          accent: 'roundy',
        },
        {
          text: 'Fostering a love for learning at home',
          Icon: MdMenuBook,
          accent: 'starry',
        },
      ],
    },
  ],
  gallery: [
    { src: 'https://res.cloudinary.com/xscf9i08/image/upload/p1', alt: 'Parents gathered around a display of craft work in the garden' },
    { src: 'https://res.cloudinary.com/xscf9i08/image/upload/p2', alt: 'A family cooking together during a healthy-eating session' },
    { src: 'https://res.cloudinary.com/xscf9i08/image/upload/p3', alt: 'A father walking his child in to school past a decorated table' },
    { src: 'https://res.cloudinary.com/xscf9i08/image/upload/p4', alt: 'Parents and their child working on a craft project at a table' },
    { src: 'https://res.cloudinary.com/xscf9i08/image/upload/p5', alt: 'A mother and daughter posing at the flower-decorated Mom & Kids frame' },
    { src: 'https://res.cloudinary.com/xscf9i08/image/upload/p6', alt: 'A mother and daughter making a flower pattern together in class' },
    { src: 'https://res.cloudinary.com/xscf9i08/image/upload/p7', alt: 'Families taking part in a group game in the school courtyard' },
    { src: 'https://res.cloudinary.com/xscf9i08/image/upload/p8', alt: 'A speaker addressing parents at a school gathering' },
  ],
}

export const forStudents: EnrichmentPage = {
  slug: 'for-students',
  navLabel: 'For Students',
  title: 'Enrichment Programmes',
  titleAccent: 'For Students',
  // Two of the things the copy below promises: something made, and something
  // made outdoors.
  banners: [
    {
      src: 'https://res.cloudinary.com/xscf9i08/image/upload/students-banner-1',
      alt: 'Six children holding hand-made weather cut-outs — a flower, a cloud, rain and the sun',
      lift: 'brightness-[1.02] saturate-[1.03]',
    },
    {
      src: 'https://res.cloudinary.com/xscf9i08/image/upload/students-banner-2',
      alt: 'Four children making flower trees at a garden table in the school grounds',
      lift: 'brightness-[1.02] saturate-[1.02]',
    },
  ],
  portrait: {
    src: 'https://res.cloudinary.com/xscf9i08/image/upload/students-portrait',
    alt: 'A child presenting in front of a hand-painted nature backdrop',
  },
  groups: [
    {
      heading: 'Enrichment programmes for young students are designed to',
      points: [
        {
          text: 'Extend learning in indigenous scenarios',
          Icon: MdPublic,
          accent: 'squarey',
        },
        {
          text: 'Foster creativity, critical thinking, and pathways for autonomous learning through inquiry and discovery',
          Icon: MdPsychology,
          accent: 'hexy',
        },
        {
          text: 'Create an ardent passion for art and music',
          Icon: MdPalette,
          accent: 'roundy',
        },
        {
          text: 'Build a scientific temper through STEM and STEAM activities',
          Icon: MdScience,
          accent: 'starry',
        },
      ],
    },
  ],
  gallery: [
    { src: 'https://res.cloudinary.com/xscf9i08/image/upload/s3', alt: 'Children holding hand-made weather cut-outs — a flower, a cloud, rain and the sun' },
    { src: 'https://res.cloudinary.com/xscf9i08/image/upload/s1', alt: 'Children examining the leaves of a young tree in the school grounds' },
    { src: 'https://res.cloudinary.com/xscf9i08/image/upload/s2', alt: 'Children matching picture cards together at a classroom table' },
    { src: 'https://res.cloudinary.com/xscf9i08/image/upload/s4', alt: 'Two children looking closely at flowering shrubs on a nature walk' },
    { src: 'https://res.cloudinary.com/xscf9i08/image/upload/s5', alt: 'A full class seated on the floor for a whole-group session with their teachers' },
  ],
}

export const enrichmentPages: EnrichmentPage[] = [forTeachers, forParents, forStudents]
