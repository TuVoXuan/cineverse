'use client'
import React, { Fragment, useState } from 'react'
import styles from './Header.module.scss'
import Icons from '../Icons'
import clsx from 'clsx'

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  }

  return (
    <Fragment>
      <header className={styles.header}>
        <div className={styles.header__icon} onClick={handleShowMenu} role='button' tabIndex={0}>
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

      <div className={clsx(
        styles.header__menu,
        showMenu && styles['header__menu--collage']
      )}>
        <div className={styles['nav-menu']}>
          <div className={styles['nav-menu__item']}>
            Đặt vé xem phim
          </div>
          <div className={styles['nav-menu__item']}>
            Lich chieu
          </div>
          <div className={styles['nav-menu__item']}>
            Phim
          </div>
          <div className={styles['nav-menu__item']}>
            Rap
          </div>
          <div className={styles['nav-menu__item']}>
            Tin tuc
          </div>
          <div className={styles['nav-menu__item']}>
            Cong dong
          </div>
        </div>
      </div>
    </Fragment>

  )
}
