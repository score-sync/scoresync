import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { WrapComponent } from './WrapComponent';
import { AppRoutes, RoutePath } from './types';
import { LazyExoticComponent, ReactNode } from 'react';

import { Suspense, lazy } from 'react';
import { useData } from '../../DataProvider';

const LeagueHome = lazy(() => import('../../pages/Leage/LeagueHome'));
const LoginPage = lazy(() => import('../../pages/Login'));
const LoginResetPage = lazy(() => import('../../pages/Login/Reset'));
const RequestPassword = lazy(() => import('../../pages/Login/RequestPassword'));
const NewUser = lazy(() => import('../../pages/Login/NewUser'));

const App = lazy(() => import('../AddPanel/Test'));
const CreateLague = lazy(() => import('../../pages/Leage/CreateLague'));

const AddFighter = lazy(() => import('../../pages/Fighter/AddFighter'));
const Fighter = lazy(() => import('../../pages/Fighter/Fighter'));

const BoutCreate = lazy(() => import('../../pages/Bouts/Create'));
const RefreeCreate = lazy(() => import('../../pages/Refree/Create'));

const Bouts = lazy(() => import('../../pages/Bouts'));

const WithWrapper = (Component: LazyExoticComponent<() => ReactNode>) => {
  const {
    state: { user },
  } = useData();

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
          <Route index element={<Navigate to={RoutePath.LEAGUE} />} />
          <Route path={RoutePath.LOGIN}>
            <Route
              index
              element={
                <Suspense fallback={<div></div>}>
                  <LoginPage />
                </Suspense>
              }
            />
            <Route
              path={RoutePath.RESET}
              element={
                <Suspense fallback={<div></div>}>
                  <LoginResetPage />
                </Suspense>
              }
            />
            <Route
              path={RoutePath.RESET_REQUEST}
              element={
                <Suspense fallback={<div></div>}>
                  <RequestPassword />
                </Suspense>
              }
            />
          </Route>
          <Route path={RoutePath.LEAGUE}>
            <Route index element={WithWrapper(LeagueHome)} />
            <Route path={RoutePath.INVITATION} element={WithWrapper(NewUser)} />
            <Route path={RoutePath.LEAGUE_ID}>
              <Route index element={WithWrapper(CreateLague)} />
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
                <Route index element={WithWrapper(Bouts)} />
                <Route path={RoutePath.CREATE} element={WithWrapper(BoutCreate)} />
              </Route>
            </Route>
            <Route path={RoutePath.CREATE} element={WithWrapper(CreateLague)} />
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
