import { lazy } from 'react';
import { useRoutes } from 'react-router-dom';
import DefaultLayout from '../layout/DefaultLayout/Default.defaultLayout.tsx';
import UserApplicationsWrapper from '../applicationsWrapper/User.applicationsWrapper.tsx';
import DashboardApplicationsWrapper from '@/applicationsWrapper/Dashboard.applicationsWrapper.tsx';

const Home = lazy(() => import('../pages/home/Home.home.tsx'));
const PageNotFound = lazy(
  () => import('../pages/errors/PageNotFound.errors.tsx'),
);

function Router() {
  return useRoutes([
    {
      path: '',
      element: <DefaultLayout />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/surveys',
          element: <Home />,
        },
        {
          path: '/data-lab',
          element: <Home />,
        },
        {
          path: '/library',
          element: <Home />,
        },
        {
          path: '/marketPlace',
          element: <Home />,
        },
        {
          path: '/dashboard/*',
          element: <DashboardApplicationsWrapper />,
        },
        {
          path: '/analytics/*',
          element: <UserApplicationsWrapper />,
        },
      ],
    },
    {
      path: '*',
      element: <PageNotFound />,
    },
  ]);
}
export default Router;
