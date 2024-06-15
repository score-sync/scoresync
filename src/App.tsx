import { Flex, Layout } from 'antd';
import { AppRouter } from './components/Router/AppRouter';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './App.css';

const queryClient = new QueryClient();

const { Content } = Layout;
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Flex justify="center">
        <Layout className="ml-4 mr-4 min-h-screen min-h-screen md:min-w-[320px] max-w-[1200px]">
          <Content className="bg-white">
            <AppRouter />
          </Content>
        </Layout>
      </Flex>
    </QueryClientProvider>
  );
}

export default App;
