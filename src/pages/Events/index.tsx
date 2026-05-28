import { Search, MapPin, ChevronDown } from 'lucide-react'

import EventCard from '@/components/ui/EventCard'
import { mockEvents } from '@/data/mockEvents'

const CATEGORIES = [
  'All Categories',
  'Technology',
  'Business',
  'Design',
  'Music',
  'Health',
  'Startup',
  'Education',
]

function Events() {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <div className="mx-auto w-full max-w-[1400px] px-4 py-10 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="mb-2 text-3xl font-black text-gray-900">
            Discover Events
          </h1>

          <p className="text-xs text-gray-500">
            Find events that match your interests and connect with amazing people.
          </p>
        </div>

        {/* Search & Categories */}
        <div className="mb-8 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm">
          <div className="mb-4 flex flex-col gap-4 md:flex-row">
            <div className="relative flex-1">
              <Search
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                size={18}
              />

              <input
                type="text"
                placeholder="Search events..."
                className="w-full rounded-xl bg-gray-50 py-2.5 pl-11 pr-4 text-sm outline-none"
              />
            </div>

            <div className="flex gap-3">
              <div className="relative min-w-[150px]">
                <MapPin
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  size={16}
                />

                <select className="w-full appearance-none rounded-xl bg-gray-50 py-2.5 pl-10 pr-8 text-xs font-semibold text-gray-600 outline-none">
                  <option>Location</option>
                </select>

                <ChevronDown
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
                  size={14}
                />
              </div>

              <button className="rounded-xl bg-blue-600 px-6 py-2.5 text-sm font-bold text-white transition-all hover:bg-blue-700">
                Find Events
              </button>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat, i) => (
              <button
                key={cat}
                className={`rounded-full px-4 py-1.5 text-[10px] font-bold transition-all ${
                  i === 0
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-8 lg:flex-row">
          {/* Sidebar */}
          <aside className="w-full shrink-0 lg:w-52">
            <div className="space-y-6 lg:sticky lg:top-10">
              <div>
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-sm font-bold text-gray-900">Filters</h3>

                  <button className="text-[10px] font-bold text-blue-600">
                    Reset all
                  </button>
                </div>

                <div className="space-y-5">
                  <div>
                    <span className="mb-3 block text-[9px] font-black uppercase tracking-widest text-gray-400">
                      Date
                    </span>

                    <div className="space-y-2">
                      {['All Dates', 'Today', 'This Week', 'This Month'].map(
                        (d) => (
                          <label
                            key={d}
                            className="group flex cursor-pointer items-center"
                          >
                            <input
                              type="radio"
                              name="date"
                              className="h-3.5 w-3.5 text-blue-600"
                            />

                            <span className="ml-2 text-[12px] text-gray-600 group-hover:text-gray-900">
                              {d}
                            </span>
                          </label>
                        ),
                      )}
                    </div>
                  </div>

                  <div>
                    <span className="mb-3 block text-[9px] font-black uppercase tracking-widest text-gray-400">
                      Price
                    </span>

                    <div className="space-y-2">
                      {['Free', 'Paid'].map((p) => (
                        <label
                          key={p}
                          className="group flex cursor-pointer items-center"
                        >
                          <input
                            type="checkbox"
                            className="h-3.5 w-3.5 rounded text-blue-600"
                          />

                          <span className="ml-2 text-[12px] text-gray-600 group-hover:text-gray-900">
                            {p}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <button className="w-full rounded-xl bg-blue-600 py-3 text-xs font-bold text-white">
                Apply Filters
              </button>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            <div className="mb-6 flex items-center justify-between">
              <p className="text-xs text-gray-500">
                {mockEvents.length} events found
              </p>

              <div className="cursor-pointer text-xs font-bold text-gray-700">
                Sort by:
                <span className="ml-1 text-blue-600 underline">
                  Recommended
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {mockEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}

export default Events