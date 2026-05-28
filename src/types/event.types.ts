export interface Event {
  id: string
  title: string
  description: string
  date: string
  location: string
  category: string
  organizerId: string
  attendeeCount: number
  imageUrl?: string
}
