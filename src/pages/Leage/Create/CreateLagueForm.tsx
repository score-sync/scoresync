import { Input, Button, Upload, DatePicker, Form, InputNumber, Space, Flex, Select, Spin } from 'antd';
// import { PageHeader } from '@ant-design/pro-layout';
import { notification } from 'antd';
import { MinusOutlined, PlusOutlined, UploadOutlined } from '@ant-design/icons';
import { useCallback, useState } from 'react';
import { Method, useNetworkCall } from '../../../hooks/utils/use-network-call';
import { League } from '../../../types/League';
import { AddMultipleUsers } from './AddMultipleUsers';
import { useNavigate } from 'react-router-dom';
// import { BLUE } from '../../../utilities/Constant';

// const defaultValues = {
//   amateurMMABouts: 0,
//   proMMABouts: 0,
//   amateurBJJBouts: 0,
//   proBJJBouts: 0,
//   amateurK1Bouts: 0,
// };

export const CreateLeagueForm = ({ onDone }: { onDone: () => void }) => {
  const [form] = Form.useForm();
  const [disableForm, formDisable] = useState(false);
  const create = useNetworkCall();
  const navigate = useNavigate();

  const onFinish = async (values: { [key in string]: string }) => {
    formDisable(true);
    const league = (await create('/leagues/create', Method.POST, values)) as League;
    if (!league) {
      notification.open({
        message: 'Failed to create league!',
      });
      formDisable(false);
      return;
    }
    console.log(onDone);
    navigate(`/league/${league.id}`);
  };

  const increment = useCallback(
    (field: string) => {
      const currentValue = form.getFieldValue(field) ?? 0;
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
  return (
    <div className="flex flex-col items-center justify-center mt-8">
      <div className="rounded-lg w-full">
        <Form form={form} layout="vertical" name="form-name" initialValues={{ type: '1' }} onFinish={onFinish}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
            <Form.Item name="leagueName" label="League Name" className="md:mr-16">
              <Input size="large" className="border-blue" placeholder="Name" readOnly disabled={disableForm} />
            </Form.Item>
            <Form.Item name="type" label="Type" className="md:mr-16">
              <Select onChange={() => {}} size="large" disabled>
                <Select.Option value="1" selected>
                  MMA
                </Select.Option>
              </Select>
            </Form.Item>
            <Form.Item name="leagueDateTime" label="League Date & Time">
              <DatePicker showTime size="large" className="border-blue" placeholder="Date & Time" />
            </Form.Item>
            <Form.Item name="leagueLocation" label="League Location" className="md:mr-16">
              <Input size="large" className="border-blue" placeholder="Location" />
            </Form.Item>
            <Form.Item name="promoterName" label="Promoter Name" className="md:mr-16">
              <Input size="large" className="border-blue" placeholder="Name" />
            </Form.Item>
            <div></div>
            <Space>
              <Button icon={<MinusOutlined />} onClick={() => decrement('amateurMMABouts')} />
              <Form.Item name="amateurMMABouts" label="No. of Amateur MMA Bouts" initialValue={0}>
                <InputNumber min={0} className="w-full border-blue" />
              </Form.Item>
              <Button icon={<PlusOutlined />} onClick={() => increment('amateurMMABouts')} />
            </Space>
            <Space>
              <Button icon={<MinusOutlined />} onClick={() => decrement('proMMABouts')} />
              <Form.Item name="proMMABouts" label="No. of Pro MMA Bouts" initialValue={0}>
                <InputNumber min={0} className="w-full border-blue" placeholder="0" />
              </Form.Item>
              <Button icon={<PlusOutlined />} onClick={() => increment('proMMABouts')} />
            </Space>
            <Space>
              <Button icon={<MinusOutlined />} onClick={() => decrement('amateurBJJbouts')} />
              <Form.Item name="amateurBJJbouts" label="No. of Amateur BJJ Bouts" initialValue={0}>
                <InputNumber min={0} className="w-full border-blue" placeholder="0" />
              </Form.Item>
              <Button icon={<PlusOutlined />} onClick={() => increment('amateurBJJbouts')} />
            </Space>
            <Space>
              <Button icon={<MinusOutlined />} onClick={() => decrement('proBJJbouts')} />
              <Form.Item name="proBJJbouts" label="No. of Pro BJJ Bouts" initialValue={0}>
                <InputNumber min={0} className="w-full border-blue" placeholder="0" />
              </Form.Item>
              <Button icon={<PlusOutlined />} onClick={() => increment('proBJJbouts')} />
            </Space>
            <Space>
              <Button icon={<MinusOutlined />} onClick={() => decrement('amateurK1bouts')} />
              <Form.Item name="amateurK1bouts" label="No. of Amateur K1 Bouts" initialValue={0}>
                <InputNumber min={0} className="w-full border-blue" placeholder="0" />
              </Form.Item>
              <Button icon={<PlusOutlined />} onClick={() => increment('amateurK1bouts')} />
            </Space>
            <Form.Item name="uploadLogo" label="Upload League Logo">
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
              disabled={disableForm || !!form.getFieldsError().filter(({ errors }) => errors.length).length}
            >
              Save {disableForm && <Spin />}
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
        <AddMultipleUsers title="Add Players" leagueId={1} type="users"></AddMultipleUsers>
        <AddMultipleUsers title="Add Refrees" leagueId={1} type="refrees"></AddMultipleUsers>
      </div>
    </div>
  );
};
