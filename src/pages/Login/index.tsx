// <reference path="../node_modules/reactjs-social-login/dist/index.d.ts" />
import { Flex, Image, Spin, notification } from 'antd';
import { Form, Input, Button, Checkbox, Typography, Space } from 'antd';
import { MailOutlined, LockOutlined, FacebookFilled, AppleFilled, GoogleCircleFilled } from '@ant-design/icons';
import { BLACK100, GREY } from '../../utilities/Constant';
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

import { useCallback, useEffect, useState } from 'react';
import { User, UserLevel } from '../../types/User';
import { Method, useNetworkCall } from '../../hooks/utils/use-network-call';
const { Text } = Typography;

const LoginPage = () => {
  const [isSubmitted, setSubmit] = useState(true);
  const [form] = Form.useForm();

  const { setUser } = useData();
  const navigate = useNavigate();
  const authenticate = useNetworkCall();

  useEffect(() => {
    setSubmit(false);
  }, []);

  const onFinish = async (values: { [key in string]: string }) => {
    setSubmit(true);
    const validateCredentials = (await authenticate('/login', Method.POST, {
      username: values['email'],
      password: values['password'],
    })) as User;
    if (!validateCredentials) {
      notification.open({
        message: 'Failed to Login!',
      });
      setSubmit(false);
      return;
    }
    const { token } = validateCredentials;
    setUser({ token } as User);
    localStorage.setItem('scoreSync', token as string);
    const validateUser = (await authenticate('/verify-token', Method.POST, { token })) as {
      user: { first_name: string; role: number; email: string };
    };
    if (!validateUser) {
      notification.open({
        message: 'Failed to Login!',
      });
      setSubmit(false);
      return;
    }
    const {
      user: { first_name: name, email, role },
    } = validateUser;
    setUser({ name: name || 'Name', email, role, token });
    navigate(AppRoutes.LAGUE_HOME);
    notification.open({
      message: `Welcome ${values.name || 'Name'}`,
    });
  };

  const onFinishFailed = () => {
    notification.error({
      message: 'Error',
      description: `Sign In Failed!`,
    });
  };

  const onLoginStart = useCallback(() => {
    // alert('login start');
  }, []);

  const REDIRECT_URI = 'http://localhost:5173/signin';
  const GOOGLE_APP_ID = '413722017629-jeqehdvvsjj03ooto842f5ju58sdupk8.apps.googleusercontent.com';
  return (
    <Flex justify="center" align="center" className="h-full">
      <div className="md:w-1/2 lg:w-1/3 w-full">
        <Image src={Logo} className={'cursor-pointer mt-4 mb-4 logo'} preview={false} />

        {/* <Title level={2} style={{ color: BLUE }}>
          Welcome
        </Title> */}
        <Form
          form={form}
          name="login"
          initialValues={{ email: '', password: '', remember: false }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item name="email" rules={[{ required: true, type: 'string', message: 'Please input your email!' }]}>
            <Input
              prefix={<MailOutlined style={{ color: GREY }} />}
              placeholder="Email"
              size="large"
              disabled={isSubmitted}
            />
          </Form.Item>
          <Form.Item name="password" rules={[{ required: true, message: 'Please input your password!' }]}>
            <Input.Password
              prefix={<LockOutlined style={{ color: GREY }} />}
              placeholder="Password"
              size="large"
              disabled={isSubmitted}
            />
          </Form.Item>
          <Form.Item name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
          <Form.Item shouldUpdate>
            {() => (
              <>
                {/* <Button
                  htmlType="reset"
                  size="large"
                  className="mr-2"
                  disabled={form.getFieldValue('email').length === 0 || isSubmitted}
                  onClick={() => {
                    form.setFieldValue('email', '');
                  }}
                >
                  Reset
                </Button> */}
                <Button
                  type="primary"
                  htmlType="submit"
                  style={{ background: 'linear-gradient(to right, #2575fc, #6a11cb)' }}
                  size="large"
                  className="w-full border-none"
                  disabled={isSubmitted || !!form.getFieldsError().filter(({ errors }) => errors.length).length}
                >
                  Sign in {isSubmitted && <Spin />}
                </Button>
              </>
            )}
          </Form.Item>
        </Form>
        <Flex justify="center" className="pt-2">
          <Text style={{ color: BLACK100 }}>or continue with</Text>
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
              onResolve={({
                provider,
                data,
              }: {
                provider: string;
                data: Pick<User, 'name' | 'email'> & { profilePhoto: string };
              }) => {
                const { name, email, profilePhoto } = data;
                console.log(data);
                setUser({ name, email, photo: profilePhoto, provider, role: UserLevel.Admin });
                navigate(AppRoutes.LAGUE_HOME);
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
