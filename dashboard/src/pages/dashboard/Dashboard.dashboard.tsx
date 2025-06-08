import InfoCard, { type InfoCardI } from '../../components/InfoCard.tsx';
import DailyActiveUserChart from '../../components/DailyActiveUserChart.tsx';
import UserActivityChart from '../../components/UserActivityChart.tsx';

const Dashboard = () => {
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

  const infoCards: InfoCardI[] = [
    {
      title: 'Microsoft',
      count: 1000,
      date: '',
    },
    {
      title: 'Internal',
      count: 200,
      date: '',
    },
    {
      title: 'SMAL',
      count: 250,
      date: '',
    },
  ];

  return (
    <div className='flex flex-col md:flex-row space-y-6 md:space-y-0 items-start space-x-4 p-4'>
      <div className='w-full md:w-3/5'>
        <div className='bg-white p-4 gap-4 shadow grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 rounded-md'>
          {usersInfoCards.map((card) => (
            <InfoCard key={card.title} data={card} />
          ))}
        </div>
        <div className='bg-white p-4 shadow mt-5 rounded-md'>
          <h2 className='font-semibold mb-3'>User Activity</h2>
          <UserActivityChart />
        </div>
      </div>
      <div className='w-full md:w-2/5'>
        <div className='bg-white p-4 shadow  rounded-md'>
          <h2 className='font-semibold'>Daily active Users</h2>
          <p className='text-3xl font-bold  py-2'>1050</p>
          <DailyActiveUserChart />

          <div className='mt-12 text-center'>
            <h2 className='font-bold text-lg'>By Authentication Method</h2>
            <div className='grid gap-4 grid-cols-1  md:grid-cols-2 lg:grid-cols-3  mt-8'>
              {infoCards.map((card) => (
                <InfoCard key={card.title} data={card} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
