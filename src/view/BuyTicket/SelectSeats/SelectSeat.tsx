import React from 'react';
import styles from './SelectSeat.module.scss';
import TicketingInfo from '@/components/Card/TicketingInfo/TicketingInfo';
import { SeatType } from '@/constants';
import clsx from 'clsx';

const seatingLayout: any = {
  A: [
    { id: 1311, seatLabel: 'A1', type: 'your-choice' },
    { id: 1312, seatLabel: 'A2', type: 'seat_vip' },
    { id: 1313, seatLabel: 'A3', type: 'seat_sold' },
    { id: 1314, seatLabel: 'A4', type: 'seat_vip' },
    { id: 1315, seatLabel: 'A5', type: 'seat_vip' },
    { id: 1316, seatLabel: 'A6', type: 'seat_vip' },
    { id: 1317, seatLabel: 'A7', type: 'seat_vip' },
    { id: 1318, seatLabel: 'A8', type: 'seat_vip' },
    { id: 1319, seatLabel: 'A9', type: 'seat_vip' },
    { id: 1320, seatLabel: 'A10', type: 'seat_vip' },
    { id: 1321, seatLabel: 'A11', type: 'seat_vip' },
  ],
  B: [
    { id: 1322, seatLabel: 'B1', type: 'seat_normal' },
    { id: 1323, seatLabel: 'B2', type: 'seat_normal' },
    { id: 1324, seatLabel: 'B3', type: 'seat_normal' },
    { id: 1325, seatLabel: 'B4', type: 'seat_normal' },
    { id: 1326, seatLabel: 'B5', type: 'seat_normal' },
    { id: 1327, seatLabel: 'B6', type: 'seat_normal' },
    { id: 1328, seatLabel: 'B7', type: 'seat_normal' },
    { id: 1329, seatLabel: 'B8', type: 'seat_normal' },
    { id: 1330, seatLabel: 'B9', type: 'seat_normal' },
    { id: 1331, seatLabel: 'B10', type: 'seat_normal' },
    { id: 1332, seatLabel: 'B11', type: 'seat_normal' },
  ],
  C: [
    { id: 1333, seatLabel: 'C1', type: 'seat_normal' },
    { id: 1334, seatLabel: 'C2', type: 'seat_normal' },
    { id: 1335, seatLabel: 'C3', type: 'seat_normal' },
    { id: 1336, seatLabel: 'C4', type: 'seat_normal' },
    { id: 1337, seatLabel: 'C5', type: 'seat_normal' },
    { id: 1338, seatLabel: 'C6', type: 'seat_normal' },
    { id: 1339, seatLabel: 'C7', type: 'seat_normal' },
    { id: 1340, seatLabel: 'C8', type: 'seat_normal' },
    { id: 1341, seatLabel: 'C9', type: 'seat_normal' },
    { id: 1342, seatLabel: 'C10', type: 'seat_normal' },
    { id: 1343, seatLabel: 'C11', type: 'seat_normal' },
  ],
  D: [
    { id: 1344, seatLabel: 'D1', type: 'seat_normal' },
    { id: 1345, seatLabel: 'D2', type: 'seat_normal' },
    { id: 1346, seatLabel: 'D3', type: 'seat_normal' },
    { id: 1347, seatLabel: 'D4', type: 'seat_normal' },
    { id: 1348, seatLabel: 'D5', type: 'seat_normal' },
    { id: 1349, seatLabel: 'D6', type: 'seat_normal' },
    { id: 1350, seatLabel: 'D7', type: 'seat_normal' },
    { id: 1351, seatLabel: 'D8', type: 'seat_normal' },
    { id: 1352, seatLabel: 'D9', type: 'seat_normal' },
    { id: 1353, seatLabel: 'D10', type: 'seat_normal' },
    { id: 1354, seatLabel: 'D11', type: 'seat_normal' },
  ],
  E: [
    { id: 1355, seatLabel: 'E1', type: 'seat_normal' },
    { id: 1356, seatLabel: 'E2', type: 'seat_normal' },
    { id: 1357, seatLabel: 'E3', type: 'seat_normal' },
    { id: 1358, seatLabel: 'E4', type: 'seat_normal' },
    { id: 1359, seatLabel: 'E5', type: 'seat_normal' },
    { id: 1360, seatLabel: 'E6', type: 'seat_normal' },
    { id: 1361, seatLabel: 'E7', type: 'seat_normal' },
    { id: 1362, seatLabel: 'E8', type: 'seat_normal' },
    { id: 1363, seatLabel: 'E9', type: 'seat_normal' },
    { id: 1364, seatLabel: 'E10', type: 'seat_normal' },
    { id: 1365, seatLabel: 'E11', type: 'seat_normal' },
  ],
  F: [
    { id: 1366, seatLabel: 'F1', type: 'seat_normal' },
    { id: 1367, seatLabel: 'F2', type: 'seat_normal' },
    { id: 1368, seatLabel: 'F3', type: 'seat_normal' },
    { id: 1369, seatLabel: 'F4', type: 'seat_normal' },
    { id: 1370, seatLabel: 'F5', type: 'seat_normal' },
    { id: 1371, seatLabel: 'F6', type: 'seat_normal' },
    { id: 1372, seatLabel: 'F7', type: 'seat_normal' },
    { id: 1373, seatLabel: 'F8', type: 'seat_normal' },
    { id: 1374, seatLabel: 'F9', type: 'seat_normal' },
    { id: 1375, seatLabel: 'F10', type: 'seat_normal' },
    { id: 1376, seatLabel: 'F11', type: 'seat_normal' },
  ],
  G: [
    { id: 1377, seatLabel: 'G1', type: 'seat_normal' },
    { id: 1378, seatLabel: 'G2', type: 'seat_normal' },
    { id: 1379, seatLabel: 'G3', type: 'seat_normal' },
    { id: 1380, seatLabel: 'G4', type: 'seat_normal' },
    { id: 1381, seatLabel: 'G5', type: 'seat_normal' },
    { id: 1382, seatLabel: 'G6', type: 'seat_normal' },
    { id: 1383, seatLabel: 'G7', type: 'seat_normal' },
    { id: 1384, seatLabel: 'G8', type: 'seat_normal' },
    { id: 1385, seatLabel: 'G9', type: 'seat_normal' },
    { id: 1386, seatLabel: 'G10', type: 'seat_normal' },
    { id: 1387, seatLabel: 'G12', type: 'seat_normal' },
  ],
  H: [
    { id: 1388, seatLabel: 'H1', type: 'seat_normal' },
    { id: 1389, seatLabel: 'H2', type: 'seat_normal' },
    { id: 1390, seatLabel: 'H3', type: 'seat_normal' },
    { id: 1391, seatLabel: 'H4', type: 'seat_normal' },
    { id: 1392, seatLabel: 'H5', type: 'seat_normal' },
    { id: 1393, seatLabel: 'H6', type: 'seat_normal' },
    { id: 1394, seatLabel: 'H7', type: 'seat_normal' },
    { id: 1395, seatLabel: 'H8', type: 'seat_normal' },
    { id: 1396, seatLabel: 'H9', type: 'seat_normal' },
    { id: 1397, seatLabel: 'H10', type: 'seat_normal' },
    { id: 1398, seatLabel: 'H11', type: 'seat_normal' },
  ],
  I: [
    { id: 1399, seatLabel: 'I1', type: 'seat_normal' },
    { id: 1400, seatLabel: 'I2', type: 'seat_normal' },
    { id: 1401, seatLabel: 'I3', type: 'seat_normal' },
    { id: 1402, seatLabel: 'I4', type: 'seat_normal' },
    { id: 1403, seatLabel: 'I5', type: 'seat_normal' },
    { id: 1404, seatLabel: 'I6', type: 'seat_normal' },
    { id: 1405, seatLabel: 'I7', type: 'seat_normal' },
    { id: 1406, seatLabel: 'I8', type: 'seat_normal' },
    { id: 1407, seatLabel: 'I9', type: 'seat_normal' },
    { id: 1408, seatLabel: 'I10', type: 'seat_normal' },
    { id: 1409, seatLabel: 'I11', type: 'seat_normal' },
  ],
  J: [
    { id: 1410, seatLabel: 'J1', type: 'seat_normal' },
    { id: 1411, seatLabel: 'J2', type: 'seat_normal' },
    { id: 1412, seatLabel: 'J3', type: 'seat_normal' },
    { id: 1413, seatLabel: 'J4', type: 'seat_normal' },
    { id: 1414, seatLabel: 'J5', type: 'seat_normal' },
    { id: 1415, seatLabel: 'J6', type: 'seat_normal' },
    { id: 1416, seatLabel: 'J7', type: 'seat_normal' },
    { id: 1417, seatLabel: 'J8', type: 'seat_normal' },
    { id: 1418, seatLabel: 'J9', type: 'seat_normal' },
    { id: 1419, seatLabel: 'J10', type: 'seat_normal' },
    { id: 1420, seatLabel: 'J00', type: 'seat_normal' },
  ],
};

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

