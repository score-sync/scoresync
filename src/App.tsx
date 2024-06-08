import { Flex, Layout } from 'antd';
import { AppHeader } from './components/AppHeader/AppHeader';
import Router from './components/Router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
const queryClient = new QueryClient();

const { Footer, Content } = Layout;
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Flex gap="middle" wrap>
        <Layout>
          <AppHeader />
          <Content>
            <Router />
          </Content>
          <Footer></Footer>
        </Layout>
      </Flex>
    </QueryClientProvider>
  );
}

export default App;
