import { lazy, Suspense } from 'react';
import LoadingPage from '../components/LoadingPage.tsx';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/reducers/rootRedcuers.ts';
// @ts-ignore
const UserRoutes = lazy(() => import('userApp/App'));

const UserWrapper = () => {
  const user = useSelector((state: RootState) => state.user);

  return (
    <Suspense fallback={<LoadingPage />}>
      <UserRoutes props={user} />
    </Suspense>
  );
};
export default UserWrapper;
