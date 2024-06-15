// import { Row, Layout } from 'antd';

// const { Content } = Layout;

// export const Login = () => {
//   return (
//     <Content style={{ alignContent: 'center' }}>
//       <Row justify="center" align="middle" gutter={16} style={{ height: '100vh', background: '#fff' }}>

//       </Row>
//     </Content>
//   );
// };
import { Form, Input, Button, Checkbox, Typography, Space } from 'antd';
import { MailOutlined, LockOutlined, FacebookFilled, AppleFilled, GoogleCircleFilled } from '@ant-design/icons';
import { BLUE, GREY } from '../../utilities/Constant';
// import login from './login.less';

import { createFromIconfontCN } from '@ant-design/icons';

const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
});

const { Title, Text } = Typography;

const LoginPage = () => {
  const onFinish = () => {
    console.log('Success:');
  };

  const onFinishFailed = () => {
    console.log('Failed:');
  };

  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <Title level={2} style={styles.title}>
          Welcome
        </Title>
        <Form
          name="login"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          style={styles.form}
        >
          <Form.Item name="email" rules={[{ required: true, message: 'Please input your Email!' }]}>
            <Input prefix={<MailOutlined style={{ color: GREY }} />} placeholder="Email" size="large" />
          </Form.Item>
          <Form.Item name="password" rules={[{ required: true, message: 'Please input your Password!' }]}>
            <Input.Password prefix={<LockOutlined style={{ color: GREY }} />} placeholder="Password" size="large" />
          </Form.Item>
          <Form.Item name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" style={styles.loginButton} size="large">
              Sign in
            </Button>
          </Form.Item>
        </Form>
        <div style={styles.socialLogin} className="pt-4">
          <Text color={GREY}>or continue with</Text>
          <div className="pt-6">
            <Space size="large">
              <Button shape="circle" icon={<FacebookFilled />} />
              <Button shape="circle" icon={<AppleFilled />} />
              <Button shape="circle" icon={<GoogleCircleFilled />} />
            </Space>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  formContainer: {
    padding: '40px',
    background: '#fff',
    borderRadius: '8px',
  },
  title: {
    color: BLUE,
  },
  form: {
    maxWidth: '300px',
  },
  loginButton: {
    width: '100%',
    background: 'linear-gradient(to right, #2575fc, #6a11cb)',
    borderColor: 'transparent',
  },
  socialLogin: {
    textAlign: 'center',
  },
};

export default LoginPage;
