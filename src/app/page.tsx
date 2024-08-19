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
import MediumArticle from '@/components/Card/Article/MediumArticle/MediumArticle';
import Review from '@/components/Card/Article/Review/Review';

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

const updatedArticles = [
  {
    title: 'Trailer phim Cám - Dị bản đẫm máu của truyện cổ tích tuổi thơ',
    href: '#',
    thumbnail: 'https://cdn.moveek.com/storage/media/cache/medium/66bb14c41f7f5906752319.jpg',
    info: [
      {
        href: '#',
        label: 'Phim Kinh Di',
      },
      {
        href: '#',
        label: 'Video - Trailer',
      },
      {
        label: 'Moveek',
      },
      {
        label: '5 ngay truoc',
      },
    ],
    summary:
      'Trailer đầu tiên hé lộ một góc nhìn mới lạ về cổ tích Tấm Cám đúng chất của một dị bản đẫm máu như đã tiết lộ trước đó.',
  },
  {
    title: 'Lộ diện bộ 3 Long Quý Hạnh trong Kính Vạn Hoa bản điện ảnh',
    href: '#',
    thumbnail: 'https://cdn.moveek.com/storage/media/cache/medium/66b9bcf7b9419184780676.jpg',
    info: [
      {
        href: '#',
        label: 'Tin Dien Anh',
      },
      {
        label: 'Moveek',
      },
      {
        label: '6 ngay truoc',
      },
    ],
    summary:
      'Phim điện ảnh Kính Vạn Hoa đã chính thức hé lộ hình ảnh về ba diễn viên chính sẽ đảm nhận vai Quý Ròm, Tiểu Long và nhỏ Hạnh, đồng thời công bố thời điểm công chiếu vào dịp Giáng Sinh 2024.',
  },
  {
    title: 'Review The Umbrella Academy mùa 4 – Hồi kết hụt hơi',
    href: '#',
    thumbnail: 'https://cdn.moveek.com/storage/media/cache/medium/66b82ba61f4da076234920.jpg',
    info: [
      {
        href: '#',
        label: 'TV Series',
      },
      {
        href: '#',
        label: 'Danh gia phim',
      },
      {
        label: 'linhhuynh0257',
      },
      {
        label: '6 ngay truoc',
      },
    ],
    summary:
      'Hồi kết của loạt siêu anh hùng độc đáo của Netflix, The Umbrella Academy Mùa 4 đã đem lại cho người hâm mộ một nỗi thất vọng to lớn. Đến mức nhiều người đã tuyên bố coi như mùa 4 không tồn tại!',
  },
];

const reviews = [
  {
    title: 'Review The Umbrella Academy mùa 4 – Hồi kết hụt hơi',
    thumbnail: 'https://cdn.moveek.com/storage/media/cache/small/66b82ba61f4da076234920.jpg',
    info: [
      {
        label: 'linhhunh0202',
      },
      {
        label: '6 ngay truoc',
      },
    ],
    href: '#',
  },
  {
    title: 'Review Đẹp Trai Thấy Sai Sai - Cười sảng với chuyến phiêu lưu của hai anh ngố',
    thumbnail: 'https://cdn.moveek.com/storage/media/cache/small/66b89cf51c479622298412.png',
    info: [
      {
        href: '#',
        label: 'Ivy_Trat',
      },
      {
        label: '7 ngay truoc',
      },
    ],
    href: '#',
  },
  {
    title: 'Review Cô Ấy Ngày Và Đêm – Chiếc phim mùa hè cưng xỉu',
    thumbnail: 'https://cdn.moveek.com/storage/media/cache/small/66b224005ac7e291837284.jpg',
    info: [
      {
        label: 'linhghung0909',
      },
      {
        label: '8 ngay truoc',
      },
    ],
    href: '#',
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
      {/* Updated Article & Reviews */}
      <div className={clsx('container', styles['updated-articles-reviews'])}>
        <div className={styles['updated-articles-reviews__articles']}>
          <div className={styles['updated-articles-reviews__articles__title']}>Mới cập nhật</div>
          <div className={styles['updated-articles-reviews__articles__content']}>
            {updatedArticles.map((item, index) => (
              <Fragment>
                <MediumArticle
                  title={item.title}
                  href={item.href}
                  thumbnail={item.thumbnail}
                  info={item.info}
                  summary={item.summary}
                />
                {index < updatedArticles.length - 1 && <hr className="my-4" />}
              </Fragment>
            ))}
          </div>
          <button className={styles['updated-articles-reviews__articles__load-more-btn']}>Xem thêm</button>
        </div>
        <div className={styles['updated-articles-reviews__reviews']}>
          <div className={styles['updated-articles-reviews__reviews__title']}>Review</div>
          <div className={styles['updated-articles-reviews__reviews__content']}>
            {reviews.map((item, index) => (
              <Fragment>
                <Review title={item.title} href={item.href} info={item.info} thumbnail={item.thumbnail} />
                {index < reviews.length - 1 && <hr className="my-4" />}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}
