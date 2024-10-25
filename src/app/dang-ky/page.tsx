'use client';
import { AppPath, EmailRegex, PasswordRegex } from '@/constants';
import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { Button, Input, Typography } from 'antd';
import toast from 'react-hot-toast';
import { authApi } from '@/api/auth-api';
import { useRouter } from 'next/navigation';

const { Text } = Typography;

interface IRegisterForm {
  email: string;
  account: string;
  password: string;
  phone: string;
}

export default function Register() {
  const router = useRouter();
  const schema = yup.object().shape({
    email: yup.string().matches(EmailRegex, 'Email không hợp lệ').required(),
    account: yup.string().required(),
    password: yup
      .string()
      .matches(PasswordRegex, 'Mật khẩu chứa ít nhất 8 kí tự, 1 in hoa, 1 in thường, 1 chữ số và 1 kí tự đặc biệt.')
      .required(),
    phone: yup.string().required(),
  });

  const { control, handleSubmit } = useForm<IRegisterForm>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (values: IRegisterForm) => {
    try {
      await authApi.register(values);
      toast.success('Đăng ký tài khoản thành công.');
      router.push(AppPath.Home);
    } catch (error) {
      console.log('error: ', error);
      toast.error('An error occurred during register account.');
    }
  };

  return (
    <div className="pt-[40px] pb-[100px] px-4 sm:max-w-[500px] sm:mx-auto">
      <h1 className="text-[20px] text-center font-bold mb-8">Đăng ký</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Controller
          name="email"
          control={control}
          render={({ field, formState: { errors } }) => (
            <div>
              <label>Email</label>
              <Input {...field} status={errors.email && 'error'} placeholder="Nhập email" />
              {errors.email && <Text type="danger">{errors.email.message}</Text>}
            </div>
          )}
        />
        <Controller
          name="phone"
          control={control}
          render={({ field, formState: { errors } }) => (
            <div>
              <label>Số điện thoại</label>
              <Input {...field} status={errors.phone && 'error'} placeholder="Nhập số điện thoại" />
              {errors.phone && <Text type="danger">{errors.phone.message}</Text>}
            </div>
          )}
        />
        <Controller
          name="account"
          control={control}
          render={({ field, formState: { errors } }) => (
            <div>
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

        <Button htmlType="submit" type="primary" className="w-full sm: col-span-2">
          Đăng ký
        </Button>
      </form>
    </div>
  );
}
