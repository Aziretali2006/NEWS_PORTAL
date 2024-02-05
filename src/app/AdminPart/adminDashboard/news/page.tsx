import React from 'react'
import SideBar from '../../adminComponents/sideBar/SideBar'
import Header from '../../adminComponents/header/Header';
import cls from "./News.module.scss";

const News = () => {

  return (
    <div className={cls.news}>
      <Header />
      <div>
        <SideBar />
      </div>
    </div>
  )
}

export default News