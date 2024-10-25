'use client';
import React, { Fragment, useEffect, useState } from 'react';
import styles from './Header.module.scss';
import Icons from '../Icons';
import clsx from 'clsx';
import DropDownMenu from '../DropdownMenu/DropDownMenu';
import useResponsive from '@/hooks/useResponsive';
import { AppPath, PasswordRegex } from '@/constants';
import Link from 'next/link';
import dayjs from 'dayjs';
import { Button, Drawer, Input } from 'antd';
import { Controller, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Typography } from 'antd';
import toast from 'react-hot-toast';
import { authApi } from '@/api/auth-api';
import { useAppDispatch } from '@/lib/hook';
import { login } from '@/lib/features/user/userAction';

const { Text } = Typography;

const menuList = [
  {
    title: 'Lịch chiếu',
    href: AppPath.Showtimes,
  },
  {
    title: 'Phim',
    items: [
      {
        label: 'Đang chiếu',
        href: AppPath.Showing,
      },
      {
        label: `Phim tháng ${dayjs().month() + 1}/${dayjs().year()}`,
        href: `/phim-thang/${dayjs().month() + 1}/${dayjs().year()}`,
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

interface ILoginForm {
  account: string;
  password: string;
}

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const [showSignUpForm, setShowSignUpForm] = useState<boolean>(false);
  const screenSize = useResponsive();
  const dispatch = useAppDispatch();

  const schema = yup.object().shape({
    account: yup.string().required(),
    password: yup
      .string()
      .matches(
        PasswordRegex,
        'Mật khẩu phải chứa ít nhất 8 kí tự và có it nhất 1 in hoa, 1 in thường, 1 chữ số, 1 kí tự đặc biệt',
      )
      .required(),
  });

  const { control, handleSubmit } = useForm<ILoginForm>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (value: ILoginForm) => {
    try {
      const response = await dispatch(login(value)).unwrap();
      if (response?.token) {
        setShowSignUpForm(false);
        toast.success('Đăng nhập thành công.');
      }
    } catch (error) {
      console.log('error: ', error);
      toast.error((error as IRespondError)?.message);
    }
  };

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    if (screenSize === 'xl') {
      setShowMenu(false);
    }
  }, [screenSize]);

  return (
    <section className={styles['header-wrap']}>
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
                  <Link href={item.href}>{item.title}</Link>
                </div>
              );
            })}
          </div>
        </div>

        <h1 className={styles.header__title}>
          <Link href={AppPath.Home}>Cineverse</Link>
        </h1>

        <div className={styles['header__left-icons']}>
          <div className={styles['header__icon-wrapper']}>
            <Icons.MapPin className={styles.header__icon} />
          </div>
          <div className={styles['header__icon-wrapper']}>
            <Icons.QuestionMarkCircle className={styles.header__icon} />
            <span className={styles['show_label']}>Hỗ trợ</span>
          </div>
          <div className={styles['header__icon-wrapper']} onClick={() => setShowSignUpForm(true)}>
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
                <Link href={item.href}>{item.title}</Link>
              </div>
            );
          })}
        </div>
      </div>

      <Drawer
        title="Đăng nhập"
        placement="left"
        onClose={() => setShowSignUpForm(false)}
        open={showSignUpForm}
        key="left"
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="account"
            control={control}
            render={({ field, formState: { errors } }) => (
              <div className="mb-3">
                <label>Tài khoản</label>
                <Input {...field} status={errors.account && 'error'} placeholder="Nhập tài khoản" />
                {errors.account && <Text type="danger">{errors.account.message}</Text>}
              </div>
            )}
          />
          <Controller
            name="password"
            control={control}
            render={({ field, formState: { errors } }) => (
              <div className="mb-5">
                <label>Mật khẩu</label>
                <Input {...field} type="password" status={errors.password && 'error'} placeholder="Nhập mật khẩu" />
                {errors.password && <Text type="danger">{errors.password.message}</Text>}
              </div>
            )}
          />

          <Button htmlType="submit" type="primary" className="w-full">
            Đăng nhập
          </Button>
        </form>

        <p className="text-[14px] text-gray-500 text-center mt-6">
          chưa có tài khoản?{' '}
          <Link className="text-blue-500" href={AppPath.Register}>
            Đăng ký ngay
          </Link>
        </p>
      </Drawer>
    </section>
  );
}
