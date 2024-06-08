import { Layout, Menu, Flex, Image } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import Logo from '../assets/images/logo.png';
import './AppHeader.css';

const { Header } = Layout;
const { SubMenu } = Menu;

export const AppHeader = () => {
  return (
    <Header style={{ backgroundColor: '#fff', padding: 0 }}>
      <Image src={Logo} className={'logo'} preview={false} style={{ height: '50px; !important' }} />
      <Flex>
        <h5>Welcome Sameer</h5>
        <Menu onClick={console.log} selectedKeys={['mail']} mode="horizontal">
          <SubMenu key="SubMenu" title={<MenuOutlined />}>
            {/* <Menu.ItemGroup title="Item 1"> */}
            <Menu.Item key="setting:1">Option 1</Menu.Item>
            <Menu.Item key="setting:2">Option 2</Menu.Item>
            <Menu.Item key="alipay">
              <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
                Navigation Four - Link
              </a>
            </Menu.Item>
          </SubMenu>
        </Menu>
      </Flex>
    </Header>
  );
};
