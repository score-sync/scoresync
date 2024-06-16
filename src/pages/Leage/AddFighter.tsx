import 'antd/dist/reset.css';
import { Form, Input, DatePicker, Select, Button, Upload, Row, Col } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const { Option } = Select;

const AddFighter = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-5xl">
        <div className="text-center mb-6">
          <img src="https://via.placeholder.com/150" alt="UFC Logo" className="mx-auto" />
          <h1 className="text-2xl font-bold">UFC League</h1>
        </div>
        <Form layout="vertical">
          <Row gutter={[16, 16]}>
            <Col span={12}>
              <Form.Item name="fighterName" label="Fighter Name">
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="dob" label="Date of Birth">
                <DatePicker className="w-full" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="height" label="Height">
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="weight" label="Weight">
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="professionalAmateur" label="Professional/ Amateur">
                <Select>
                  <Option value="professional">Professional</Option>
                  <Option value="amateur">Amateur</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="fighterContactNo" label="Fighter Contact No.">
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="amateurRecord" label="Amateur Record">
                <Input defaultValue="2-0-0 (WIN-LOSS-DRAW)" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="proRecord" label="Pro Record">
                <Input defaultValue="2-0-0 (WIN-LOSS-DRAW)" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="coachName" label="Coach Name">
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="coachContactNo" label="Coach Contact No.">
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="associationGymTeam" label="Association / Gym / Team">
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="uploadFighterImage" label="Upload Fighter Image">
                <Upload>
                  <Button icon={<UploadOutlined />}>Upload</Button>
                </Upload>
              </Form.Item>
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

export default AddFighter;
