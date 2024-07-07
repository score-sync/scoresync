import { Flex, Image } from 'antd';
import { Form, Input, Button, Typography } from 'antd';
import { InfoCircleOutlined, LockOutlined } from '@ant-design/icons';
import { BLACK100, GREY } from '../../utilities/Constant';
import Logo from '../../assets/images/logo.png';
import { useNavigate } from 'react-router-dom';
import { AppRoutes } from '../../components/Router/types';
import { useGetURLQueryParams } from '../../hooks/utils/use-get-url-query-param';

const { Text, Title } = Typography;

const LoginPage = () => {
  const navigate = useNavigate();
  const token = useGetURLQueryParams('token');
  const onFinish = () => {
    console.log('Success:');
  };

  const onFinishFailed = () => {
    console.log('Failed:');
  };

  const title = token ? 'Set Password' : 'Reset Password';
  return (
    <Flex justify="center" align="center" className="h-full">
      <div className="w-1/3">
        <Image src={Logo} className={'cursor-pointer mt-4 mb-2 logo'} preview={false} />

        <Title level={1} style={{ color: BLACK100 }}>
          {title}
        </Title>
        <div className="pb-4">
          <Text>
            Enter a new password to reset the password on your account. We’ll ask for this password whenever you log in.
          </Text>
        </div>
        <Form name="login" initialValues={{ remember: false }} onFinish={onFinish} onFinishFailed={onFinishFailed}>
          <Form.Item name="password" rules={[{ required: false, message: 'Please input your Password!' }]}>
            <Input.Password prefix={<LockOutlined style={{ color: GREY }} />} placeholder="New Password" size="large" />
          </Form.Item>
          <ul className="mb-4">
            <li>
              <Text>
                <InfoCircleOutlined /> Must be at least 10 characters long
              </Text>
            </li>
            <li>
              <Text>
                <InfoCircleOutlined /> Must be at least 10 characters long
              </Text>
            </li>
            <li>
              <Text>
                <InfoCircleOutlined /> Must be at least 10 characters long
              </Text>
            </li>
          </ul>
          <Form.Item name="confirmPassword" rules={[{ required: false, message: 'Please input your Password!' }]}>
            <Input.Password
              prefix={<LockOutlined style={{ color: GREY }} />}
              placeholder="Confirm new password"
              size="large"
            />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              style={{ background: 'linear-gradient(to right, #2575fc, #6a11cb)' }}
              size="large"
              className="w-30 border-none"
              onClick={() => {
                navigate(AppRoutes.LOGIN);
              }}
            >
              {title}
            </Button>
          </Form.Item>
        </Form>
        {!token && (
          <Text>
            Know your password <a href="../login">Log In</a>
          </Text>
        )}
      </div>
    </Flex>
  );
};

export default LoginPage;
