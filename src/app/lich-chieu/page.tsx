'use client';
import Image from 'next/image';
import React, { Fragment } from 'react';
import styles from './Showtimes.module.scss';
import { Select } from 'antd';
import clsx from 'clsx';
import WeekdayNavigator from '@/components/WeekdayNavigator/WeekdayNavigator';

const provinceOptions = [
  { label: 'Tp. Hồ Chí Minh', value: 'tp-ho-chi-minh' },
  { label: 'Hà Nội', value: 'ha-noi' },
  { label: 'Cần Thơ', value: 'can-tho' },
  { label: 'Đà Nẵng', value: 'da-nang' },
];

const cinemaBranchOptions = [
  {
    label: <span>Cinestar</span>,
    title: 'Cinstar',
    options: [
      { label: 'Cinstar Quốc thanh', value: 'cinstar-quoc-thanh' },
      { label: 'Cinstar Hai Bà Trưng', value: 'cinstar-hai-ba-trung' },
    ],
  },
  {
    label: <span>Mega GS Cinemas</span>,
    title: 'Mega GS Cinemas',
    options: [
      { label: 'Mega GS Cao Thắng', value: 'mega-gs-cao-thang' },
      { label: 'Mega GS Lý Chính Thắng', value: 'mega-gs-ly-chinh-thang' },
    ],
  },
];

export default function Showtimes() {
  const handleChangeProvince = (value: string) => {
    console.log(value);
  };
  const handleChangeCinemaBranch = (value: string) => {
    console.log('value: ', value);
  };

  return (
    <Fragment>
      <div className={styles.showtimes__banner}>
        <div className="container px-3 py-6">
          <h1 className={styles.showtimes__banner__title}>Lịch chiếu</h1>
          <p className={styles.showtimes__banner__description}>Tìm lịch chiếu phim / rạp nhanh nhất với chỉ 1 bước!</p>
        </div>
      </div>
      <div className={clsx('container', styles['showtimes__main-content'])}>
        <div className={styles['showtimes__cinema-branch-form']}>
          <Select
            className={styles['showtimes__cinema-branch-form__select']}
            options={provinceOptions}
            onChange={handleChangeProvince}
          />
          <Select
            className={styles['showtimes__cinema-branch-form__select']}
            options={cinemaBranchOptions}
            onChange={handleChangeCinemaBranch}
          />
        </div>
        <div className={styles.screenings}>
          <WeekdayNavigator />
        </div>
      </div>
    </Fragment>
  );
}
