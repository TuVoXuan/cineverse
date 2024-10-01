import React, { Fragment, useState } from 'react';
import styles from './ShowtimesTab.module.scss';
import { Select } from 'antd';
import WeekdayNavigator from '@/components/WeekdayNavigator/WeekdayNavigator';
import CinemaCollapse from '@/components/CinemaCollapse/CinemaCollapse';

const provinceOptions = [
  { label: 'Tp. Hồ Chí Minh', value: 'tp-ho-chi-minh' },
  { label: 'Hà Nội', value: 'ha-noi' },
  { label: 'Cần Thơ', value: 'can-tho' },
  { label: 'Đà Nẵng', value: 'da-nang' },
];

export default function ShowtimesTab() {
  const [activeDate, setActiveDate] = useState<string>();

  const handleChangeProvince = (item: any) => {
    //   setActiveProvince(item);
  };

  return (
    <div className={styles['wrap']}>
      <div className={styles['content-wrap']}>
        <div className={styles['form']}>
          <Select className={styles['form__select']} options={provinceOptions} onChange={handleChangeProvince} />
        </div>

        <WeekdayNavigator
          className={styles['week-date-navigator']}
          activeDate={activeDate}
          onChange={(date) => setActiveDate(date)}
        />

        <div className={styles['cinema-showtimes-wrap']}>
          <CinemaCollapse />
          <CinemaCollapse />
        </div>
      </div>
      <div></div>
    </div>
  );
}
