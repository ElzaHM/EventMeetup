export interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  image: string;
  category: string;
  price: string;
  attendees: number;
}

export const MOCK_EVENTS: Event[] = [
  {
    id: '1',
    title: 'AI & Future of Work Summit 2024',
    date: 'May 25 • 9:00 AM',
    location: 'San Francisco, CA',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800',
    category: 'Technology',
    price: 'Free',
    attendees: 142
  },
  {
    id: '2',
    title: 'Founders Networking Night',
    date: 'May 26 • 6:30 PM',
    location: 'New York, NY',
    image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=800',
    category: 'Business',
    price: '$15',
    attendees: 86
  },
  {
    id: '3',
    title: 'Product Design Workshop',
    date: 'May 28 • 2:00 PM',
    location: 'Remote',
    image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=800',
    category: 'Design',
    price: 'Free',
    attendees: 42
  },
  {
    id: '4',
    title: 'Indie Music Festival',
    date: 'May 30 • 5:00 PM',
    location: 'Austin, TX',
    image: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Music',
    price: '$25',
    attendees: 223
  }
];