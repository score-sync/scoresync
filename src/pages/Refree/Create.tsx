import { PageHeader } from '@ant-design/pro-layout';
import { Input, Button, Form, Flex } from 'antd';

const Create = () => {
  const [form] = Form.useForm();
  return (
    <>
      <PageHeader className="border-0 mb-16 mt-10 pl-0 border-b border-grey" title={'Add Refree'} subTitle="" />
      <div className="flex flex-col items-center justify-center mt-8">
        <div className="rounded-lg w-full">
          <Form form={form} layout="vertical" name="form-name" initialValues={{}} onFinish={() => {}}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
              <Form.Item name="refreeName" label="Refree Name" className="md:mr-16">
                <Input size="large" className="border-blue" placeholder="Name" />
              </Form.Item>
              <Form.Item name="refreeNo" label="Refree No" className="md:mr-16">
                <Input size="large" className="border-blue" placeholder="No" />
              </Form.Item>
              <Form.Item name="refreeBloodGroup" label="Blood Group" className="md:mr-16">
                <Input size="large" className="border-blue" placeholder="A+.." />
              </Form.Item>
              <Form.Item name="contactNo" label="Contact No" className="md:mr-16">
                <Input size="large" className="border-blue" placeholder="Phone No" />
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
              <Button type="primary" htmlType="submit" size="large" onClick={() => {}}>
                Save
              </Button>
              {/* <Button
              size="large"
              onClick={() => {
                onDone();
              }}
            >
              Next
            </Button> */}
            </Flex>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Create;
