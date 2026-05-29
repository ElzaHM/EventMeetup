import React from 'react';
<<<<<<< Updated upstream
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
=======
import { Layout, Input, Select, Button, Row, Col, Radio, Checkbox, Space, Typography, Pagination, Card } from 'antd';
import { SearchOutlined, EnvironmentOutlined, DownOutlined } from '@ant-design/icons';

// Local Imports
import './style.css';
import { 
    CATEGORIES, 
    DATE_FILTERS, 
    EVENT_TYPES, 
    PRICE_FILTERS, 
    LOCATION_OPTIONS 
} from './constants';
import { mockEvents } from '../../data/mockEvents';
import EventCard from '../../components/ui/EventCard/index';
import IventCardBg from '../../assets/IventCardBg.png';

const { Sider, Content } = Layout;
const { Title, Text } = Typography;

const EventsPage: React.FC = () => {
  return (
    <Layout className="events-page-wrapper">
      <div className="events-container">
        
        {/* Banner Section */}
        <div className="events-header">
          <div className="hero-text-side">
            <Title level={1} className="page-main-title">Discover Events</Title>
            <Text className="hero-subtext">Find events that match your interests and connect with amazing people.</Text>
          </div>
          <img src={IventCardBg} alt="Illustration" className="events-banner-img" />
        </div>

        {/* Search Bar & Categories Card */}
        <Card className="events-search-card">
          <Row gutter={16} align="middle">
            <Col flex="auto">
              <Input 
                placeholder="Search events..." 
                prefix={<SearchOutlined style={{ color: '#94A3B8' }} />} 
                className="custom-search-input"
              />
            </Col>
            <Col>
              <div className="location-wrapper">
                <EnvironmentOutlined style={{ color: '#94A3B8', marginRight: 8 }} />
                <Select 
                  defaultValue="Location" 
                  style={{ width: 140 }}
                  bordered={false}
                  suffixIcon={<DownOutlined style={{ fontSize: 10 }} />}
                  options={LOCATION_OPTIONS}
                />
              </div>
            </Col>
            <Col>
              <Button type="primary" className="find-event-btn">
                Find Events
              </Button>
            </Col>
          </Row>
          
          <Space size={10} wrap className="category-tags-wrapper">
            {CATEGORIES.map((cat, i) => (
              <Button 
                key={cat} 
                className={`category-btn ${i === 0 ? 'active-cat' : 'inactive-cat'}`}
              >
>>>>>>> Stashed changes
                {cat}
              </Button>
            ))}
          </Space>
        </Card>

<<<<<<< Updated upstream
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
=======
        {/* Main Content Layout */}
        <Layout className="bg-transparent">
          {/* Sidebar Filters */}
          <Sider width={240} className="filter-sidebar">
            <div className="filter-header" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 24 }}>
              <Title level={5} className="m-0">Filters</Title>
              <Button type="link" style={{ color: '#5D5FEF', padding: 0, fontWeight: 600 }}>Reset all</Button>
            </div>

            <Space direction="vertical" size={32} className="w-full">
              <section>
                <Text className="filter-label">Date</Text>
                <Radio.Group className="w-full">
                  <Space direction="vertical">
                    {DATE_FILTERS.map(opt => (
                      <Radio key={opt.value} value={opt.value}>{opt.label}</Radio>
                    ))}
                  </Space>
                </Radio.Group>
              </section>

              <section>
                <Text className="filter-label">Event Type</Text>
                <Space direction="vertical">
                  {EVENT_TYPES.map(opt => (
                    <Checkbox key={opt.value}>{opt.label}</Checkbox>
                  ))}
                </Space>
              </section>

              <section>
                <Text className="filter-label">Price</Text>
                <Space direction="vertical">
                  {PRICE_FILTERS.map(opt => (
                    <Checkbox key={opt.value}>{opt.label}</Checkbox>
                  ))}
                </Space>
              </section>

              <Button type="primary" block className="find-event-btn" style={{ height: 48 }}>
>>>>>>> Stashed changes
                Apply Filters
              </Button>
            </Space>
          </Sider>

<<<<<<< Updated upstream
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
=======
          {/* Grid Content Area */}
          <Content className="main-content-area">
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 24, alignItems: 'center' }}>
              <Text style={{ color: '#64748B' }}>1,234 events found</Text>
              <Space>
                <Text style={{ color: '#64748B' }}>Sort by:</Text>
                <Text style={{ color: '#5D5FEF', fontWeight: 600, cursor: 'pointer' }}>
                    Recommended <DownOutlined style={{ fontSize: 10, marginLeft: 4 }} />
                </Text>
              </Space>
            </div>

            {/* Grid with 4 columns */}
            <Row gutter={[24, 24]}>
              {mockEvents.map(event => (
                <Col xs={24} sm={12} lg={8} xl={6} key={event.id}>
                  <EventCard event={event} />
                </Col>
              ))}
            </Row>

            <div style={{ marginTop: 60, textAlign: 'center' }}>
              <Pagination defaultCurrent={1} total={200} showSizeChanger={false} />
            </div>
          </Content>
        </Layout>
      </div>
    </Layout>
  );
};

export default EventsPage;




// import React from 'react';
// import { Layout, Input, Select, Button, Row, Col, Radio, Checkbox, Space, Typography, Pagination, Tag } from 'antd';
// import { SearchOutlined, EnvironmentOutlined, ArrowRightOutlined } from '@ant-design/icons';
// import EventCard from '../../components/ui/EventCard';
// import { mockEvents } from '../../data/mockEvents';
// import  IventCardBg from '../../assets/iventCardBg.png'

// const { Header, Sider, Content } = Layout;
// const { Title, Text } = Typography;

