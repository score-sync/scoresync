import { Image } from 'antd';

const data = [
  {
    from: 2013,
    to: 2021,
    win: 10,
    loss: 4,
    draw: 0,
    noContest: 0,
  },
  {
    from: 2013,
    to: 2021,
    win: 10,
    loss: 4,
    draw: 0,
    noContest: 0,
  },
];
const CombatBox = () => {
  return (
    <>
      {data.map((item) => (
        <div className="p-4">
          <div className="flex flex-wrap justify-around items-center">
            <div className="text-black bg-blue100 rounded-lg p-2 w-20 text-center">
              {item.from} <div>To</div> {item.to}
            </div>
            <div className="rounded-lg p-2 m-1 w-20 text-center">
              <Image src="https://via.placeholder.com/150" alt="Fighter" className="w-48 h-48 rounded-lg" />
            </div>
            <div className="text-blue bg-blue100 rounded-lg p-2 w-20 text-center">
              {item.win} <div>win</div>
            </div>
            <div className="text-blue bg-red100 rounded-lg p-2 m-1 w-20 text-center">
              {item.loss} <div>loss</div>
            </div>
            <div className="bg-neon100 text-neon rounded-lg p-2 m-1 w-20 text-center">
              {item.draw} <div>draw</div>
            </div>
            <div className="bg-grey text-black rounded-lg p-2 m-1 w-20 text-center">
              {item.noContest} <div>no contest</div>
            </div>
            <div className="p-2 w-20 min-w-30 min-h-30"></div>
            <div className="text-blue bg-blue100 rounded-lg p-2 w-20 text-center">
              <div>8</div>
              <div>-</div>
              <div>8</div>
            </div>
            <div className="text-blue bg-red100 rounded-lg p-2 m-1 w-20 text-center">
              <div>80%</div>
              <div>-</div>
              <div>28%</div>
            </div>
            <div className="bg-grey text-black rounded-lg p-2 m-1 w-20 text-center">
              <div>KO/TKO</div>
              <div>SUB</div>
              <div>Decision DQ</div>
            </div>
            <div className="bg-neon100 text-neon rounded-lg p-2 m-1 w-20 text-center">
              <div>80%</div>
              <div>-</div>
              <div>28%</div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default CombatBox;
