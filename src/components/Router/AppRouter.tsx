import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { WrapComponent } from './WrapComponent';
import { AppRoutes, RoutePath } from './types';
import { LazyExoticComponent, ReactNode } from 'react';

import { Suspense, lazy } from 'react';
import { useValidateUser } from '../../hooks/use-validate-user';

const AddPanel = lazy(() => import('../AddPanel/AddPanel'));
const LoginPage = lazy(() => import('../../pages/Login'));
const App = lazy(() => import('../AddPanel/Test'));
const PastLeague = lazy(() => import('../../pages/Leage/PastLeague'));
const CreateLague = lazy(() => import('../../pages/Leage/CreateLague'));
const UpcomingLeague = lazy(() => import('../../pages/Leage/UpcomingLeague'));

const WithWrapper = (Component: LazyExoticComponent<() => ReactNode>) => {
  const user = useValidateUser();

  if (!user) {
    return <Navigate to={AppRoutes.LOGIN} />;
  }

  return (
    <WrapComponent>
      <Suspense fallback={<div></div>}>
        <Component />
      </Suspense>
    </WrapComponent>
  );
};

const NotFound = () => <div>404</div>;

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={RoutePath.HOME}>
          <Route
            path={RoutePath.LOGIN}
            element={
              <Suspense fallback={<div></div>}>
                <LoginPage />
              </Suspense>
            }
          />
          <Route path={RoutePath.LEAGUE}>
            <Route index element={WithWrapper(AddPanel)} />
            <Route path={RoutePath.LEAGUE_ID} element={WithWrapper(CreateLague)} />
            <Route path={RoutePath.CREATE} element={WithWrapper(CreateLague)} />
            <Route path={RoutePath.UPCOMING} element={WithWrapper(UpcomingLeague)} />
            <Route path={RoutePath.PAST} element={WithWrapper(PastLeague)} />
            <Route path="*" element={<Navigate to="/not-found" />} />
          </Route>
          <Route path={RoutePath.FIGHTER}>
            <Route path={RoutePath.CREATE} element={WithWrapper(CreateLague)} />
            <Route path={RoutePath.FIGHTER_ID} element={WithWrapper(CreateLague)} />
            <Route path="*" element={<Navigate to="/not-found" />} />
          </Route>
          <Route path={RoutePath.REFREE}>
            <Route path={RoutePath.CREATE} element={WithWrapper(CreateLague)} />
            <Route path="*" element={<Navigate to="/not-found" />} />
          </Route>
          <Route path={RoutePath.TEST} element={WithWrapper(App)} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