// const CATEGORIES = ['All Categories', 'Technology', 'Business', 'Design', 'Music', 'Health', 'Startup', 'Education'];

// const EventsPage = () => {
//   return (
//     <Layout style={{ minHeight: '100vh', background: '#F8FAFC' }}>
//       <Content style={{ maxWidth: 1400, margin: '0 auto', width: '100%', padding: '40px 24px' }}>
        
//         {/* Page Title Section */}
//         <div style={{ 
//           display: 'flex', 
//           justifyContent: 'space-between', 
//           alignItems: 'center', 
//           marginBottom: 40,
//           padding: '20px 0' 
//         }}>
//           <div>
//             <Title level={1} style={{ fontWeight: 800, marginBottom: 8, margin: 0 }}>
//               Discover Events
//             </Title>
//             <Text type="secondary" style={{ fontSize: 14 }}>
//               Find events that match your interests and connect with amazing people.
//             </Text>
//           </div>
          
//           {/* Decorative Image from Figma */}
//           <div style={{ maxWidth: '450px' }}>
//             <img 
//               src={IventCardBg} 
//               alt="Events Header Illustration" 
//               style={{ width: '100%', height: 'auto', display: 'block' }} 
//             />
//           </div>
//         </div>

//         {/* Search & Categories Bar */}
//         <div style={{ background: 'white', padding: '24px', borderRadius: 24, boxShadow: '0 1px 3px rgba(0,0,0,0.05)', marginBottom: 40 }}>
//           <Row gutter={16} align="middle" style={{ marginBottom: 24 }}>
//             <Col flex="auto">
//               <Input 
//                 size="large"
//                 placeholder="Search events..." 
//                 prefix={<SearchOutlined style={{ color: '#94A3B8' }} />} 
//                 style={{ borderRadius: 12, background: '#F8FAFC', border: 'none', height: 48 }}
//               />
//             </Col>
//             <Col>
//               <Space size={12}>
//                 <Select 
//                   size="large"
//                   defaultValue="Location" 
//                   style={{ width: 160 }}
//                   suffixIcon={<EnvironmentOutlined />}
//                   bordered={false}
//                   className="bg-slate-50 rounded-xl"
//                 />
//                 <Button type="primary" size="large" style={{ height: 48, padding: '0 32px', borderRadius: 12 }}>
//                   Find Events
//                 </Button>
//               </Space>
//             </Col>
//           </Row>
//           <Space size={8} wrap>
//             {CATEGORIES.map((cat, i) => (
//               <Button 
//                 key={cat} 
//                 type={i === 0 ? 'primary' : 'text'}
//                 style={{ 
//                   borderRadius: 20, 
//                   fontSize: 12, 
//                   background: i === 0 ? '#5D5FEF' : '#F1F5F9',
//                   color: i === 0 ? 'white' : '#64748B'
//                 }}
//               >
//                 {cat}
//               </Button>
//             ))}
//           </Space>
//         </div>

//         <Layout style={{ background: 'transparent' }}>
//           {/* Filters Sidebar */}
//           <Sider width={240} style={{ background: 'transparent' }}>
//             <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
//               <Title level={5} style={{ margin: 0 }}>Filters</Title>
//               <Button type="link" size="small" style={{ color: '#5D5FEF', fontWeight: 600 }}>Reset all</Button>
//             </div>

//             <Space direction="vertical" size={32} style={{ width: '100%' }}>
//               <section>
//                 <Text strong style={{ fontSize: 10, color: '#94A3B8', textTransform: 'uppercase', letterSpacing: 1 }}>Date</Text>
//                 <Radio.Group style={{ width: '100%', marginTop: 16 }}>
//                   <Space direction="vertical" style={{ width: '100%' }}>
//                     <Radio value={1}>All Dates</Radio>
//                     <Radio value={2}>Today</Radio>
//                     <Radio value={3}>This Week</Radio>
//                     <Radio value={4}>This Weekend</Radio>
//                   </Space>
//                 </Radio.Group>
//               </section>

//               <section>
//                 <Text strong style={{ fontSize: 10, color: '#94A3B8', textTransform: 'uppercase', letterSpacing: 1 }}>Price</Text>
//                 <div style={{ marginTop: 16, display: 'flex', flexDirection: 'column', gap: 12 }}>
//                   <Checkbox>Free</Checkbox>
//                   <Checkbox>Paid</Checkbox>
//                 </div>
//               </section>

//               <Button type="primary" block size="large" style={{ borderRadius: 12, height: 48 }}>
//                 Apply Filters
//               </Button>
//             </Space>
//           </Sider>

//           {/* Main Grid Area */}
//           <Content style={{ paddingLeft: 40 }}>
//             <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
//               <Text style={{ color: '#64748B' }}>1,234 events found</Text>
//               <Space>
//                 <Text style={{ color: '#64748B' }}>Sort by:</Text>
//                 <Select defaultValue="recommended" bordered={false} style={{ fontWeight: 600, color: '#5D5FEF' }}>
//                   <Select.Option value="recommended">Recommended</Select.Option>
//                 </Select>
//               </Space>
//             </div>

//             {/* Grid with 4 columns on large screens */}
//             <Row gutter={[24, 24]}>
//               {mockEvents.map(event => (
//                 <Col xs={24} sm={12} lg={8} xl={6} key={event.id}>
//                   <EventCard event={event} />
//                 </Col>
//               ))}
//             </Row>

//             <div style={{ marginTop: 48, textAlign: 'center' }}>
//               <Pagination defaultCurrent={1} total={200} showSizeChanger={false} />
//             </div>
//           </Content>
//         </Layout>
//       </Content>
//     </Layout>
//   );
// };

// export default EventsPage;
>>>>>>> Stashed changes
