import { lazy } from 'react';
import { useRoutes } from 'react-router-dom';

const Sample = lazy(() => import('../pages/sample/Sample.sample.tsx'));
const Dashboard = lazy(
  () => import('../pages/dashboard/Dashboard.dashboard.tsx'),
);

function Router() {
  return useRoutes([
    {
      path: '/',
      element: <Dashboard />,
    },
    {
      path: '*',
      element: <Sample />,
    },
  ]);
}
export default Router;
