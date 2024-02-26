"use client"

import React from 'react';
import { FaRegUser } from "react-icons/fa";
import { CiLock } from 'react-icons/ci';
import { useAppDispatch } from '@/app/hook/reduxHooks';
import { GetUsers, PostRegister } from '@/app/store/AuthSlice';
import { IRegister } from '@/app/interface/IAuthType';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { MdOutlineEmail } from 'react-icons/md';

import cls from "./Register.module.scss";

const Register = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [error , setError] = React.useState<string | null>(null)

  const {
    register,
    handleSubmit,
  } = useForm<IRegister>({
    mode: "onBlur",  
  });

  const handleSubmitButton = async (data: IRegister) => {
    if(data && data.email && data.password && data.username) {
      await dispatch(PostRegister(data))
      router.push("/AdminPart/login")
    } else {
      setError("Заполните все поля!")
    }
  }

  React.useEffect(() => {
    dispatch(GetUsers())
  }, [])

  return (
    <div className={cls.login}>
      <form onSubmit={handleSubmit(handleSubmitButton)}>
        <div className={cls.login_email}>
          <MdOutlineEmail />
          <input type='email' placeholder='Email пользователя' {...register("email")}/>
        </div>
        <div className={cls.login_name}>
          <FaRegUser />
          <input type='text' placeholder='Имя пользователя' {...register("username")}/>
        </div>
        <div className={cls.login_password}>
          <CiLock />
          <input type='password' placeholder='Пароль' {...register("password")}/>
        </div>
        {
          error && <p className={cls.error}>{error}</p>
        }
        <div className={cls.login_btn}>
          <button>Войти</button>
          <a href="">Забыли пароль?</a>
        </div>
      </form>
    </div>
  )
};

export default Register;
