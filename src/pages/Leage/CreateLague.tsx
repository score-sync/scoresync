import { useState } from 'react';
import { CreateLagueForm } from './Create/CreateLagueForm';
import { CreateSucces } from './Create/CreateSucces';
import { useNavigate } from 'react-router-dom';
import { PageHeader } from '@ant-design/pro-layout';
import { BLUE } from '../../utilities/Constant';

const CreateLague = () => {
  const [leagueId, setLeagueId] = useState<string | undefined>(undefined);
  const navigate = useNavigate();

  return !leagueId ? (
    <>
      <PageHeader
        className="border-2 mb-16 mt-10"
        style={{ border: `1px solid ${BLUE}` }}
        title="Create League"
        subTitle=""
      />
      <CreateLagueForm
        onDone={(id?: string) => {
          setLeagueId(id || '123');
        }}
      />
    </>
  ) : (
    <CreateSucces
      goToNext={() => {
        navigate('/league/1234');
      }}
    />
  );
};

export default CreateLague;
