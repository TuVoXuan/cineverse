import React, { useState } from 'react';
import styles from './BranchCollapse.module.scss';
import Link from 'next/link';
import clsx from 'clsx';
import ShowtimeSchedule from '@/components/Card/FilmShowtimes/ShowtimeSchedule/ShowtimeSchedule';
import { AppPath } from '@/constants';
import dayjs from 'dayjs';
import { time } from 'console';

const schedule = [
  {
    href: `${AppPath.BuyTicket}/1`,
    time: dayjs('2024-10-01T14:00:00'),
  },
  {
    href: `${AppPath.BuyTicket}/2`,
    time: dayjs('2024-10-01T16:00:00'),
  },
  {
    href: `${AppPath.BuyTicket}/3`,
    time: dayjs('2024-10-02T18:00:00'),
  },
  {
    href: `${AppPath.BuyTicket}/4`,
    time: dayjs('2024-10-02T20:00:00'),
  },
  {
    href: `${AppPath.BuyTicket}/5`,
    time: dayjs('2024-10-03T14:30:00'),
  },
  {
    href: `${AppPath.BuyTicket}/6`,
    time: dayjs('2024-10-03T17:00:00'),
  },
  {
    href: `${AppPath.BuyTicket}/7`,
    time: dayjs('2024-10-04T19:00:00'),
  },
  {
    href: `${AppPath.BuyTicket}/8`,
    time: dayjs('2024-10-04T21:30:00'),
  },
];

interface Props {
  id: number,
  branchName: string,
  address: string,
  showtimes: {
      vietsub: IShowTimeItem[],
      voiceover: IShowTimeItem[]
  }
}

export default function BranchCollapse({id, branchName, address, showtimes}: Props) {
  const [expanded, setExpanded] = useState(false);

  const handleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={styles['wrap']}>
      <div className={styles['title-wrap']} onClick={handleExpand}>
        <h4>{branchName}</h4>
      </div>
      <div className={clsx(styles['body'], expanded && styles['expand'])}>
        <div className={styles['body__content']}>
          <p className={styles['address']}>
            {address} -{' '}
            <Link className={styles['text-link']} href={'#'}>
              Thông tin rạp
            </Link>
          </p>
          {showtimes.vietsub.length > 0 && 
            <ShowtimeSchedule 
              className={styles['showtimes-wrap']} 
              title="2D Phụ Đề Việt-Anh" 
              schedule={showtimes.vietsub.map((item) => (
                {
                  href:`${AppPath.BuyTicket}/${item.id}`, 
                  time: dayjs(item.screening_time) 
                } ))} 
            />
          }
          {showtimes.voiceover.length > 0 && 
            <ShowtimeSchedule 
              className={styles['showtimes-wrap']} 
              title="2D lồng tiếng" 
              schedule={showtimes.voiceover.map((item) => (
                {
                  href:`${AppPath.BuyTicket}/${item.id}?step=chon-ghe`, 
                  time: dayjs(item.screening_time) 
                } ))} 
            />
          }
        </div>
      </div>
    </div>
  );
}
