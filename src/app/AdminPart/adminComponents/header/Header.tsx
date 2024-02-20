"use client"

import React from 'react';
import { FaRegUser } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from '@/app/hook/reduxHooks';
import { username } from '@/app/store/AuthSlice';

import cls from "./Header.module.scss";

const Header = () => {
  return (
    <header className={cls.header}>
      <div className={cls.container}>
        <div className={cls.inline}>
          <FaRegUser />
          <p>{username}</p> 
        </div>
        <button>Выйти</button>
      </div>
    </header>
  )
}

export default Header;