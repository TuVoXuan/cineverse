import React from 'react';
import styles from './CinemaBranchInfo.module.scss';
import Link from 'next/link';
import type { Dayjs } from 'dayjs';
import updateLocale from 'dayjs/plugin/updateLocale';
import weekday from 'dayjs/plugin/weekday';
import dayjs from 'dayjs';
dayjs.extend(updateLocale);
dayjs.extend(weekday);

dayjs.updateLocale('en', {
  weekdays: ['Chủ nhật', 'Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7'],
});

type props = {
  branchName: string;
  branchHref: string;
  date: Dayjs;
  address: string;
};

export default function CinemaBranchInfo({ address, branchHref, branchName, date }: props) {
  return (
    <div className={styles['branch-info']}>
      <p>
        <Link href={branchHref} className={styles['branch-info__branch-name']}>
          {branchName}
        </Link>
        <span>・</span>
        <span className={styles['branch-info__date']}>{date.format('dddd, D/M/YYYY')}</span>
      </p>
      <p className={styles['branch-info__address']}>{address}</p>
    </div>
  );
}
