import { PageHeader } from '@ant-design/pro-layout';
import { Popconfirm, Table } from 'antd';
import { DeleteTwoTone, EditTwoTone } from '@ant-design/icons';

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

export const LeagueTable = ({
  title,
  rowSelect,
}: {
  title: string;
  rowSelect?: (record: unknown, rowIndex?: number) => void;
}) => {
  return (
    <>
      <PageHeader className="border-0 mb-16 mt-10 pl-0 border-b border-grey" title={title} subTitle="" />
      <Table
        onRow={(record, rowIndex) => {
          if (!rowSelect) {
            return {};
          }
          return {
            onClick: () => rowSelect(record, rowIndex),
          };
        }}
        dataSource={dataSource}
        columns={columns}
      />
    </>
  );
};
