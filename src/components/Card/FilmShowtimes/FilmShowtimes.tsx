import React, { useEffect, useState } from 'react';
import styles from './FilmShowtimes.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import MetaInfo, { MetaInfoItem } from '@/components/MetaInfo/MetaInfo';
import ShowtimeSchedule from './ShowtimeSchedule/ShowtimeSchedule';
import dayjs from 'dayjs';
import { convertMinutesToHours } from '@/utils';
import { AppPath } from '@/constants';

type props = {
  showtimes: IShowtime;
};

export default function FilmShowtimes({ showtimes }: props) {
  const [metaInfo, setMetaInfo] = useState<MetaInfoItem[]>();

  useEffect(() => {
    setMetaInfo([
      {
        label: `T${showtimes.film.age_restricted}`,
      },
      {
        label: convertMinutesToHours(showtimes.film.duration),
      },
      {
        label: 'Trailer',
        href: showtimes.film.trailer,
      },
    ]);
  }, [showtimes]);
  return (
    <div className={styles['film-showtimes']}>
      <div className={styles['film-showtimes__img-wrap']}>
        <Link href={'#'}>
          <Image
            alt={showtimes.film.title}
            src={showtimes.film.thumbnail.url}
            height={100}
            width={100}
            className={styles['film-showtimes__img-wrap__img']}
          />
        </Link>
      </div>

      <div className={styles['film-showtimes__schedule-wrap']}>
        <h4 className={styles['film-showtimes__schedule-wrap__film-name']}>{showtimes.film.title}</h4>
        <MetaInfo info={metaInfo || []} textLinkColor="blue" className="mb-2" />
        {showtimes.showtimes.vietsub && (
          <ShowtimeSchedule
            className={showtimes.showtimes.voiceover && styles['mb-4']}
            title={'2D Phụ Đề Việt'}
            schedule={showtimes.showtimes.vietsub.map((item) => ({
              href: `${AppPath.BuyTicket}/${item.id}`,
              time: dayjs(item.screening_time),
            }))}
          />
        )}
        {showtimes.showtimes.voiceover && (
          <ShowtimeSchedule
            title={'2D Lồng Tiếng'}
            schedule={showtimes.showtimes.voiceover.map((item) => ({
              href: `${AppPath.BuyTicket}/${item.id}`,
              time: dayjs(item.screening_time),
            }))}
          />
        )}
      </div>
    </div>
  );
}
