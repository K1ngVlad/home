import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';

import { Slide } from '../../components/Slide';

import { api } from './api.js';

import 'swiper/css';
import 'swiper/css/pagination';

import s from './style.module.css';

const Testimonial = () => {
  return (
    <section className={s.testimonial}>
      <div className={s.box}>
        <Swiper
          loop={true}
          modules={[Pagination]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{
            clickable: true,
            el: `.${s.pagination}`,
            type: 'bullets',
            bulletClass: s.bullet,
            bulletActiveClass: s.bulletActive,
          }}
          scrollbar={{ draggable: true }}
        >
          {api.map((e) => {
            return (
              <SwiperSlide key={e.id}>
                <Slide text={e.text} img={e.img} role={e.role} name={e.name} />
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className={s.pagination}></div>
      </div>
    </section>
  );
};

export { Testimonial };
