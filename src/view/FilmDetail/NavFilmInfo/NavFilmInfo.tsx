import React, { useState } from 'react';
import styles from './NavFilmInfo.module.scss';
import Link from 'next/link';
import clsx from 'clsx';

interface NavItem {
  key: string;
  href: string;
  label: string;
  children: React.ReactNode;
}

interface Props {
  items: NavItem[];
  defaultTab: NavItem;
}

export default function NavFilmInfo({ items, defaultTab }: Props) {
  const [activeNav, setActiveNav] = useState<NavItem>(defaultTab);

  const handleChangeTab = (nav: NavItem) => {
    setActiveNav(nav);
  };

  return (
    <>
      <div className={styles['nav-wrap']}>
        <div className="container">
          <ul className={styles['nav']}>
            {items.map((item) => (
              <li key={item.key} className={styles['nav__item']}>
                <Link
                  onClick={() => handleChangeTab(item)}
                  href={item.href}
                  className={clsx(styles['nav__link'], activeNav.key === item.key && styles['active'])}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles['content-wrap']}>
        <div className="container">{activeNav.children}</div>
      </div>
    </>
  );
}
