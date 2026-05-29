<<<<<<< Updated upstream
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
=======
// import React from 'react';
// import { Card, Tag, Avatar, Space, Typography } from 'antd';
// import { CalendarOutlined,EnvironmentOutlined, HeartOutlined } from '@ant-design/icons';

// const { Text, Title } = Typography;

// const EventCard = ({ event }: { event: any }) => {
//   return (
//     <Card
//       hoverable
//       style={{ borderRadius: 16, overflow: 'hidden', border: '1px solid #F1F5F9' }}
//       bodyStyle={{ padding: '16px' }}
//       cover={
//         <div style={{ position: 'relative', height: 150 }}>
//           <img
//             alt="event"
//             src={event.imageUrl}
//             style={{ width: '100%', height: '100%', objectFit: 'cover' }}
//           />
//           <Tag 
//             color="blue" 
//             style={{ position: 'absolute', top: 12, left: 12, borderRadius: 6, border: 'none', fontWeight: 600, fontSize: 10 }}
//           >
//             {event.category.toUpperCase()}
//           </Tag>
//           <div style={{ position: 'absolute', top: 12, right: 12, background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(4px)', padding: '6px', borderRadius: '50%', cursor: 'pointer' }}>
//             <HeartOutlined style={{ color: 'white' }} />
//           </div>
//         </div>
//       }
//     >
//       <Title level={5} style={{ fontSize: 14, marginBottom: 12, height: 40 }} ellipsis={{ rows: 2 }}>
//         {event.title}
//       </Title>

//       <Space direction="vertical" size={4} style={{ width: '100%', marginBottom: 16 }}>
//         <Space style={{ fontSize: 11, color: '#64748B' }}>
//           <CalendarOutlined style={{ color: '#5D5FEF' }} />
//           {event.date}
//         </Space>
//         <Space style={{ fontSize: 11, color: '#64748B' }}>
//           <EnvironmentOutlined style={{ color: '#5D5FEF' }} />
//           {event.location}
//         </Space>
//       </Space>

//       <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 12, borderTop: '1px solid #F1F5F9' }}>
//         <Space size={-8}>
//           <Avatar src="https://i.pravatar.cc/100?img=1" size="small" border-2 />
//           <Avatar src="https://i.pravatar.cc/100?img=2" size="small" />
//           <Avatar src="https://i.pravatar.cc/100?img=3" size="small" />
//           <Text style={{ fontSize: 10, color: '#94A3B8', marginLeft: 12 }}>+{event.attendees}</Text>
//         </Space>
//         <Text strong style={{ color: event.price === 'Free' ? '#10B981' : '#5D5FEF', fontSize: 13 }}>
//           {event.price}
//         </Text>
//       </div>
//     </Card>
//   );
// };

// export default EventCard;
>>>>>>> Stashed changes
