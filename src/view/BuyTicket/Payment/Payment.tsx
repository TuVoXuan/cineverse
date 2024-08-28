import React from 'react';
import styles from './Payment.module.scss';
import clsx from 'clsx';
import Momo from '../../../../public/assets/images/momo_icon.png';
import Image from 'next/image';

export default function Payment() {
  return (
    <div className={styles['payment-wrap']}>
      <div className={styles['card']}>
        <div className={styles['card__title']}>Tóm tắt đơn hàng</div>
        <hr className={styles['card__divider']} />
        <div className={clsx(styles['card__item'], styles['card__item--justify-between'], styles['card__header-item'])}>
          <span>Mô tả</span>
          <span>Số lượng</span>
          <span>Thành tiền</span>
        </div>
        <hr className={styles['card__divider']} />
        <div className={clsx(styles['card__item'], styles['card__item--justify-between'])}>
          <span>Ghế</span>
          <span>1</span>
          <span>70,000 đ</span>
        </div>
        <hr className={styles['card__divider']} />
        <div className={clsx(styles['card__item'], styles['card__item--justify-between'])}>
          <span>Tổng</span>
          <span>70,000 đ</span>
        </div>
      </div>

      <div className={clsx(styles['card'], styles['card--mt-6'])}>
        <div className={styles['card__title']}>Hình thức thanh toán</div>
        <hr className={styles['card__divider']} />
        <div className={clsx(styles['card__item'], styles['card__item--gap-2'], styles['card__item--active'])}>
          <Image src={Momo} height={24} width={24} alt="momo-icon" />
          <span>Momo</span>
        </div>
        <hr className={styles['card__divider']} />
        <div className={clsx(styles['card__item'], styles['card__item--gap-2'])}>
          <Image src={Momo} height={24} width={24} alt="momo-icon" />
          <span>Momo</span>
        </div>
      </div>
    </div>
  );
}
