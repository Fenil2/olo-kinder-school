// Content on these pages is taken verbatim from olokinder.com
// (/enrichment-programme-for-teachers/, -for-parents/, -for-students/).
// The photographs are the same files the source pages serve, re-hosted under
// /images/enrichment/.

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

export interface EnrichmentPage {
  slug: string
  /** Label for the sub-nav pills. */
  navLabel: string
  title: string
  /** Rendered in the accent colour after `title`. */
  titleAccent: string
  /** The source page's opening paragraph, where it has one. */
  lead?: string
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
  portrait: {
    src: '/images/enrichment/teachers-portrait.png',
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
  gallery: [
    {
      src: '/images/enrichment/teachers-workshop.png',
      alt: 'Teachers making teaching aids together at a hands-on craft workshop',
    },
  ],
}

export const forParents: EnrichmentPage = {
  slug: 'for-parents',
  navLabel: 'For Parents',
  title: 'Enrichment Programmes',
  titleAccent: 'For Parents',
  lead: 'Enrichment programmes for parents provide valuable resources through collaborative conventions to support them actively in their child’s learning and holistic development.',
  portrait: {
    src: '/images/enrichment/parents-portrait.png',
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
    { src: '/images/enrichment/p1.png', alt: 'Parents gathered around a display of craft work in the garden' },
    { src: '/images/enrichment/p2.png', alt: 'A family cooking together during a healthy-eating session' },
    { src: '/images/enrichment/p3.png', alt: 'A father walking his child in to school past a decorated table' },
    { src: '/images/enrichment/p4.png', alt: 'Parents and their child working on a craft project at a table' },
    { src: '/images/enrichment/p5.png', alt: 'A mother and daughter posing at the flower-decorated Mom & Kids frame' },
    { src: '/images/enrichment/p6.png', alt: 'A mother and daughter making a flower pattern together in class' },
    { src: '/images/enrichment/p7.png', alt: 'Families taking part in a group game in the school courtyard' },
    { src: '/images/enrichment/p8.png', alt: 'A speaker addressing parents at a school gathering' },
  ],
}

export const forStudents: EnrichmentPage = {
  slug: 'for-students',
  navLabel: 'For Students',
  title: 'Enrichment Programmes',
  titleAccent: 'For Students',
  portrait: {
    src: '/images/enrichment/students-portrait.png',
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
    { src: '/images/enrichment/s3.png', alt: 'Children holding hand-made weather cut-outs — a flower, a cloud, rain and the sun' },
    { src: '/images/enrichment/s1.png', alt: 'Children examining the leaves of a young tree in the school grounds' },
    { src: '/images/enrichment/s2.png', alt: 'Children matching picture cards together at a classroom table' },
    { src: '/images/enrichment/s4.png', alt: 'Two children looking closely at flowering shrubs on a nature walk' },
    { src: '/images/enrichment/s5.png', alt: 'A full class seated on the floor for a whole-group session with their teachers' },
  ],
}

export const enrichmentPages: EnrichmentPage[] = [forTeachers, forParents, forStudents]
