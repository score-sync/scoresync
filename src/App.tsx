import { Flex, Layout } from 'antd';
import { AppRouter } from './components/Router/AppRouter';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
const queryClient = new QueryClient();

const { Content } = Layout;
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Flex gap="middle" wrap>
        <Layout style={{ minHeight: '100vh' }}>
          <Content>
            <AppRouter />
          </Content>
        </Layout>
      </Flex>
    </QueryClientProvider>
  );
}

export default App;
