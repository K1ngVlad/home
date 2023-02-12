import { FoodGallery } from '../../components/FoodGallery';
import { Title } from '../../components/Title';
import s from './style.module.css';

import { api } from './api.js';

const Gallery = () => {
  return (
    <section className={s.gallery}>
      <div className={s.box}>
        <Title uniqLast={true}>Галерея Блюд</Title>
        <FoodGallery api={api} />
      </div>
    </section>
  );
};

export { Gallery };
