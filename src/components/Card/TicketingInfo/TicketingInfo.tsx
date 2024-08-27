import React from 'react';
import styles from './TicketingInfo.module.scss';
import clsx from 'clsx';

export default function TicketingInfo() {
  return (
    <div className={styles['ticketing-info']}>
      <p className={styles['ticketing-info__text-truncate']}>Dep trai thay sai sai</p>
      <p className={clsx(styles['ticketing-info__text-bold'], styles['ticketing-info__text-truncate'])}>
        Cinestar Quoc Thanh
      </p>
      <p className={styles['ticketing-info__text-truncate']}>
        Suat <span className={styles['ticketing-info__text-bold']}>20:45 27/08/2024</span>
      </p>
      <p className={styles['ticketing-info__text-truncate']}>
        Phong chieu <span className={styles['ticketing-info__text-bold']}>02</span> - Ghe
        <span className={styles['ticketing-info__text-bold']}>B04</span>
        <span className={styles['ticketing-info__text-bold']}>B05</span>
        <span className={styles['ticketing-info__text-bold']}>B05</span>
        <span className={styles['ticketing-info__text-bold']}>B05</span>
        <span className={styles['ticketing-info__text-bold']}>B05</span>
        <span className={styles['ticketing-info__text-bold']}>B05</span>
        <span className={styles['ticketing-info__text-bold']}>B05</span>
        <span className={styles['ticketing-info__text-bold']}>B05</span>
      </p>
    </div>
  );
}
