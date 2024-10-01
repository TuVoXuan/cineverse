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

type props = {
  activeDate: string | undefined;
  onChange: (value: string) => void;
  className?: string;
};

export default function WeekdayNavigator({ activeDate, onChange, className }: props) {
  const [weekdays, setWeekdays] = useState<any>([]);

  const handleClickDate = (date: any) => {
    onChange(date.fullDate);
  };

  useEffect(() => {
    const datesInWeek = [];
    for (let index = 0; index < 6; index++) {
      const date = dayjs().add(index, 'day');
      const dateInWeek = {
        fullDate: date.format('D-M-YYYY'),
        date: date.format('D/M'),
        weekday: date.format('ddd'),
      };
      datesInWeek.push(dateInWeek);

      if (index === 0) {
        onChange(dateInWeek.fullDate);
      }
    }
    setWeekdays(datesInWeek);
  }, []);

  return (
    <div className={clsx(styles.weekdays, className)}>
      {weekdays.map((item: any) => (
        <div
          key={item.date}
          className={clsx(styles.weekdays__item, item.fullDate === activeDate && styles['weekdays__item--active'])}
          onClick={() => handleClickDate(item)}
        >
          <span>{item.date}</span>
          <span>{item.weekday}</span>
        </div>
      ))}
    </div>
  );
}
