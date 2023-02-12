import s from './styles.module.css';

const NavLink = (props) => {
  return (
    <a className={s.navLink} href="./">
      {props.children}
    </a>
  );
};

export { NavLink };
