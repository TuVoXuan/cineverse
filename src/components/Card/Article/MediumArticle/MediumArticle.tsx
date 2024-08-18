import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import styles from './MediumArticle.module.scss';

export default function MediumArticle() {
  return (
    <div className={styles.container}>
      <div className={styles.container__img}>
        <Link href={'#'}>
          <Image
            src={'https://cdn.moveek.com/storage/media/cache/medium/66b89cf51c479622298412.png'}
            alt="film image"
            height={100}
            width={100}
          />
        </Link>
      </div>
      <div className={styles.container__content}>
        <h4 className={styles.container__content__title}>
          <Link href={'#'}>Review Đẹp Trai Thấy Sai Sai - Cười sảng với chuyến phiêu lưu của hai anh ngố</Link>
        </h4>
        <p className={styles.container__content__info}>
          <Link className={styles.container__content__info} href={'#'}>
            Danh gia phim
          </Link>
          <span>・</span>
          <Link href={'#'}>Ivy_Trat</Link>
          <span>・</span>
          <span>6 ngay truoc</span>
        </p>
        <p>
          Đẹp Trai Thấy Sai Sai (Handsome Guys) làm lố, hài hước và có cả kinh dị, nhưng thật khó để không cười "sảng"
          với phim này.
        </p>
      </div>
    </div>
  );
}
