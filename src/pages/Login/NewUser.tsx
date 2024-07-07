import { Flex } from 'antd';
import { Form, Input, Button, Typography } from 'antd';
import { LockOutlined } from '@ant-design/icons';
import { BLACK100, GREY } from '../../utilities/Constant';
import { useNavigate } from 'react-router-dom';
import { AppRoutes } from '../../components/Router/types';

const { Text, Title } = Typography;

const NewUser = () => {
  const navigate = useNavigate();

  const title = 'New User Invitation';
  return (
    <Flex justify="center" align="center" className="h-full">
      <div className="w-1/3">
        <Title level={1} style={{ color: BLACK100 }}>
          {title}
        </Title>
        <div className="pb-4">
          <Text>Enter new league owners email,</Text>
        </div>
        <Form name="login" initialValues={{ remember: false }} onFinish={console.log} onFinishFailed={console.log}>
          <Form.Item name="email" rules={[{ required: false, message: 'Please input email!' }]}>
            <Input.Password prefix={<LockOutlined style={{ color: GREY }} />} placeholder="Email" size="large" />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              style={{ background: 'linear-gradient(to right, #2575fc, #6a11cb)' }}
              size="large"
              className="w-30 border-none"
              onClick={() => {
                navigate(AppRoutes.LAGUE_HOME);
              }}
            >
              Invite User
            </Button>
          </Form.Item>
        </Form>
      </div>
    </Flex>
  );
};

export default NewUser;
