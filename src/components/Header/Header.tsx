'use client';
import React, { Fragment, useEffect, useState } from 'react';
import styles from './Header.module.scss';
import Icons from '../Icons';
import clsx from 'clsx';
import DropDownMenu from '../DropdownMenu/DropDownMenu';

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
  const [activeDropdown, setActiveDropdown] = useState<string>();

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    if (!showMenu) {
      setActiveDropdown(undefined);
    }
  }, [showMenu]);

  return (
    <Fragment>
      <header className={styles.header}>
        <div className={styles.header__icon} onClick={handleShowMenu} role="button" tabIndex={0}>
          <Icons.Menu />
        </div>

        <h1 className={styles.header__title}>Cineverse</h1>

        <div className={styles['header__left-icons']}>
          <div className={styles.header__icon}>
            <Icons.MapPin />
          </div>
          <div className={styles.header__icon}>
            <Icons.QuestionMarkCircle />
          </div>
          <div className={styles.header__icon}>
            <Icons.User />
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
                  isOpen={activeDropdown === item.title}
                  onToggle={() => setActiveDropdown(item.title === activeDropdown ? undefined : item.title)}
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
    </Fragment>
  );
}
