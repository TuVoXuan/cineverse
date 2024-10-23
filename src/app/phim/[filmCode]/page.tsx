'use client';
import { filmApi } from '@/api/film-api';
import { AppPath } from '@/constants';
import FilmInfo from '@/view/FilmDetail/FilmInfo/FilmInfo';
import FilmInfoTab from '@/view/FilmDetail/NavFilmInfo/FilmInfoTab/FilmInfoTab';
import { NavContent, NavFilmInfo, NavTrigger } from '@/view/FilmDetail/NavFilmInfo/NavFilmInfo';
import { useParams } from 'next/navigation';
import { Fragment, useEffect, useState } from 'react';
import toast from 'react-hot-toast';

export default function FilmDetail() {
  const [filmDetail, setFilmDetail] = useState<IFilmDetail>();
  const params = useParams<{ filmCode: string }>();

  const fetchFilmDetail = async () => {
    try {
      const respond = await filmApi.getFilmDetail(params.filmCode);
      setFilmDetail(respond.data);
    } catch (error) {
      console.log('error: ', error);
      toast.error((error as IRespondError).message);
    }
  };

  useEffect(() => {
    fetchFilmDetail();
  }, [params.filmCode]);

  return (
    <Fragment>
      {filmDetail && <FilmInfo filmDetail={filmDetail} />}

      <NavFilmInfo defaultActiveNav="thong-tin-phim">
        <NavTrigger href={`${AppPath.Film}/${params.filmCode}`} value={'thong-tin-phim'}>
          Thông tin phim
        </NavTrigger>
        <NavTrigger href={`${AppPath.Showtimes}/${params.filmCode}`} value={'lich-chieu'}>
          Lịch chiếu
        </NavTrigger>
        <NavTrigger href={`${AppPath.Review}/${params.filmCode}`} value={'danh-gia'}>
          Đánh giá
        </NavTrigger>

        <NavContent value={'thong-tin-phim'}>
          <FilmInfoTab trailer={filmDetail ? filmDetail.trailer.replace('watch?v=', 'embed/') : ''} />
        </NavContent>
      </NavFilmInfo>
    </Fragment>
  );
}
