import React, { useEffect, useState } from 'react';
import styles from './WeekdayNavigator.module.scss';
import dayjs from 'dayjs';
import updateLocale from 'dayjs/plugin/updateLocale';
import weekday from 'dayjs/plugin/weekday';
import clsx from 'clsx';
dayjs.extend(updateLocale);
dayjs.extend(weekday);

dayjs.updateLocale('en', {
  weekdaysShort: ['CN', 'Th 2', 'Th 3', 'Th 4', 'Th 5', 'Th 6', 'Th 7'],
});

export default function WeekdayNavigator() {
  const [weekdays, setWeekdays] = useState<any>([]);
  const [activeWeekday, setActiveWeekday] = useState<string>();

  const handleClickDate = (date: string) => {
    setActiveWeekday(date);
  };

  useEffect(() => {
    const datesInWeek = [];
    for (let index = 0; index < 6; index++) {
      const date = dayjs().add(index, 'day');
      const dateInWeek = {
        date: date.format('D/M'),
        weekday: date.format('ddd'),
      };
      datesInWeek.push(dateInWeek);

      if (index === 0) {
        setActiveWeekday(dateInWeek.date);
      }
    }
    setWeekdays(datesInWeek);
  }, []);

  return (
    <div className={styles.weekdays}>
      {weekdays.map((item: any) => (
        <div
          key={item.date}
          className={clsx(styles.weekdays__item, item.date === activeWeekday && styles['weekdays__item--active'])}
          onClick={() => handleClickDate(item.date)}
        >
          <span>{item.date}</span>
          <span>{item.weekday}</span>
        </div>
      ))}
    </div>
  );
}
