import s from './style.module.css';

const QuanityElem = (props) => {
  return (
    <div className={s.quanityElem}>
      <h3>{props.quanity}</h3>
      <p>{props.name}</p>
    </div>
  );
};

export { QuanityElem };
