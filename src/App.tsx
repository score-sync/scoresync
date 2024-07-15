import { Flex, Layout } from 'antd';
import { AppRouter } from './components/Router/AppRouter';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './App.css';
import { DataProvider } from './DataProvider';
import { useEffect } from 'react';
import { STORAGE_REDIRECT_URL } from './utilities/Constant';
import { AppRoutes } from './components/Router/types';

const queryClient = new QueryClient();

const { Content } = Layout;
function App() {
  useEffect(() => {
    const redirectURL = window.location.href;
    if (!window.location.pathname.includes(AppRoutes.LOGIN)) {
      console.log(redirectURL, AppRoutes.LOGIN);
      localStorage.setItem(STORAGE_REDIRECT_URL, redirectURL);
    }
  }, []);
  return (
    <QueryClientProvider client={queryClient}>
      <DataProvider>
        <Flex justify="center">
          <Layout className="ml-8 mr-8 mb-6 min-h-screen md:min-w-[320px] max-w-[1200px]">
            <Content className="bg-white">
              <AppRouter />
            </Content>
          </Layout>
        </Flex>
      </DataProvider>
    </QueryClientProvider>
  );
}

export default App;
