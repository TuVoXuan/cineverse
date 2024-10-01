import React, { useState } from 'react';
import styles from './CinemaCollapse.module.scss';
import Icons from '../Icons';
import clsx from 'clsx';
import BranchCollapse from './BranchCollapse/BranchCollapse';

export default function CinemaCollapse() {
  const [expanded, setExpanded] = useState(false);

  const handleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
      <div className={styles['title-wrap']} onClick={handleExpand}>
        <div className={styles['title-wrap__logo']}>
          <img
            src="https://cdn.moveek.com/storage/media/cache/square/59a2a1753d6416c84b4e05146280584a33448c14.png"
            alt="cinema logo"
          />
        </div>
        <div className={styles['title-wrap__info']}>
          <h4 className={styles['title-wrap__info__name']}>Cinstar</h4>
          <span className={styles['title-wrap__info__branches']}>1 rap</span>
        </div>
        <Icons.ChevronRight className={styles['title-wrap__icon']} />
      </div>
      <div className={clsx(styles['body'], expanded && styles['expand'])}>
        <div className={styles['body__content']}>
          <BranchCollapse />
          <BranchCollapse />
        </div>
      </div>
    </div>
  );
}
