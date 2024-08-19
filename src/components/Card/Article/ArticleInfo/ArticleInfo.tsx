import Link from 'next/link';
import React, { Fragment } from 'react';
import styles from './ArticleInfo.module.scss';
import clsx from 'clsx';

type props = {
  title: string;
  href: string;
  info: {
    href?: string;
    label: string;
  }[];
  summary?: string;
};

export default function ArticleInfo({ title, href, info, summary }: props) {
  return (
    <Fragment>
      <p className={clsx(styles['article-info__title'], 'article-title')}>
        <Link href={href}>{title}</Link>
      </p>
      <p className={styles['article-info__info']}>
        {info.map((item, index) => {
          return (
            <Fragment key={item.label}>
              {item.href && (
                <Link className={styles['article-info__info__text-link']} href={item.href}>
                  {item.label}
                </Link>
              )}
              {!item.href && <span className={styles['article-info__info__text-muted']}>{item.label}</span>}
              {index < info.length - 1 && <span className={styles['article-info__info__text-muted']}>・</span>}
            </Fragment>
          );
        })}
      </p>
      {summary && <p className={clsx(styles['article-info__summary'], 'article-summary')}>{summary}</p>}
    </Fragment>
  );
}
