import React, { Fragment, useState } from 'react';
import styles from './Payment.module.scss';
import clsx from 'clsx';
import Momo from '../../../../public/assets/images/momo_icon.png';
import Image from 'next/image';
import { Form, Input, Checkbox } from 'antd';
import { ISeat, TicketingStep } from '@/types';
import { EmailRegex, PhoneNumberRegex, SeatType } from '@/constants';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';
import { Typography } from 'antd';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { orderApi } from '@/api/order-api';

const { Text } = Typography;

type Props = {
  selectedSeats: ISeat[];
  ticketPrices: ITicketPrice[];
  totalPrice: number;
  nextStep: TicketingStep;
  screeningId: string;
  onNextStep: (step: TicketingStep) => void;
};

interface IFormInput {
  name: string;
  email: string;
  phone: string;
  createNewAccount: boolean;
}

const paymentMethod = [
  {
    logo: Momo,
    name: 'Momo',
    code: 'momo',
  },
];

export default function Payment({ selectedSeats, ticketPrices, totalPrice, nextStep, screeningId, onNextStep }: Props) {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<string>(paymentMethod[0].code);
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const schema = yup.object().shape({
    name: yup.string().required('Vui lòng nhập tên.'),
    email: yup.string().matches(EmailRegex, 'Email không hợp lệ.').required('Vui lòng nhập email.'),
    phone: yup
      .string()
      .matches(PhoneNumberRegex, 'Số điện thoại không hợp lệ.')
      .required('Vui lòng nhập số điện thoại.'),
    createNewAccount: yup.bool().required(),
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: yupResolver(schema),
    defaultValues: {
      createNewAccount: false,
    },
  });

  const handleSelectPaymentMethod = (code: string) => {
    setSelectedPaymentMethod(code);
  };

  const onSubmit = async (values: IFormInput) => {
    const params = new URLSearchParams(searchParams);
    params.set('loading', 'true');
    const queryString = params.toString();
    const redirectURL = `${pathname}?${queryString}`;

    let body = {
      screening_id: screeningId,
      seatings: selectedSeats.map((item) => ({ id: item.id, label: item.seatLabel, seat_type: item.type })),
      user_info: {
        email: values.email,
        phone: values.phone,
        name: values.name,
        createNewAccount: values.createNewAccount,
      },
      redirect_url: redirectURL,
    };

    try {
      const response = await orderApi.getMonoPaymentURL(body);
      router.push(response.data);
    } catch (error) {
      console.log('error: ', error);
    }
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
          <div
            className={clsx(
              styles['card__item'],
              styles['card__item--grid'],
              styles['card__item--grid-col-3'],
              styles['card__header-item'],
            )}
          >
            <span>Mô tả</span>
            <span className={styles['card__item--text-center']}>Số lượng</span>
            <span className={styles['card__item--text-right']}>Thành tiền</span>
          </div>
          <hr className={styles['card__divider']} />
          <div className={clsx(styles['card__item'], styles['card__item--grid'], styles['card__item--grid-col-3'])}>
            <span>Ghế thường</span>
            <span className={styles['card__item--text-center']}>
              {selectedSeats.filter((item) => item.type === SeatType.SeatNormal).length}
            </span>
            <span className={styles['card__item--text-right']}>
              {new Intl.NumberFormat('vi-VN').format(handleSumTotalPriceSeatType(SeatType.SeatNormal))} đ
            </span>
          </div>
          <hr className={styles['card__divider']} />
          <div className={clsx(styles['card__item'], styles['card__item--grid'], styles['card__item--grid-col-3'])}>
            <span>Ghế VIP</span>
            <span className={styles['card__item--text-center']}>
              {selectedSeats.filter((item) => item.type === SeatType.SeatVip).length}
            </span>
            <span className={styles['card__item--text-right']}>
              {new Intl.NumberFormat('vi-VN').format(handleSumTotalPriceSeatType(SeatType.SeatVip))} đ
            </span>
          </div>
          <hr className={styles['card__divider']} />
          <div className={clsx(styles['card__item'], styles['card__item--grid'], styles['card__item--grid-col-3'])}>
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
          {paymentMethod.map((item, index) => {
            if (index < paymentMethod.length - 1) {
              return (
                <Fragment key={item.code}>
                  <div
                    onClick={() => handleSelectPaymentMethod(item.code)}
                    className={clsx(
                      styles['card__item'],
                      styles['card__item--flex'],
                      styles['card__item--gap-2'],
                      item.code === selectedPaymentMethod && styles['card__item--active'],
                    )}
                  >
                    <Image src={item.logo} height={24} width={24} alt={`${item.code}-icon`} />
                    <span>{item.name}</span>
                  </div>
                  <hr className={styles['card__divider']} />
                </Fragment>
              );
            }
            return (
              <div
                key={item.code}
                onClick={() => handleSelectPaymentMethod(item.code)}
                className={clsx(
                  styles['card__item'],
                  styles['card__item--flex'],
                  styles['card__item--gap-2'],
                  item.code === selectedPaymentMethod && styles['card__item--active'],
                )}
              >
                <Image src={item.logo} height={24} width={24} alt={`${item.code}-icon`} />
                <span>{item.name}</span>
              </div>
            );
          })}
        </div>

        <div className={styles['card']}>
          <div className={styles['card__title']}>Thông tin cá nhân</div>
          <hr className={styles['card__divider']} />
          <div className={styles['form-wrap']}>
            <form id="user-info-form" onSubmit={handleSubmit(onSubmit)} className={styles['form-grid']}>
              <Controller
                name="name"
                control={control}
                render={({ field, formState: { errors } }) => (
                  <div className={styles['form-grid__input-wrap']}>
                    <label>Họ và tên</label>
                    <Input {...field} status={errors.name && 'error'} />
                    {errors.name && <Text type="danger">{errors.name.message}</Text>}
                  </div>
                )}
              />
              <Controller
                name="email"
                control={control}
                render={({ field, formState: { errors } }) => (
                  <div className={styles['form-grid__input-wrap']}>
                    <label>Email</label>
                    <Input {...field} status={errors.email && 'error'} />
                    {errors.email && <Text type="danger">{errors.email.message}</Text>}
                  </div>
                )}
              />
              <Controller
                name="phone"
                control={control}
                render={({ field, formState: { errors } }) => (
                  <div className={styles['form-grid__input-wrap']}>
                    <label>Số điện thoại</label>
                    <Input {...field} status={errors.phone && 'error'} />
                    {errors.phone && <Text type="danger">{errors.phone.message}</Text>}
                  </div>
                )}
              />
              <Controller
                name="createNewAccount"
                control={control}
                render={({ field, formState: { errors } }) => (
                  <Checkbox {...field}>Tạo tài khoản với số điện thoại và email này</Checkbox>
                )}
              />
            </form>
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

        <button form="user-info-form" type="submit" className={styles['payment-button']}>
          Thanh toán
        </button>
      </div>
    </div>
  );
}
