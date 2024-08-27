import Link from 'next/link';
import React, { Fragment } from 'react';
import styles from './MetaInfo.module.scss';
import clsx from 'clsx';

export type MetaInfoItem = {
  href?: string;
  label: string;
};

type props = {
  textLinkColor: 'red' | 'blue';
  info: MetaInfoItem[];
  className?: string;
};

export default function MetaInfo({ textLinkColor, info, className }: props) {
  return (
    <p className={clsx(styles['meta-info'], className)}>
      {info.map((item, index) => {
        return (
          <Fragment key={item.label}>
            {item.href && (
              <Link className={styles[`meta-info__text-link--${textLinkColor}`]} href={item.href}>
                {item.label}
              </Link>
            )}
            {!item.href && <span className={styles['meta-info__text-muted']}>{item.label}</span>}
            {index < info.length - 1 && <span className={styles['meta-info__text-muted']}>・</span>}
          </Fragment>
        );
      })}
    </p>
  );
}
