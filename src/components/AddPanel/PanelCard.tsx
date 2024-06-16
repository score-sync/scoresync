import { Card, Typography, Flex } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

const { Text } = Typography;
export const PanelCard = ({ navigate, title }: { navigate: () => void; title: string }) => {
  return (
    <Card
      hoverable
      className="p-2 md:p-12 text-center border-2 border-blue"
      cover={
        <div className="p-4 md:p-6 border-blue border-none border-t-1">
          <Flex justify="center">
            <div className="p-0 md:p-4 rounded-full bg-lightBlue">
              {/* Not taking the tailwind color */}
              <PlusOutlined className="p-2 md:p-4 text-5xl" style={{ color: '#5D87FF' }} />
            </div>
          </Flex>
        </div>
      }
      onClick={navigate}
    >
      <Card.Meta title={<Text className="text-xs">{title}</Text>} />
    </Card>
  );
};
