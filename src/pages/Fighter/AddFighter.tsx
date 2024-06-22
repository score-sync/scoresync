import { Input, Button, Upload, DatePicker, Form, Flex, Select } from 'antd';
// import { PageHeader } from '@ant-design/pro-layout';

import { UploadOutlined } from '@ant-design/icons';
import { PageHeader } from '@ant-design/pro-layout';
import { useNavigate } from 'react-router-dom';

const AddFighter = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  return (
    <>
      <PageHeader className="border-0 mb-16 mt-10 pl-0 border-b border-grey" title="Create Fighter" subTitle="" />

      <div className="flex flex-col items-center justify-center mt-8">
        <div className="rounded-lg w-full">
          <Form form={form} layout="vertical" name="form-name" initialValues={{}} onFinish={() => {}}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <Form.Item name="fighterName" label="Fighter Name" className="md:mr-16">
                <Input size="large" className="border-blue" placeholder="Name" />
              </Form.Item>
              <Form.Item name="dob" label="Date of Birth">
                <DatePicker size="large" className="border-blue" placeholder="Date" />
              </Form.Item>
              <Form.Item name="height" label="Height" className="md:mr-16">
                <Input size="large" className="border-blue" placeholder="5'7" />
              </Form.Item>
              <Form.Item name="weight" label="Weight" className="md:mr-16">
                <Input size="large" className="border-blue" placeholder="60" />
              </Form.Item>
              <Form.Item name="weight" label="Weight" className="md:mr-16">
                <Select onChange={() => {}} size="large">
                  <Select.Option value="professional">Professional</Select.Option>
                  <Select.Option value="amateur">Amateur</Select.Option>
                </Select>
              </Form.Item>
              <Form.Item name="contactNo" label="Contact No" className="md:mr-16">
                <Input size="large" className="border-blue" placeholder="Contact No" />
              </Form.Item>
              <Form.Item name="amateurRecord" label="Amateur Record" className="md:mr-16">
                <Input size="large" className="border-blue" placeholder="Amateur Record" />
              </Form.Item>
              <Form.Item name="proRecord" label="Pro Record" className="md:mr-16">
                <Input size="large" className="border-blue" placeholder="Pro Record" />
              </Form.Item>
              <Form.Item name="coachName" label="Coach Name" className="md:mr-16">
                <Input size="large" className="border-blue" placeholder="Name" />
              </Form.Item>
              <Form.Item name="coachPhone" label="Coach Contact No" className="md:mr-16">
                <Input size="large" className="border-blue" placeholder="Contact No" />
              </Form.Item>
              <Form.Item name="association" label="Association/Gym/Team" className="md:mr-16">
                <Input size="large" className="border-blue" placeholder="Association/Gym/Team" />
              </Form.Item>
              <Form.Item name="uploadLogo" label="Upload Fighter Logo">
                <Upload>
                  <Button icon={<UploadOutlined />} size="large">
                    Upload
                  </Button>
                </Upload>
              </Form.Item>
            </div>
            <Flex justify="space-between" className="mt-6">
              <Button
                size="large"
                onClick={() => {
                  history.back();
                }}
              >
                Back
              </Button>
              <Button
                type="primary"
                htmlType="submit"
                size="large"
                onClick={() => {
                  navigate('/league/1234/fighter/1234');
                }}
              >
                Save
              </Button>
            </Flex>
          </Form>
        </div>
      </div>
    </>
  );
};

export default AddFighter;
