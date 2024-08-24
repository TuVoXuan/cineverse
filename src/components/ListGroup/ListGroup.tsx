import React from 'react';
import styles from './ListGroup.module.scss';
import Image from 'next/image';
import clsx from 'clsx';

type props = {
  items: {
    title: string;
    image?: string;
    suffixNumber?: number;
    isTitle?: boolean;
  }[];
};

export default function ListGroup({ items }: props) {
  return (
    <div className={styles.container}>
      {items.map((item, index) => {
        if (item.isTitle) {
          return (
            <div
              className={clsx(
                styles['container__head-title'],
                index < items.length - 1 && styles['container__border-bottom'],
              )}
            >
              {item.image && (
                <Image
                  alt={item.title}
                  src={item.image}
                  height={24}
                  width={24}
                  className={styles['container__head-title__img']}
                />
              )}
              {item.title}
            </div>
          );
        }
        return (
          <div
            className={clsx(
              styles['container__item'],
              index < items.length - 1 && styles['container__border-bottom'],
              item.suffixNumber ? styles['container__flex'] : styles['container__truncate'],
            )}
          >
            {item.title}
            {item.suffixNumber && <span className={styles['container__item__suffix-number']}>{item.suffixNumber}</span>}
          </div>
        );
      })}
    </div>
  );
}
