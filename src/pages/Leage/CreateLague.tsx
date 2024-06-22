import { useState } from 'react';
import { CreateLagueForm } from './Create/CreateLagueForm';
import { CreateSucces } from './Create/CreateSucces';
import { useNavigate } from 'react-router-dom';
import { PageHeader } from '@ant-design/pro-layout';

const CreateLague = () => {
  const [leagueId, setLeagueId] = useState<string | undefined>(undefined);
  const navigate = useNavigate();

  return !leagueId ? (
    <>
      <PageHeader className="border-0 mb-16 mt-10 pl-0 border-b border-grey" title="Create League" subTitle="" />
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
