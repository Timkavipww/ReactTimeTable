import React, { useEffect, useState } from "react";

const CurrentWeek: React.FC = () => {
  const [isEvenWeek, setIsEvenWeek] = useState<boolean | null>(null);
  const [currentDay, setCurrentDay] = useState<string>("");

  useEffect(() => {
    const now = new Date();
    // Приводим к московскому времени (UTC+3)
    const moscowOffset = 3 * 60 * 60 * 1000;
    const moscowTime = new Date(now.getTime() + moscowOffset);

    // Определяем день в году
    const startOfYear = new Date(moscowTime.getFullYear(), 0, 1);
    const dayOfYear = Math.floor(
      (moscowTime.getTime() - startOfYear.getTime()) / (1000 * 60 * 60 * 24)
    ) + 1;

    // Вычисляем номер недели и чётность
    const weekNumber = Math.ceil(dayOfYear / 7);
    setIsEvenWeek(weekNumber % 2 !== 0);

    // Определяем день недели
    const daysOfWeek = [
      "воскресенье",
      "понедельник",
      "вторник",
      "среда",
      "четверг",
      "пятница",
      "суббота"
    ];
    setCurrentDay(daysOfWeek[moscowTime.getDay()]);
  }, []);

  if (isEvenWeek === null || currentDay === "") {
    return <div>Определение текущей недели...</div>;
  }

  return (
    <div className="text-center flex flex-col mt-8">
      Сегодня {isEvenWeek ? "чётная" : "нечётная"} неделя ({currentDay}).
    </div>
  );
};

export default CurrentWeek;
