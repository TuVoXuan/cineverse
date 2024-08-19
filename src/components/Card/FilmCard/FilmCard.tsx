import React from 'react';
import Image from 'next/image';
import styles from './FilmCard.module.scss';
import Icons from '@/components/Icons';

export default function FilmCard() {
  return (
    <div className={styles['film-card']}>
      {/* <span className={styles['sprite']}>
        <span className={styles['sprite__content']}>Chiếu sớm</span>
      </span> */}
      {/* <div className={styles['btn-group']}>
        <button className={styles['btn-group__button']}>
          <Icons.Heart className={styles['btn-group__button__icon']} />
        </button>
        <button className={styles['btn-group__button']}>
          <Icons.Star className={styles['btn-group__button__icon']} />
        </button>
      </div> */}
      <a className={styles['film-card__img-container']} href="#" title="Đẹp trai thấy sai sai">
        <Image
          src={'https://cdn.moveek.com/storage/media/cache/tall/66ab4092261e7067687988.jpg'}
          alt="film-img"
          width={100}
          height={100}
          className={styles['film-card__img-container__img']}
        />
        <label className={styles['film-card__buy-ticket']}>Mua vé</label>
      </a>
      <div className={styles['film-card__info']}>
        <h4 className={styles['film-card__info__film-name']}>Đẹp trai thấy sai sai sai sai sai sai sai sai sai</h4>
        <span className={styles['film-card__info__released-date']}>09/08</span>
      </div>
    </div>
  );
}
