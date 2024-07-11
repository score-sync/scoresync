import { Flex, Spin } from 'antd';
import { Form, Input, Button, Typography } from 'antd';
import { MailOutlined } from '@ant-design/icons';
import { BLACK100, GREY } from '../../utilities/Constant';
import { useNavigate } from 'react-router-dom';
import { AppRoutes } from '../../components/Router/types';
import { notification } from 'antd';
import { useState } from 'react';
import { useNetworkCall } from '../../hooks/utils/use-network-call';

const { Text, Title } = Typography;

const NewUser = () => {
  const [isSubmitted, setSubmit] = useState(false);
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const authenticate = useNetworkCall();

  const onFinish = async (values: { [key in string]: string }) => {
    setSubmit(true);
    await new Promise((r) => setTimeout(r, 5000));
    const data = await authenticate('url', 'POST', values);
    console.log(data);
    notification.open({
      message: 'Invite Sent',
      description: `Invite sent successfully for ${values['email']}.`,
    });
    navigate(AppRoutes.LAGUE_HOME);
  };

  const onFinishFailed = () => {
    notification.error({
      message: 'Error',
      description: `Failed sending invite!`,
    });
  };

  return (
    <Flex justify="center" align="center" className="h-full">
      <div>
        <Title level={1} style={{ color: BLACK100 }}>
          New User Invitation
        </Title>
        <div className="pb-4">
          <Text>Enter new league owners email,</Text>
        </div>
        <Form
          name="invite"
          initialValues={{ email: '', name: '' }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          form={form}
        >
          <Form.Item name="name" rules={[{ required: true, type: 'string', message: 'Please input email!' }]}>
            <Input
              prefix={<MailOutlined style={{ color: GREY }} />}
              placeholder="Name"
              size="large"
              disabled={isSubmitted}
            />
          </Form.Item>
          <Form.Item name="phone" rules={[{ required: true, type: 'number', message: 'Please input email!' }]}>
            <Input
              prefix={<MailOutlined style={{ color: GREY }} />}
              placeholder="Phone"
              size="large"
              disabled={isSubmitted}
            />
          </Form.Item>
          <Form.Item name="email" rules={[{ required: true, type: 'email', message: 'Please input email!' }]}>
            <Input
              prefix={<MailOutlined style={{ color: GREY }} />}
              placeholder="Email"
              size="large"
              disabled={isSubmitted}
            />
          </Form.Item>
          <Form.Item shouldUpdate>
            {() => (
              <>
                {
                  <Button
                    htmlType="reset"
                    size="large"
                    className="mr-2"
                    disabled={form.getFieldValue('email').length === 0 || isSubmitted}
                    onClick={() => form.resetFields()}
                  >
                    Reset
                  </Button>
                }
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
                  Invite User
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

export default NewUser;
