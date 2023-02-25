import s from './style.module.css';

const FoodGallery = (props) => {
  return (
    <div className={s.foodGallery}>
      {props.api.map((e) => {
        return (
          <img
            alt="dishes"
            key={e.id}
            src={e.img}
            className={`${s.img}  ${s[`img${e.id + 1}`]}`}
          />
        );
      })}
    </div>
  );
};

export { FoodGallery };
