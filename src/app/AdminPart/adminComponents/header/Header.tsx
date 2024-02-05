import React from 'react';
import { FaRegUser } from "react-icons/fa";
import cls from "./Header.module.scss";

const Header = () => {
  return (
    <header className={cls.header}>
      <div className={cls.container}>
        <div className={cls.inline}>
          <FaRegUser width={18} height={18}/>
          <p>Admin123</p> 
        </div>
        <button>Выйти</button>
      </div>
    </header>
  )
}

export default Header
