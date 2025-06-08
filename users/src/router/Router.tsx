import { lazy } from 'react';
import { useRoutes } from 'react-router-dom';

const Sample = lazy(() => import('../pages/sample/Sample.sample.tsx'));
const ActivityLog = lazy(
  () => import('../pages/activity/ActivityLog.activity.tsx'),
);

function Router() {
  return useRoutes([
    {
      path: 'activities',
      element: <ActivityLog />,
    },
    {
      path: '*',
      element: <Sample />,
    },
  ]);
}
export default Router;
