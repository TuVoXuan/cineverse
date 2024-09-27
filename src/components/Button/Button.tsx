import React from 'react';
import styles from './Button.module.scss';
import clsx from 'clsx';

interface Props {
  children: React.ReactNode;
  icon?: React.ReactNode;
  color: 'red' | 'white' | 'slate';
  variant: 'contained' | 'outlined';
  className?: string;
  size?: number;
}

export default function Button({ children, icon, color, variant, className, size }: Props) {
  const combineClassName = clsx(styles['button-wrap'], styles[color], styles[variant], className);
  return (
    <button className={combineClassName}>
      {icon && (
        <span style={{ width: size, height: size }}>
          {React.cloneElement(icon as React.ReactElement, { style: { width: '100%', height: '100%' } })}
        </span>
      )}
      {children}
    </button>
  );
}
