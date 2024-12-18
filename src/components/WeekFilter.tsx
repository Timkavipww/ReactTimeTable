import React from "react";
import CurrentWeek from "./CurrentWeek";

interface WeekFilterProps {
  weekFilter: string;
  setWeekFilter: (week: string) => void;
}

const WeekFilter: React.FC<WeekFilterProps> = ({ weekFilter, setWeekFilter }) => {
  return (
    
    <div className="flex justify-center mt-10">
      
      <button
        onClick={() => setWeekFilter('all')}
        className={`rounded-l-xl px-4  py-2 ${weekFilter === 'all' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}>
        Все недели
      </button>
      <button
        onClick={() => setWeekFilter('odd')}
        className={`px-4 py-2 ${weekFilter === 'odd' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}>
        Нечетная
      </button>
      <button
        onClick={() => setWeekFilter('even')}
        className={` rounded-r-xl px-4 py-2 ${weekFilter === 'even' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}>
        Четная
      </button>
    </div>
  );
};

export default WeekFilter;
