import React, { Fragment, useState } from 'react'
import styles from './DropdownMenu.module.scss'
import Icons from '../Icons'
import clsx from 'clsx'

type props = {
  items: {
    label: string,
    href: string
  }[],
  title: string,
  className?: string,
  isOpen: boolean,
  onToggle: () => void
}

export default function DropDownMenu({ title, items, className, isOpen, onToggle }: props) {

  return (
    <Fragment>
      <div className={clsx(className, styles['dropdown-menu'])} onClick={onToggle}>
        <a href="#">{title}</a>
        <span>
          <Icons.ArrowDown height={16} width={16} />
        </span>
      </div>
      {
        isOpen &&
        <ul>
          {items.map((item) =>
            <li className={styles['dropdown-menu__item']}>
              <a href={item.href}>{item.label}</a>
            </li>)}
        </ul>
      }
    </Fragment>
  )
}
