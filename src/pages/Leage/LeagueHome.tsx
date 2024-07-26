import { useNavigate } from 'react-router-dom';
import { AppRoutes } from '../../components/Router/types';
import { Button, Flex, Tabs } from 'antd';
import { useEffect, useState } from 'react';
import { useNetworkCall } from '../../hooks/utils/use-network-call';
import { LeagueTable } from '../../common/Table';
import { League } from '../../types/League';

const LeagueHome = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const fetchLeague = useNetworkCall();

  useEffect(() => {
    (async () => {
      const data = await fetchLeague('/leagues');
      setData(data);
    })();
  }, [fetchLeague]);
  return (
    <div className="my-16">
      <Flex justify="flex-end">
        <Button
          onClick={() => {
            navigate(AppRoutes.CREATE_LEAGUE);
          }}
          size="large"
          type="primary"
        >
          Create League
        </Button>
      </Flex>
      <Tabs
        defaultActiveKey="1"
        size={'large'}
        style={{ marginBottom: 32 }}
        items={[
          {
            label: `Upcoming`,
            key: '1',
            children: (
              <LeagueTable
                type="upcoming"
                data={data.filter((val: League) => !val.past)}
                rowSelect={(data) => {
                  navigate(`${AppRoutes.LAGUE_HOME}/${(data as { id: string }).id}`);
                }}
              />
            ),
          },
          {
            label: `Past`,
            key: '2',
            children: (
              <LeagueTable
                type="past"
                data={data.filter((val: League) => val.past)}
                rowSelect={(data) => {
                  navigate(`${AppRoutes.LAGUE_HOME}/${(data as { id: string }).id}`);
                }}
              />
            ),
          },
        ]}
      />
    </div>
  );
};

export default LeagueHome;
