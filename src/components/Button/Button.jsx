import s from './style.module.css';

const Button = (props) => {
  const color = props.color || 'light';
  const size = props.size || 'normal';
  return (
    <button className={s.button + ' ' + s[color] + ' ' + s[size]}>
      {props.children}
    </button>
  );
};

export { Button };
