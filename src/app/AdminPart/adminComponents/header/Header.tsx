"use client"

import React from 'react';
import { FaRegUser } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from '@/app/hook/reduxHooks';
import { Logout, accessToken, username } from '@/app/store/AuthSlice';
import { useRouter } from 'next/navigation';

import cls from "./Header.module.scss";

const Header = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const logout = () =>{
    dispatch(Logout());
    localStorage.removeItem('accessToken');
    router.push('/')
  }


  return (
    <header className={cls.header}>
      <div className={cls.container}>
        <div className={cls.inline}>
          <FaRegUser />
          <p>{username}</p> 
        </div>
        <button onClick={logout}>Выйти</button>
      </div>
    </header>
  )
}

export default Header;