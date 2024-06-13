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
import { MailOutlined, LockOutlined } from '@ant-design/icons';
// import login from './login.less';

const { Title } = Typography;

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
            <Input prefix={<MailOutlined />} placeholder="Email" />
          </Form.Item>
          <Form.Item name="password" rules={[{ required: true, message: 'Please input your Password!' }]}>
            <Input.Password prefix={<LockOutlined />} placeholder="Password" />
          </Form.Item>
          <Form.Item name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" style={styles.loginButton}>
              Sign in
            </Button>
          </Form.Item>
        </Form>
        <Space style={styles.socialLogin}>
          <div>Or continue with</div>
          <Space size="large">
            <Button shape="circle" icon={<i className="fab fa-facebook-f" />} />
            <Button shape="circle" icon={<i className="fab fa-apple" />} />
            <Button shape="circle" icon={<i className="fab fa-google" />} />
          </Space>
        </Space>
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
    background: '#f0f2f5',
  },
  formContainer: {
    padding: '40px',
    background: '#fff',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  title: {
    textAlign: 'center',
    marginBottom: '24px',
    color: '#595959',
  },
  form: {
    maxWidth: '300px',
  },
  loginButton: {
    width: '100%',
    background: 'linear-gradient(to right, #6a11cb, #2575fc)',
    borderColor: 'transparent',
  },
  socialLogin: {
    textAlign: 'center',
    marginTop: '20px',
  },
};

export default LoginPage;
