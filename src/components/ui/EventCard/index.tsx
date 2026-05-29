import React from 'react';
import { Card, Tag, Avatar, Space, Typography } from 'antd';
import { CalendarOutlined, EnvironmentOutlined, HeartOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

// Import CSS
import './style.css';

// --- Types (Միացված են այստեղ) ---
export interface EventData {
  id: string;
  title: string;
  date: string;
  location: string;
  imageUrl: string;
  category: string;
  price: string;
  attendees: number;
}

export interface EventCardProps {
  event: EventData;
}

const { Title, Text } = Typography;

// --- Component Logic ---
const EventCard: React.FC<EventCardProps> = ({ event }) => {
  return (
    <Link to={`/events/${event.id}`}>
      <Card
        hoverable
        className="event-card-main"
        cover={
          <div className="card-cover-wrapper">
            <img
              alt={event.title}
              src={event.imageUrl}
              className="card-cover-img"
            />
            <Tag className="card-category-tag">
              {event.category.toUpperCase()}
            </Tag>
            <div className="wishlist-heart-btn">
              <HeartOutlined className="heart-icon" />
            </div>
          </div>
        }
      >
        <Title level={5} className="event-card-title">
          {event.title}
        </Title>

        <Space direction="vertical" size={6} style={{ width: '100%' }}>
          <Text className="info-text">
            <CalendarOutlined className="info-icon" />
            {event.date}
          </Text>
          <Text className="info-text">
            <EnvironmentOutlined className="info-icon" />
            {event.location}
          </Text>
        </Space>

        <div className="card-footer">
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Avatar.Group size="small">
              <Avatar src="https://i.pravatar.cc/100?img=11" />
              <Avatar src="https://i.pravatar.cc/100?img=12" />
              <Avatar src="https://i.pravatar.cc/100?img=13" />
            </Avatar.Group>
            <Text className="attendee-count">+{event.attendees}</Text>
          </div>
          
          <Text className={`event-price-tag ${event.price === 'Free' ? 'price-free' : 'price-paid'}`}>
            {event.price}
          </Text>
        </div>
      </Card>
    </Link>
  );
};

export default EventCard;