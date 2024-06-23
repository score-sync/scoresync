interface CombatSportsRecordProps {
  fight: string;
  wins: number;
  losses: number;
  title?: string;
}
const CombatBox = ({ fight, wins, losses }: CombatSportsRecordProps) => {
  return (
    <div className="p-4">
      <div className="flex flex-wrap justify-center items-center">
        <div className="bg-gradient-to-b border-2 from-blue200 to-blue text-white rounded-lg p-2 w-20 text-center">
          Fight
        </div>
        <div className="bg-blue100 text-blue border-2 border-blue b-2 rounded-lg p-2 m-1 w-20 text-center">Wins</div>
        <div className="bg-red100 text-red border-2 border-red b-2 rounded-lg p-2 m-1 w-20 text-center">Losses</div>
        <div className="w-full"></div>
        <div className="bg-blue100 to-black text-black100 rounded-lg p-2 w-20 text-center">{fight}</div>
        <div className="bg-blue100 text-black border-0 rounded-lg p-2 m-1 w-20 text-center">{wins}%</div>
        <div className="bg-blue100 text-black border-0 rounded-lg p-2 m-1 w-20 text-center">{losses}%</div>
      </div>
    </div>
  );
};

export default CombatBox;
