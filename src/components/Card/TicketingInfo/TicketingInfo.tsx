import React from 'react';
import styles from './TicketingInfo.module.scss';
import clsx from 'clsx';
import dayjs, { Dayjs } from 'dayjs';

type Props = {
  filmName: string;
  cinemaBranchName: string;
  showtime: Dayjs;
  auditoriumName: string;
  seats: string[];
};

export default function TicketingInfo(props: Props) {
  const { auditoriumName, cinemaBranchName, filmName, seats, showtime } = props;
  return (
    <div className={styles['ticketing-info']}>
      <p className={styles['ticketing-info__text-truncate']}>{filmName}</p>
      <p className={clsx(styles['ticketing-info__text-bold'], styles['ticketing-info__text-truncate'])}>
        {cinemaBranchName}
      </p>
      <p className={styles['ticketing-info__text-truncate']}>
        Suất <span className={styles['ticketing-info__text-bold']}>{dayjs(showtime).format('H:m DD:MM:YYYY')}</span>
      </p>
      <p className={styles['ticketing-info__text-truncate']}>
        Phòng chiếu <span className={styles['ticketing-info__text-bold']}>{auditoriumName}</span>
        {' - Ghế '}
        {seats.length > 0 ? (
          <>
            {seats.map((item) => (
              <span className={styles['ticketing-info__text-bold']}>{`${item} `}</span>
            ))}
          </>
        ) : (
          '...'
        )}
      </p>
    </div>
  );
}
