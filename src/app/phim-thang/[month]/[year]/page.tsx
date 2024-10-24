'use client';
import React, { useEffect, useState } from 'react';
import styles from './FilmInMonthOfYear.module.scss';
import { filmApi } from '@/api/film-api';
import { useParams, useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import FilmCard from '@/components/Card/FilmCard/FilmCard';
import { Select } from 'antd';
import { IOption } from '@/types';
import dayjs from 'dayjs';
import { AppPath } from '@/constants';

const monthOptions: IOption[] = [
  { label: 'Tháng 1', value: '1' },
  { label: 'Tháng 2', value: '2' },
  { label: 'Tháng 3', value: '3' },
  { label: 'Tháng 4', value: '4' },
  { label: 'Tháng 5', value: '5' },
  { label: 'Tháng 6', value: '6' },
  { label: 'Tháng 7', value: '7' },
  { label: 'Tháng 8', value: '8' },
  { label: 'Tháng 9', value: '9' },
  { label: 'Tháng 10', value: '10' },
  { label: 'Tháng 11', value: '11' },
  { label: 'Tháng 12', value: '12' },
];

const yearOptions: IOption[] = [
  { label: `Năm ${dayjs().year() - 2}`, value: `${dayjs().year() - 2}` },
  { label: `Năm ${dayjs().year() - 1}`, value: `${dayjs().year() - 1}` },
  { label: `Năm ${dayjs().year()}`, value: `${dayjs().year()}` },
  { label: `Năm ${dayjs().year() + 1}`, value: `${dayjs().year() + 1}` },
  { label: `Năm ${dayjs().year() + 2}`, value: `${dayjs().year() + 2}` },
];

export default function FilmInMonthOfYear() {
  const router = useRouter();
  const { month, year } = useParams();
  const [films, setFilms] = useState<IShortFilmInfo[]>([]);
  const [selectedMonth, setSelectedMonth] = useState<string>(month as string);
  const [selectedYear, setSelectedYear] = useState<string>(year as string);

  async function fetchFilmsShowingInMonthOfYear() {
    try {
      if (month && year) {
        const response = await filmApi.getFilmsShowingInMonthOfYear(
          parseInt(month as string),
          parseInt(year as string),
        );
        setFilms(response.data);
      }
    } catch (error) {
      console.log('error: ', error);
      toast.error((error as IRespondError)?.message);
    }
  }

  useEffect(() => {
    fetchFilmsShowingInMonthOfYear();
  }, []);

  useEffect(() => {
    router.push(`${AppPath.FilmMonth}/${selectedMonth}/${selectedYear}`);
  }, [selectedMonth, selectedYear]);

  return (
    <>
      <div className={styles.banner}>
        <div className=" px-3 py-6">
          <h1 className={styles.banner__title}>Phim đang chiếu</h1>
          <p className={styles.banner__description}>
            Lịch phim dự kiến sẽ ra mắt tại các rạp trên toàn quốc vào tháng {month}/{year} tại Cineverse.com
          </p>
        </div>
      </div>

      <div className="container grid grid-cols-1 gap-5 sm:grid-cols-12 pt-6">
        <div className="sm:col-span-3 xl:col-span-2">
          <div className="flex gap-3 sm:flex-col">
            <Select
              className="flex-1"
              options={monthOptions}
              onChange={(value) => setSelectedMonth(value)}
              value={selectedMonth}
            />
            <Select
              className="flex-1"
              options={yearOptions}
              onChange={(value) => setSelectedYear(value)}
              value={selectedYear}
            />
          </div>
        </div>
        <div className="sm:col-span-9 xl:col-span-10 grid grid-cols-2 gap-[24px] sm:grid-cols-4 lg:grid-cols-6">
          {films.map((film) => (
            <FilmCard film={film} />
          ))}
        </div>
      </div>
    </>
  );
}
