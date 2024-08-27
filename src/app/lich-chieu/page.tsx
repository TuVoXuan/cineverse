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
import { cinemaApi } from '@/api/cinema-api';
import { showtimesApi } from '@/api/showtimes-api';
import customParseFormat from 'dayjs/plugin/customParseFormat';
dayjs.extend(customParseFormat);

type CinemaBranchItem = ListItem & {
  address?: string;
};

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
  const [provinces, setProvinces] = useState<ListItem[]>();
  const [cinemaBranches, setCinemaBranches] = useState<CinemaBranchItem[]>();
  const [activeProvince, setActiveProvince] = useState<ListItem>();
  const [activeCinemaBranch, setActiveCinemaBranch] = useState<CinemaBranchItem>();
  const [activeDate, setActiveDate] = useState<string>();
  const [showtimesList, setShowtimesList] = useState<IShowtime[]>([]);

  const handleChangeProvince = (item: ListItem) => {
    setActiveProvince(item);
  };
  const handleChangeCinemaBranch = (item: CinemaBranchItem) => {
    setActiveCinemaBranch(item);
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
      setActiveProvince(provincesList[0]);

      provincesList.unshift({
        title: 'Khu vực',
        isTitle: true,
      } as ListItem);

      setProvinces(provincesList);
    } catch (error: any) {
      toast.error(error?.message);
    }
  }

  async function fetchCinemaBranches() {
    try {
      const response = await cinemaApi.getCinemaBranchByRegion(activeProvince?.code || '');
      const branchesList: CinemaBranchItem[] = [];
      response.data.forEach((cinema) => {
        branchesList.push({
          title: cinema.name,
          image: cinema.logo.url,
          code: cinema.code,
          id: cinema.id,
          isTitle: true,
        });
        branchesList.push(
          ...cinema.branches.map((branch) => ({
            title: branch.name,
            code: branch.code,
            id: branch.id,
            address: branch.address,
          })),
        );
      });
      setActiveCinemaBranch(branchesList[1]);
      setCinemaBranches(branchesList);
    } catch (error) {
      toast.error((error as IRespondError).message);
    }
  }

  async function fetchShowtimes() {
    try {
      if (activeCinemaBranch?.code && activeDate) {
        const response = await showtimesApi.getShowtimesByDateAndCinemaBranch(activeCinemaBranch.code, activeDate);
        setShowtimesList(response.data);
      }
    } catch (error) {
      toast.error((error as IRespondError).message);
    }
  }

  useEffect(() => {
    fetchProvinces();
  }, []);

  useEffect(() => {
    if (activeProvince) {
      fetchCinemaBranches();
    }
  }, [activeProvince]);

  useEffect(() => {
    fetchShowtimes();
  }, [activeDate, activeCinemaBranch]);

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
          <ListGroup items={provinces || []} onChange={handleChangeProvince} activeItem={activeProvince} />
        </div>
        <div className={styles.cinemas}>
          <ListGroup items={cinemaBranches || []} onChange={handleChangeCinemaBranch} activeItem={activeCinemaBranch} />
        </div>
        <div className={styles.screenings}>
          <WeekdayNavigator activeDate={activeDate} onChange={(date) => setActiveDate(date)} />

          <Alert type="warning" message="Nhấn vào suất chiếu để tiến hành mua vé" />

          <CinemaBranchInfo
            branchName={activeCinemaBranch?.title}
            branchHref={'#'}
            date={dayjs(activeDate, 'D-M-YYYY')}
            address={activeCinemaBranch?.address}
          />

          {showtimesList.map((showtimes) => (
            <FilmShowtimes key={showtimes.film.code} showtimes={showtimes} />
          ))}
        </div>
      </div>
    </Fragment>
  );
}
