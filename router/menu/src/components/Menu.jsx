import { NavLink } from 'react-router-dom';

const MENU_ITEMS = [
  { to: '/', label: 'Главная', end: true },
  { to: '/drift', label: 'Дрифт-такси' },
  { to: '/timeattack', label: 'Time Attack' },
  { to: '/forza', label: 'Forza Karting' },
];

const linkClassName = ({ isActive }) =>
  isActive ? 'menu__item menu__item-active' : 'menu__item';

export default function Menu() {
  return (
    <nav className="menu">
      {MENU_ITEMS.map(({ to, label, end }) => (
        <NavLink key={to} to={to} end={end} className={linkClassName}>
          {label}
        </NavLink>
      ))}
    </nav>
  );
}