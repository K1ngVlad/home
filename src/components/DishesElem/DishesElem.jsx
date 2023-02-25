import s from './style.module.css';

const DishesElem = (props) => {
  return (
    <div className={s.dishesElem}>
      <img className={s.img} alt={props.name} src={props.img} />
      <div className={s.p}>
        <span className={s.text}>{props.name}</span>
        <hr className={s.line} />
        <span className={s.text}>{`${props.cost} ₽`}</span>
      </div>
    </div>
  );
};

export { DishesElem };
