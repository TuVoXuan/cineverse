'use client'
import React, { Fragment, useEffect, useState } from 'react'
import styles from './FilmShowing.module.scss';
import dayjs from 'dayjs';
import toast from 'react-hot-toast';
import { filmApi } from '@/api/film-api';
import clsx from 'clsx';
import FilmCard from '@/components/Card/FilmCard/FilmCard';

export default function FilmShowing() {
	const [films, setFilms] = useState<IShortFilmInfo[]>([]);

  async function fetchFilmsShowing() {
		try {
			const response = await filmApi.getFilmsShowing();
			setFilms(response.data);
		} catch (error) {
			console.log("error: ", error);
			toast.error((error as IRespondError)?.message);
		}
	}

	useEffect(() => {
		fetchFilmsShowing();
	},[])

  return (
    <Fragment>
        <div className={styles.banner}>
        <div className=" px-3 py-6">
          <h1 className={styles.banner__title}>Phim đang chiếu</h1>
          <p className={styles.banner__description}>Danh sách các phim hiện đang chiếu rạp trên toàn quốc {dayjs().format('DD/MM/YYYY')}. Xem lịch chiếu phim, giá vé tiện lợi, đặt vé nhanh chỉ với 1 bước!</p>
        </div>
      </div>
      
      <div className={clsx('container', styles['film-list'])}>
        {films.map((film) => <FilmCard film={film}/>)}
      </div>
    </Fragment>
  )
}
