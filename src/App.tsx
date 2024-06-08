import './App.css';
import { Flex, Layout } from 'antd';
import { AppHeader } from './components/AppHeader';
import AddPanel from './components/AddPanel';
const { Footer, Content } = Layout;
function App() {
  return (
    <Flex gap="middle" wrap>
      <Layout>
        <AppHeader />
        <Content>
          <AddPanel></AddPanel>
        </Content>
        <Footer></Footer>
      </Layout>
    </Flex>
  );
}

export default App;
