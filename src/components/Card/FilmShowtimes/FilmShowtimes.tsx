import React from 'react';
import styles from './FilmShowtimes.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import MetaInfo from '@/components/MetaInfo/MetaInfo';
import ShowtimeSchedule from './ShowtimeSchedule/ShowtimeSchedule';
import dayjs from 'dayjs';

const metaInfos = [
  {
    label: 'T18',
  },
  {
    label: "1h41'",
  },
  {
    label: 'Trailer',
    href: '#',
  },
];

const schedule = [
  { time: dayjs('2024-08-21T00:20'), price: '65', href: '#' },
  { time: dayjs('2024-08-21T08:15'), price: '65', href: '#' },
  { time: dayjs('2024-08-21T09:00'), price: '65', href: '#' },
  { time: dayjs('2024-08-21T10:05'), price: '65', href: '#' },
  { time: dayjs('2024-08-21T11:00'), price: '65', href: '#' },
  { time: dayjs('2024-08-21T12:05'), price: '65', href: '#' },
  { time: dayjs('2024-08-21T13:00'), price: '65', href: '#' },
  { time: dayjs('2024-08-21T14:05'), price: '65', href: '#' },
  { time: dayjs('2024-08-21T14:30'), price: '65', href: '#' },
  { time: dayjs('2024-08-21T15:00'), price: '65', href: '#' },
  { time: dayjs('2024-08-21T15:40'), price: '65', href: '#' },
  { time: dayjs('2024-08-21T16:05'), price: '65', href: '#' },
  { time: dayjs('2024-08-21T16:30'), price: '65', href: '#' },
  { time: dayjs('2024-08-21T17:00'), price: '65', href: '#' },
  { time: dayjs('2024-08-21T17:30'), price: '65', href: '#' },
  { time: dayjs('2024-08-21T18:05'), price: '65', href: '#' },
  { time: dayjs('2024-08-21T18:30'), price: '70', href: '#' },
  { time: dayjs('2024-08-21T19:00'), price: '120', href: '#' },
  { time: dayjs('2024-08-21T19:20'), price: '120', href: '#' },
  { time: dayjs('2024-08-21T19:30'), price: '70', href: '#' },
  { time: dayjs('2024-08-21T20:00'), price: '70', href: '#' },
  { time: dayjs('2024-08-21T20:05'), price: '70', href: '#' },
  { time: dayjs('2024-08-21T20:30'), price: '70', href: '#' },
  { time: dayjs('2024-08-21T21:00'), price: '70', href: '#' },
  { time: dayjs('2024-08-21T21:25'), price: '120', href: '#' },
  { time: dayjs('2024-08-21T22:00'), price: '100', href: '#' },
  { time: dayjs('2024-08-21T22:05'), price: '45', href: '#' },
  { time: dayjs('2024-08-21T22:25'), price: '45', href: '#' },
  { time: dayjs('2024-08-21T23:00'), price: '45', href: '#' },
  { time: dayjs('2024-08-21T23:40'), price: '45', href: '#' },
  { time: dayjs('2024-08-21T23:59'), price: '45', href: '#' },
];

export default function FilmShowtimes() {
  return (
    <div className={styles['film-showtimes']}>
      <div className={styles['film-showtimes__img-wrap']}>
        <Link href={'#'}>
          <Image
            alt="film-image"
            src={'https://cdn.moveek.com/storage/media/cache/mini/66ab4092261e7067687988.jpg'}
            height={100}
            width={100}
            className={styles['film-showtimes__img-wrap__img']}
          />
        </Link>
      </div>

      <div className={styles['film-showtimes__schedule-wrap']}>
        <h4 className={styles['film-showtimes__schedule-wrap__film-name']}>Dep trai thay sai sai</h4>
        <MetaInfo info={metaInfos} textLinkColor="blue" className="mb-2" />
        <ShowtimeSchedule title={'2D Phu De Viet'} schedule={schedule} />
      </div>
    </div>
  );
}
