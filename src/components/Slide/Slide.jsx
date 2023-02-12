import s from './style.module.css';

const Slide = (props) => {
  return (
    <div className={s.slide + ' noselect'}>
      <p className={s.text}>{props.text}</p>
      <img className={s.img} alt="avatar" src={props.img} />
      <span className={s.role}>{props.role}</span>
      <span className={s.name}>{props.name}</span>
    </div>
  );
};

export { Slide };
