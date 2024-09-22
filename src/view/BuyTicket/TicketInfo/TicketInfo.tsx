import React, { useEffect, useState } from 'react';
import styles from './TicketInfo.module.scss';
import { useSearchParams } from 'next/navigation';
import { orderApi } from '@/api/order-api';
import dayjs from 'dayjs';

export default function TicketInfo() {
  const searchParams = useSearchParams();
  const [orderInfo, setOrderInfo] = useState<IOrderInfo>();

  const fetchOrderInfo = async () => {
    try {
      const orderId = searchParams.get('orderId');
      if (orderId) {
        const response = await orderApi.getOrderInfo(orderId.split('cnv_order_')[1]);
        setOrderInfo(response.data);
      }
    } catch (error) {
      console.log('error: ', error);
    }
  };

  useEffect(() => {
    fetchOrderInfo();
  }, []);

  return (
    <div className={styles['wrapper']}>
      <p className={styles['title']}>Chúc mừng bạn đã đặt vé thành công 👏</p>
      <p className={styles['description']}>Dưới đây là thông tin vé mà bạn vừa đặt.</p>

      <div className={styles['ticket-info-wrap']}>
        <p className={styles['ticket-info-item']}>
          Phim: <span>{orderInfo?.screening.film.title}</span>
        </p>
        <p className={styles['ticket-info-item']}>
          Lịch chiếu: <span>{orderInfo && dayjs(orderInfo.screening.screening_time).format('HH:mm, DD/MM/YYYY')}</span>
        </p>
        <p className={styles['ticket-info-item']}>
          Phòng chiếu: <span>{orderInfo?.screening.auditorium.name}</span>
        </p>
        <p className={styles['ticket-info-item']}>
          Rạp: <span>{orderInfo?.screening.auditorium.cinema_branch.name}</span>
        </p>
        <p className={styles['ticket-info-item']}>
          Ghế:{' '}
          <span>
            {orderInfo && orderInfo.ticket_order_items.map((ticket) => ticket.seating_arrangement.label).join(', ')}
          </span>
        </p>
      </div>
    </div>
  );
}
