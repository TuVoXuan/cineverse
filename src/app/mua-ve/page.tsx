'use client';
import Icons from '@/components/Icons';
import React, { Fragment, useState } from 'react';
import styles from './BuyTicket.module.scss';
import clsx from 'clsx';
import SelectSeat, { ISeat } from '@/view/BuyTicket/SelectSeats/SelectSeat';
import Payment from '@/view/BuyTicket/Payment/Payment';

export default function BuyTicket() {
  const [selectedSeats, setSelectedSeats] = useState<ISeat[]>([]);

  const handleSelectSeat = (seat: ISeat) => {
    if (!seat.isSelected) {
      setSelectedSeats([...selectedSeats, seat]);
    } else {
      setSelectedSeats(selectedSeats.filter((item) => item.seatLabel !== seat.seatLabel));
    }
  };

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
        {/* <SelectSeat selectedSeats={selectedSeats} onSelectSeat={handleSelectSeat} /> */}
        <Payment />
      </div>
    </Fragment>
  );
}
