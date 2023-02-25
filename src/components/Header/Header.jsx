import { api } from './api';
import { NavLink } from './components/NavLink';
import { Button } from '../Button';
import { Contact } from './components/Contact';

import svg from '../../assets/svg/logo.svg';
import burger from '../../assets/svg/burger.svg';

import s from './style.module.css';

const Header = () => {
  return (
    <header className={s.header}>
      <img className={s.logo} alt="logo" src={svg} />
      <nav className={s.nav}>
        <div className={s.links}>
          {api.map((e) => {
            return <NavLink key={e}>{e}</NavLink>;
          })}
        </div>
        <Contact />
        <Button size="normal">ЗАКАЗ СТОЛИКА</Button>
      </nav>
      <button className={s.burger}>
        <img alt="menu" src={burger} className={s.burgerImg} />
      </button>
    </header>
  );
};

export { Header };
