import { Button } from '../../components/Button';
import { LineText } from '../../components/LineText';
import { Title } from '../../components/Title';
import { IntroCard } from '../../components/IntroCard';

import s from './style.module.css';

import { api } from './api';

const Hero = () => {
  return (
    <section className={s.hero}>
      <div className={s.heroContent}>
        <Title color="orange" lvl={1} size="small">
          Добро пожаловать в
        </Title>
        <Title color="orange" lvl={1} size="big">
          Наш ресторан
        </Title>
        <LineText>ДОМ ЛУЧШЕЙ ЕДЫ</LineText>
        <Button size="short">VIEW MENU</Button>
      </div>
      <section className={s.intro}>
        {api.map((e) => {
          return (
            <IntroCard key={e.title} title={e.title}>
              {e.text}
            </IntroCard>
          );
        })}
      </section>
    </section>
  );
};

export { Hero };
