import { Button } from '../Button';
import s from './style.module.css';

const MenuElem = (props) => {
  return (
    <div className={`${s.menuElem} ${props.recommend ? s.recommend : null}`}>
      <div
        style={{
          '--cost': `'${props.cost}'`,
        }}
        className={s.imgBox}
      >
        <img alt={props.name} src={props.img} className={s.img} />
      </div>
      <h3 className={s.title}>{props.name}</h3>
      <p className={s.decript}>{props.descript}</p>
      <Button color="dark" size="long">
        Заказать
      </Button>
    </div>
  );
};

export { MenuElem };
