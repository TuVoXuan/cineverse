import React, { useEffect, useState } from 'react';
import styles from './WeekdayNavigator.module.scss';
import dayjs from 'dayjs';
import updateLocale from 'dayjs/plugin/updateLocale';
import weekday from 'dayjs/plugin/weekday';
dayjs.extend(updateLocale);
dayjs.extend(weekday);

dayjs.updateLocale('en', {
  weekdays: ['CN', 'Th 2', 'Th 3', 'Th 4', 'Th 5', 'Th 6', 'Th 7'],
});

export default function WeekdayNavigator() {
  const [weekdays, setWeekdays] = useState<any>([]);

  useEffect(() => {
    const datesInWeek = [];
    for (let index = 0; index < 6; index++) {
      const date = dayjs().add(index, 'day');
      const dateInWeek = {
        date: date.format('D/M'),
        weekday: date.format('dddd'),
      };
      datesInWeek.push(dateInWeek);
    }
    setWeekdays(datesInWeek);
  }, []);

  return (
    <div className={styles.weekdays}>
      {weekdays.map((item: any) => (
        <div key={item.date} className={styles.weekdays__item}>
          <span>{item.date}</span>
          <span>{item.weekday}</span>
        </div>
      ))}
    </div>
  );
}
