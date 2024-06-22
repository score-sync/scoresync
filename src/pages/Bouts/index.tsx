import { PageHeader } from '@ant-design/pro-layout';
import { Popconfirm, Table } from 'antd';
import { DeleteTwoTone, EditTwoTone } from '@ant-design/icons';

const dataSource = [
  {
    key: 1,
    no: '1',
    blueCorner: 'Mike',
    redCorner: 'Mike',
    name: 'Mike',
    edit: 1,
  },
  {
    key: 2,
    no: '1',
    blueCorner: 'Mike',
    redCorner: 'Mike',
    name: 'Mike',
    edit: 1,
  },
];

const columns = [
  {
    title: 'Bount No',
    dataIndex: 'no',
    key: 'no',
  },
  {
    title: 'Blue Corner',
    dataIndex: 'blueCorner',
    key: 'blueCorner',
  },
  {
    title: 'Red Corner',
    dataIndex: 'redCorner',
    key: 'redCorner',
  },
  {
    title: 'Bount Name',
    dataIndex: 'redCorner',
    key: 'redCorner',
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

const Bouts = () => {
  return (
    <>
      <PageHeader className="border-0 mb-16 mt-10 pl-0 border-b border-grey" title={'Bouts'} subTitle="" />
      <Table
        dataSource={dataSource}
        columns={columns}
        onRow={(record, rowIndex) => {
          return {
            onClick: () => {
              console.log(record, rowIndex);
            },
          };
        }}
      />
    </>
  );
};

export default Bouts;
