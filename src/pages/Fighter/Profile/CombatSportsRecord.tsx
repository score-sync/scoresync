import 'antd/dist/reset.css';
import { Card, Typography, Flex } from 'antd';
import CombatBox from '../../../components/Combats/CombatBox';

const { Text } = Typography;

export const CombatSportsRecord = () => {
  return (
    <Card title="Combat Sports Record" className="mt-6">
      <Flex justify="space-around">
        <Text>PRO MMA STATISTICS</Text>
        <Text>Record: 22-6-0</Text>
      </Flex>
      <Flex justify="space-around">
        <CombatBox wins={10} losses={10} fight="KO/TKO"></CombatBox>
        <CombatBox wins={10} losses={10} fight="Submission"></CombatBox>
        <CombatBox wins={10} losses={10} fight="Decision"></CombatBox>
      </Flex>
    </Card>
  );
};
