import React from "react";

interface GroupFilterProps {
  groupFilter: string;
  setGroupFilter: (group: string) => void;
}

const GroupFilter: React.FC<GroupFilterProps> = ({ groupFilter, setGroupFilter }) => {
  // Оставляем ваш текущий код фильтра групп
  return (
    <div>

      <div className="flex justify-center mt-5 relative">
        {/* Поле для поиска группы */}
        <input
          type="text"
          value={groupFilter}
          onChange={(e) => setGroupFilter(e.target.value)}
          placeholder="Поиск по группе"
          className="px-4 py-2 bg-gray-300 w-48"
        />
      </div>

      {/* Новый компонент для отображения текущей недели */}
    </div>
  );
};

export default GroupFilter;
