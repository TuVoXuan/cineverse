import React, { Fragment, useRef, useState } from 'react';
import styles from './DropdownMenu.module.scss';
import Icons from '../Icons';
import clsx from 'clsx';
import { useClickOutside } from '@/hooks/useClickOutside';
import Link from 'next/link';

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

  const onToggleShow = (event: React.MouseEvent) => {
    event.stopPropagation();  
    setShow(!show);
  };

  useClickOutside(ref, () => setShow(false));

  return (
    <div ref={ref} className={clsx(isPopup && 'relative')} style={{zIndex: 10}}>
      <div className={clsx(className, styles['dropdown-menu'])} onClick={onToggleShow}>
        <span>{title}</span>
        <span>
          <Icons.ArrowDown height={16} width={16} />
        </span>
      </div>
      {show && (
        <ul className={clsx(isPopup && styles['dropdown-menu__item-wrapper'])}>
          {items.map((item) => (
            <li key={item.label} className={styles['dropdown-menu__item']}>
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
