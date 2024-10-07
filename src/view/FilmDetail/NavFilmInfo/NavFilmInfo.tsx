import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';
import styles from './NavFilmInfo.module.scss';

interface Props {
  children: React.ReactNode;
  defaultActiveNav: string;
}

export function NavFilmInfo({ children, defaultActiveNav }: Props) {
  return (
    <>
      <div className={styles['nav-wrap']}>
        <div className="container">
          <ul className={styles['nav']}>
            {React.Children.map(children, (child, index) => {
              if (React.isValidElement(child) && child.type === NavTrigger) {
                return React.cloneElement(child as React.ReactElement<NavTriggerProps>, {
                  className: defaultActiveNav === child.props.value ? styles['active'] : '',
                });
              }
              return null;
            })}
          </ul>
        </div>
      </div>
      <div className={styles['content-wrap']}>
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child) && child.type === NavContent && defaultActiveNav === child.props.value) {
            return React.cloneElement(child); // Show only active content
          }
          return null;
        })}
      </div>
    </>
  );
}

interface NavTriggerProps {
  value: string;
  href: string;
  children: React.ReactNode;
  className?: string;
}

export function NavTrigger({ value, href, children, className }: NavTriggerProps) {
  return (
    <li className={styles['nav__item']}>
      <Link data-value={value} href={href} className={clsx(styles['nav__link'], className)}>
        {children}
      </Link>
    </li>
  );
}

interface NavContent {
  value: string;
  children: React.ReactNode;
}

export function NavContent({ value, children }: NavContent) {
  return (
    <div className="container" data-value={value}>
      {children}
    </div>
  );
}
