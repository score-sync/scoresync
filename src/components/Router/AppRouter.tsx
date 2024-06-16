import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
        <Route path="/">
          <Route index element={withWrapper(AddPanel)} />
          <Route path={RoutePath.LOGIN} element={withWrapper(LoginPage, false)} />
          <Route path={RoutePath.CREATE_LEAGUE} element={withWrapper(CreateLague)} />
          <Route path={RoutePath.UPCOMING_LEAGUE} element={withWrapper(CreateLague)} />
          <Route path={RoutePath.PAST_LEAGUE} element={withWrapper(PastLeague)} />
          <Route path={RoutePath.TEST} element={withWrapper(App)} />
          <Route path="*" element={<div>404</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
