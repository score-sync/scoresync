import { Input, Select, Typography, Button } from 'antd';

const { Title } = Typography;
const { Option } = Select;

const Create = () => {
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="text-center mb-4">
        <Title level={2} className="font-bold text-gray-700">
          Create Bouts
        </Title>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <Input placeholder="Bout Type" className="border-blue-600" defaultValue="Professional" />
        <Input placeholder="Bout Date" className="border-blue-600" defaultValue="May 29, 2024" />
        <Input placeholder="Bout Name" className="border-blue-600" defaultValue="UFC League" />
        <div className="relative border-blue-600">
          <Input placeholder="Round Duration" className="border-blue-600" defaultValue="3 minutes" />
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none"></div>
        </div>
        <div className="relative border-blue-600">
          <Select defaultValue="1" style={{ width: '100%' }} onChange={handleChange} className="border-blue-600">
            <Option value="1">1</Option>
            <Option value="2">2</Option>
            <Option value="3">3</Option>
          </Select>
        </div>
        <div className="relative border-blue-600">
          <Select defaultValue="1" style={{ width: '100%' }} onChange={handleChange} className="border-blue-600">
            <Option value="1">1</Option>
            <Option value="2">2</Option>
            <Option value="3">3</Option>
          </Select>
        </div>
        <div className="relative">
          <Input placeholder="Add Refree" className="border-blue-600" />
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <Select defaultValue="Select" style={{ width: 120 }} onChange={handleChange} className="border-blue-600">
              <Option value="refree1">Refree 1</Option>
              <Option value="refree2">Refree 2</Option>
              <Option value="refree3">Refree 3</Option>
            </Select>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-4 items-center">
        <div className="col-span-1 text-center">
          <div className="border-blue-600">
            <Title level={4} className="bg-blue-600 text-white p-2">
              Blue Corner
            </Title>
            <Select
              defaultValue="Select Fighter"
              style={{ width: '100%' }}
              onChange={handleChange}
              className="border-blue-600"
            >
              <Option value="fighter1">Fighter 1</Option>
              <Option value="fighter2">Fighter 2</Option>
              <Option value="fighter3">Fighter 3</Option>
            </Select>
          </div>
          <div className="mt-4">
            <img src="https://via.placeholder.com/150" alt="Fighter" className="w-full" />
          </div>
        </div>

        <div className="col-span-1 text-center">
          <Title className="text-4xl font-semibold">VS</Title>
        </div>

        <div className="col-span-1 text-center">
          <div className="border-red-600">
            <Title level={4} className="bg-red-600 text-white p-2">
              Red Corner
            </Title>
            <Select
              defaultValue="Select Fighter"
              style={{ width: '100%' }}
              onChange={handleChange}
              className="border-red-600"
            >
              <Option value="fighter1">Fighter 1</Option>
              <Option value="fighter2">Fighter 2</Option>
              <Option value="fighter3">Fighter 3</Option>
            </Select>
          </div>
          <div className="mt-4">
            <img src="https://via.placeholder.com/150" alt="Fighter" className="w-full" />
          </div>
        </div>
      </div>

      <div className="text-center space-x-4 mt-4">
        <Button
          onClick={() => {
            history.back();
          }}
        >
          Back
        </Button>
        <Button type="primary" className="bg-gradient-to-r from-blue-600 to-indigo-600">
          Edit Bout
        </Button>
        <Button type="primary" className="bg-gradient-to-r from-blue-600 to-indigo-600">
          Save Bout
        </Button>
        <Button type="primary" className="bg-gradient-to-r from-blue-600 to-indigo-600">
          Start Fight
        </Button>
        <Button>Next</Button>
      </div>
    </div>
  );
};

export default Create;
