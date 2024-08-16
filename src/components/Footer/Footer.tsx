import React from 'react';
import styles from './Footer.module.scss';
import Link from 'next/link';
import Icons from '../Icons';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles['footer-content']}>
        <h1 className={styles['footer-content__logo']}>Cineverse</h1>
        <div>
          <h2 className={styles['footer-content__title-section']}>Tìm hiểu thêm</h2>
          <ul className={styles['footer-content__nav-wrapper']}>
            <li className={styles['footer-content__nav-wrapper__item']}>
              <Link href={'#'}>Trang chủ</Link>
            </li>
            <li className={styles['footer-content__nav-wrapper__item']}>
              <Link href={'#'}>Phim</Link>
            </li>
            <li className={styles['footer-content__nav-wrapper__item']}>
              <Link href={'#'}>Tin tức</Link>
            </li>
            <li className={styles['footer-content__nav-wrapper__item']}>
              <Link href={'#'}>Liên hệ</Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className={styles['footer-content__title-section']}>Liên hệ với chúng tôi</h2>
          <ul className={styles['footer-content__contact-wrapper']}>
            <li className={styles['footer-content__contact-wrapper__item']}>
              <span>Hotline: 0987654321</span>
            </li>
            <li className={styles['footer-content__contact-wrapper__item']}>
              <span>Địa chỉ: 123A/5B đường Giải phóng 1, Quận Thủ Đức, TP. Hồ Chí Minh</span>
            </li>
          </ul>
        </div>
        <div>
          <h2 className={styles['footer-content__title-section']}>Mạng xã hội</h2>
          <div className={styles['footer-content__social-wrapper']}>
            <Icons.Facebook className={styles['footer-content__social-wrapper__item']} />
            <Icons.Instagram className={styles['footer-content__social-wrapper__item']} />
            <Icons.Youtube className={styles['footer-content__social-wrapper__item']} />
            <Icons.Tiktok className={styles['footer-content__social-wrapper__item']} />
            <Icons.Twitter className={styles['footer-content__social-wrapper__item']} />
          </div>
        </div>
      </div>
      <div className={styles['footer__all-rights-reserved']}>
        © {new Date().getFullYear()} Cinvenerse | All Rights Reserved
      </div>
    </footer>
  );
}
