import { useNavigate } from 'react-router-dom';
import { AppRoutes } from '../../components/Router/types';
import { AddPanel } from '../../components/AddPanel/AddPanel';

const CreateLanding = () => {
  const navigate = useNavigate();
  const cards = [
    {
      title: 'Create League',
      navigate: () => {
        navigate(AppRoutes.CREATE_LEAGUE);
      },
    },
    {
      title: 'Upcoming League',
      navigate: () => {
        navigate(AppRoutes.UPCOMING_LEAGUE);
      },
    },
    {
      title: 'Past League',
      navigate: () => {
        navigate(AppRoutes.PAST_LEAGUE);
      },
    },
  ];
  return <AddPanel cards={cards} hasBar></AddPanel>;
};

export default CreateLanding;
