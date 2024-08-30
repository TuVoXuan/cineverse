'use client';
import Icons from '@/components/Icons';
import React, { Fragment, useState } from 'react';
import styles from './BuyTicket.module.scss';
import clsx from 'clsx';
import SelectSeat from '@/view/BuyTicket/SelectSeats/SelectSeat';
import Payment from '@/view/BuyTicket/Payment/Payment';
import { ISeat, TicketingStep } from '@/types';

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
  const [activeStep, setActiveStep] = useState<string>('chon-ghe');
  const [totalPrices, setTotalPrices] = useState<number>(0);
  const [ticketPrices, setTicketPrices] = useState<ITicketPrice[]>([]);

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

  const handleChangeStep = (step: TicketingStep) => {
    setActiveStep(step.code);
  };

  const handleSetTicketPrice = (value: ITicketPrice[]) => {
    setTicketPrices(value);
  };

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
        {activeStep === 'chon-ghe' && (
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
        {activeStep === 'thanh-toan' && (
          <Payment
            selectedSeats={selectedSeats}
            ticketPrices={ticketPrices}
            totalPrice={totalPrices}
            nextStep={TicketingSteps[2]}
            onNextStep={handleChangeStep}
          />
        )}
      </div>
    </Fragment>
  );
}
