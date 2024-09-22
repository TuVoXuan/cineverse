'use client';
import Icons from '@/components/Icons';
import React, { Fragment, useEffect, useState } from 'react';
import styles from './BuyTicket.module.scss';
import clsx from 'clsx';
import SelectSeat from '@/view/BuyTicket/SelectSeats/SelectSeat';
import Payment from '@/view/BuyTicket/Payment/Payment';
import { ISeat, TicketingStep } from '@/types';
import TicketInfo from '@/view/BuyTicket/TicketInfo/TicketInfo';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { orderApi } from '@/api/order-api';
import toast from 'react-hot-toast';

const TicketingSteps: TicketingStep[] = [
  {
    code: 'chon-ghe',
    label: 'Chọn ghế',
    icon: <Icons.GridLayout className={styles['ticketing-step-wrap__item__icon']} />,
  },
  {
    code: 'thanh-toan',
    label: 'Thanh toán',
    icon: <Icons.CreditCard className={styles['ticketing-step-wrap__item__icon']} />,
  },
  {
    code: 'thong-tin-ve',
    label: 'Thông tin vé',
    icon: <Icons.Box className={styles['ticketing-step-wrap__item__icon']} />,
  },
];

export default function BuyTicket({ params }: { params: { screeningId: string } }) {
  const [selectedSeats, setSelectedSeats] = useState<ISeat[]>([]);
  const [totalPrices, setTotalPrices] = useState<number>(0);
  const [ticketPrices, setTicketPrices] = useState<ITicketPrice[]>([]);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const activeStep = searchParams.get('step');
  const loading = searchParams.get('loading');

  const handleSelectSeat = (seat: ISeat) => {
    if (!seat.isSelected) {
      setSelectedSeats([...selectedSeats, seat]);
      const ticketPrice = ticketPrices.find((item) => item.seat_type === seat.type)?.price || 0;
      setTotalPrices(totalPrices + ticketPrice);
    } else {
      setSelectedSeats(selectedSeats.filter((item) => item.seatLabel !== seat.seatLabel));
      const ticketPrice = ticketPrices.find((item) => item.seat_type === seat.type)?.price || 0;
      setTotalPrices(totalPrices - ticketPrice);
    }
  };

  const handleSetTicketPrice = (value: ITicketPrice[]) => {
    setTicketPrices(value);
  };

  const handleChangeStep = (step: TicketingStep, clearParams?: boolean) => {
    const params = new URLSearchParams(clearParams ? '' : searchParams);
    params.set('step', step.code);
    const queryString = params.toString();
    const updatePath = queryString ? `${pathname}?${queryString}` : pathname;
    router.push(updatePath);
  };

  const checkMomoPaymentProcess = async () => {
    try {
      const orderId = searchParams.get('orderId');
      if (orderId) {
        const response = await orderApi.checkOrderPaymentMomoProcess(orderId.split('cnv_order_')[1]);
        if (response.data) {
          handleChangeStep(TicketingSteps[2]);
        } else {
          toast.error('Thanh toán đơn hàng với Momo thất bại.');
          setTimeout(() => {
            handleChangeStep(TicketingSteps[0], true);
          }, 3000);
        }
      }
    } catch (error) {
      console.log('error: ', error);
    }
  };

  useEffect(() => {
    const step = searchParams.get('step');
    if (!step) {
      handleChangeStep(TicketingSteps[0]);
    }
  }, []);

  useEffect(() => {
    if (loading) {
      checkMomoPaymentProcess();
    }
  }, [loading]);

  return (
    <Fragment>
      <div className={styles['wrapper']}>
        <div className="container">
          <div className={styles['ticketing-step-wrap']}>
            {TicketingSteps.map((step) => (
              <div
                key={step.code}
                className={clsx(
                  styles['ticketing-step-wrap__item'],
                  activeStep === step.code && styles['ticketing-step-wrap__item--active'],
                )}
              >
                {step.icon}
                <span>{step.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container">
        {loading && (
          <div className={styles['loading-wrap']}>
            <Icons.LoadingHorizontal className={styles['loading']} />
            <div>
              <p>Đơn hàng của bạn đang được xử lý.</p>
              <p>Vui lòng đợi xong giây lát.</p>
            </div>
          </div>
        )}
        {!loading && activeStep === 'chon-ghe' && (
          <SelectSeat
            totalPrices={totalPrices}
            screeningId={params.screeningId}
            nextStep={TicketingSteps[1]}
            onNextStep={handleChangeStep}
            selectedSeats={selectedSeats}
            onSelectSeat={handleSelectSeat}
            onSetTicketPrice={handleSetTicketPrice}
          />
        )}
        {!loading && activeStep === 'thanh-toan' && (
          <Payment
            selectedSeats={selectedSeats}
            ticketPrices={ticketPrices}
            totalPrice={totalPrices}
            nextStep={TicketingSteps[2]}
            screeningId={params.screeningId}
            onNextStep={handleChangeStep}
          />
        )}
        {!loading && activeStep === 'thong-tin-ve' && <TicketInfo />}
      </div>
    </Fragment>
  );
}
