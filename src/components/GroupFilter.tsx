import React, { useState } from "react";
import { groups } from "../common/groups";  // Импортируем список групп

interface GroupFilterProps {
  groupFilter: string;
  setGroupFilter: (group: string) => void;
}

const GroupFilter: React.FC<GroupFilterProps> = ({ groupFilter, setGroupFilter }) => {
  const [groupSearch, setGroupSearch] = useState(groupFilter);  // Начальное значение из groupFilter
  const [showGroupDropdown, setShowGroupDropdown] = useState(false);

  // Фильтрация групп по введенному тексту
  const filteredGroups = groups.filter(group =>
    group.value.toLowerCase().includes(groupSearch.toLowerCase())
  );

  console.log("showGroupDropdown:", showGroupDropdown);  // Отладка состояния dropdown
  console.log("filteredGroups:", filteredGroups);  // Проверка фильтрации

  // Обработчик изменения ввода
  const handleGroupSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGroupSearch(e.target.value);
    setShowGroupDropdown(e.target.value.length > 0);
  };

  // Обработчик выбора группы
  const handleGroupSelect = (groupValue: string) => {
    setGroupFilter(groupValue);  // Обновляем родительский компонент
    setGroupSearch(groupValue);  // Обновляем локальное состояние для отображения
    setShowGroupDropdown(false); // Скрываем выпадающий список
  };


  return (
    <div className="flex justify-center mt-5 relative">
      {/* Поле для поиска группы */}
      <input
        type="text"
        value={groupSearch}
        onChange={handleGroupSearchChange}
        placeholder="Поиск по группе"
        className="px-4 py-2 bg-gray-300 w-48"
      />

      {/* Выпадающий список для выбора группы */}
      {showGroupDropdown && (
        <ul className="absolute w-48 mt-10 bg-white border border-gray-300 max-h-40 overflow-y-auto z-10">
          {filteredGroups.map(group => (
            <li
              key={group.value}
              onClick={() => handleGroupSelect(group.value)}
              className="px-4 py-2 cursor-pointer hover:bg-gray-100">
              {group.value}
            </li>
          ))}
        </ul>
      )}
      
    </div>
    
  );
  
};

export default GroupFilter;
