import s from './style.module.css';

const DishesElem = (props) => {
  return (
    <div className={s.dishesElem}>
      <img className={s.img} alt={props.name} src={props.img} />
      <span className={s.text}>{props.name}</span>
      <hr className={s.line} />
      <span className={s.text}>{`${props.cost} ₽`}</span>
    </div>
  );
};

export { DishesElem };
