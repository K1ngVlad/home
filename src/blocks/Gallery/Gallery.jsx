import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { FoodGallery } from '../../components/FoodGallery';
import { Title } from '../../components/Title';

import { api, cookApi } from './api.js';

import 'swiper/css';
import 'swiper/css/pagination';

import s from './style.module.css';

const cook = [];

for (let i = 0; i < cookApi.length / 3; i++) {
  const arr = [];
  for (let j = 0; j < 3; j++) {
    arr.push(cookApi[j + i * 3]);
  }
  cook.push(arr);
}

const Gallery = () => {
  return (
    <section className={s.gallery}>
      <div className={s.box}>
        <Title uniqLast={true}>Галерея Блюд</Title>
        <FoodGallery api={api} />
        <Title uniqLast={true}>Наши Повара</Title>
        <div className={`${s.swiperBox} noselect`}>
          <Swiper
            loop={true}
            spaceBetween={50}
            slidesPerView={1}
            modules={[Pagination]}
            pagination={{
              clickable: true,
              el: `.${s.pagination}`,
              bulletClass: s.bullet,
              bulletActiveClass: s.bulletActive,
            }}
          >
            {cook.map((e, i) => {
              return (
                <SwiperSlide key={i}>
                  <div className={s.slide}>
                    {e.map((e) => {
                      return (
                        <img
                          alt="cook"
                          key={e.id}
                          src={e.img}
                          className={s.img}
                        />
                      );
                    })}
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
          <div className={s.pagination}></div>
        </div>
      </div>
    </section>
  );
};

export { Gallery };
