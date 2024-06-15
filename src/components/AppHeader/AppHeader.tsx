import { Layout, Menu, Flex, Image } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import Logo from '../../assets/images/logo.png';
import './AppHeader.css';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from '../Router/types';
import { WHITE } from '../../utilities/Constant';

const { Header } = Layout;
const { SubMenu } = Menu;

export const AppHeader = () => {
  const navigate = useNavigate();

  return (
    <Header className="w-full sticky top-0 p-0 z-10 bg-white">
      <Flex justify="space-between" className="w-full">
        <Image
          src={Logo}
          className={'cursor-pointer h-12 logo'}
          preview={false}
          onClick={() => {
            navigate(RoutePath.HOME);
          }}
        />
        <Flex>
          <h5>Welcome Sameer</h5>
          <Menu onClick={console.log} selectedKeys={['mail']} mode="horizontal">
            <SubMenu key="SubMenu" title={<MenuOutlined />}>
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
      </Flex>
    </Header>
  );
};
