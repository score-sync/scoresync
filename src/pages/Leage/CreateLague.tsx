import { Input, Button, Upload, DatePicker, Form, InputNumber, Space, Flex } from 'antd';
import { MinusOutlined, PlusOutlined, UploadOutlined } from '@ant-design/icons';
import { useCallback } from 'react';

const defaultValues = {
  amateurMMABouts: 0,
  proMMABouts: 0,
  amateurBJJBouts: 0,
  proBJJBouts: 0,
  amateurK1Bouts: 0,
  proK1Bouts: 0,
};

const CreateLague = () => {
  const [form] = Form.useForm();

  const increment = useCallback(
    (field: string) => {
      const currentValue = form.getFieldValue(field) ?? 0;
      console.log(field, currentValue);
      form.setFieldsValue({ [field]: parseInt(currentValue) + 1 });
    },
    [form],
  );

  const decrement = useCallback(
    (field: string) => {
      const currentValue = form.getFieldValue(field) ?? 0;
      form.setFieldsValue({ [field]: Math.max(parseInt(currentValue) - 1, 0) });
    },
    [form],
  );
  console.log('Rerender', form.getFieldValue('amateurMMABouts'));
  return (
    <div className="flex flex-col items-center justify-center mt-8">
      <div className="rounded-lg w-full">
        <h1 className="text-center text-xl font-bold mb-6">Create League</h1>
        {form.getFieldValue('amateurMMABouts')}
        <Form form={form} layout="vertical" name="form-name" initialValues={defaultValues} onFinish={() => {}}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
            <Form.Item name="leagueName" label="League Name">
              <Input size="large" className="border-blue" />
            </Form.Item>
            <Form.Item name="leagueDateTime" label="League Date & Time">
              <DatePicker showTime size="large" className="border-blue" />
            </Form.Item>
            <Form.Item name="leagueLocation" label="League Location">
              <Input size="large" className="border-blue" />
            </Form.Item>
            <Form.Item name="promoterName" label="Promoter Name">
              <Input size="large" className="border-blue" />
            </Form.Item>
            <Form.Item name="amateurMMABouts" label="No. of Amateur MMA Bouts">
              <Space>
                <Button icon={<MinusOutlined />} onClick={() => decrement('amateurMMABouts')} />
                <Input className="w-full border-blue" />
                <Button icon={<PlusOutlined />} onClick={() => increment('amateurMMABouts')} />
              </Space>
            </Form.Item>
            <Form.Item name="proMMABouts" label="No. of Pro MMA Bouts">
              <Space>
                <Button icon={<MinusOutlined />} onClick={() => decrement('proMMABouts')} />
                <InputNumber min={0} className="w-full border-blue" />
                <Button icon={<PlusOutlined />} onClick={() => increment('proMMABouts')} />
              </Space>
            </Form.Item>
            <Form.Item name="amateurBJJbouts" label="No. of Amateur BJJ Bouts">
              <Space>
                <Button icon={<MinusOutlined />} onClick={() => decrement('amateurBJJbouts')} />
                <InputNumber min={0} className="w-full border-blue" />
                <Button icon={<PlusOutlined />} onClick={() => increment('amateurBJJbouts')} />
              </Space>
            </Form.Item>
            <Form.Item name="proBJJbouts" label="No. of Pro BJJ Bouts">
              <Space>
                <Button icon={<MinusOutlined />} onClick={() => decrement('proBJJbouts')} />
                <InputNumber min={0} className="w-full border-blue" />
                <Button icon={<PlusOutlined />} onClick={() => increment('proBJJbouts')} />
              </Space>
            </Form.Item>
            <Form.Item name="amateurK1bouts" label="No. of Amateur K1 Bouts">
              <Space>
                <Button icon={<MinusOutlined />} onClick={() => decrement('amateurK1bouts')} />
                <InputNumber min={0} className="w-full border-blue" />
                <Button icon={<PlusOutlined />} onClick={() => increment('amateurK1bouts')} />
              </Space>
            </Form.Item>
            <Form.Item name="uploadLogo" label="Upload League Logo">
              <Upload>
                <Button icon={<UploadOutlined />} size="large">
                  Upload
                </Button>
              </Upload>
            </Form.Item>
          </div>
          <Flex justify="space-between" className="mt-6">
            <Button size="large">Back</Button>
            <Button type="primary" htmlType="submit" size="large">
              Save
            </Button>
            <Button size="large" disabled>
              Next
            </Button>
          </Flex>
        </Form>
      </div>
    </div>
  );
};

export default CreateLague;
