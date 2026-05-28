import { Calendar, Heart, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'

import type { Event } from '@/types/event.types'

interface EventCardProps {
  event: Event
}

function EventCard({ event }: EventCardProps) {
  return (
    <div className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:shadow-xl">
      <div className="relative h-40 w-full overflow-hidden">
        <img
          src={event.imageUrl}
          alt={event.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        <div className="absolute top-4 left-4 rounded-lg bg-blue-600 px-3 py-1 text-[10px] font-bold tracking-wider text-white uppercase shadow-lg">
          {event.category}
        </div>

        <button className="absolute top-4 right-4 rounded-full bg-white/20 p-2 text-white shadow-md backdrop-blur-md transition-all hover:bg-white hover:text-red-500">
          <Heart size={18} className="fill-current" />
        </button>
      </div>

      <div className="flex flex-grow flex-col p-5">
        <h3 className="mb-3 line-clamp-2 text-lg font-bold leading-tight text-gray-900 transition-colors group-hover:text-blue-600">
          {event.title}
        </h3>

        <p className="mb-4 line-clamp-2 text-sm text-gray-500">
          {event.description}
        </p>

        <div className="space-y-2.5">
          <div className="flex items-center text-xs font-semibold text-gray-500">
            <Calendar size={15} className="mr-2 text-blue-500" />
            {new Date(event.date).toLocaleDateString()}
          </div>

          <div className="flex items-center text-xs font-semibold text-gray-500">
            <MapPin size={15} className="mr-2 text-blue-500" />
            {event.location}
          </div>
        </div>

        <div className="mt-auto flex items-center justify-between border-t border-gray-50 pt-4">
          <div className="flex items-center">
            <div className="mr-3 flex -space-x-2.5">
              {[1, 2, 3].map((i) => (
                <img
                  key={i}
                  className="h-8 w-8 rounded-full border-2 border-white object-cover shadow-sm"
                  src={`https://i.pravatar.cc/100?img=${i + 20}`}
                  alt="attendee"
                />
              ))}
            </div>

            <span className="text-[11px] font-black text-gray-400">
              +{event.attendeeCount}
            </span>
          </div>

          <span className="text-sm font-black text-blue-600">
            Free
          </span>
        </div>
      </div>

      <Link to={`/events/${event.id}`} className="absolute inset-0 z-10" />
    </div>
  )
}

export default EventCard