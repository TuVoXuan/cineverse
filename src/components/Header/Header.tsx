'use client';
import React, { Fragment, useEffect, useState } from 'react';
import styles from './Header.module.scss';
import Icons from '../Icons';
import clsx from 'clsx';
import DropDownMenu from '../DropdownMenu/DropDownMenu';
import useResponsive from '@/hooks/useResponsive';

const menuList = [
  {
    title: 'Đặt vé xem phim',
    href: '#',
  },
  {
    title: 'Lịch chiếu',
    href: '#',
  },
  {
    title: 'Phim',
    items: [
      {
        label: 'Đang chiếu',
        href: '#',
      },
      {
        label: 'Sắp chiếu',
        href: '#',
      },
      {
        label: 'Chiếu sớm',
        href: '#',
      },
      {
        label: 'Phim tháng 9/2024',
        href: '#',
      },
      {
        label: 'Phim Việt Nam',
        href: '#',
      },
    ],
  },
  {
    title: 'Rạp',
    href: '#',
  },
  {
    title: 'Tin tức',
    items: [
      {
        label: 'Tin điện ảnh',
        href: '#',
      },
      {
        label: 'Đánh giá phim',
        href: '#',
      },
    ],
  },
  {
    title: 'Công đồng',
    href: '#',
  },
];

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const screenSize = useResponsive();

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    if (screenSize === 'xl') {
      setShowMenu(false);
    }
  }, [screenSize]);

  return (
    <section>
      <header className={styles.header}>
        <div
          className={clsx(styles.header__icon, styles['header__menu-icon'])}
          role="button"
          tabIndex={0}
          onClick={handleShowMenu}
        >
          <Icons.Menu />
        </div>

        <div className={styles['header__right-nav']}>
          <div className={styles['nav-menu']}>
            {menuList.map((item) => {
              if (item.items) {
                return (
                  <DropDownMenu
                    key={item.title}
                    className={styles['nav-menu__item']}
                    title={item.title}
                    items={item.items}
                    isPopup
                  />
                );
              }
              return (
                <div key={item.title} className={styles['nav-menu__item']}>
                  {item.title}
                </div>
              );
            })}
          </div>
        </div>

        <h1 className={styles.header__title}>Cineverse</h1>

        <div className={styles['header__left-icons']}>
          <div className={styles['header__icon-wrapper']}>
            <Icons.MapPin className={styles.header__icon} />
          </div>
          <div className={styles['header__icon-wrapper']}>
            <Icons.QuestionMarkCircle className={styles.header__icon} />
            <span className={styles['show_label']}>Hỗ trợ</span>
          </div>
          <div className={styles['header__icon-wrapper']}>
            <Icons.User className={styles.header__icon} />
          </div>
        </div>
      </header>

      <div className={clsx(styles.header__menu, showMenu && styles['header__menu--collage'])}>
        <div className={styles['nav-menu']}>
          {menuList.map((item) => {
            if (item.items) {
              return (
                <DropDownMenu
                  key={item.title}
                  className={styles['nav-menu__item']}
                  title={item.title}
                  items={item.items}
                />
              );
            }
            return (
              <div key={item.title} className={styles['nav-menu__item']}>
                {item.title}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
