import s from './style.module.css';

import svg from '../../assets/svg/intro.svg';

const IntroCard = (props) => {
  const words = props.title.split(' ');
  const lastWord = words[words.length - 1];
  return (
    <div className={s.introCard}>
      <img alt="svg" src={svg} />
      <h3 className={s.title}>
        {props.title.substring(0, props.title.length - lastWord.length)}
        <span className={s.colorTitle}>{lastWord}</span>
      </h3>
      <p className={s.text}>{props.children}</p>
    </div>
  );
};

export { IntroCard };
