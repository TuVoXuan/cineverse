import React, { Fragment } from 'react';
import styles from './GroupArticle.module.scss';
import clsx from 'clsx';

interface Props {
  title: string;
  children: React.ReactNode[];
  showDivider?: boolean;
  hasLoadMore?: boolean;
  className?: string;
}

export default function GroupArticle({ title, children, showDivider = false, hasLoadMore = false, className }: Props) {
  return (
    <div className={clsx(styles['group-article'], className)}>
      <div className={styles['title']}>{title}</div>
      <div className={styles['content']}>
        {React.Children.map(children, (child, index) => (
          <Fragment>
            {child}
            {showDivider && index < children.length - 1 && <hr className="my-4" />}
          </Fragment>
        ))}
      </div>
      {hasLoadMore && <button className={styles['load-more-btn']}>Xem thêm</button>}
    </div>
  );
}
