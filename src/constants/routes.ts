export const ROUTES = {
  HOME: '/',
  EVENTS: '/events',
  EVENT_DETAILS: '/events/:id',
  LOGIN: '/login',
  REGISTER: '/register',
  PROFILE: '/profile',
  CREATE_EVENT: '/create-event',
} as const

export type RoutePath = (typeof ROUTES)[keyof typeof ROUTES]

export function eventDetailsPath(id: string): string {
  return `/events/${id}`
}
