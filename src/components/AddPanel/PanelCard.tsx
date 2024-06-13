import { Card } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { BLUE } from '../../utilities/Constant';

export const PanelCard = ({ navigate, title }: { navigate: () => void; title: string }) => {
  return (
    <Card
      hoverable
      style={{ textAlign: 'center', border: `2px solid ${BLUE}` }}
      cover={
        <div style={{ padding: '40px 0', border: `2px 0px 0px 0px solid ${BLUE}`, borderRadius: '10px' }}>
          <div>
            <PlusOutlined style={{ fontSize: '40px', color: '#1890ff' }} />
          </div>
        </div>
      }
      onClick={navigate}
    >
      <Card.Meta title={title} />
    </Card>
  );
};
