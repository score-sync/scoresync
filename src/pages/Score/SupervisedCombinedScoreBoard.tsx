import 'antd/dist/reset.css';
import { Form, Input, DatePicker, Select, Button, Row, Col, Table } from 'antd';

const { Option } = Select;

const columns = [
  {
    title: 'Round No.',
    dataIndex: 'round_no',
    key: 'round_no',
  },
  {
    title: 'Blue Corner',
    dataIndex: 'blue_corner',
    key: 'blue_corner',
  },
  {
    title: 'Red Corner',
    dataIndex: 'red_corner',
    key: 'red_corner',
  },
];

const data = [
  {
    key: '1',
    round_no: 'Round No. 1',
    blue_corner: '8',
    red_corner: '7',
  },
  {
    key: '2',
    round_no: 'Round No. 2',
    blue_corner: '7',
    red_corner: '8',
  },
  {
    key: '3',
    round_no: 'Round No. 3',
    blue_corner: '7',
    red_corner: '9',
  },
  {
    key: '4',
    round_no: 'Total Score',
    blue_corner: '22',
    red_corner: '24',
  },
];

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-6xl">
        <div className="text-center mb-6">
          <img src="https://via.placeholder.com/150" alt="UFC Logo" className="mx-auto" />
          <h1 className="text-2xl font-bold">UFC League</h1>
          <h2 className="text-xl">Supervised Combined Scoreboard</h2>
        </div>
        <Form layout="vertical">
          <Row gutter={[16, 16]}>
            <Col span={12}>
              <Form.Item name="leagueName" label="League Name">
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="date" label="Date">
                <DatePicker className="w-full" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="location" label="Location">
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="division" label="Division">
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="boutNo" label="Bout No.">
                <Select>
                  <Option value="1">1</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="rounds" label="Rounds">
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="style" label="Style">
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="timeOfRound" label="Time of Round">
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="referee" label="Referee">
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="fightEndedRoundNo" label="Fight Ended Round No.">
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="typeOfSubmission" label="Type of Submission">
                <Input />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={[16, 16]} className="mt-4">
            <Col span={12}>
              <Button type="default" className="w-full mb-2">
                Head KO
              </Button>
              <Button type="default" className="w-full mb-2">
                KO Body
              </Button>
              <Button type="default" className="w-full mb-2">
                TKO
              </Button>
              <Button type="default" className="w-full mb-2">
                No Contest
              </Button>
              <Button type="default" className="w-full mb-2">
                RSC
              </Button>
              <Button type="default" className="w-full mb-2">
                Submission
              </Button>
              <Button type="default" className="w-full">
                DQ
              </Button>
            </Col>
          </Row>
          <Row gutter={[16, 16]} className="mt-4">
            <Col span={12}>
              <h3 className="mb-2">Blue Corner</h3>
              <Row gutter={[16, 16]}>
                <Col span={12}>
                  <Form.Item name="blueCornerName" label="Name">
                    <Select>
                      <Option value="1">Select Fighter</Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item name="blueCornerTeam" label="Team">
                    <Input />
                  </Form.Item>
                </Col>
              </Row>
            </Col>
            <Col span={12}>
              <h3 className="mb-2">Red Corner</h3>
              <Row gutter={[16, 16]}>
                <Col span={12}>
                  <Form.Item name="redCornerName" label="Name">
                    <Select>
                      <Option value="2">Select Fighter</Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item name="redCornerTeam" label="Team">
                    <Input />
                  </Form.Item>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row gutter={[16, 16]} className="mt-8">
            <Col span={8}>
              <Form.Item name="judge1" label="Judge 1">
                <Input />
              </Form.Item>
              <Table columns={columns} dataSource={data} pagination={false} size="small" />
            </Col>
            <Col span={8}>
              <Form.Item name="judge2" label="Judge 2">
                <Input />
              </Form.Item>
              <Table columns={columns} dataSource={data} pagination={false} size="small" />
            </Col>
            <Col span={8}>
              <Form.Item name="judge3" label="Judge 3">
                <Input />
              </Form.Item>
              <Table columns={columns} dataSource={data} pagination={false} size="small" />
            </Col>
          </Row>
          <div className="flex justify-between mt-6">
            <Button>Back</Button>
            <Button type="primary" htmlType="submit">
              Save
            </Button>
            <Button>Next</Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default App;
