import React from 'react';
import MainThead from './MainThead';
import ScheduleTableBody, { ScheduleItem } from './ScheduleTableBody';

interface ScheduleTableProps {
  title?: string;
  filteredSchedule: ScheduleItem[];  // Типизируем пропс filteredSchedule
}

const ScheduleTable: React.FC<ScheduleTableProps> = ({ title, filteredSchedule }) => {
  return (
    <div className="overflow-x-auto justify-items-center grid grid-cols-1 pb-8">
      {title && <h2 className="text-center font-bold py-2 ">{title}</h2>}
      <table className="min-w-24 table-auto border-gray-300">
        <MainThead />
        <ScheduleTableBody filteredSchedule={filteredSchedule} />
      </table>
    </div>
  );
};

export default ScheduleTable;
