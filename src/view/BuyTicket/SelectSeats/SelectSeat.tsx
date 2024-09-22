'use client';
import React, { useEffect, useState } from 'react';
import styles from './SelectSeat.module.scss';
import TicketingInfo from '@/components/Card/TicketingInfo/TicketingInfo';
import { SeatType } from '@/constants';
import clsx from 'clsx';
import { Modal } from 'antd';
import dayjs from 'dayjs';
import toast from 'react-hot-toast';
import { showtimesApi } from '@/api/showtimes-api';
import { ISeat, SeatingLayout, TicketingStep } from '@/types';
import { generateSeatLayoutObject } from '@/utils';
import useResponsive from '@/hooks/useResponsive';

const MAX_SEAT_TO_CHOOSE = 10;

const seatTypes = [
  {
    label: 'Ghế thường',
    value: 'seat-normal',
  },
  {
    label: 'Ghế VIP',
    value: 'seat-vip',
  },
  {
    label: 'Ghế đã bán',
    value: 'seat-sold',
  },
  {
    label: 'Ghế bạn chọn',
    value: 'your-choice',
  },
];

type Props = {
  screeningId: string;
  selectedSeats: ISeat[];
  onSelectSeat: (seat: ISeat) => void;
  nextStep: TicketingStep;
  onNextStep: (step: TicketingStep) => void;
  totalPrices: number;
  onSetTicketPrice: (ticketPrices: ITicketPrice[]) => void;
};

export default function SelectSeat({
  screeningId,
  selectedSeats,
  nextStep,
  totalPrices,
  onSelectSeat,
  onNextStep,
  onSetTicketPrice,
}: Props) {
  const [seatingLayout, setSeatingLayout] = useState<SeatingLayout>({});
  const [auditorium, setAuditorium] = useState<IAuditorium>();

  const handleClickCell = (seat: ISeat, row: string) => {
    if (selectedSeats.length === MAX_SEAT_TO_CHOOSE && !seat.isSelected) {
      Modal.warning({
        title: 'Cảnh báo',
        content: 'Chỉ cho phép đặt tối đa 10 ghế trong 1 lần đặt vé.',
      });
      return;
    }
    onSelectSeat(seat);
    handleChangeSelectedSeat(seat, row);
  };

  const handleChangeSelectedSeat = (seat: ISeat, row: string) => {
    const updatedSeatingLayout = {
      ...seatingLayout,
      [row]: seatingLayout[row].map((item) => {
        if (item.seatLabel === seat.seatLabel) {
          return { ...item, isSelected: !item.isSelected };
        }
        return item;
      }),
    };
    setSeatingLayout(updatedSeatingLayout);
  };

  const handleClickContinue = () => {
    if (selectedSeats.length === 0) {
      Modal.warning({
        title: 'Cảnh báo',
        content: 'Vui lòng chọn ít nhất 1 ghế để tiếp thục thanh toán.',
      });
      return;
    }
    onNextStep(nextStep);
  };

  async function fetchSeatLayoutByShowtime() {
    try {
      const response = await showtimesApi.getSeatLayoutForShowtime(screeningId);
      const { auditorium, seatingLayout, ticketPrices } = response.data;
      const generatedSeatLayout = generateSeatLayoutObject(auditorium.rows, auditorium.columns);
      for (const key in generatedSeatLayout) {
        for (let index = 0; index < generatedSeatLayout[key].length; index++) {
          const existCell = seatingLayout[key].find((cell) => cell.x_position === index);
          if (existCell) {
            generatedSeatLayout[key][index] = {
              id: existCell.id,
              seatLabel: existCell.label,
              type: existCell.seat_type,
            };
          }
        }
      }
      setSeatingLayout(generatedSeatLayout);
      setAuditorium(auditorium);
      onSetTicketPrice(ticketPrices);
    } catch (error) {
      toast.error((error as IRespondError)?.message);
    }
  }

  useEffect(() => {
    fetchSeatLayoutByShowtime();
  }, [screeningId]);

  return (
    <div className={styles['ticketing-grid-layout']}>
      <div className={styles['ticketing-info-section']}>
        <TicketingInfo
          filmName={'Đẹp trai thấy sai sai'}
          cinemaBranchName={'Cinestar Quốc Thanh'}
          showtime={dayjs('20:45 28/08/2024')}
          auditoriumName={'01'}
          seats={selectedSeats.map((item) => item.seatLabel || '')}
        />
        <div className={styles['ticketing-info-section__total-order']}>
          <p className={styles['ticketing-info-section__total-order__title']}>Tổng đơn hàng</p>
          <p className={styles['ticketing-info-section__total-order__price']}>
            {new Intl.NumberFormat('vi-VN').format(totalPrices)} ₫
          </p>
        </div>
        <div className={styles['ticketing-info-section__group-action-btn']}>
          <button
            onClick={handleClickContinue}
            className={styles['ticketing-info-section__group-action-btn__continue-btn']}
          >
            <span>{new Intl.NumberFormat('vi-VN').format(totalPrices)} ₫ |</span>
            {' Tiếp tục '}
          </button>
        </div>
      </div>
      <div className={styles['seating-section']}>
        <div className={styles['seating-layout__group-seat-type']}>
          {seatTypes.map((item) => (
            <div key={item.label} className={styles['seating-layout__group-seat-type__type']}>
              <div
                className={clsx(
                  styles['seating-layout__group-seat-type__type__sample'],
                  styles[`seating-layout__group-seat-type__type__sample--${item.value}`],
                )}
              ></div>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
        <div className={styles['seating-layout__monitor']}>Màn hình</div>
        <div className={styles['seating-layout']}>
          {Object.keys(seatingLayout).map((keyName, i) => (
            <div
              key={keyName}
              className={clsx(
                styles['seating-layout__row'],
                auditorium?.seat_direction === 'RTL' && styles['seating-layout__row--flex-row-reverse'],
              )}
            >
              {seatingLayout[keyName].map((cell: any, index: any) => (
                <button
                  key={cell.seatLabel + index}
                  onClick={() => handleClickCell(cell, keyName)}
                  className={clsx(
                    styles['seating-layout__cell'],
                    cell.type === SeatType.SeatNormal && styles['seating-layout__cell--seat-normal'],
                    cell.type === SeatType.SeatVip && styles['seating-layout__cell--seat-vip'],
                    cell.type === SeatType.SeatSold && styles['seating-layout__cell--seat-sold'],
                    cell.type === SeatType.Unset && styles['seating-layout__cell--unset'],
                    cell.isSelected && styles['seating-layout__cell--your-choice'],
                  )}
                >
                  {cell.type !== SeatType.SeatSold && cell.seatLabel}
                </button>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
