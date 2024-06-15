import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddPanel from '../AddPanel/AddPanel';
import { WrapComponent } from './WrapComponent';
import { RoutePath } from './types';
import LoginPage from '../../pages/Login';
import CreateLague from '../../pages/Leage/CreateLague';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route
            index
            element={
              <WrapComponent>
                <AddPanel />
              </WrapComponent>
            }
          />
          <Route path={RoutePath.LOGIN} element={<LoginPage></LoginPage>} />
          <Route
            path={RoutePath.CREATE_LEAGUE}
            element={
              <WrapComponent>
                <CreateLague />
              </WrapComponent>
            }
          />
          <Route
            path={RoutePath.UPCOMING_LEAGUE}
            element={
              <WrapComponent>
                <div>UPCOMING_LEAGUE</div>
              </WrapComponent>
            }
          />
          <Route
            path={RoutePath.PAST_LEAGUE}
            element={
              <WrapComponent>
                <div>PAST_LEAGUE</div>
              </WrapComponent>
            }
          />
          <Route path="*" element={<div>404</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
