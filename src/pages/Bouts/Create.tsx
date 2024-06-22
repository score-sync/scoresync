import { Input, Button, DatePicker, Form, Flex, Select } from 'antd';
import { PageHeader } from '@ant-design/pro-layout';
import { useNavigate } from 'react-router-dom';

const AddFighter = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  return (
    <>
      <PageHeader className="border-0 mb-16 mt-10 pl-0 border-b border-grey" title="Create Bout" subTitle="" />

      <div className="flex flex-col items-center justify-center mt-8">
        <div className="rounded-lg w-full">
          <Form form={form} layout="vertical" name="form-name" initialValues={{}} onFinish={() => {}}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <Form.Item name="bout" label="Bout Type" className="md:mr-16">
                <Select onChange={() => {}} size="large">
                  <Select.Option value="professional">Professional</Select.Option>
                  <Select.Option value="amateur">Amateur</Select.Option>
                </Select>
              </Form.Item>
              <Form.Item name="date" label="Bout Date">
                <DatePicker size="large" className="border-blue" placeholder="Date" />
              </Form.Item>
              <Form.Item name="no" label="Bout Number" className="md:mr-16">
                <Input size="large" className="border-blue" placeholder="Bout Number" />
              </Form.Item>
              <Form.Item name="name" label="Bout Name" className="md:mr-16">
                <Input size="large" className="border-blue" placeholder="Bout Name" />
              </Form.Item>
              <Form.Item name="rounds" label="Total Rounds" className="md:mr-16">
                <Select onChange={() => {}} size="large">
                  <Select.Option value="1">1</Select.Option>
                  <Select.Option value="2">2</Select.Option>
                  <Select.Option value="3">3</Select.Option>
                </Select>
              </Form.Item>
              <Form.Item name="roundDuration" label="Round Duration" className="md:mr-16">
                <Select onChange={() => {}} size="large">
                  <Select.Option value="3">3 Minutes</Select.Option>
                  <Select.Option value="5">5 Minutes</Select.Option>
                  <Select.Option value="7">7 Minutes</Select.Option>
                </Select>
              </Form.Item>
              <Form.Item name="blueCorner" label="Blue Corner" className="md:mr-16">
                <Select onChange={() => {}} size="large">
                  <Select.Option value="3">Fighter1</Select.Option>
                </Select>
              </Form.Item>
              <Form.Item name="redCorner" label="Red Corner" className="md:mr-16">
                <Select onChange={() => {}} size="large">
                  <Select.Option value="3">Fighter1</Select.Option>
                </Select>
              </Form.Item>
              <Form.Item name="refree" label="Add Refree" className="md:mr-16">
                <Select onChange={() => {}} size="large">
                  <Select.Option value="3">Ref 1</Select.Option>
                </Select>
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
                  navigate('/league/1234/bout');
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
