import { useState } from 'react';
import './App.css';
import { scheduleE732BFriday, scheduleE732BMonday, scheduleE732BSaturday, scheduleE732BThursday, scheduleE732BTuesday, scheduleE732BWednesday } from './common/schledueE732B';
import ScheduleTable from './components/ScheduleTable';  // Импортируем компонент для таблицы
import WeekFilter from './components/WeekFilter';  // Импортируем компонент для фильтра недели
import NavMenu from './components/NavMenu';
import GroupFilter from './components/GroupFilter';
import CurrentWeek from './components/CurrentWeek';

// Тип для элемента расписания
interface ScheduleItem {
  time: string;
  subject: string;
  teacher: string;
  classroom: string;
  week: string;
  group: string;
  dayWeek: string;
}

function App() {
  const [weekFilter, setWeekFilter] = useState('all');
  const [groupFilter, setGroupFilter] = useState('Е732Б');  // Default group
  const [activeDays, setActiveDays] = useState<string[]>(['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота']);  // Все дни активны изначально
  

  // Фильтрация расписания для каждого дня недели
  const filteredMondaySchedule: ScheduleItem[] = scheduleE732BMonday.filter(item =>
    (weekFilter === 'all' || item.week === weekFilter) && item.group === groupFilter && item.dayWeek === "Понедельник"
  );
  
  const filteredTuesdaySchedule: ScheduleItem[] = scheduleE732BTuesday.filter(item =>
    (weekFilter === 'all' || item.week === weekFilter) && item.group === groupFilter && item.dayWeek === "Вторник"
  );

  const filteredWednesdaySchedule: ScheduleItem[] = scheduleE732BWednesday.filter(item =>
    (weekFilter === 'all' || item.week === weekFilter) && item.group === groupFilter && item.dayWeek === "Среда"
  );

  const filteredThursdaySchedule: ScheduleItem[] = scheduleE732BThursday.filter(item =>
    (weekFilter === 'all' || item.week === weekFilter) && item.group === groupFilter && item.dayWeek === "Четверг"
  );

  const filteredFridaySchedule: ScheduleItem[] = scheduleE732BFriday.filter(item =>
    (weekFilter === 'all' || item.week === weekFilter) && item.group === groupFilter && item.dayWeek === "Пятница"
  );

  const filteredSaturdaySchedule: ScheduleItem[] = scheduleE732BSaturday.filter(item =>
    (weekFilter === 'all' || item.week === weekFilter) && item.group === groupFilter && item.dayWeek === "Суббота"
  );

  // Массив с расписаниями для каждого дня недели
  const schedules = [
    { title: 'Понедельник', filteredSchedule: filteredMondaySchedule },
    { title: 'Вторник', filteredSchedule: filteredTuesdaySchedule },
    { title: 'Среда', filteredSchedule: filteredWednesdaySchedule },
    { title: 'Четверг', filteredSchedule: filteredThursdaySchedule },
    { title: 'Пятница', filteredSchedule: filteredFridaySchedule },
    { title: 'Суббота', filteredSchedule: filteredSaturdaySchedule },
  ];

const selectDay = (day: string) => {
    if (activeDays.length === 1 && activeDays[0] === day) {
      // Если только один день активен и он выбран повторно, то выбираем все дни
      setActiveDays(['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота']);
    } else {
      // В противном случае выбираем только этот день
      setActiveDays([day]);
    }
  };

  return (
    <div className="p-0 m-0 bg-gray-400 min-h-screen h-full">
      <NavMenu />
      <CurrentWeek />
      
      <WeekFilter weekFilter={weekFilter} setWeekFilter={setWeekFilter} />
      <GroupFilter groupFilter={groupFilter} setGroupFilter={setGroupFilter} />

      {/* Кнопки для переключения дней недели */}
      <div className="flex space-x-4 justify-center mt-4">
        {['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'].map(day => (
          <button
            key={day}
            onClick={() => selectDay(day)}  // Выбираем только этот день или все
            className={`px-4 py-2 rounded ${activeDays.includes(day) ? 'bg-blue-500' : 'bg-gray-300'}`}
          >
            {day}
          </button>
        ))}
      </div>

      <div>
  {/* Отображаем только активные дни, проверяя, есть ли расписание для пятницы */}
  {schedules.map((schedule, index) =>
    activeDays.includes(schedule.title) && (schedule.title !== 'Пятница' || schedule.filteredSchedule.length > 0) ? (
      <ScheduleTable
        key={index}  // Уникальный ключ для каждого компонента
        title={schedule.title}
        filteredSchedule={schedule.filteredSchedule}
      />
    ) : null
  )}
</div>

    </div>
  );
}

export default App;
