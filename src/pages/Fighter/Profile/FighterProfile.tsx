import { Row, Col, Typography, Statistic, Image } from 'antd';
import './fighter.css';

const { Title } = Typography;
const ExtendStatic = ({
  title,
  value,
  className = '',
  valueStyle = {},
}: {
  title: string;
  value: string;
  className?: string;
  valueStyle?: { [key: string]: string };
}) => (
  <Statistic
    title={title}
    value={value}
    className={`statistic-item ${className}`}
    valueStyle={{ ...valueStyle, fontSize: '16px' }}
  ></Statistic>
);
const FighterProfile = () => {
  return (
    <>
      <div>
        <Title level={1}>Samir Singh</Title>
        <Title level={4}>PRO - MMA RECORD - 22-6-0</Title>
      </div>
      <Row gutter={[16, 16]} className="mt-16">
        <Col xs={24} md={8}>
          <Image src="https://via.placeholder.com/150" alt="Fighter" className="w-48 h-48 rounded-lg" />
        </Col>
        <Col xs={24} md={16}>
          <Row gutter={[16, 16]} style={{ marginTop: '16px' }}>
            <Col xs={24} sm={12} className="statistic-item p-0 m-0">
              <ExtendStatic title="Fighter Name" value="Conor Anthony McGregor" className="p-0" />
            </Col>
            <Col xs={24} sm={12} className="statistic-item">
              <ExtendStatic title="Date of Birth" value="02-04-1996" className="p-0" />
            </Col>
            <Col xs={24} sm={12} className="statistic-item odd">
              <ExtendStatic title="Height" value="5" />
            </Col>
            <Col xs={24} sm={12} className="statistic-item odd">
              <ExtendStatic title="Weight" value="75 Kgs" />
            </Col>
            <Col xs={24} sm={12} className="statistic-item">
              <ExtendStatic title="Professional/ Amateur" value="Professional" />
            </Col>
            <Col xs={24} sm={12} className="statistic-item">
              <ExtendStatic title="Fighter Contact No." value="+91- 494478***" />
            </Col>
            <Col xs={24} sm={12} className="statistic-item odd">
              <ExtendStatic title="Amateur Record" value="2-0-0 (WIN-LOSS-DRAW)" />
            </Col>
            <Col xs={24} sm={12} className="statistic-item odd">
              <ExtendStatic title="Pro Record" value="2-0-0 (WIN-LOSS-DRAW)" />
            </Col>
            <Col xs={24} sm={12} className="statistic-item">
              <ExtendStatic title="Coach Name" value="Samrat Singh" />
            </Col>
            <Col xs={24} sm={12} className="statistic-item">
              <ExtendStatic title="Coach Contact No." value="+91- 746474****" />
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default FighterProfile;
