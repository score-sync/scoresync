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

const { Text } = Typography;

const LoginPage = () => {
  const navigate = useNavigate();

  const onFinish = () => {
    console.log('Success:');
  };

  const onFinishFailed = () => {
    console.log('Failed:');
  };

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
            <Button shape="circle" icon={<GoogleCircleFilled />} />
          </Space>
        </Flex>
      </div>
    </Flex>
  );
};

export default LoginPage;
