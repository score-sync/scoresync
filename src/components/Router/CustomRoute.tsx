import { Route } from 'react-router-dom';
import { WrapComponent } from './WrapComponent';

import { Suspense } from 'react';

export const CustomRoute = ({ element }: { element: React.ReactNode }) => {
  return (
    <Route
      index
      element={
        <WrapComponent>
          <Suspense fallback={<div>Loading...</div>}>{element}</Suspense>
        </WrapComponent>
      }
    />
  );
};
