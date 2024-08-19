import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import styles from './HotArticle.module.scss';
import ArticleInfo from '../ArticleInfo/ArticleInfo';

const articleInfo = {
  title: 'Review Ma Da – Bộ phim đáng xem vào tháng cô hồn?',
  href: '#',
  info: [
    {
      label: 'Phim kinh di',
      href: '#',
    },
    {
      label: 'Danh gia phim',
      href: '#',
    },
    {
      label: 'linhhuynh2507',
    },
    {
      label: '2 ngay truoc',
    },
  ],
  summary:
    'Với đề tài hấp dẫn liệu Ma Da có phải là một phim kinh dị đáng xem? Hay lại là một nỗi thất vọng to lớn cho khán giả, giống như đa phần những phim kinh dị Việt Nam thời gian gần đây.',
};

export default function HotArticle() {
  return (
    <div className={styles['hot-article']}>
      <Link href={'#'}>
        <Image
          src={'https://cdn.moveek.com/storage/media/cache/large/66bed0dee6945042995666.png'}
          alt="artist-image"
          height={100}
          width={100}
          className={styles['hot-article__img']}
        />
      </Link>
      <ArticleInfo
        title={articleInfo.title}
        href={articleInfo.href}
        info={articleInfo.info}
        summary={articleInfo.summary}
      />
    </div>
  );
}
