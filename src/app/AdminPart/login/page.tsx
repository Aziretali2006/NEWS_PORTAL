"use client"

import React from 'react';
import { FaRegUser } from 'react-icons/fa';
import { CiLock } from 'react-icons/ci';
import { useAppDispatch } from '@/app/hook/reduxHooks';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { ILogin } from '@/app/interface/IAuthType';
import { PostLogin } from '@/app/store/AuthSlice';

import cls from "./Login.module.scss";

const Login = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const {
    register,
    handleSubmit,
  } = useForm<ILogin>({
    mode: "onBlur",  
  });

  const handleLogin = async(data: ILogin) => {
    dispatch(PostLogin(data));
    router.push("/AdminPart/adminDashboard/news")
  }

  return (
    <div className={cls.login}>
      <form onSubmit={handleSubmit(handleLogin)}>
        <div className={cls.login_email}>
          <FaRegUser />
          <input type='text' placeholder='Имя пользователя' {...register("username")}/>
        </div>
        <div className={cls.login_password}>
          <CiLock />
          <input type='password' placeholder='Пароль' {...register("password")}/>
        </div>
        <div className={cls.login_btn}>
          <button>Войти</button>
          <div className={cls.inline}>
            <a href="">Забыли пароль?</a>
            <a href='/AdminPart/register'>Зарегистрироваться</a>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Login;
