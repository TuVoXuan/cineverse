'use client';
import { AppPath } from '@/constants';
import FilmInfo from '@/view/FilmDetail/FilmInfo/FilmInfo';
import CommentTab from '@/view/FilmDetail/NavFilmInfo/CommentTab/CommentTab';
import FilmInfoTab from '@/view/FilmDetail/NavFilmInfo/FilmInfoTab/FilmInfoTab';
import NavFilmInfo from '@/view/FilmDetail/NavFilmInfo/NavFilmInfo';
import ShowtimesTab from '@/view/FilmDetail/NavFilmInfo/ShowtimesTab/ShowtimesTab';
import { Fragment } from 'react';

const navItems = [
  {
    key: 'thong-tin-phim',
    label: 'Thông tin phim',
    href: `${AppPath.Film}/film-code`,
    children: <FilmInfoTab />,
  },
  {
    key: 'lich-chieu',
    label: 'Lịch chiếu',
    href: `${AppPath.Showtimes}/film-code`,
    children: <ShowtimesTab />,
  },
  {
    key: 'danh-gia',
    label: 'Đánh giá',
    href: `${AppPath.Review}/film-code`,
    children: <CommentTab />,
  },
];

export default function FilmDetail() {
  return (
    <Fragment>
      <FilmInfo />
      <NavFilmInfo items={navItems} defaultTab={navItems[1]} />
    </Fragment>
  );
}
