import { Flex, Spin } from 'antd';
import { Form, Input, Button, Typography } from 'antd';
import { MailOutlined, PhoneOutlined, SmileOutlined } from '@ant-design/icons';
import { BLACK100, GREY } from '../../utilities/Constant';
import { useNavigate } from 'react-router-dom';
import { AppRoutes } from '../../components/Router/types';
import { notification } from 'antd';
import { useEffect, useState } from 'react';
import { useNetworkCall } from '../../hooks/utils/use-network-call';
import Select from 'antd/lib/select';

const { Text, Title } = Typography;

const NewUser = () => {
  const [isSubmitted, setSubmit] = useState(true);
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const authenticate = useNetworkCall();

  useEffect(() => {
    setSubmit(false);
  }, []);

  const onFinish = async (values: { [key in string]: string }) => {
    setSubmit(true);
    const data = await authenticate('/onboard-user', 'POST', {
      ...values,
      reset_url: `${window.location.origin}/login/reset`,
    });
    if (!data) {
      notification.open({
        message: 'Failed try again!',
      });
      setSubmit(false);
      return;
    }
    notification.open({
      message: 'Invite Sent',
      description: `Invite sent successfully to ${values['email']}.`,
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
          initialValues={{ email: '', first_name: '', last_name: '', phone_number: '', role_id: '1' }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          form={form}
        >
          <Form.Item
            name="first_name"
            rules={[{ required: true, type: 'string', message: 'Please input first name!' }]}
          >
            <Input
              prefix={<SmileOutlined style={{ color: GREY }} />}
              placeholder="First Name"
              size="large"
              disabled={isSubmitted}
            />
          </Form.Item>
          <Form.Item name="last_name" rules={[{ required: true, type: 'string', message: 'Please input last name!' }]}>
            <Input
              prefix={<SmileOutlined style={{ color: GREY }} />}
              placeholder="Last Name"
              size="large"
              disabled={isSubmitted}
            />
          </Form.Item>
          <Form.Item name="phone_number" rules={[{ required: true, type: 'string', message: 'Please input phone!' }]}>
            <Input
              prefix={<PhoneOutlined style={{ color: GREY }} />}
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
          <Form.Item name="role_id" label="" className="md:mr-16">
            <Select size="large">
              <Select.Option value="1">Owner</Select.Option>
              <Select.Option value="2">Judge</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item shouldUpdate>
            {() => (
              <>
                {
                  <Button
                    htmlType="reset"
                    size="large"
                    className="mr-2"
                    disabled={isSubmitted}
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
