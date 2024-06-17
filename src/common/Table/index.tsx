import { PageHeader } from '@ant-design/pro-layout';
import { Table } from 'antd';
import { BLUE } from '../../utilities/Constant';

const dataSource = [
  {
    key: '1',
    name: 'Mike',
    age: 32,
    address: '10 Downing Street',
  },
  {
    key: '2',
    name: 'John',
    age: 42,
    address: '10 Downing Street',
  },
];

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
];

export const LeagueTable = () => {
  return (
    <>
      <PageHeader
        className="border-2 mb-16 mt-10"
        style={{ border: `1px solid ${BLUE}` }}
        title="Create League"
        subTitle=""
      />
      <Table dataSource={dataSource} columns={columns} />
    </>
  );
};
