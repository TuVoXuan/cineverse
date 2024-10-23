import React, { useState } from 'react';
import styles from './CinemaCollapse.module.scss';
import Icons from '../Icons';
import clsx from 'clsx';
import BranchCollapse from './BranchCollapse/BranchCollapse';

interface Props {
  showtime: IShowtimeForFilm
}

export default function CinemaCollapse({showtime}: Props) {
  const [expanded, setExpanded] = useState(false);

  const handleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
      <div className={styles['title-wrap']} onClick={handleExpand}>
        <div className={styles['title-wrap__logo']}>
          <img
            src={showtime.company.logo.url}
            alt={showtime.company.name}
          />
        </div>
        <div className={styles['title-wrap__info']}>
          <h4 className={styles['title-wrap__info__name']}>{showtime.company.name}</h4>
          <span className={styles['title-wrap__info__branches']}>{showtime.branches.length} rạp</span>
        </div>
        <Icons.ChevronRight className={styles['title-wrap__icon']} />
      </div>
      <div className={clsx(styles['body'], expanded && styles['expand'])}>
        <div className={styles['body__content']}>
          {showtime.branches.map((item) => <BranchCollapse key={item.code} id={item.id} address={item.address} branchName={item.name} showtimes={item.showtimes}/>)}
        </div>
      </div>
    </div>
  );
}
