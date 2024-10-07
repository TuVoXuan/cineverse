import React, { Fragment } from 'react';
import styles from './FilmInfo.module.scss';
import clsx from 'clsx';
import Button from '@/components/Button/Button';
import Icons from '@/components/Icons';
import InfoItem from '../InfoItem/InfoItem';
import dayjs from 'dayjs';

interface Props {
  filmDetail: IFilmDetail;
}

export default function FilmInfo({ filmDetail }: Props) {
  return (
    <div className={styles['film-info-wrap']}>
      <img
        className={styles['film-info-wrap__bg-img']}
        src={filmDetail.thumbnail_bg.url}
        alt={`${filmDetail.code}-bg-img`}
      />
      <div className={clsx('container', styles['film-info-wrap__wrap'])}>
        <div className={styles['film-info-wrap__thumbnail']}>
          <img src={filmDetail.thumbnail.url} alt={`${filmDetail.code}-thumbnail`} />
        </div>
        <div className={styles['film-info-wrap__info']}>
          <div className={styles['title-section']}>
            <h1 className={styles['title-section__film-name']}>{filmDetail.title}</h1>
            <p className={styles['title-section__genres']}>
              {filmDetail.genres.map((item, index) => (
                <span>{index === 0 ? item.name : `, ${item.name}`}</span>
              ))}
            </p>
          </div>
          <div className={styles['desc-section']}>
            <div className={styles['film-info']}>
              <div className={styles['film-info__btn-group']}>
                <Button variant="contained" color="slate" icon={<Icons.Heart />} size={11}>
                  Thích
                </Button>
                <Button variant="contained" color="white" icon={<Icons.Star />} size={11}>
                  Đánh giá
                </Button>
                <Button variant="outlined" color="white">
                  Trailer
                </Button>
                <Button variant="contained" color="red">
                  Mua vé
                </Button>
              </div>
              <p className={styles['film-info__desc']}>{filmDetail.description}</p>
              <div className={styles['film-info__overview']}>
                <InfoItem
                  icon={<Icons.Calendar />}
                  label="Khởi chiếu"
                  value={dayjs(filmDetail.release_date).format('DD/MM/YYYY')}
                />
                <InfoItem icon={<Icons.Clock />} label="Thời lượng" value={`${filmDetail.duration} phút`} />
                <InfoItem
                  icon={<Icons.UserCheck />}
                  label="Giới hạn tuổi"
                  value={
                    filmDetail.age_restricted > 0
                      ? `T${filmDetail.age_restricted}`
                      : filmDetail.age_restricted.toString()
                  }
                />
              </div>
            </div>

            <div className={styles['cast-crew-list']}>
              {filmDetail.actors.length > 0 && (
                <div className={styles['cast-crew']}>
                  <p className={styles['cast-crew__title']}>Diễn viên</p>
                  <p className={styles['cast-crew__content']}>
                    {filmDetail.actors.map((item, index) =>
                      index === 0 ? (
                        <span key={item.code}>{item.name}</span>
                      ) : (
                        <Fragment key={item.code}>
                          , <span>{item.name}</span>
                        </Fragment>
                      ),
                    )}
                  </p>
                </div>
              )}
              {filmDetail.directors.length > 0 && (
                <div className={styles['cast-crew']}>
                  <p className={styles['cast-crew__title']}>Đạo diễn</p>
                  <p className={styles['cast-crew__content']}>
                    {filmDetail.directors.map((item, index) =>
                      index === 0 ? (
                        <span key={item.code}>{item.name}</span>
                      ) : (
                        <Fragment key={item.code}>
                          , <span>{item.name}</span>
                        </Fragment>
                      ),
                    )}
                  </p>
                </div>
              )}
              {filmDetail.producers.length > 0 && (
                <div className={styles['cast-crew']}>
                  <p className={styles['cast-crew__title']}>Nhà sản xuất</p>
                  <p className={styles['cast-crew__content']}>
                    {filmDetail.producers.map((item, index) =>
                      index === 0 ? (
                        <span key={item.code}>{item.name}</span>
                      ) : (
                        <Fragment key={item.code}>
                          , <span>{item.name}</span>
                        </Fragment>
                      ),
                    )}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