export default function SelectSeat() {
  return (
    <div className={styles['ticketing-grid-layout']}>
      <div className={styles['ticketing-info-section']}>
        <TicketingInfo />
        <div className={styles['ticketing-info-section__total-order']}>
          <p className={styles['ticketing-info-section__total-order__title']}>Tổng đơn hàng</p>
          <p className={styles['ticketing-info-section__total-order__price']}>0 ₫</p>
        </div>
        <div className={styles['ticketing-info-section__group-action-btn']}>
          <button className={styles['ticketing-info-section__group-action-btn__continue-btn']}>
            <span>650.000 ₫ |</span>
            {' Tiếp tục '}
          </button>
        </div>
      </div>
      <div className={styles['seating-section']}>
        <div className={styles['seating-layout__group-seat-type']}>
          {seatTypes.map((item) => (
            <div className={styles['seating-layout__group-seat-type__type']}>
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
            <div className={styles['seating-layout__row']}>
              {seatingLayout[keyName].map((cell: any, index: any) => (
                <button
                  className={clsx(
                    styles['seating-layout__cell'],
                    cell.type === SeatType.SeatNormal && styles['seating-layout__cell--seat-normal'],
                    cell.type === SeatType.SeatVip && styles['seating-layout__cell--seat-vip'],
                    cell.type === SeatType.SeatSold && styles['seating-layout__cell--seat-sold'],
                    cell.type === SeatType.YourChoice && styles['seating-layout__cell--your-choice'],
                    cell.type === SeatType.Unset && styles['seating-layout__cell--unset'],
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
