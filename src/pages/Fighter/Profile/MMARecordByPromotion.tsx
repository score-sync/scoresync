import 'antd/dist/reset.css';
import { Card } from 'antd';
import RecordByPromotion from '../../../components/Combats/RecordByPromotion';

export const MMARecordByPromotion = () => {
  return (
    <Card title="MMA Record By Promotion" className="mt-6">
      <RecordByPromotion />
    </Card>
  );
};
