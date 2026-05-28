import React from 'react';
import { Calendar, MapPin, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

interface EventCardProps {
  event: {
    id: string;
    title: string;
    date: string;
    location: string;
    image: string;
    category: string;
    price: string;
    attendees: number;
  };
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  return (
    <div className="!group !bg-white !rounded-3xl !border !border-gray-100 !shadow-sm hover:!shadow-xl !transition-all !duration-300 !overflow-hidden !flex !flex-col !relative !h-full">
      
      {/* Image Section */}
      <div className="!relative !h-40 !w-full !overflow-hidden">
        <img 
          src={event.image} 
          alt={event.title} 
          className="!w-full !h-full !object-cover group-hover:!scale-110 !transition-transform !duration-500"
        />
        
        {/* Category Badge */}
        <div className="!absolute !top-4 !left-4 !bg-blue-600 !text-white !text-[10px] !font-bold !px-3 !py-1 !rounded-lg !uppercase !tracking-wider !shadow-lg">
          {event.category}
        </div>

        {/* Heart/Wishlist Button */}
        <button className="!absolute !top-4 !right-4 !p-2 !bg-white/20 !backdrop-blur-md !rounded-full !text-white hover:!bg-white hover:!text-red-500 !transition-all !shadow-md">
          <Heart size={18} className="!fill-current" />
        </button>
      </div>

      {/* Content Section */}
      <div className="!p-5 !flex !flex-col !flex-grow">
        <h3 className="!text-lg !font-bold !text-gray-900 !mb-3 !line-clamp-2 !leading-tight group-hover:!text-blue-600 !transition-colors">
          {event.title}
        </h3>
        
        <div className="!space-y-2.5">
          <div className="!flex !items-center !text-gray-500 !text-xs !font-semibold">
            <Calendar size={15} className="!mr-2 !text-blue-500" />
            {event.date}
          </div>
          <div className="!flex !items-center !text-gray-500 !text-xs !font-semibold">
            <MapPin size={15} className="!mr-2 !text-blue-500" />
            {event.location}
          </div>
        </div>

        {/* Card Footer: Attendees & Price */}
        <div className="!mt-auto !pt-4 !border-t !border-gray-50 !flex !items-center !justify-between">
          <div className="!flex !items-center">
            <div className="!flex !-space-x-2.5 !mr-3">
              {[1, 2, 3].map((i) => (
                <img 
                  key={i}
                  className="!w-8 !h-8 !rounded-full !border-2 !border-white !object-cover !shadow-sm"
                  src={`https://i.pravatar.cc/100?img=${i + 20}`}
                  alt="attendee"
                />
              ))}
            </div>
            <span className="!text-[11px] !text-gray-400 !font-black">+{event.attendees}</span>
          </div>
          
          <div className="!text-right">
            <span className={`!text-sm !font-black ${event.price === 'Free' ? '!text-green-500' : '!text-blue-600'}`}>
              {event.price}
            </span>
          </div>
        </div>
      </div>
      
      {/* Invisible Overlay Link - Makes the whole card clickable */}
      <Link to={`/events/${event.id}`} className="!absolute !inset-0 !z-10" />
    </div>
  );
};

export default EventCard;