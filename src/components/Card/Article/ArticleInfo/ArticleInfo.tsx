import Link from 'next/link';
import React, { Fragment } from 'react';
import styles from './ArticleInfo.module.scss';
import clsx from 'clsx';
import MetaInfo from '@/components/MetaInfo/MetaInfo';

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
      <MetaInfo info={info} textLinkColor="red" />
      {summary && <p className={clsx(styles['article-info__summary'], 'article-summary')}>{summary}</p>}
    </Fragment>
  );
}
