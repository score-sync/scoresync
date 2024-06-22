import 'antd/dist/reset.css';
import { Card, Row, Col, Statistic, Button, Typography, Image } from 'antd';

const { Title, Text } = Typography;

const profileData = {
  fighterName: 'Conor Anthony McGregor',
  dob: '02-04-1996',
  height: "5'9",
  weight: '75 Kgs',
  professional: 'Professional',
  fighterContact: '+91-494478***',
  amateurRecord: '2-0-0 (WIN-LOSS-DRAW)',
  proRecord: '2-0-0 (WIN-LOSS-DRAW)',
  coachName: 'Samrat Singh',
  coachContact: '+91-746474****',
};

const statsData = [
  {
    title: 'Fight',
    value: '22-6-0',
    subData: [
      { title: 'Wins', value: '22' },
      { title: 'Losses', value: '6' },
    ],
    typeStats: [
      { type: 'KO/TKO', value: '83%' },
      { type: 'Submission', value: '24%' },
      { type: 'Decision', value: '83%' },
    ],
  },
];

const Fighter = () => {
  return (
    <div className="container mx-auto pt-6">
      <div className="rounded-lg pt-6">
        <div className="flex items-center">
          <Image src="https://via.placeholder.com/150" alt="Fighter" className="w-48 h-48 rounded-lg" />
          <div className="ml-4">
            <Title level={2}>Samir Singh</Title>
            <Text className="text-lg font-medium">PRO - MMA RECORD - 22-6-0</Text>
          </div>
        </div>
        <Row gutter={[16, 16]} className="mt-6">
          <Col span={12}>
            <Statistic title="Fighter Name" value={profileData.fighterName} />
          </Col>
          <Col span={12}>
            <Statistic title="Date of Birth" value={profileData.dob} />
          </Col>
          <Col span={12}>
            <Statistic title="Height" value={profileData.height} />
          </Col>
          <Col span={12}>
            <Statistic title="Weight" value={profileData.weight} />
          </Col>
          <Col span={24}>
            <Statistic title="Professional/ Amateur" value={profileData.professional} style={{ width: '100%' }} />
          </Col>
          <Col span={12}>
            <Statistic title="Fighter Contact No." value={profileData.fighterContact} />
          </Col>
          <Col span={12}>
            <Statistic title="Amateur Record" value={profileData.amateurRecord} />
          </Col>
          <Col span={12}>
            <Statistic title="Pro Record" value={profileData.proRecord} />
          </Col>
          <Col span={12}>
            <Statistic title="Coach Name" value={profileData.coachName} />
          </Col>
          <Col span={12}>
            <Statistic title="Coach Contact No." value={profileData.coachContact} />
          </Col>
        </Row>
        <Card title="Gyms and Affiliations" className="mt-6">
          <Image src="https://via.placeholder.com/300x100" alt="UFC League Gym" />
        </Card>
        <Card title="Combat Sports Record" className="mt-6">
          <Row gutter={[16, 16]} align="middle" justify="center">
            {statsData.map((stat, index) => (
              <Col key={index} span={24} className="text-center">
                <Statistic title="Record" value={stat.value} />
                <Row gutter={[16, 16]} className="mt-4">
                  {stat.subData.map((sub, idx) => (
                    <Col key={idx} span={8}>
                      <Button block>{sub.title}</Button>
                      <Text className="block mt-2">{sub.value}</Text>
                    </Col>
                  ))}
                </Row>
                <Row gutter={[16, 16]} className="mt-4">
                  {stat.typeStats.map((typeStat, idx) => (
                    <Col key={idx} span={8}>
                      <Button block>{typeStat.type}</Button>
                      <Text className="block mt-2">{typeStat.value}</Text>
                    </Col>
                  ))}
                </Row>
              </Col>
            ))}
          </Row>
        </Card>
        <Card title="Pro Results" className="mt-6">
          <Button type="link" className="float-right">
            Expand all details
          </Button>
          <Row gutter={[16, 16]} className="mt-4">
            <Col span={24}>
              <Row gutter={[16, 16]}>
                <Col span={4}>
                  <Text>Dustin Poirier</Text>
                </Col>
                <Col span={4}>
                  <Text>27-6-0</Text>
                </Col>
                <Col span={6}>
                  <Text>Loss - Doctor Stoppage (broken Ankle)</Text>
                </Col>
                <Col span={4}>
                  <Text>2021.07.10</Text>
                </Col>
                <Col span={2}>
                  <Button type="link">Edit</Button>
                </Col>
              </Row>
            </Col>
            {/* Repeat rows as needed for additional results */}
          </Row>
        </Card>
      </div>
    </div>
  );
};

export default Fighter;
