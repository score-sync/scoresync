// <reference path="../node_modules/reactjs-social-login/dist/index.d.ts" />
import { Flex, Image } from 'antd';
import { Form, Input, Button, Checkbox, Typography, Space } from 'antd';
import { MailOutlined, LockOutlined, FacebookFilled, AppleFilled, GoogleCircleFilled } from '@ant-design/icons';
import { GREY } from '../../utilities/Constant';
// import login from './login.less';

// import { createFromIconfontCN } from '@ant-design/icons';

// const IconFont = createFromIconfontCN({
//   scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
// });
import Logo from '../../assets/images/logo.png';
import { useNavigate } from 'react-router-dom';
import { AppRoutes } from '../../components/Router/types';
import { useData } from '../../DataProvider';
import { LoginSocialGoogle } from 'reactjs-social-login';

import { useCallback } from 'react';
const { Text } = Typography;

const LoginPage = () => {
  const { setUser } = useData();
  const navigate = useNavigate();

  const onFinish = () => {
    console.log('Success:');
  };

  const onFinishFailed = () => {
    console.log('Failed:');
  };

  const onLoginStart = useCallback(() => {
    // alert('login start');
  }, []);

  const REDIRECT_URI = 'http://localhost:5173/signin';
  const GOOGLE_APP_ID = '413722017629-jeqehdvvsjj03ooto842f5ju58sdupk8.apps.googleusercontent.com';
  return (
    <Flex justify="center" align="center" className="h-full">
      <div>
        <Image src={Logo} className={'cursor-pointer mt-4 mb-4 logo'} preview={false} />

        {/* <Title level={2} style={{ color: BLUE }}>
          Welcome
        </Title> */}
        <Form name="login" initialValues={{ remember: false }} onFinish={onFinish} onFinishFailed={onFinishFailed}>
          <Form.Item name="email" rules={[{ required: false, message: 'Please input your Email!' }]}>
            <Input prefix={<MailOutlined style={{ color: GREY }} />} placeholder="Email" size="large" />
          </Form.Item>
          <Form.Item name="password" rules={[{ required: false, message: 'Please input your Password!' }]}>
            <Input.Password prefix={<LockOutlined style={{ color: GREY }} />} placeholder="Password" size="large" />
          </Form.Item>
          <Form.Item name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              style={{ background: 'linear-gradient(to right, #2575fc, #6a11cb)' }}
              size="large"
              className="w-full"
              onClick={() => {
                setUser({ name: 'Sameer', email: 'email' });
                navigate(AppRoutes.LAGUE_HOME);
              }}
            >
              Sign in
            </Button>
          </Form.Item>
        </Form>
        <Flex justify="center" className="pt-4">
          <Text style={{ color: GREY }}>or continue with</Text>
        </Flex>
        <Flex className="pt-6" justify="center">
          <Space size="large">
            <Button shape="circle" icon={<FacebookFilled />} />
            <Button shape="circle" icon={<AppleFilled />} />
            <LoginSocialGoogle
              // client_id={import.meta.env?.env?.REACT_APP_GG_APP_ID || ''}
              client_id={GOOGLE_APP_ID}
              onLoginStart={onLoginStart}
              redirect_uri={REDIRECT_URI}
              scope="email"
              discoveryDocs="claims_supported"
              access_type="offline"
              onResolve={({ provider, data }: { provider: string; data: string }) => {
                console.log(data);
                console.log(provider);
                // setProvider(provider);
                // setProfile(data);
              }}
              onReject={(err: string) => {
                console.log(err);
              }}
            >
              <Button shape="circle" icon={<GoogleCircleFilled />} />
            </LoginSocialGoogle>
          </Space>
        </Flex>
      </div>
    </Flex>
  );
};

export default LoginPage;
