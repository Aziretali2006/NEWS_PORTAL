import React from 'react';
import cls from "./Burger.module.scss";

const Burger = () => {
  return (
    <div className={cls.burger_content}>
      <div className={cls.burger}>
        <nav>
          <div className={cls.burger_btn}>
            <span />
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Burger;
