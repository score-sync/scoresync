import 'antd/dist/reset.css';
import { Form, Input, DatePicker, Select, Button, Row, Col } from 'antd';

const { Option } = Select;

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-5xl">
        <div className="text-center mb-6">
          <img src="https://via.placeholder.com/150" alt="UFC Logo" className="mx-auto" />
          <h1 className="text-2xl font-bold">UFC League</h1>
          <h2 className="text-xl">Create Bouts</h2>
        </div>
        <Form layout="vertical">
          <Row gutter={[16, 16]}>
            <Col span={12}>
              <Form.Item name="boutType" label="Bout Type">
                <Select>
                  <Option value="professional">Professional</Option>
                  <Option value="amateur">Amateur</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="boutDate" label="Bout Date">
                <DatePicker className="w-full" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="boutNumber" label="Bout Number">
                <Input defaultValue="1" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="boutName" label="Bout Name">
                <Input defaultValue="UFC League" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="totalRounds" label="Total Rounds">
                <Select defaultValue="1">
                  <Option value="1">1</Option>
                  <Option value="3">3</Option>
                  <Option value="5">5</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="roundDuration" label="Round Duration">
                <Select defaultValue="3 minutes">
                  <Option value="3 minutes">3 minutes</Option>
                  <Option value="5 minutes">5 minutes</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="blueCorner" label="Blue Corner">
                <Select>
                  <Option value="fighter1">Select Fighter</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="redCorner" label="Red Corner">
                <Select>
                  <Option value="fighter2">Select Fighter</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={24} className="text-center mb-4">
              <div className="text-2xl font-bold">VS</div>
            </Col>
            <Col span={24}>
              <Form.Item name="addReferee" label="Add Referee">
                <Input />
              </Form.Item>
            </Col>
          </Row>
          <div className="flex justify-between mt-6">
            <Button
              onClick={() => {
                history.back();
              }}
            >
              Back
            </Button>
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
