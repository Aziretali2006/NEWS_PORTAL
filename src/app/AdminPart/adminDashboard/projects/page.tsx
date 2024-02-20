"use client"

import React from 'react'
import AdminTable from '../../adminComponents/adminTable/AdminTable';
import Header from '../../adminComponents/header/Header';
import SideBar from '../../adminComponents/sideBar/SideBar';
import AddNews from '../news/addNews/AddNews';
import { useAppDispatch, useAppSelector } from '@/app/hook/reduxHooks';
import { FiPlus } from 'react-icons/fi';
import { setAddNews } from '@/app/store/AdminNewsSlice';

import cls from "./Projects.module.scss";
import { accessToken } from '@/app/store/AuthSlice';

const Projects = () => {
  const { addNews } = useAppSelector(state => state.AdminNewsSlice);
  const dispatch = useAppDispatch();

  const columns: string[] = ["N","Направлеие", "Заголовок", "Текст", "Фотография", "Видео"];
  const rows: string[][] = [
    ["1","Направлени1", "Title 1", "Text 1", "Photo 1", "Video 1" ],
    ["2","Направлени1", "Title 2", "Text 2", "Photo 2", "Video 3"],
    ["3","Направлени1", "Title 3", "Text 3", "Photo 3", "Video 3"],
    ["4","Направлени1", "Title 4", "Text 4", "Photo4", "Video 4"],
    ["5","Направлени1", "Title 5", "Text 5", "Photo 5", "Video 5"],
    
  ];

  const handleSubmit = () => {
    dispatch(setAddNews());
    localStorage.setItem('addNews', JSON.stringify(!addNews));
  }

  return (
    <div>
      {
        accessToken ? (
          <div className={cls.projects}>
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
                    <AddNews page="projects" name='Проект'/>
                  </div>
                )}
              </div>
            </div>
          </div>
        ) : (
          <div>He авторизован</div>
        )
      }

    </div>
  )
}

export default Projects
