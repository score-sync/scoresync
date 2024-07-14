import { Flex, Image, Spin } from 'antd';
import { Form, Input, Button, Typography } from 'antd';
import { MailOutlined } from '@ant-design/icons';
import { BLACK100, GREY } from '../../utilities/Constant';
import Logo from '../../assets/images/logo.png';
import { useNavigate } from 'react-router-dom';
import { AppRoutes } from '../../components/Router/types';
import { notification } from 'antd';
import { useEffect, useState } from 'react';
import { Method, useNetworkCall } from '../../hooks/utils/use-network-call';

const { Text, Title } = Typography;

const RequestPassword = () => {
  const [form] = Form.useForm();
  const [isSubmitted, setSubmit] = useState(true);
  const navigate = useNavigate();
  const authenticate = useNetworkCall();

  useEffect(() => {
    setSubmit(false);
  }, []);

  const onFinish = async (values: { [key in string]: string }) => {
    setSubmit(true);
    const data = await authenticate('/request-reset-password', Method.POST, { ...values });
    if (!data) {
      setSubmit(false);
      return;
    }

    notification.open({
      message: 'Password Reset',
      description: `Look for password reset link in your inbox.`,
    });
    navigate(AppRoutes.LOGIN);
  };

  const onFinishFailed = () => {
    notification.error({
      message: 'Error',
      description: `Failed resetting password!`,
    });
  };

  return (
    <Flex justify="center" align="center" className="h-full">
      <div className="md:w-1/2">
        <Image src={Logo} className={'cursor-pointer mt-4 mb-2 logo'} preview={false} />

        <Title level={1} style={{ color: BLACK100 }}>
          {'Request New Password'}
        </Title>
        <div className="pb-4">
          <Text>Enter your email id to reset password.</Text>
        </div>
        <Form
          form={form}
          name="email"
          initialValues={{ email: '' }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                type: 'email',
              },
            ]}
          >
            <Input
              prefix={<MailOutlined style={{ color: GREY }} />}
              placeholder="Confirm new password"
              size="large"
              disabled={isSubmitted}
            />
          </Form.Item>
          <Form.Item shouldUpdate>
            {() => (
              <>
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
                  {'Request'}
                  {isSubmitted && <Spin />}
                </Button>
              </>
            )}
          </Form.Item>
        </Form>
      </div>
    </Flex>
  );
};

export default RequestPassword;
