import s from './style.module.css';

const Title = (props) => {
  const lvl = props.lvl || 2;
  const color = props.color || 'black';
  const size = props.size || 'normal';
  const uniqLast = props.uniqLast || false;
  const words = props.children.split(' ');
  const lastWord = words[words.length - 1];

  if (lvl === 1) {
    if (uniqLast) {
      return (
        <h1 className={s.title + ' ' + s[size] + ' ' + s[color]}>
          {props.children.substring(0, props.children.length - lastWord.length)}
          <span className={s.title + ' ' + s[size] + ' ' + s.orange}>
            {lastWord}
          </span>
        </h1>
      );
    }
    return (
      <h1 className={s.title + ' ' + s[size] + ' ' + s[color]}>
        {props.children}
      </h1>
    );
  }

  if (uniqLast) {
    return (
      <h2 className={s.title + ' ' + s[size] + ' ' + s[color]}>
        {props.children.substring(0, props.children.length - lastWord.length)}
        <span className={s.title + ' ' + s[size] + ' ' + s.orange}>
          {lastWord}
        </span>
      </h2>
    );
  }

  return (
    <h2 className={s.title + ' ' + s[size] + ' ' + s[color]}>
      {props.children}
    </h2>
  );
};

export { Title };
