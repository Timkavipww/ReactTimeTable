import React from 'react';

// Определяем тип ScheduleItem для элемента расписания
export interface ScheduleItem {
  time: string;
  subject: string;
  teacher: string;
  classroom: string;
  week: string;
  group: string;
  dayWeek: string;
}

interface ScheduleTableBodyProps {
  filteredSchedule: ScheduleItem[];  // Пропс для переданных отфильтрованных данных
}

const ScheduleTableBody: React.FC<ScheduleTableBodyProps> = ({ filteredSchedule }) => {
  return (
    <tbody className='min-w-72'>
      {filteredSchedule.map((item, index) => (
        <tr key={index} className='border-2 min-w-24'>
          <td className=' justify-center flex'>{item.time}</td>
          <td className='border-2 flex-row justify-center px-2 py-1'>{item.subject}</td>
          <td className='border-2 px-2 py-1'>{item.teacher}</td>
          <td className=' flex justify-center'>{item.classroom}</td>
        </tr>
      ))}
    </tbody>
  );
};

export default ScheduleTableBody;
