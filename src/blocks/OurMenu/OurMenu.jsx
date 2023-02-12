import { Title } from '../../components/Title';

import s from './style.module.css';

import { api } from './api.js';
import { MenuElem } from '../../components/MenuElem';

const OurMenu = () => {
  return (
    <section className={s.ourMenu}>
      <div className={s.box}>
        <Title color="white">Наше меню</Title>
        <div className={s.menu}>
          {api.map((e) => {
            return (
              <MenuElem
                key={e.id}
                img={e.img}
                recommend={e.recommend}
                name={e.name}
                descript={e.descript}
                cost={e.cost}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export { OurMenu };
