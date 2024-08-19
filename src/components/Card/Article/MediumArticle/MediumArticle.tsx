import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import styles from './MediumArticle.module.scss';
import ArticleInfo from '../ArticleInfo/ArticleInfo';

type props = {
  title: string;
  href: string;
  thumbnail: string;
  info: {
    href?: string;
    label: string;
  }[];
  summary: string;
};

export default function MediumArticle({ title, href, thumbnail, info, summary }: props) {
  return (
    <div className={styles.container}>
      <div className={styles.container__img}>
        <Link href={href}>
          <Image src={thumbnail} alt="film image" height={100} width={100} />
        </Link>
      </div>
      <div className={styles.container__content}>
        <ArticleInfo title={title} info={info} summary={summary} href={href} />
      </div>
    </div>
  );
}
