import Icons from '@/components/Icons';
import React, { Fragment } from 'react';
import styles from './BuyTicket.module.scss';
import clsx from 'clsx';
import TicketingInfo from '@/components/Card/TicketingInfo/TicketingInfo';

export default function BuyTicket() {
  return (
    <Fragment>
      <div className={styles['wrapper']}>
        <div className="container">
          <div className={styles['ticketing-step-wrap']}>
            <div className={clsx(styles['ticketing-step-wrap__item'], styles['ticketing-step-wrap__item--active'])}>
              <Icons.GridLayout className={styles['ticketing-step-wrap__item__icon']} />
              <span>Chọn ghế</span>
            </div>
            <div className={styles['ticketing-step-wrap__item']}>
              <Icons.CreditCard />
              <span>Thanh toán</span>
            </div>
            <div className={styles['ticketing-step-wrap__item']}>
              <Icons.Box />
              <span>Thông tin vé</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className={styles['ticketing-grid-layout']}>
          <div className={styles['ticketing-info-section']}>
            <TicketingInfo />
          </div>
          <div className={styles['ticketing-info-section__group-action-btn']}>
            <button className={styles['ticketing-info-section__group-action-btn__back-btn']}>
              <Icons.ArrowLeft />
            </button>
            <button className={styles['ticketing-info-section__group-action-btn__continue-btn']}>
              <span>650.000 ₫ |</span>
              {' Tiếp tục '}
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
