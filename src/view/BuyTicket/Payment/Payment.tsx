import React from 'react';
import styles from './Payment.module.scss';
import clsx from 'clsx';
import Momo from '../../../../public/assets/images/momo_icon.png';
import Image from 'next/image';
import { Form, Input, Checkbox } from 'antd';
import { ISeat, TicketingStep } from '@/types';
import { SeatType } from '@/constants';

type Props = {
  selectedSeats: ISeat[];
  ticketPrices: ITicketPrice[];
  totalPrice: number;
  nextStep: TicketingStep;
  onNextStep: (step: TicketingStep) => void;
};

export default function Payment({ selectedSeats, ticketPrices, totalPrice, nextStep, onNextStep }: Props) {
  const handleClickPayment = () => {
    onNextStep(nextStep);
  };

  const handleSumTotalPriceSeatType = (seatType: string) => {
    const ticketPrice = ticketPrices.find((item) => item.seat_type === seatType)?.price || 0;
    const countSeats = selectedSeats.filter((item) => item.type === seatType).length;
    return ticketPrice * countSeats;
  };

  return (
    <div className={styles['payment-wrap']}>
      <div className={styles['main-payment-section']}>
        <div className={styles['card']}>
          <div className={styles['card__title']}>Tóm tắt đơn hàng</div>
          <hr className={styles['card__divider']} />
          <div className={clsx(styles['card__item'], styles['card__header-item'])}>
            <span>Mô tả</span>
            <span className={styles['card__item--text-center']}>Số lượng</span>
            <span className={styles['card__item--text-right']}>Thành tiền</span>
          </div>
          <hr className={styles['card__divider']} />
          <div className={clsx(styles['card__item'])}>
            <span>Ghế thường</span>
            <span className={styles['card__item--text-center']}>
              {selectedSeats.filter((item) => item.type === SeatType.SeatNormal).length}
            </span>
            <span className={styles['card__item--text-right']}>
              {new Intl.NumberFormat('vi-VN').format(handleSumTotalPriceSeatType(SeatType.SeatNormal))} đ
            </span>
          </div>
          <hr className={styles['card__divider']} />
          <div className={clsx(styles['card__item'])}>
            <span>Ghế VIP</span>
            <span className={styles['card__item--text-center']}>
              {selectedSeats.filter((item) => item.type === SeatType.SeatVip).length}
            </span>
            <span className={styles['card__item--text-right']}>
              {new Intl.NumberFormat('vi-VN').format(handleSumTotalPriceSeatType(SeatType.SeatVip))} đ
            </span>
          </div>
          <hr className={styles['card__divider']} />
          <div className={clsx(styles['card__item'])}>
            <span>Tổng</span>
            <span></span>
            <span className={styles['card__item--text-right']}>
              {new Intl.NumberFormat('vi-VN').format(totalPrice)} đ
            </span>
          </div>
        </div>

        <div className={styles['card']}>
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

        <div className={styles['card']}>
          <div className={styles['card__title']}>Thông tin cá nhân</div>
          <hr className={styles['card__divider']} />
          <div className={styles['form-wrap']}>
            <Form layout="vertical" className={styles['form-grid']}>
              <Form.Item label="Học và tên" name="fullName" className={styles['mb-0']}>
                <Input />
              </Form.Item>
              <Form.Item label="Email" name="email" className={styles['mb-0']}>
                <Input />
              </Form.Item>
              <Form.Item label="Số điện thoại" name="phone" className={styles['mb-0']}>
                <Input />
              </Form.Item>
              <Form.Item name="usePhoneAndEmailToCreateAccount" className={styles['mb-0']}>
                <Checkbox>Tạo tài khoản với số điện thoại và email này</Checkbox>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>

      <div className={styles['sub-payment-section']}>
        <div className={clsx(styles['warning-card'])}>
          <p>Vé mua không thể đổi hay hoàn tiền.</p>
          <p>
            Mã vé sẽ được gửi 1 lần qua số điện thoại và email đã nhập. Vui lòng kiểm tra lại thông tin trước khi tiếp
            tục.
          </p>
        </div>
        <div className={styles['total-order']}>
          <h5 className={styles['total-order__title']}>Tổng đơn hàng</h5>
          <p className={styles['total-order__content']}>{new Intl.NumberFormat('vi-VN').format(totalPrice)} đ</p>
        </div>

        <button onClick={handleClickPayment} className={styles['payment-button']}>
          Thanh toán
        </button>
      </div>
    </div>
  );
}
