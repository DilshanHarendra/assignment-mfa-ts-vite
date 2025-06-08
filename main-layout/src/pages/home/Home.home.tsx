import { useLocation } from 'react-router-dom';
import JSONPretty from 'react-json-pretty';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/reducers/rootRedcuers.ts';

const Home = () => {
  const { pathname } = useLocation();
  const user = useSelector((state: RootState) => state.user);
  return (
    <div className='grid place-items-center h-[75vh]'>
      <div>
        <h2 className='text-3xl text-center mb-3'>
          {pathname.toString()} Page
        </h2>
        {user && (
          <div className='bg-black text-white p-5'>
            <h2 className='font-bold mb-3'>Redux Data</h2>
            <JSONPretty id='json-pretty' data={user}></JSONPretty>
          </div>
        )}
      </div>
    </div>
  );
};
export default Home;
