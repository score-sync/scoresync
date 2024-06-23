import 'antd/dist/reset.css';
import { Card, Image } from 'antd';
import FighterProfile from './Profile/FighterProfile';
import { CombatSportsRecord } from './Profile/CombatSportsRecord';
import { ProResults } from './Profile/ProResults';
import { MMARecordByPromotion } from './Profile/MMARecordByPromotion';

const Fighter = () => {
  return (
    <div className="container mx-auto pt-6">
      <div className="rounded-lg pt-6">
        <FighterProfile />
        <Card title="Gyms and Affiliations" className="mt-6">
          <Image src="https://via.placeholder.com/300x100" alt="UFC League Gym" />
        </Card>
        <CombatSportsRecord />
        <MMARecordByPromotion />
        <ProResults />
      </div>
    </div>
  );
};

export default Fighter;
