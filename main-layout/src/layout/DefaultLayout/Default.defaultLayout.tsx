import Sidebar from './Sidebar.defaultLayout.tsx';
import Header from './Header.defaultLayout.tsx';
import { useEffect, useLayoutEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from '@/store/reducers/users/users.reducer.ts';
import { UserI } from '@/store/reducers/users/types.ts';

const user: UserI = {
  id: '1',
  firstName: 'Dilshan',
  lastName: 'Perera',
  email: 'dilshan@gmail.com',
};

const DefaultDefaultLayout = () => {
  const dispatch = useDispatch();
  const [isOpenSideBar, setIsOpenSidebar] = useState(false);
  const navigate = useNavigate();

  useLayoutEffect(() => {
    const updateWidth = () => {
      setIsOpenSidebar(false);
    };

    window.addEventListener('resize', updateWidth);

    // Cleanup function
    return () => {
      window.removeEventListener('resize', updateWidth);
    };
  }, []);

  useEffect(() => {
    dispatch(setUser(user));
    navigate('/dashboard');
  }, []);

  return (
    <>
      <div className='h-full bg-gray-100 min-h-[96vh] '>
        <Header
          onClickSidebarTrigger={() => setIsOpenSidebar(!isOpenSideBar)}
        />
        <Sidebar
          isMobileSidebarOpen={isOpenSideBar}
          closeSidebar={() => setIsOpenSidebar(false)}
        />

        <main
          id='page-content'
          className={`"container mx-auto pt-16 md:pl-[256px] "`}
        >
          <Outlet />
        </main>
      </div>
    </>
  );
};
export default DefaultDefaultLayout;
