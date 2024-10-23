import React, { useState } from 'react';
import styles from './BranchCollapse.module.scss';
import Link from 'next/link';
import clsx from 'clsx';
import ShowtimeSchedule from '@/components/Card/FilmShowtimes/ShowtimeSchedule/ShowtimeSchedule';
import { AppPath } from '@/constants';
import dayjs from 'dayjs';

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
