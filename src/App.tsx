import './App.css';
import { Flex, Layout } from 'antd';
import { AppHeader } from './components/AppHeader';
import Router from './components/Router';
const { Footer, Content } = Layout;
function App() {
  return (
    <Flex gap="middle" wrap>
      <Layout>
        <AppHeader />
        <Content>
          <Router />
        </Content>
        <Footer></Footer>
      </Layout>
    </Flex>
  );
}

export default App;
