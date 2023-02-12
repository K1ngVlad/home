import s from './style.module.css';

import svg from '../../assets/svg/logo.svg';
import { api } from './api';
import { NavLink } from './components/NavLink';
import { Button } from '../Button';
import { Contact } from './components/Contact';

const Header = () => {
  return (
    <header className={s.header}>
      <img alt="logo" src={svg} />
      <nav>
        <div className={s.links}>
          {api.map((e) => {
            return <NavLink key={e}>{e}</NavLink>;
          })}
        </div>
        <Contact />
        <Button size="normal">ЗАКАЗ СТОЛИКА</Button>
      </nav>
    </header>
  );
};

export { Header };
