import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { WrapComponent } from './WrapComponent';
import { RoutePath } from './types';
import { useData } from '../../DataProvider';
import { LazyExoticComponent, ReactNode, useEffect } from 'react';

import { Suspense, lazy } from 'react';

const AddPanel = lazy(() => import('../AddPanel/AddPanel'));
const LoginPage = lazy(() => import('../../pages/Login'));
const App = lazy(() => import('../AddPanel/Test'));
const PastLeague = lazy(() => import('../../pages/Leage/PastLeague'));
const CreateLague = lazy(() => import('../../pages/Leage/CreateLague'));
const UpcomingLeague = lazy(() => import('../../pages/Leage/UpcomingLeague'));

const withWrapper = (Component: LazyExoticComponent<() => ReactNode>, needWrapper = true) => {
  return needWrapper ? (
    <WrapComponent>
      <Suspense fallback={<div></div>}>
        <Component />
      </Suspense>
    </WrapComponent>
  ) : (
    <Suspense fallback={<div></div>}>
      <Component />
    </Suspense>
  );
};

const NotFound = () => <div>404</div>;
export const AppRouter = () => {
  const {
    state: { user },
    setUser,
  } = useData();
  console.log(user);
  useEffect(() => {
    setUser({ email: 'email', name: 'Sameer' });
  }, [setUser]);
  return (
    <BrowserRouter>
      <Routes>
        <Route path={RoutePath.HOME}>
          <Route index element={withWrapper(AddPanel)} />
          <Route path={RoutePath.LOGIN} element={withWrapper(LoginPage, false)} />
          <Route path={RoutePath.LEAGUE}>
            <Route path={RoutePath.LEAGUE_ID} element={withWrapper(CreateLague)} />
            <Route path={RoutePath.CREATE} element={withWrapper(CreateLague)} />
            <Route path={RoutePath.UPCOMING} element={withWrapper(UpcomingLeague)} />
            <Route path={RoutePath.PAST} element={withWrapper(PastLeague)} />
            <Route path="*" element={<Navigate to="/not-found" />} />
          </Route>
          <Route path={RoutePath.FIGHTER}>
            <Route path={RoutePath.CREATE} element={withWrapper(CreateLague)} />
            <Route path={RoutePath.FIGHTER_ID} element={withWrapper(CreateLague)} />
            <Route path="*" element={<Navigate to="/not-found" />} />
          </Route>
          <Route path={RoutePath.REFREE}>
            <Route path={RoutePath.CREATE} element={withWrapper(CreateLague)} />
            <Route path="*" element={<Navigate to="/not-found" />} />
          </Route>
          <Route path={RoutePath.TEST} element={withWrapper(App)} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
