"use client";

import React from 'react'
import Header from '../../adminComponents/header/Header';
import cls from "./Gallery.module.scss";
import SideBar from '../../adminComponents/sideBar/SideBar';
import { useAppDispatch, useAppSelector } from '@/app/hook/reduxHooks';
import { FiPlus } from 'react-icons/fi';
import { setAddNews } from '@/app/store/AdminNewsSlice';
import AdminTable from '../../adminComponents/adminTable/AdminTable';
import AddNews from '../news/addNews/AddNews';

const AdminGallery = () => {
  const { addNews } = useAppSelector(state => state.AdminNewsSlice);
  const dispatch = useAppDispatch();

  const columns: string[] = ["N","Название", "Фотография"];
  const rows: string[][] = [
    ["1","Название1", "Title 1", ],
    ["2","Название11", "Title 2", ],
    ["3","Название221", "Title 3",],
    ["4","Направле555", "Title 4",],
    ["5","Направлеулкауклоаук", "Title 4"],
  ];

  const handleSubmit = () => {
    dispatch(setAddNews());
    localStorage.setItem('addNews', JSON.stringify(!addNews));
  }

  return (
    <div className={cls.gallery}>
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
            <AddNews page="gallery" name='Фотогалерея'/>
          </div>
        )}
      </div>
    </div>
  </div>
  )
}

export default AdminGallery;
