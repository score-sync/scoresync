import { Card, Row, Col, Layout } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from '../Router/types';

const { Content } = Layout;

const AddPanel = () => {
  const navigate = useNavigate();
  return (
    <Content>
      <Row justify="center" gutter={16} style={{ minHeight: '100vh' }}>
        <Col span={6}>
          <Card
            hoverable
            style={{ textAlign: 'center' }}
            cover={
              <div style={{ padding: '40px 0', backgroundColor: '#f0f2f5' }}>
                <PlusOutlined style={{ fontSize: '40px', color: '#1890ff' }} />
              </div>
            }
            onClick={() => {
              navigate(RoutePath.CREATE_LEAGUE);
            }}
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
            onClick={() => {
              navigate(RoutePath.UPCOMING_LEAGUE);
            }}
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
            onClick={() => {
              navigate(RoutePath.PAST_LEAGUE);
            }}
          >
            <Card.Meta title="Past League" />
          </Card>
        </Col>
      </Row>
    </Content>
  );
};

export default AddPanel;
