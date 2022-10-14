import { ElementType, lazy, Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
import LoadingScreen from '../components/LoadingScreen';
import MainLayout from '../layouts/main';

const Loadable = (Component: ElementType) =>
  // eslint-disable-next-line func-names
  function (props: any) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    // const { pathname } = useLocation();

    // eslint-disable-next-line react-hooks/rules-of-hooks
    // const { isAuthenticated } = useAuth();

    // const isDashboard = pathname.includes("/dashboard") && isAuthenticated;
    const isDashboard = false;

    return (
      <Suspense fallback={<LoadingScreen isDashboard={isDashboard} />}>
        <Component {...props} />
      </Suspense>
    );
  };

export default function Router() {
  return useRoutes([
    {
      path: '/',
      element: <MainLayout />,
      children: [
        {
          element: <HomePage />,
          index: true,
        },
      ],
    },
  ]);
}

// MAIN
const HomePage = Loadable(lazy(() => import('../pages/Home')));
