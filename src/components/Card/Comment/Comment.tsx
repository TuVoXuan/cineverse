import React from 'react';
import styles from './Comment.module.scss';
import Icons from '@/components/Icons';

export default function Comment() {
  return (
    <div className={styles['wrapper']}>
      <div className={styles['head-comment']}>
        <div className={styles['avatar-wrap']}>
          <div className={styles['avatar']}>
            <img src="/assets/images/default-avatar.jpg" alt="avatar" />
          </div>
          <div className={styles['avatar-wrap__ticket-mini']}>
            <Icons.Ticket className={styles['avatar-wrap__ticket-mini__icon']} />
          </div>
        </div>

        <div>
          <h4 className={styles['name']}>
            <a href="#">Hồ Hoàng Hà Linh</a>
            <span className={styles['name__rate']}>
              <Icons.Star className={styles['name__rate__icon']} />
              10
            </span>
          </h4>
          <p className={styles['time-age']}>1 ngay truoc</p>
        </div>
      </div>
      <p className={styles['comment']}>Hay ,lôi cuốn ,hài</p>
    </div>
  );
}
