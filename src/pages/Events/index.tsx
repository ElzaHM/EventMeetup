import React from 'react';
import { Search, MapPin, ChevronDown } from 'lucide-react';
import EventCard from '../../components/ui/EventCard';
import { MOCK_EVENTS } from '../../data/mockEvents';

const CATEGORIES = ['All Categories', 'Technology', 'Business', 'Design', 'Music', 'Health', 'Startup', 'Education'];

const Events = () => {
  return (
    <div className="!min-h-screen !bg-[#F8FAFC]">
      <div className="!max-w-[1400px] !mx-auto !px-6 !py-10">
        
        {/* Header */}
        <div className="!mb-8">
          <h1 className="!text-3xl !font-black !text-gray-900 !mb-2">Discover Events</h1>
          <p className="!text-gray-500 !text-xs">Find events that match your interests and connect with amazing people.</p>
        </div>

        {/* Search & Categories */}
        <div className="!bg-white !p-4 !rounded-2xl !shadow-sm !border !border-gray-100 !mb-8">
          <div className="!flex !flex-col md:!flex-row !gap-4 !mb-4">
            <div className="!flex-1 !relative">
              <Search className="!absolute !left-4 !top-1/2 !-translate-y-1/2 !text-gray-400" size={18} />
              <input type="text" placeholder="Search events..." className="!w-full !pl-11 !pr-4 !py-2.5 !rounded-xl !bg-gray-50 !outline-none !text-sm" />
            </div>
            <div className="!flex !gap-3">
              <div className="!relative !min-w-[150px]">
                <MapPin className="!absolute !left-4 !top-1/2 !-translate-y-1/2 !text-gray-400" size={16} />
                <select className="!w-full !pl-10 !pr-8 !py-2.5 !rounded-xl !bg-gray-50 !appearance-none !outline-none !font-semibold !text-xs !text-gray-600">
                  <option>Location</option>
                </select>
                <ChevronDown className="!absolute !right-4 !top-1/2 !-translate-y-1/2 !text-gray-400" size={14} />
              </div>
              <button className="!bg-blue-600 !text-white !px-6 !py-2.5 !rounded-xl !font-bold !text-sm hover:!bg-blue-700 !transition-all">
                Find Events
              </button>
            </div>
          </div>
          <div className="!flex !flex-wrap !gap-2">
            {CATEGORIES.map((cat, i) => (
              <button key={cat} className={`!px-4 !py-1.5 !rounded-full !text-[10px] !font-bold !transition-all ${i === 0 ? '!bg-blue-600 !text-white' : '!bg-gray-100 !text-gray-500 hover:!bg-gray-200'}`}>
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="!flex !flex-col lg:!flex-row !gap-8">
          {/* Small Sidebar */}
          <aside className="!w-full lg:!w-52 !shrink-0">
            <div className="lg:!sticky lg:!top-10 !space-y-6">
              <div>
                <div className="!flex !justify-between !items-center !mb-4">
                  <h3 className="!font-bold !text-gray-900 !text-sm">Filters</h3>
                  <button className="!text-[10px] !text-blue-600 !font-bold">Reset all</button>
                </div>
                <div className="!space-y-5">
                  <div>
                    <span className="!text-[9px] !font-black !text-gray-400 !uppercase !tracking-widest !block !mb-3">Date</span>
                    <div className="!space-y-2">
                      {['All Dates', 'Today', 'This Week', 'This Month'].map(d => (
                        <label key={d} className="!flex !items-center !cursor-pointer !group">
                          <input type="radio" name="date" className="!w-3.5 !h-3.5 !text-blue-600" />
                          <span className="!ml-2 !text-[12px] !text-gray-600 group-hover:!text-gray-900">{d}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  <div>
                    <span className="!text-[9px] !font-black !text-gray-400 !uppercase !tracking-widest !block !mb-3">Price</span>
                    <div className="!space-y-2">
                      {['Free', 'Paid'].map(p => (
                        <label key={p} className="!flex !items-center !cursor-pointer !group">
                          <input type="checkbox" className="!w-3.5 !h-3.5 !rounded !text-blue-600" />
                          <span className="!ml-2 !text-[12px] !text-gray-600 group-hover:!text-gray-900">{p}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <button className="!w-full !bg-blue-600 !text-white !py-3 !rounded-xl !font-bold !text-xs">
                Apply Filters
              </button>
            </div>
          </aside>

          {/* Main Content with 4 columns on XL */}
          <main className="!flex-1">
            <div className="!flex !justify-between !items-center !mb-6">
              <p className="!text-xs !text-gray-500">1,234 events found</p>
              <div className="!flex !items-center !text-xs !font-bold !text-gray-700 cursor-pointer">
                Sort by: <span className="!text-blue-600 !ml-1 !underline">Recommended</span>
              </div>
            </div>
            
            <div className="!grid !grid-cols-1 md:!grid-cols-2 lg:!grid-cols-3 xl:!grid-cols-4 !gap-6">
              {MOCK_EVENTS.map(event => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Events;