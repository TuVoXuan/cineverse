import React, { Fragment, useRef, useState } from 'react';
import styles from './DropdownMenu.module.scss';
import Icons from '../Icons';
import clsx from 'clsx';
import { useClickOutside } from '@/hooks/useClickOutside';

type props = {
  items: {
    label: string;
    href: string;
  }[];
  title: string;
  className?: string;
  isPopup?: boolean;
};

export default function DropDownMenu({ title, items, className, isPopup }: props) {
  const [show, setShow] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);

  const onToggleShow = () => {
    setShow(!show);
  };

  useClickOutside(ref, () => setShow(false));

  return (
    <div ref={ref} className={clsx(isPopup && 'relative')}>
      <div className={clsx(className, styles['dropdown-menu'])} onClick={onToggleShow}>
        <a href="#">{title}</a>
        <span>
          <Icons.ArrowDown height={16} width={16} />
        </span>
      </div>
      {show && (
        <ul className={clsx(isPopup && styles['dropdown-menu__item-wrapper'])}>
          {items.map((item) => (
            <li key={item.label} className={styles['dropdown-menu__item']}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
