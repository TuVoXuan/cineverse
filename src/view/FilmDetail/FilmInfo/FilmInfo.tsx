import React from 'react';
import styles from './FilmInfo.module.scss';
import clsx from 'clsx';
import Button from '@/components/Button/Button';
import Icons from '@/components/Icons';
import InfoItem from '../InfoItem/InfoItem';

export default function FilmInfo() {
  return (
    <div className={styles['film-info-wrap']}>
      <img
        className={styles['film-info-wrap__bg-img']}
        src="https://cdn.moveek.com/storage/media/cache/full/66cff84e96ee5674743041.jpg"
        alt="film-background"
      />
      <div className={clsx('container', styles['film-info-wrap__wrap'])}>
        <div className={styles['film-info-wrap__thumbnail']}>
          <img src="https://cdn.moveek.com/storage/media/cache/tall/66e667a965631887716128.png" alt="film-thumbnail" />
        </div>
        <div className={styles['film-info-wrap__info']}>
          <div className={styles['title-section']}>
            <h1 className={styles['title-section__film-name']}>Anh Trai Vượt Mọi Tam Tai</h1>
            <p className={styles['title-section__genres']}>
              <span>Comedy</span>
              <span>, Action</span>
              <span>, Adventure</span>
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
              <p className={styles['film-info__desc']}>
                Cho Su Gwang là một thanh tra cực kỳ nóng tính, dù có tỷ lệ bắt giữ tội phạm ấn tượng nhưng anh luôn gặp
                khó khăn trong việc kiểm soát cơn giận của mình. Vì liên tục tấn công các nghi phạm, Cho Su Gwang bị
                chuyển đến đảo Jeju. Tại đây, vị thanh tra nhận nhiệm vụ truy bắt kẻ lừa đảo giỏi nhất Hàn Quốc - Kim In
                Hae với 7 tiền án, nổi tiếng thông minh và có khả năng “thiên biến vạn hoá” để ngụy trang hoàn hảo mọi
                nhân dạng. Cùng lúc đó, Kim In Hae bất ngờ dính vào vụ án mạng nghiêm trọng có liên quan đến tên trùm xã
                hội đen đang nhăm nhe “thôn tính” đảo Jeju. Trước tình hình nguy cấp phải “giải cứu” hòn đảo Jeju và
                triệt phá đường dây nguy hiểm của tên trùm xã hội đen, thanh tra Cho Su Gwang bất đắc dĩ phải hợp tác
                cùng nghi phạm Kim In Hae, tận dụng triệt để các kỹ năng từ phá án đến lừa đảo trên hành trình rượt đuổi
                vừa gay cấn vừa hài hước để có thể hoàn thành nhiệm vụ cam go.
              </p>
              <div className={styles['film-info__overview']}>
                <InfoItem icon={<Icons.Calendar />} label="Khởi chiếu" value="13/09/2204" />
                <InfoItem icon={<Icons.Clock />} label="Thời lượng" value="110 phút" />
                <InfoItem icon={<Icons.UserCheck />} label="Giới hạn tuổi" value="T16" />
              </div>
            </div>

            <div className={styles['cast-crew-list']}>
              <div className={styles['cast-crew']}>
                <p className={styles['cast-crew__title']}>Dien vien</p>
                <p className={styles['cast-crew__content']}>
                  <span>Polina Avdeenko</span>,<span>Yuliya Rudina</span>,<span>Boris Khasanov</span>,
                  <span>Yuliya Zorkina</span>
                </p>
              </div>
              <div className={styles['cast-crew']}>
                <p className={styles['cast-crew__title']}>Dao dien</p>
                <p className={styles['cast-crew__content']}>
                  <span>Polina Avdeenko</span>,<span>Yuliya Rudina</span>,<span>Boris Khasanov</span>,
                  <span>Yuliya Zorkina</span>
                </p>
              </div>
              <div className={styles['cast-crew']}>
                <p className={styles['cast-crew__title']}>Nha san xuat</p>
                <p className={styles['cast-crew__content']}>
                  <span>Polina Avdeenko</span>,<span>Yuliya Rudina</span>,<span>Boris Khasanov</span>,
                  <span>Yuliya Zorkina</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
