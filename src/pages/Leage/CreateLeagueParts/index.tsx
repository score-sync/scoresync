import { useNavigate } from 'react-router-dom';
import { AddPanel } from '../../../components/AddPanel/AddPanel';

const CreateLagueParts = () => {
  const navigate = useNavigate();
  const cards = [
    {
      title: 'Add Fighter',
      navigate: () => {
        navigate('/league/1234/fighter/create');
      },
    },
    {
      title: 'Create Bouts',
      navigate: () => {
        navigate('/league/1234/bout/create');
      },
    },
    {
      title: 'Add Refree',
      navigate: () => {
        navigate('/league/1234/refree/create');
      },
    },
  ];
  return <AddPanel cards={cards} />;
};

export default CreateLagueParts;
