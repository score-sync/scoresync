import { Row, Col, Flex } from 'antd';
import { PanelCard } from './PanelCard';

interface AddPanelProps {
  hasBar?: boolean;
  cards: { title: string; navigate: () => void }[];
}
export const AddPanel = ({ hasBar, cards }: AddPanelProps) => {
  return (
    <>
      <Flex className="h-full items-center" justify="space-around">
        <Row justify="space-around" align="middle" gutter={16} className="w-full">
          {cards.map(({ title, navigate }) => (
            <Col key={title} xs={24} sm={24} md={6} className="pb-4">
              <PanelCard title={title} navigate={navigate} />
            </Col>
          ))}
        </Row>
      </Flex>
      {hasBar && <div className="hidden lg:block fixed bottom-0 p-8 l-0 left-0 w-full bg-blue"></div>}
    </>
  );
};
