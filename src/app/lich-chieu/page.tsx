'use client';
import React, { Fragment, useEffect, useState } from 'react';
import styles from './Showtimes.module.scss';
import { Select } from 'antd';
import clsx from 'clsx';
import WeekdayNavigator from '@/components/WeekdayNavigator/WeekdayNavigator';
import CinemaBranchInfo from '@/components/Card/CinemaBranchInfo/CinemaBranchInfo';
import dayjs from 'dayjs';
import Alert from '@/components/Alert/Alert';
import FilmShowtimes from '@/components/Card/FilmShowtimes/FilmShowtimes';
import ListGroup, { ListItem } from '@/components/ListGroup/ListGroup';
import toast from 'react-hot-toast';
import { regionApi } from '@/api/region-api';

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

const cinemaItems = [
  {
    title: 'Cinstar',
    image: 'https://cdn.moveek.com/storage/media/cache/square/59a2a1753d6416c84b4e05146280584a33448c14.png',
    isTitle: true,
  },
  {
    title: 'Cinstar Quoc Thanh',
  },
  {
    title: 'Cinstar Hai Ba Trung',
  },
  {
    title: 'Mega GS Cinemas',
    image: 'https://cdn.moveek.com/storage/media/cache/square/4e2f8af9e4d780495cbc387e5868c2a48c7f82c2.png',
    isTitle: true,
  },
  {
    title: 'Mega GS Cao Thắng',
  },
  {
    title: 'Mega GS Lý Chính Thắng',
  },
];

export default function Showtimes() {
  const [provinces, setProvinces] = useState<ListItem[]>();
  const handleChangeProvince = (value: string) => {
    console.log(value);
  };
  const handleChangeCinemaBranch = (value: string) => {
    console.log('value: ', value);
  };

  async function fetchProvinces() {
    try {
      const response = await regionApi.getAll();
      const provincesList = response.data.data.map(
        (item) =>
          ({
            title: item.name,
            suffixNumber: item.cinema_branches_count,
            isTitle: false,
            code: item.code,
            id: item.id,
          }) as ListItem,
      );
      provincesList.unshift({
        title: 'Khu vực',
        isTitle: true,
      } as ListItem);

      setProvinces(provincesList);
    } catch (error: any) {
      toast.error(error?.message);
    }
  }

  useEffect(() => {
    fetchProvinces();
  }, []);

  return (
    <Fragment>
      <div className={styles.showtimes__banner}>
        <div className=" px-3 py-6">
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
        <div className={styles.provinces}>
          <ListGroup items={provinces || []} />
        </div>
        <div className={styles.cinemas}>
          <ListGroup items={cinemaItems} />
        </div>
        <div className={styles.screenings}>
          <WeekdayNavigator />

          <Alert type="warning" message="Nhấn vào suất chiếu để tiến hành mua vé" />

          <CinemaBranchInfo
            branchName={'Cinestar Quoc Thanh'}
            branchHref={'#'}
            date={dayjs()}
            address={'271 Nguyễn Trãi, P. Nguyễn Cư Trinh, Q.1, Tp. Hồ Chí Minh'}
          />

          <FilmShowtimes />
        </div>
      </div>
    </Fragment>
  );
}
