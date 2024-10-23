import React from 'react';
import Image from 'next/image';
import styles from './FilmCard.module.scss';
import Icons from '@/components/Icons';
import Link from 'next/link';
import { AppPath } from '@/constants';
import dayjs from 'dayjs';

interface Props {
  film: IShortFilmInfo
  hasByTicket?: boolean
}

export default function FilmCard({film, hasByTicket}: Props) {
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
      <Link className={styles['film-card__img-container']} href={`${AppPath.Showtimes}/${film.code}`} title={film.code}>
        <Image
          src={film.thumbnail.url}
          alt={film.code}
          width={100}
          height={100}
          className={styles['film-card__img-container__img']}
        />
        {hasByTicket && <label className={styles['film-card__buy-ticket']}>Mua vé</label>}
      </Link>
      <div className={styles['film-card__info']}>
        <h4 className={styles['film-card__info__film-name']}>{film.title}</h4>
        <span className={styles['film-card__info__released-date']}>{dayjs(film.release_date).format('DD/MM')}</span>
      </div>
    </div>
  );
}
