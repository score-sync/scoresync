import { Layout, Form, Input, Button, Row, Col, Divider, Upload, Space } from 'antd';
import { MinusOutlined, PlusOutlined, UploadOutlined } from '@ant-design/icons';
import './CreateLague.css';

const { Header, Content } = Layout;

const App = () => {
  const [form] = Form.useForm();

  const increment = (field) => {
    const currentValue = form.getFieldValue(field);
    form.setFieldsValue({ [field]: currentValue + 1 });
  };

  const decrement = (field) => {
    const currentValue = form.getFieldValue(field);
    form.setFieldsValue({ [field]: Math.max(currentValue - 1, 0) });
  };

  return (
    <Content style={{ padding: '50px', backgroundColor: '#f0f2f5' }}>
      <Form
        form={form}
        layout="vertical"
        initialValues={{
          amateurMMABouts: 18,
          proMMABouts: 18,
          amateurBJJBouts: 18,
          proBJJBouts: 18,
          amateurK1Bouts: 18,
          proK1Bouts: 18,
        }}
      >
        <Divider orientation="left">Create League</Divider>
        <Row gutter={16}>
          <Col xs={24} sm={12} md={8}>
            <Form.Item label="League Name" name="leagueName">
              <Input />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Form.Item label="League Date & Time" name="leagueDateTime">
              <Input />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Form.Item label="Promoter Name" name="promoterName">
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col xs={24} sm={12} md={8}>
            <Form.Item label="League Location" name="leagueLocation">
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col xs={24} sm={12} md={8}>
            <Form.Item label="No. of Amateur MMA Bouts" name="amateurMMABouts">
              <Space>
                <Button icon={<MinusOutlined />} onClick={() => decrement('amateurMMABouts')} />
                <Input value={form.getFieldValue('amateurMMABouts')} readOnly />
                <Button icon={<PlusOutlined />} onClick={() => increment('amateurMMABouts')} />
              </Space>
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Form.Item label="No. of Pro MMA Bouts" name="proMMABouts">
              <Space>
                <Button icon={<MinusOutlined />} onClick={() => decrement('proMMABouts')} />
                <Input value={form.getFieldValue('proMMABouts')} readOnly />
                <Button icon={<PlusOutlined />} onClick={() => increment('proMMABouts')} />
              </Space>
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col xs={24} sm={12} md={8}>
            <Form.Item label="No. of Amateur BJJ Bouts" name="amateurBJJBouts">
              <Space>
                <Button icon={<MinusOutlined />} onClick={() => decrement('amateurBJJBouts')} />
                <Input value={form.getFieldValue('amateurBJJBouts')} readOnly />
                <Button icon={<PlusOutlined />} onClick={() => increment('amateurBJJBouts')} />
              </Space>
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Form.Item label="No. of Pro BJJ Bouts" name="proBJJBouts">
              <Space>
                <Button icon={<MinusOutlined />} onClick={() => decrement('proBJJBouts')} />
                <Input value={form.getFieldValue('proBJJBouts')} readOnly />
                <Button icon={<PlusOutlined />} onClick={() => increment('proBJJBouts')} />
              </Space>
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col xs={24} sm={12} md={8}>
            <Form.Item label="No. of Amateur K1 Bouts" name="amateurK1Bouts">
              <Space>
                <Button icon={<MinusOutlined />} onClick={() => decrement('amateurK1Bouts')} />
                <Input value={form.getFieldValue('amateurK1Bouts')} readOnly />
                <Button icon={<PlusOutlined />} onClick={() => increment('amateurK1Bouts')} />
              </Space>
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Form.Item label="No. of Pro K1 Bouts" name="proK1Bouts">
              <Space>
                <Button icon={<MinusOutlined />} onClick={() => decrement('proK1Bouts')} />
                <Input value={form.getFieldValue('proK1Bouts')} readOnly />
                <Button icon={<PlusOutlined />} onClick={() => increment('proK1Bouts')} />
              </Space>
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col xs={24} sm={12} md={8}>
            <Form.Item label="Upload League Logo" name="uploadLeagueLogo">
              <Upload>
                <Button icon={<UploadOutlined />}>Upload</Button>
              </Upload>
            </Form.Item>
          </Col>
        </Row>
        <Row justify="space-between" style={{ marginTop: 20 }}>
          <Col>
            <Button>Back</Button>
          </Col>
          <Col>
            <Button type="primary">Save</Button>
          </Col>
          <Col>
            <Button type="primary">Next</Button>
          </Col>
        </Row>
      </Form>
    </Content>
  );
};

export default App;
