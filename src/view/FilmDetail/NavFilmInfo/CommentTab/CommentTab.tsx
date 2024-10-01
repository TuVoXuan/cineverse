import React from 'react';
import styles from './CommentTab.module.scss';
import Comment from '@/components/Card/Comment/Comment';

export default function CommentTab() {
  return (
    <div className={styles['wrap']}>
      <div className={styles['content-wrap']}>
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />

        <button className={styles['view-more-btn']}>Xem thêm các đánh giá khác</button>
      </div>
      <div></div>
    </div>
  );
}
