import { Row, Col, Layout } from 'antd';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from '../Router/types';
import { PanelCard } from './PanelCard';

const { Content } = Layout;

const AddPanel = () => {
  const navigate = useNavigate();
  return (
    <Content style={{ alignContent: 'center' }}>
      <Row justify="center" align="middle" gutter={16} style={{ height: '100vh', background: '#fff' }}>
        <Col span={6}>
          <PanelCard
            title="Create League"
            navigate={() => {
              navigate(RoutePath.CREATE_LEAGUE);
            }}
          />
        </Col>
        <Col span={6}>
          <PanelCard
            title="Upcoming League"
            navigate={() => {
              navigate(RoutePath.UPCOMING_LEAGUE);
            }}
          />
        </Col>
        <Col span={6}>
          <PanelCard
            title="Past League"
            navigate={() => {
              navigate(RoutePath.PAST_LEAGUE);
            }}
          />
        </Col>
      </Row>
    </Content>
  );
};

export default AddPanel;
