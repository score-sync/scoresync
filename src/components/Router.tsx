import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddPanel from './AddPanel';

enum RoutePath {
  CREATE_LEAGUE = 'create-league',
  UPCOMING_LEAGUE = 'upcoming-league',
}

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AddPanel />}>
          <Route index element={<AddPanel />} />
          <Route path={RoutePath.CREATE_LEAGUE} element={<AddPanel />} />
          <Route path={RoutePath.UPCOMING_LEAGUE} element={<AddPanel />} />
          <Route path="*" element={<AddPanel />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
