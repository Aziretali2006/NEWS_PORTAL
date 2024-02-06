"use client"

import React from 'react';
import SideBar from '../../adminComponents/sideBar/SideBar';
import Header from '../../adminComponents/header/Header';
import AdminTable from '../../adminComponents/adminTable/AdminTable';
import { FiPlus } from 'react-icons/fi';
import { useAppDispatch, useAppSelector } from '@/app/hook/reduxHooks';
import { setAddNews } from '@/app/store/AdminNewsSlice';

import cls from './News.module.scss';

const News = () => {
  const { addNews } = useAppSelector(state => state.AdminNewsSlice);
  const dispatch = useAppDispatch();
  const [isTableVisible, setIsTableVisible] = React.useState(true);

  const handleSubmit = () => {
    dispatch(setAddNews(addNews));
    setIsTableVisible(false);
  }

  return (
    <div className={cls.news}>
      <Header />
      <div className={cls.left_content}>
        <SideBar />
        <div>
          {isTableVisible ? (
            <div className={cls.content}>
              <button onClick={handleSubmit} className={cls.btn}>
                <FiPlus width={20} height={20} /> Добавить
              </button>
              <AdminTable />
            </div>
          ) : (
            <div className={cls.div}>
            helloooo
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default News;