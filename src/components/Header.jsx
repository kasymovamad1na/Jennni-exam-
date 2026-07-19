import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="flex justify-between items-center px-10 py-5 shadow">
      {/* Логотип */}
      <NavLink to="/">
        <img src="/logo.svg" alt="Logo" className="w-28" />
      </NavLink>

      {/* Меню */}
      <nav className="flex gap-8">
        <NavLink to="/">Главная</NavLink>

        <NavLink to="/catalog">Каталог</NavLink>

        <NavLink to="/cart">Корзина</NavLink>
      </nav>

      {/* Иконки */}
      <div className="flex items-center gap-5">
        <NavLink to="/favorite">
          <img src="/heart.svg" alt="Favorite" className="w-6 h-6" />
        </NavLink>

        <NavLink to="/profile">
          <img src="/basket.svg" alt="Profile" className="w-6 h-6" />
        </NavLink>
      </div>
    </header>
  );
}

export default Header;