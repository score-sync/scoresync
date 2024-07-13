import { Layout, Flex, Image, Dropdown, MenuProps, Button, Typography } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import Logo from '../../assets/images/logo.png';
import './AppHeader.css';
import { useNavigate } from 'react-router-dom';
import { AppRoutes } from '../Router/types';
import { useData } from '../../DataProvider';
import { UserLevel } from '../../types/User';
import { Method, useNetworkCall } from '../../hooks/utils/use-network-call';

const { Header } = Layout;
// const { SubMenu } = Menu;
const { Text } = Typography;

export const AppHeader = () => {
  const navigate = useNavigate();
  const {
    state: { user },
    resetUser,
  } = useData();
  const logout = useNetworkCall();

  const items: MenuProps['items'] = [
    {
      key: '2',
      label: <Text className="p-6">Reset Password</Text>,
      onClick: () => {
        resetUser();
        navigate(AppRoutes.RESET_PASSWORD);
      },
    },
    {
      key: '3',
      label: <Text className="p-6">Request Password Reset</Text>,
      onClick: () => {
        navigate(AppRoutes.REQUEST_RESET_PASSWORD);
      },
    },
    {
      key: '4',
      label: <Text className="p-6">Logout</Text>,
      onClick: () => {
        logout('/logout', Method.POST);
        resetUser();
        navigate(AppRoutes.LOGIN);
      },
    },
    // {
    //   key: '3',
    //   label: (
    //     <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
    //       2nd menu item
    //     </a>
    //   ),
    // },
    // {
    //   key: '4',
    //   label: (
    //     <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
    //       3rd menu item
    //     </a>
    //   ),
    // },
  ];

  if (user?.role === UserLevel.Admin) {
    items.unshift({
      key: '1',
      label: <Text className="p-6">Send Invite</Text>,
      onClick: () => {
        navigate(AppRoutes.INVITATION);
      },
    });
  }
  return (
    <Header className="w-full sticky top-0 p-0 pt-4 z-10 bg-white">
      <Flex justify="space-between" className="w-full">
        <Image
          src={Logo}
          className={'cursor-pointer logo pt-2 mt-1'}
          preview={false}
          onClick={() => {
            navigate(AppRoutes.LAGUE_HOME);
          }}
        />
        {/* <Flex>
          <h5>Welcome Sameer</h5>
          <Menu onClick={console.log} selectedKeys={['mail']} mode="horizontal">
            <SubMenu key="SubMenu" title={<MenuOutlined className="text-5xl" style={{ fontSize: '18px' }} />}>
              <Menu.Item key="setting:1">Option 1</Menu.Item>
              <Menu.Item key="setting:2">Option 2</Menu.Item>
              <Menu.Item key="alipay">
                <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
                  Navigation Four - Link
                </a>
              </Menu.Item>
            </SubMenu>
          </Menu>
        </Flex> */}
        <Flex>
          <Text className="max-sm:hidden pr-2 mt-5 text-md font-medium">Welcome {user?.name || 'Sameer'}</Text>
          <Dropdown menu={{ items }} placement="bottomRight" className="mt-4" arrow>
            <Button>
              <MenuOutlined className="text-5xl" style={{ fontSize: '18px' }} />
            </Button>
          </Dropdown>
        </Flex>
      </Flex>
    </Header>
  );
};
