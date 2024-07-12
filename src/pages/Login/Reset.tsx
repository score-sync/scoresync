import { Flex, Image, Spin } from 'antd';
import { Form, Input, Button, Typography } from 'antd';
import { InfoCircleOutlined, LockOutlined } from '@ant-design/icons';
import { BLACK100, GREY } from '../../utilities/Constant';
import Logo from '../../assets/images/logo.png';
import { useNavigate } from 'react-router-dom';
import { AppRoutes } from '../../components/Router/types';
import { useGetURLQueryParams } from '../../hooks/utils/use-get-url-query-param';
import { notification } from 'antd';
import { useState } from 'react';
import { useNetworkCall } from '../../hooks/utils/use-network-call';

const { Text, Title } = Typography;

const LoginPage = () => {
  const [form] = Form.useForm();
  const [isSubmitted, setSubmit] = useState(false);
  const navigate = useNavigate();
  const token = useGetURLQueryParams('token');
  const authenticate = useNetworkCall();

  const onFinish = async (values: { [key in string]: string }) => {
    setSubmit(true);
    const data = await authenticate('url', 'POST', { ...values, token });
    console.log(data);

    notification.open({
      message: 'Password Set',
      description: `Try to sign in with new password.`,
    });
    navigate(AppRoutes.LOGIN);
  };

  const onFinishFailed = () => {
    notification.error({
      message: 'Error',
      description: `Failed resetting password!`,
    });
  };

  const title = token ? 'Set Password' : 'Reset Password';

  return (
    <Flex justify="center" align="center" className="h-full">
      <div className="md:w-1/2 lg:w-1/3">
        <Image src={Logo} className={'cursor-pointer mt-4 mb-2 logo'} preview={false} />

        <Title level={1} style={{ color: BLACK100 }}>
          {title}
        </Title>
        <div className="pb-4">
          <Text>
            Enter a new password to reset the password on your account. We’ll ask for this password whenever you log in.
          </Text>
        </div>
        <Form
          form={form}
          name="reset"
          initialValues={{ password: '', confirmPassword: '' }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
              },
              () => ({
                validator(_, value) {
                  if (value && value.length >= 8) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error('Must be at least 8 characters long'));
                },
              }),
            ]}
          >
            <Input.Password
              prefix={<LockOutlined style={{ color: GREY }} />}
              placeholder="New Password"
              size="large"
              disabled={isSubmitted}
            />
          </Form.Item>
          <ul className="mb-4">
            <li>
              <Text>
                <InfoCircleOutlined /> Must be at least 8 characters long
              </Text>
            </li>
            {/* <li>
              <Text>
                <InfoCircleOutlined /> Must be at least 10 characters long
              </Text>
            </li>
            <li>
              <Text>
                <InfoCircleOutlined /> Must be at least 10 characters long
              </Text>
            </li> */}
          </ul>
          <Form.Item
            name="confirmPassword"
            rules={[
              {
                required: true,
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error('The new password that you entered do not match!'));
                },
              }),
            ]}
          >
            <Input.Password
              prefix={<LockOutlined style={{ color: GREY }} />}
              placeholder="Confirm new password"
              size="large"
              disabled={isSubmitted}
            />
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
                  size="large"
                  className="w-30"
                  disabled={
                    isSubmitted ||
                    !form.isFieldsTouched(true) ||
                    !!form.getFieldsError().filter(({ errors }) => errors.length).length
                  }
                >
                  {title}
                  {isSubmitted && <Spin />}
                </Button>
              </>
            )}
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
