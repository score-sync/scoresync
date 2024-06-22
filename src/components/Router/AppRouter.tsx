import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { WrapComponent } from './WrapComponent';
import { AppRoutes, RoutePath } from './types';
import { LazyExoticComponent, ReactNode } from 'react';

import { Suspense, lazy } from 'react';
import { useValidateUser } from '../../hooks/use-validate-user';

const CreateLanding = lazy(() => import('../../pages/Leage/CreateLanding'));
const LoginPage = lazy(() => import('../../pages/Login'));
const App = lazy(() => import('../AddPanel/Test'));
const PastLeague = lazy(() => import('../../pages/Leage/PastLeague'));
const CreateLague = lazy(() => import('../../pages/Leage/CreateLague'));
const UpcomingLeague = lazy(() => import('../../pages/Leage/UpcomingLeague'));
const CreateLagueParts = lazy(() => import('../../pages/Leage/CreateLeagueParts'));

const AddFighter = lazy(() => import('../../pages/Fighter/AddFighter'));
const Fighter = lazy(() => import('../../pages/Fighter/Fighter'));

const BoutCreate = lazy(() => import('../../pages/Bouts/Create'));
const RefreeCreate = lazy(() => import('../../pages/Refree/Create'));

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
            <Route index element={WithWrapper(CreateLanding)} />
            <Route path={RoutePath.LEAGUE_ID}>
              <Route index element={WithWrapper(CreateLagueParts)} />
              {/* Add fighters inside league */}
              <Route path={RoutePath.FIGHTER}>
                <Route index element={WithWrapper(AddFighter)} />
                <Route path={RoutePath.CREATE} element={WithWrapper(AddFighter)} />
                <Route path={RoutePath.FIGHTER_ID} element={WithWrapper(Fighter)} />
                {/* <Route path="*" element={<Navigate to="/not-found" />} /> */}
              </Route>
              {/* Add Refrees inside league */}
              <Route path={RoutePath.REFREE}>
                <Route index element={WithWrapper(RefreeCreate)} />
                <Route path={RoutePath.CREATE} element={WithWrapper(RefreeCreate)} />
              </Route>
              {/* Add Bouts inside league */}
              <Route path={RoutePath.BOUT}>
                <Route index element={WithWrapper(BoutCreate)} />
                <Route path={RoutePath.CREATE} element={WithWrapper(BoutCreate)} />
              </Route>
            </Route>
            <Route path={RoutePath.CREATE} element={WithWrapper(CreateLague)} />
            <Route path={RoutePath.UPCOMING} element={WithWrapper(UpcomingLeague)} />
            <Route path={RoutePath.PAST} element={WithWrapper(PastLeague)} />
          </Route>

          <Route path={RoutePath.FIGHTER}>
            <Route path={RoutePath.FIGHTER_ID} element={WithWrapper(Fighter)} />
          </Route>

          <Route path={RoutePath.REFREE}>
            <Route path={RoutePath.REFREE_ID} element={WithWrapper(CreateLague)} />
          </Route>

          <Route path={RoutePath.TEST} element={WithWrapper(App)} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
