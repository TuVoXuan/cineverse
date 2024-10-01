import React from 'react';
import styles from './FilmInfoTab.module.scss';
import GroupArticle from '@/components/Card/Article/GroupArticle/GroupArticle';
import MediumArticle from '@/components/Card/Article/MediumArticle/MediumArticle';
import Comment from '@/components/Card/Comment/Comment';

const articles = [
  {
    title: 'Review Đố Anh Còng Được Tôi - Kịch bản trinh thám hấp dẫn với thông điệp đạo đức sâu sắc',
    href: '#',
    thumbnail: 'https://cdn.moveek.com/storage/media/cache/medium/66f577e4e8ab6765745408.png',
    info: [
      {
        href: '#',
        label: 'Đánh giá phim',
      },
      {
        href: '#',
        label: 'tinlethanhnhan',
      },
      {
        label: '3 ngay truoc',
      },
    ],
    summary:
      'Đố Anh Còng Được Tôi (I, Executioner) là phần tiếp theo của Veteran, thu hút khán giả với câu chuyện phá án căng thẳng, tinh tế về ranh giới giữa công lý và tội ác.',
  },
  {
    title: 'Đố Anh Còng Được Tôi - Mãn nhãn với những pha hành động cực gắt của Hwang Jung Min và Jung Hae In',
    href: '#',
    thumbnail: 'https://cdn.moveek.com/storage/media/cache/medium/66e29ae31292b081798064.jpg',
    info: [
      {
        label: 'Moveek',
      },
      {
        label: '3 ngay truoc',
      },
    ],
    summary:
      'Bậc thầy phim hành động Hwang Jung Min trở lại, bắt tay với “Con Trai Bạn Mẹ” Jung Hae In truy bắt tội phạm trong phim mới.',
  },
];

export default function FilmInfoTab() {
  return (
    <div className={styles['wrap']}>
      <div className={styles['content-wrap']}>
        <div className={styles['trailer']}>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/pfTzuEr13EQ?si=LksZrokXQ_Cc8TP8"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>

        <GroupArticle className={styles['related-post']} title="Bài viết liên quan" showDivider>
          {articles.map((item, index) => (
            <MediumArticle
              key={index}
              title={item.title}
              href={item.href}
              thumbnail={item.thumbnail}
              info={item.info}
              summary={item.summary}
            />
          ))}
        </GroupArticle>

        <div className={styles['comment-section']}>
          <h2 className={styles['comment-title']}>Cộng đồng</h2>
          <div className={styles['comment-list']}>
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
          </div>
          <button className={styles['view-more-btn']}>Xem thêm các đánh giá khác</button>
        </div>
      </div>
      <div></div>
    </div>
  );
}
