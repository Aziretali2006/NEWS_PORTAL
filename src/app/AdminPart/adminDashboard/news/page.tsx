"use client"

import React from 'react';
import SideBar from '../../adminComponents/sideBar/SideBar';
import Header from '../../adminComponents/header/Header';
import AdminTable from '../../adminComponents/adminTable/AdminTable';
import { FiPlus } from 'react-icons/fi';
import { useAppDispatch, useAppSelector } from '@/app/hook/reduxHooks';
import { setAddNews } from '@/app/store/AdminNewsSlice';

import cls from './News.module.scss';
import AddNews from './addNews/AddNews';

const News = () => {
  const { addNews } = useAppSelector(state => state.AdminNewsSlice);
  const dispatch = useAppDispatch();

  const handleSubmit = () => {
    dispatch(setAddNews());
    localStorage.setItem('addNews', JSON.stringify(!addNews));
  }

  const columns: string[] = ["N", "Заголовок", "Текст", "Фотография", "Видео"];
  const rows: string[][] = [
    ["1", "CОСТОЯЛОСЬ ЕЖЕГОДНОЕ СОБРАНИЕ ОБЩЕСТВЕННОГО БЛАГОТВОРИТЕЛЬНОГО ФОНДА ", "Text 1", "Photo 1", "Video 1"],
    ["2", "Title 2", "Мы помогаем матерям-одиночкам, детям-сиротам и иным уязвимым группам населения по всему Кыргызстану.  Семь приоритетных направлений нашей деятельности  «Отмеченные лауреаты - гордость нашего народа, которые служат маяком для всех людей, вдохновляя их, и в конечном счёте", "Photo 2", "https://www.youtube.com/watch?v=aXD7h91Ek2A"],
    ["3", "Title 3", "Text 3", "Photo 3", "Video 3"],
    ["4", "Title 4", "Text 4", "Photo4", "Video 4"],
    ["5", "Title 5", "Text 5", "Photo 5", "Video 5"],
    
  ];


  return (
    <div className={cls.news}>
      <Header />
      <div className={cls.left_content}>
        <SideBar />
        <div>
          {addNews ? (
            <div className={cls.content}>
              <button onClick={handleSubmit} className={cls.btn}>
                <FiPlus width={20} height={20} /> Добавить
              </button>
              <AdminTable columns={columns} rows={rows}/>
            </div>
          ) : (
            <div className={cls.div}>
              <AddNews page="news" name='Новости'/>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default News;