import React from 'react';
import styles from './InfoItem.module.scss';

interface Props {
  icon: React.ReactNode;
  label: string;
  value: string;
}

export default function InfoItem({ icon, label, value }: Props) {
  return (
    <div className={styles['info-item']}>
      <div className={styles['info-item__label-wrap']}>
        <span className={styles['info-item__label-wrap__icon']}>
          {React.cloneElement(icon as React.ReactElement, { style: { width: '100%', height: '100%' } })}
        </span>
        {label}
      </div>
      <span>{value}</span>
    </div>
  );
}
