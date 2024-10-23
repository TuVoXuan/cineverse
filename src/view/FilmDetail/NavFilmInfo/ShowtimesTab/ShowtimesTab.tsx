import React, { Fragment, useEffect, useState } from 'react';
import styles from './ShowtimesTab.module.scss';
import { Select } from 'antd';
import WeekdayNavigator from '@/components/WeekdayNavigator/WeekdayNavigator';
import CinemaCollapse from '@/components/CinemaCollapse/CinemaCollapse';
import toast from 'react-hot-toast';
import { showtimesApi } from '@/api/showtimes-api';
import { regionApi } from '@/api/region-api';
import { IOption } from '@/types';
import dayjs from 'dayjs';

interface Props {
  filmCode: string
}

export default function ShowtimesTab({filmCode}: Props) {
  const [activeDate, setActiveDate] = useState<string>(dayjs().format('D-M-YYYY'));
  const [provinces, setProvinces] = useState<IOption[]>([]);
  const [selectedProvince, setSelectedProvince] = useState<string>();
  const [showtimes, setShowtimes] = useState<IShowtimeForFilm[]>([]);

  const handleChangeProvince = (item: string) => {
    setSelectedProvince(item);
  };

  async function fetchShowtimes () {
    try {
      if(selectedProvince && activeDate){
        const response = await showtimesApi.getShowtimesByFilmCode(filmCode, selectedProvince, activeDate);
        setShowtimes(response.data);
      }
    } catch (error) {
      console.log("error: ", error);
      toast.error((error as IRespondError)?.message);
    }
  }

  async function fetchProvince () {
    try {
      const response = await regionApi.getAll();
      setProvinces(response.data.data.map((item) => ({label: item.name, value: item.code})));
    } catch (error) {
      console.log("error: ", error);
      toast.error((error as IRespondError)?.message);
    }
  }

  useEffect(() => {
    fetchProvince();
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(function(pos) {
        console.log("pos: ", pos);
      })
    }
  },[])

  useEffect(() => {
    fetchShowtimes();
  },[selectedProvince, activeDate, filmCode])

  return (
    <div className={styles['wrap']}>
      <div className={styles['content-wrap']}>
        <div className={styles['form']}>
          <Select className={styles['form__select']} options={provinces} onChange={handleChangeProvince} />
        </div>

        <WeekdayNavigator
          className={styles['week-date-navigator']}
          activeDate={activeDate}
          onChange={(date) => setActiveDate(date)}
        />

        <div className={styles['cinema-showtimes-wrap']}>
          {
            showtimes.map((item, index) => <CinemaCollapse key={index} showtime={item}/>)
          }
        </div>
      </div>
      <div></div>
    </div>
  );
}
