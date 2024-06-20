import { PageHeader } from '@ant-design/pro-layout';
import { Popconfirm, Table } from 'antd';
import { BLUE } from '../../utilities/Constant';
import { DeleteTwoTone, EditTwoTone } from '@ant-design/icons';

const dataSource = [
  {
    key: '1',
    name: 'Mike',
    age: 32,
    address: '10 Downing Street',
    edit: 1,
  },
  {
    key: '2',
    name: 'John',
    age: 42,
    address: '10 Downing Street',
    edit: 2,
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
  {
    title: 'Delete',
    dataIndex: 'delete',
    key: 'delete',
    width: '5%',
    render: () => (
      <Popconfirm
        title="Delete the task"
        description="Are you sure to delete this task?"
        onConfirm={() => {}}
        onCancel={() => {}}
        okText="Yes"
        cancelText="No"
      >
        {/* <Button danger>Delete</Button> */}
        <DeleteTwoTone />
      </Popconfirm>
    ),
  },
];

export const LeagueTable = ({ title }: { title: string }) => {
  return (
    <>
      <PageHeader className="border-2 mb-16 mt-10" style={{ border: `1px solid ${BLUE}` }} title={title} subTitle="" />
      <Table dataSource={dataSource} columns={columns} />
    </>
  );
};
