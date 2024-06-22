import { Button, Flex } from 'antd';
import Success from '../../../assets/images/success.png';

export const CreateSucces = ({ goToNext }: { goToNext: () => void }) => {
  return (
    <div className="flex justify-center flex-grow">
      <div className="w-full">
        <Flex align="center" className="flex-col">
          <img src={Success} className="cursor-pointer w-100 h-96" />
          <h4 className="text-3xl">League Created Successfully</h4>
        </Flex>
        <Flex justify="flex-end" className="mt-6">
          <Button size="large" onClick={goToNext}>
            Next
          </Button>
        </Flex>
      </div>
    </div>
  );
};
