const NavMenu = () => {
    return (
<div className="w-full h-12 bg-gray-700 flex items-center justify-between px-4">
        {/* Левая часть - "Расписание" */}
        <a href="/" className="text-white">Расписание</a>

        {/* Правая часть - "Вход" и "Регистрация" */}
        <div className="flex space-x-4">
          <a href="/login" className="text-white hover:underline">Вход</a>
          <a href="/register" className="text-white hover:underline">Регистрация</a>
        </div>
      </div>
    );
};
export default NavMenu;