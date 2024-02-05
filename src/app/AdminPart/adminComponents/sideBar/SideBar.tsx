"use client"

import React from 'react';
import cls from "./SideBar.module.scss";
import { SideBarElement } from '../../adminUtils/SideBarElement';

const SideBar = () => {
  return (
    <div className={cls.sidebar}>
      <ul>
        {
          SideBarElement.map(item => (
            <li key={item.id}>
              <a className={window.location.pathname === item.path ? cls.active : ''} href={item.path}>{item.data}</a>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default SideBar
