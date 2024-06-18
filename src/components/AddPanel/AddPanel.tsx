import { Row, Col, Flex } from 'antd';
import { useNavigate } from 'react-router-dom';
import { AppRoutes } from '../Router/types';
import { PanelCard } from './PanelCard';

const AddPanel = () => {
  const navigate = useNavigate();
  const hasBar = true;
  const Panels = [
    {
      title: 'Create League',
      navigate: () => {
        navigate(AppRoutes.CREATE_LEAGUE);
      },
    },
    {
      title: 'Upcoming League',
      navigate: () => {
        navigate(AppRoutes.UPCOMING_LEAGUE);
      },
    },
    {
      title: 'Past League',
      navigate: () => {
        navigate(AppRoutes.PAST_LEAGUE);
      },
    },
  ];
  return (
    <>
      <Flex className="h-full items-center" justify="space-around">
        <Row justify="space-around" align="middle" gutter={16} className="w-full">
          {Panels.map(({ title, navigate }) => (
            <Col xs={24} sm={24} md={6} className="pb-4">
              <PanelCard title={title} navigate={navigate} />
            </Col>
          ))}
        </Row>
      </Flex>
      {hasBar && <div className="hidden lg:block fixed bottom-0 p-8 l-0 left-0 w-full bg-blue"></div>}
    </>
  );
};

export default AddPanel;
