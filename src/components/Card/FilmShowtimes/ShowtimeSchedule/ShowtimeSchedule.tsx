import React from 'react';
import styles from './ShowtimeSchedule.module.scss';
import Link from 'next/link';
import type { Dayjs } from 'dayjs';
import clsx from 'clsx';
import dayjs from 'dayjs';

type props = {
  title: string;
  schedule: {
    time: Dayjs;
    price: string;
    href: string;
  }[];
};

export default function ShowtimeSchedule({ title, schedule }: props) {
  return (
    <div className={styles['showtime-schedule']}>
      <h4 className={styles['showtime-schedule__title']}>{title}</h4>
      <div className={styles['showtime-schedule__schedule']}>
        {schedule.map((item) => (
          <Link
            href={item.href}
            className={clsx(
              styles['showtime-schedule__item'],
              dayjs().isAfter(item.time) && styles['showtime-schedule__item--disabled'],
            )}
          >
            <span className={styles['showtime-schedule__item__timing']}>{item.time.format('HH:mm')}</span>
            <span
              className={clsx(
                styles['showtime-schedule__item__price'],
                dayjs().isAfter(item.time) && styles['showtime-schedule__item__price--hidden'],
              )}
            >
              {item.price}K
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
