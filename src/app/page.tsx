'use client';

import FilmCard from '@/components/Card/FilmCard/FilmCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Mousewheel } from 'swiper/modules';
import { Fragment } from 'react';
import styles from './HomePage.module.scss';
import clsx from 'clsx';
import HotArticle from '@/components/Card/Article/HotArticle/HotArticle';
import ArticleInfo from '@/components/Card/Article/ArticleInfo/ArticleInfo';

const otherHotArticle = [
  {
    title: 'Review Vũ Điệu Chiến Thắng - Sức mạnh của sự khích lệ',
    href: '#',
    info: [
      {
        label: 'Danh gia phim',
        href: '#',
      },
      {
        label: 'tinlethanhnhan',
        href: '#',
      },
      {
        label: '2 ngay truoc',
      },
    ],
  },
  {
    title: 'Review Quái Vật Không Gian: Romulus – Làm sống lại thương hiệu kinh dị lâu đời',
    href: '#',
    info: [
      {
        label: 'Danh gia phim',
        href: '#',
      },
      {
        label: 'myduynph',
        href: '#',
      },
      {
        label: '3 ngay truoc',
      },
    ],
  },
  {
    title: 'Deadpool 3: Deadpool & Wolverine - Những chi tiết quan trọng có thể bạn đã bỏ lỡ',
    href: '#',
    info: [
      {
        label: 'Ivy_Trat',
        href: '#',
      },
      {
        label: '3 ngay truoc',
      },
    ],
  },
  {
    title: 'Quái Vật Không Gian: Romulus ở đâu trong dòng thời gian thương hiệu Alien?',
    href: '#',
    info: [
      {
        label: 'Ivy_Trat',
        href: '#',
      },
      {
        label: '4 ngay truoc',
      },
    ],
  },
  {
    title: '14 Bộ phim đáng mong đợi nhất D23 (2024)',
    href: '#',
    info: [
      {
        label: 'Ivy_Trat',
        href: '#',
      },
      {
        label: '5 ngay truoc',
      },
    ],
  },
  {
    title: 'Review The Umbrella Academy mùa 4 – Hồi kết hụt hơi',
    href: '#',
    info: [
      {
        label: 'Danh gia phim',
        href: '#',
      },
      {
        label: 'linhhuynh2507',
        href: '#',
      },
      {
        label: '6 ngay truoc',
      },
    ],
  },
];

export default function Home() {
  return (
    <Fragment>
      {/* Film is showing swiper */}
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
      {/* Articles */}
      <div className={clsx('container', styles.articles)}>
        <div className={styles['articles__hot-article']}>
          <HotArticle />
        </div>
        <div className={styles['articles__sm-hot-article']}>
          {otherHotArticle.map((item, index) => (
            <Fragment>
              <ArticleInfo title={item.title} href={item.href} info={item.info} />
              {index < otherHotArticle.length - 1 && <hr className="my-4" />}
            </Fragment>
          ))}
        </div>
      </div>
    </Fragment>
  );
}
