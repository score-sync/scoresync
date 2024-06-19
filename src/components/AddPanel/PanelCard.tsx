import { Card, Typography, Flex } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

const { Text } = Typography;
export const PanelCard = ({ navigate, title }: { navigate: () => void; title: string }) => {
  return (
    <>
      <Card
        hoverable
        className="hidden md:block group p-2 md:p-12 text-center border-2 border-blue"
        cover={
          <div className="p-4 md:p-6 border-blue border-none border-t-1">
            <Flex justify="center">
              <div className="p-0 md:p-2 rounded-full bg-lightBlue group-hover:border-2 group-hover:border-blue">
                {/* Not taking the tailwind color */}
                <PlusOutlined className="p-0 md:p-4" style={{ color: '#5D87FF', fontSize: '60px' }} />
              </div>
            </Flex>
          </div>
        }
        onClick={navigate}
      >
        <Card.Meta title={<Text className="text-sm">{title}</Text>} />
      </Card>
      <Card
        hoverable
        className="visible md:hidden group p-2 md:p-12 text-center border-2 border-blue"
        onClick={navigate}
      >
        <Card.Meta
          title={
            <Flex justify="left">
              <div className="p-0 rounded-full bg-lightBlue group-hover:border-2 group-hover:border-blue">
                {/* Not taking the tailwind color */}
                <PlusOutlined className="p-2" style={{ color: '#5D87FF', fontSize: '30px' }} />
              </div>
              <Text className="w-full text-center flex justify-center text-md mt-3 ml-6">{title}</Text>
            </Flex>
          }
        />
      </Card>
    </>
  );
};
