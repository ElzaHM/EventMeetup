import type { Event } from '@/types/event.types'

export const mockEvents: Event[] = [
  {
    id: 'evt-001',
    title: 'Yerevan Tech Meetup',
    description:
      'Monthly gathering for developers, designers, and product folks to share talks, demos, and networking.',
    date: '2026-06-14T18:00:00.000Z',
    location: 'Tumo Center, Yerevan',
    category: 'Technology',
    organizerId: 'org-101',
    attendeeCount: 84,
    imageUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800',
  },
  {
    id: 'evt-002',
    title: 'Armenian Wine Tasting Evening',
    description:
      'Guided tasting of regional wines with local sommeliers and paired appetizers.',
    date: '2026-06-21T19:30:00.000Z',
    location: 'In Vino Veritas, Yerevan',
    category: 'Food & Drink',
    organizerId: 'org-102',
    attendeeCount: 42,
    imageUrl: 'https://images.unsplash.com/photo-1510812431401-41e2bd2724f3?w=800',
  },
  {
    id: 'evt-003',
    title: 'Community Hiking Day — Mount Aragats',
    description:
      'Beginner-friendly group hike with safety briefing, packed lunch stop, and photo walk at the summit area.',
    date: '2026-07-05T07:00:00.000Z',
    location: 'Aragats Village Trailhead',
    category: 'Outdoors',
    organizerId: 'org-103',
    attendeeCount: 31,
    imageUrl: 'https://images.unsplash.com/photo-1551632811-534143df58df?w=800',
  },
]
