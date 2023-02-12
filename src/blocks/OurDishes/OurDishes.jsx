import { Title } from '../../components/Title';
// import { DishesElem } from '../../components/DishesElem';

import s from './style.module.css';

import pizza from '../../assets/pizza.png';

import { api } from './api.js';
import { DishesElem } from '../../components/DishesElem';

const OurDishes = () => {
  return (
    <section className={s.ourDishes}>
      <Title uniqLast={true}>Наши Блюда</Title>
      <div className={s.box}>
        <img alt="dish" src={pizza} className={s.pizza} />
        <div className={s.rightBlock}>
          {api.map((e) => {
            return (
              <DishesElem key={e.id} img={e.img} cost={e.cost} name={e.name} />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export { OurDishes };
