'use client';

import FilmCard from '@/components/Card/FilmCard/FilmCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Mousewheel } from 'swiper/modules';
import { Fragment } from 'react';
import styles from './HomePage.module.scss';
import clsx from 'clsx';

export default function Home() {
  return (
    <Fragment>
      <div className={styles['showing-film-container']}>
        <div className="container">
          <div className={styles['showing-film-container__titles']}>
            <a href="#">Đang chiếu</a>
            <span>|</span>
            <a href="#" className={styles['showing-film-container__titles__inactive']}>
              Sắp chiếu
            </a>
          </div>
          <div className={styles['showing-film-container__swiper']}>
            <Swiper
              pagination={true}
              mousewheel={true}
              modules={[Mousewheel, Pagination]}
              direction={'horizontal'}
              slidesPerView={3}
              slidesPerGroup={3}
              spaceBetween={20}
              breakpoints={{
                576: {
                  slidesPerView: 6,
                  slidesPerGroup: 4,
                },
                1200: {
                  slidesPerView: 8,
                  slidesPerGroup: 4,
                },
              }}
            >
              <SwiperSlide>
                <FilmCard />
              </SwiperSlide>
              <SwiperSlide>
                <FilmCard />
              </SwiperSlide>
              <SwiperSlide>
                <FilmCard />
              </SwiperSlide>
              <SwiperSlide>
                <FilmCard />
              </SwiperSlide>
              <SwiperSlide>
                <FilmCard />
              </SwiperSlide>
              <SwiperSlide>
                <FilmCard />
              </SwiperSlide>
              <SwiperSlide>
                <FilmCard />
              </SwiperSlide>
              <SwiperSlide>
                <FilmCard />
              </SwiperSlide>
              <SwiperSlide>
                <FilmCard />
              </SwiperSlide>
              <SwiperSlide>
                <FilmCard />
              </SwiperSlide>
              <SwiperSlide>
                <FilmCard />
              </SwiperSlide>
              <SwiperSlide>
                <FilmCard />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
