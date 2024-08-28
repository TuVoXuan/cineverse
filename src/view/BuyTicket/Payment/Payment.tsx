import React from 'react';
import styles from './Payment.module.scss';
import clsx from 'clsx';
import Momo from '../../../../public/assets/images/momo_icon.png';
import Image from 'next/image';
import { Form, Input, Checkbox, Button } from 'antd';

export default function Payment() {
  return (
    <div className={styles['payment-wrap']}>
      <div className={styles['main-payment-section']}>
        <div className={styles['card']}>
          <div className={styles['card__title']}>Tóm tắt đơn hàng</div>
          <hr className={styles['card__divider']} />
          <div
            className={clsx(styles['card__item'], styles['card__item--justify-between'], styles['card__header-item'])}
          >
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
          <p className={styles['total-order__content']}>54,500 đ</p>
        </div>

        <button className={styles['payment-button']}>Thanh toán</button>
      </div>
    </div>
  );
}
