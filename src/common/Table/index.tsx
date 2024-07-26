import { Popconfirm, Table } from 'antd';
import { DeleteTwoTone, EditTwoTone } from '@ant-design/icons';
import { League } from '../../types/League';

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
  data: dataSource,
  rowSelect,
  type,
}: {
  type: string;
  rowSelect?: (record: unknown, rowIndex?: number) => void;
  data: League[];
}) => {
  const columnsFiltered = type === 'past' ? columns.filter(({ key }) => key !== 'delete' && key !== 'edit') : columns;

  return (
    <>
      {/* <PageHeader className="border-0 mb-16 mt-10 pl-0 border-b border-grey" title={title} subTitle="" /> */}
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
        columns={columnsFiltered}
      />
    </>
  );
};
