import { Card, Row, Col, Layout } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

const { Content } = Layout;

const AddPanel = () => {
  return (
    <Content style={{ padding: '50px', backgroundColor: '#f0f2f5' }}>
      <Row justify="center" gutter={16}>
        <Col span={6}>
          <Card
            hoverable
            style={{ textAlign: 'center' }}
            cover={
              <div style={{ padding: '40px 0', backgroundColor: '#f0f2f5' }}>
                <PlusOutlined style={{ fontSize: '40px', color: '#1890ff' }} />
              </div>
            }
          >
            <Card.Meta title="Create League" />
          </Card>
        </Col>
        <Col span={6}>
          <Card
            hoverable
            style={{ textAlign: 'center' }}
            cover={
              <div style={{ padding: '40px 0', backgroundColor: '#f0f2f5' }}>
                <PlusOutlined style={{ fontSize: '40px', color: '#1890ff' }} />
              </div>
            }
          >
            <Card.Meta title="Upcoming League" />
          </Card>
        </Col>
        <Col span={6}>
          <Card
            hoverable
            style={{ textAlign: 'center' }}
            cover={
              <div style={{ padding: '40px 0', backgroundColor: '#f0f2f5' }}>
                <PlusOutlined style={{ fontSize: '40px', color: '#1890ff' }} />
              </div>
            }
          >
            <Card.Meta title="Past League" />
          </Card>
        </Col>
      </Row>
    </Content>
  );
};

export default AddPanel;
