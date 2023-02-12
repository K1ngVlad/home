import s from './style.module.css';

const LineText = (props) => {
  return <p className={s.lineText}>{props.children}</p>;
};

export { LineText };
