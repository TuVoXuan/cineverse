import Icons from '@/components/Icons';
import React, { Fragment } from 'react';
import styles from './BuyTicket.module.scss';
import clsx from 'clsx';
import TicketingInfo from '@/components/Card/TicketingInfo/TicketingInfo';
import { SeatType } from '@/constants';
import SelectSeat from '@/view/BuyTicket/SelectSeats/SelectSeat';

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
        <SelectSeat />
      </div>
    </Fragment>
  );
}
