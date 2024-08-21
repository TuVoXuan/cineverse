import React from 'react';
import styles from './Alert.module.scss';
import clsx from 'clsx';
import Icons from '../Icons';

type props = {
  type: 'success' | 'warning' | 'error';
  message: string;
};

export default function Alert({ type, message }: props) {
  const icon =
    type === 'success' ? (
      <Icons.CheckCircle className={styles.alert__icon} />
    ) : (
      <Icons.ExclamationCircle className={styles.alert__icon} />
    );

  return (
    <div className={clsx(styles.alert, styles[`alert--${type}`])}>
      {icon}
      <p>{message}</p>
    </div>
  );
}
