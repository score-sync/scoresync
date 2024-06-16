import { Input, Button, Upload, DatePicker, Form, InputNumber } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const CreateLague = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-3xl">
        <h1 className="text-center text-xl font-bold mb-6">Create League</h1>
        <Form layout="vertical">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Form.Item name="leagueName" label="League Name">
              <Input />
            </Form.Item>
            <Form.Item name="leagueDateTime" label="League Date & Time">
              <DatePicker showTime />
            </Form.Item>
            <Form.Item name="leagueLocation" label="League Location">
              <Input />
            </Form.Item>
            <Form.Item name="promoterName" label="Promoter Name">
              <Input />
            </Form.Item>
            <Form.Item name="amateurMMABouts" label="No. of Amateur MMA Bouts">
              <InputNumber min={0} defaultValue={18} className="w-full" />
            </Form.Item>
            <Form.Item name="proMMABouts" label="No. of Pro MMA Bouts">
              <InputNumber min={0} defaultValue={18} className="w-full" />
            </Form.Item>
            <Form.Item name="amateurBJJbouts" label="No. of Amateur BJJ Bouts">
              <InputNumber min={0} defaultValue={18} className="w-full" />
            </Form.Item>
            <Form.Item name="proBJJbouts" label="No. of Pro BJJ Bouts">
              <InputNumber min={0} defaultValue={18} className="w-full" />
            </Form.Item>
            <Form.Item name="amateurK1bouts" label="No. of Amateur K1 Bouts">
              <InputNumber min={0} defaultValue={18} className="w-full" />
            </Form.Item>
            <Form.Item name="uploadLogo" label="Upload League Logo">
              <Upload>
                <Button icon={<UploadOutlined />}>Upload</Button>
              </Upload>
            </Form.Item>
          </div>
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

export default CreateLague;
