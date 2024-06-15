import React from 'react';
import { AppHeader } from '../AppHeader/AppHeader';
// import { Layout } from 'antd';
// const { Footer } = Layout;

export const WrapComponent = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <AppHeader />
      {children}
      {/* <Footer /> */}
    </>
  );
};
