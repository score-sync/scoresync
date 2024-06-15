import { Row, Col, Flex } from 'antd';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from '../Router/types';
import { PanelCard } from './PanelCard';

const AddPanel = () => {
  const navigate = useNavigate();
  return (
    <>
      <Flex className="h-full items-center" justify="space-around">
        <Row justify="space-around" align="middle" gutter={16} className="w-full">
          <Col xs={24} sm={24} md={6} className="pb-4">
            <PanelCard
              title="Create League"
              navigate={() => {
                navigate(RoutePath.CREATE_LEAGUE);
              }}
            />
          </Col>
          <Col xs={24} sm={24} md={6} className="pb-4">
            <PanelCard
              title="Upcoming League"
              navigate={() => {
                navigate(RoutePath.UPCOMING_LEAGUE);
              }}
            />
          </Col>
          <Col xs={24} sm={24} md={6} className="pb-4">
            <PanelCard
              title="Past League"
              navigate={() => {
                navigate(RoutePath.PAST_LEAGUE);
              }}
            />
          </Col>
        </Row>
      </Flex>
      <div className="hidden lg:block fixed bottom-0 p-8 l-0 left-0 w-full bg-blue"></div>
    </>
  );
};

export default AddPanel;
