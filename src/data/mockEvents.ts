import type { Event } from '@/types/event.types'

export const mockEvents: Event[] = [
  {
    id: 'evt-001',
    title: 'AI & Future of Work Summit 2024',
    description:
      'Explore how artificial intelligence is reshaping industries, teams, and careers.',
    date: '2026-06-14T18:00:00.000Z',
    location: 'Convention Center, San Francisco',
    category: 'Technology',
    organizerId: 'org-101',
    attendeeCount: 186,
    imageUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800',
  },
  {
    id: 'evt-002',
    title: 'Startup Pitch Night',
    description: 'Early-stage founders present ideas to investors and mentors.',
    date: '2026-06-18T19:00:00.000Z',
    location: 'Innovation Hub, Austin',
    category: 'Business',
    organizerId: 'org-102',
    attendeeCount: 94,
    imageUrl: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800',
  },
  {
    id: 'evt-003',
    title: 'UX Design Workshop',
    description: 'Hands-on session covering research, wireframes, and prototyping.',
    date: '2026-06-22T10:00:00.000Z',
    location: 'Studio 42, Berlin',
    category: 'Design',
    organizerId: 'org-103',
    attendeeCount: 48,
    imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800',
  },
  {
    id: 'evt-004',
    title: 'Indie Music Festival',
    description: 'A full day of live performances from emerging artists.',
    date: '2026-07-01T16:00:00.000Z',
    location: 'Riverside Park, Portland',
    category: 'Music',
    organizerId: 'org-104',
    attendeeCount: 320,
    imageUrl: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800',
  },
]
