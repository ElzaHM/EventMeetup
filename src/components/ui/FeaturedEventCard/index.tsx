import { Bookmark, Clock, MapPin } from 'lucide-react'

import { UI } from '@/constants/ui'

export interface FeaturedEventCardData {
  id: string
  title: string
  category: string
  date: string
  location: string
  attendeeCount: number
  imageUrl: string
}

interface FeaturedEventCardProps {
  event: FeaturedEventCardData
}

const categoryBadgeClass: Record<string, string> = {
  Technology: 'bg-indigo-100 text-indigo-700',
  Business: 'bg-blue-100 text-blue-700',
  Design: 'bg-violet-100 text-violet-700',
  Music: 'bg-pink-100 text-pink-700',
}

function formatEventDate(isoDate: string): string {
  return new Intl.DateTimeFormat('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
  }).format(new Date(isoDate))
}

function FeaturedEventCard({ event }: FeaturedEventCardProps) {
  const badgeClass =
    categoryBadgeClass[event.category] ?? 'bg-gray-100 text-gray-700'

  return (
    <article
      className={`min-w-0 overflow-hidden border border-[var(--border)] bg-[var(--surface)] shadow-sm ${UI.borderRadius.lg}`}
    >
      <div className="relative aspect-[16/9]">
        <img
          src={event.imageUrl}
          alt=""
          className="h-full w-full object-cover"
        />
        <span
          className={`absolute bottom-2 left-2 px-2 py-0.5 text-[10px] font-medium ${UI.borderRadius.md} ${badgeClass}`}
        >
          {event.category}
        </span>
      </div>

      <div className="space-y-2 p-3">
        <h3 className="line-clamp-2 text-sm font-semibold leading-snug text-[var(--text)]">
          {event.title}
        </h3>

        <div className="space-y-1 text-xs text-[var(--muted)]">
          <p className="flex items-center gap-1.5">
            <Clock size={12} className="shrink-0" />
            <span className="line-clamp-1">{formatEventDate(event.date)}</span>
          </p>
          <p className="flex items-center gap-1.5">
            <MapPin size={12} className="shrink-0" />
            <span className="line-clamp-1">{event.location}</span>
          </p>
        </div>

        <div className="flex items-center justify-between pt-0.5">
          <div className="flex items-center">
            <div className="flex -space-x-1.5">
              {['A', 'B', 'C', 'D'].map((initial, index) => (
                <span
                  key={initial}
                  className={`flex h-6 w-6 items-center justify-center rounded-full border-2 border-[var(--surface)] bg-[var(--primary)] text-[9px] font-medium text-white ${['z-40', 'z-30', 'z-20', 'z-10'][index]}`}
                >
                  {initial}
                </span>
              ))}
            </div>
            <span className="ml-1.5 text-[10px] font-medium text-[var(--muted)]">
              +{event.attendeeCount}
            </span>
          </div>

          <button
            type="button"
            aria-label="Bookmark event"
            className={`flex h-7 w-7 items-center justify-center rounded-md text-[var(--muted)] hover:bg-[var(--background)] hover:text-[var(--text)] ${UI.transition.default}`}
          >
            <Bookmark size={14} />
          </button>
        </div>
      </div>
    </article>
  )
}

export default FeaturedEventCard
