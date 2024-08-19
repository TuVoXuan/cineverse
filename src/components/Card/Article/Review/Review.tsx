import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import ArticleInfo from '../ArticleInfo/ArticleInfo';
import style from './Review.module.scss';

type props = {
  title: string;
  href: string;
  info: {
    href?: string;
    label: string;
  }[];
  thumbnail: string;
};

export default function Review({ title, href, info, thumbnail }: props) {
  return (
    <div className={style.review}>
      <Link href={href} className={style.review__thumbnail}>
        <Image alt="review film image" src={thumbnail} height={100} width={100} />
      </Link>
      <div className={style.review__info}>
        <ArticleInfo title={title} href={href} info={info} />
      </div>
    </div>
  );
}
