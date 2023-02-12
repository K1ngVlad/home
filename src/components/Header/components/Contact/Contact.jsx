import s from './style.module.css';

import cart from '../../../../assets/svg/cart.svg';
import phone from '../../../../assets/svg/phone.svg';

const Contact = () => {
  return (
    <div className={s.contact}>
      <img alt="cart" className={s.cart} src={cart} />
      <div className={s.numberBlock}>
        <div className={s.number}>
          <img alt="phone" src={phone} />
          <p>+999-888-76-54</p>
        </div>
        <p className={s.descript}>Свяжитесь с нами для бронирования</p>
      </div>
    </div>
  );
};

export { Contact };
