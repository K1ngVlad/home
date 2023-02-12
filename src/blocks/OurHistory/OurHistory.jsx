import { Title } from '../../components/Title';

import img from '../../assets/historyImgs.png';

import s from './style.module.css';
import { api } from './api.js';
import { QuanityElem } from '../../components/QuanityElem';

const OurHistory = () => {
  return (
    <section className={s.ourHistory}>
      <div className={s.leftBlock}>
        <Title uniqLast={true}>Наша история</Title>
        <p className={s.textHistory}>
          Как и у любого другого самобытного места, у нас есть своя, особая
          история. Идея ресторана пришла основателям неожиданно. Во время
          прогулки по лесу создатель нашего ресторана застрял в сотнях
          километров от ближайшего населенного пункта. Вдали от цивилизации и
          связи им пришлось навремя обустровать себе нехитрый быт, добывать и
          готовить себе еду.
        </p>
        <div className={s.quanity}>
          {api.map((e) => {
            return (
              <QuanityElem key={e.name} quanity={e.quanity} name={e.name} />
            );
          })}
        </div>
      </div>
      <img className={s.imgs} alt="imgs" src={img} />
    </section>
  );
};

export { OurHistory };
