import { Flex, Image, Spin, notification } from 'antd';
import { Form, Input, Button, Checkbox } from 'antd';
import { MailOutlined, LockOutlined, LoadingOutlined } from '@ant-design/icons';
import { GREY, STORAGE_TOKEN, STORAGE_REDIRECT_URL } from '../../utilities/Constant';
import Logo from '../../assets/images/logo.png';
import { Navigate, useNavigate } from 'react-router-dom';
import { AppRoutes } from '../../components/Router/types';
import { useData } from '../../DataProvider';
// import { LoginSocialGoogle } from 'reactjs-social-login';

import { useEffect, useState } from 'react';
import { User } from '../../types/User';
import { Method, useNetworkCall } from '../../hooks/utils/use-network-call';
import { useValidateUser } from '../../hooks/utils/use-validate-user';

const LoginPage = () => {
  const [disableForm, formDisable] = useState(true);
  const [form] = Form.useForm();
  const redirectURL = localStorage.getItem(STORAGE_REDIRECT_URL);

  const {
    setUser,
    state: { user },
  } = useData();
  const navigate = useNavigate();
  const authenticate = useNetworkCall();
  const validateUser = useValidateUser();

  useEffect(() => {
    formDisable(false);
    if (localStorage.getItem(STORAGE_TOKEN)) {
      validateUser();
    }
  }, []);

  const onFinish = async (values: { [key in string]: string }) => {
    formDisable(true);
    const validateCredentials = (await authenticate('/login', Method.POST, {
      username: values['email'],
      password: values['password'],
    })) as User;
    if (!validateCredentials) {
      notification.open({
        message: 'Failed to Login!',
      });
      formDisable(false);
      return;
    }
    const { token } = validateCredentials;
    setUser({ token } as User);
    localStorage.setItem(STORAGE_TOKEN, token as string);
    await validateUser();
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

  // const onLoginStart = useCallback(() => {
  //   // alert('login start');
  // }, []);

  console.log(redirectURL, user);

  // Session found not validated
  if (localStorage.getItem(STORAGE_TOKEN) && !user) {
    return (
      <Flex className="h-full w-full" justify="center" align="center">
        <Spin indicator={<LoadingOutlined style={{ fontSize: 48 }} spin />} />
      </Flex>
    );
  }

  if (user?.role && redirectURL && redirectURL != '') {
    const url = new URL(redirectURL);
    return <Navigate to={`${url.pathname}${url.search}`} />;
  }

  if (user?.role) {
    return <Navigate to={AppRoutes.LAGUE_HOME} />;
  }

  // const REDIRECT_URI = 'http://localhost:5173/signin';
  // const GOOGLE_APP_ID = '413722017629-jeqehdvvsjj03ooto842f5ju58sdupk8.apps.googleusercontent.com';
  return (
    <Flex justify="center" align="center" className="h-full">
      <div className="md:w-1/2 lg:w-1/3 w-full">
        <Image src={Logo} className={'cursor-pointer mt-4 mb-4 logo'} preview={false} />
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
              disabled={disableForm}
            />
          </Form.Item>
          <Form.Item name="password" rules={[{ required: true, message: 'Please input your password!' }]}>
            <Input.Password
              prefix={<LockOutlined style={{ color: GREY }} />}
              placeholder="Password"
              size="large"
              disabled={disableForm}
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
                  disabled={form.getFieldValue('email').length === 0 || disableForm}
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
                  disabled={disableForm || !!form.getFieldsError().filter(({ errors }) => errors.length).length}
                >
                  Sign in {disableForm && <Spin />}
                </Button>
              </>
            )}
          </Form.Item>
        </Form>
        {/* <Flex justify="center" className="pt-2">
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
        </Flex> */}
      </div>
    </Flex>
  );
};

export default LoginPage;
