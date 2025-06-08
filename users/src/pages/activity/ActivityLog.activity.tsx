import InfoCard, { type InfoCardI } from '../../components/InfoCard.tsx';
import { Timeline } from 'antd';

const ActivityLogActivity = () => {
  const activities = [
    {
      activity: 'User name here Permission changed to admin by admin123',
      timestamp: '2 Hours Ago',
    },
    {
      activity: 'Username Successfully Logged In',
      timestamp: '2 Hours Ago',
    },
    {
      activity: 'User name here Permission changed to admin by admin123',
      timestamp: '3 Hours Ago',
    },
    {
      activity: 'Username Successfully Logged In',
      timestamp: '4 Hours Ago',
    },
  ];

  const usersInfoCards: InfoCardI[] = [
    {
      title: 'Daily Active Users',
      count: 1050,
      date: '8 June 2025',
    },
    {
      title: 'Monthly Active Users',
      count: 1051,
      date: '8 June 2025',
    },
    {
      title: 'Daily Timer Per Active Users',
      count: 1051,
      date: '8 June 2025',
    },
  ];

  return (
    <div className='p-4'>
      <div className='bg-white p-4 gap-6 md:gap-4 shadow grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 rounded-md'>
        {usersInfoCards.map((card) => (
          <InfoCard key={card.title} data={card} />
        ))}
      </div>
      <div className='bg-white px-6 py-8 mt-10'>
        <h2 className='font-bold text-lg mb-5'>Activity Log</h2>
        <Timeline
          items={activities.map((activity) => ({
            children: (
              <>
                <h2 className='font-semibold'>{activity.activity}</h2>
                <p className='text-gray-500'>{activity.timestamp}</p>
              </>
            ),
          }))}
        />
      </div>
    </div>
  );
};
export default ActivityLogActivity;
