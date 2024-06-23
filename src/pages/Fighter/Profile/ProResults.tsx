import 'antd/dist/reset.css';
import { Card, Table } from 'antd';
import { EditTwoTone } from '@ant-design/icons';

const dataSource = [
  {
    key: '1',
    name: 'Mike',
    date: 'Date',
    pramoterName: 'Mike',
    location: '10 Downing Street',
    edit: 1,
  },
  {
    key: '2',
    date: 'Date',
    name: 'John',
    pramoterName: 32,
    location: '10 Downing Street',
    edit: 2,
  },
];

const columns = [
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: 'League Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Pramoter Name',
    dataIndex: 'pramoterName',
    key: 'pramoterName',
  },
  {
    title: 'Location',
    dataIndex: 'location',
    key: 'location',
  },
  {
    title: 'Edit',
    dataIndex: 'edit',
    key: 'edit',
    render: (id: string) => (
      <EditTwoTone
        onClick={() => {
          window.location.href = id;
        }}
      />
    ),
    width: '5%',
  },
];
export const ProResults = () => {
  return (
    <Card title="ProResults" className="mt-6">
      <Table dataSource={dataSource} columns={columns} />
    </Card>
  );
};
