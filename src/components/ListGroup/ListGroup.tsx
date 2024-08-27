import React, { useState } from 'react';
import styles from './ListGroup.module.scss';
import Image from 'next/image';
import clsx from 'clsx';

export type ListItem = {
  title: string;
  image?: string;
  suffixNumber?: number;
  isTitle?: boolean;
  code?: string;
  id?: number;
};

type props = {
  items: ListItem[];
  activeItem: ListItem | undefined;
  onChange: (item: ListItem) => void;
};

export default function ListGroup({ items, activeItem, onChange }: props) {
  const handleClickItem = (item: ListItem) => {
    onChange(item);
  };
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
              key={item.code}
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
            key={item.code}
            className={clsx(
              styles['container__item'],
              index < items.length - 1 && styles['container__border-bottom'],
              item.suffixNumber ? styles['container__flex'] : styles['container__truncate'],
              activeItem?.code === item.code && styles['container__item--active'],
            )}
            onClick={() => handleClickItem(item)}
          >
            {item.title}
            {item.suffixNumber ? (
              <span className={styles['container__item__suffix-number']}>{item.suffixNumber}</span>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
