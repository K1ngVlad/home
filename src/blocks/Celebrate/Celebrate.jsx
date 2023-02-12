import { Button } from '../../components/Button';
import { Title } from '../../components/Title';

import s from './style.module.css';

const Celebrate = () => {
  return (
    <section className={s.celebrate}>
      <div className={s.box}>
        <div className={s.leftBlock}>
          <Title color="orange" size="small-normal">
            Отпразднуйте в одном из самых лучших ресторанов.
          </Title>
          <p className={s.text}>Только в этом месяце бизнес-ланч от 250 ₽</p>
        </div>
        <Button>ЗАКАЗ СТОЛИКА</Button>
      </div>
    </section>
  );
};

export { Celebrate };
