import React, { FC } from 'react';
import cls from "./BurgerMenu.module.scss";

interface IBurgerMenuProps {
  items: { id: number; title: string, to: string }[];
}

const BurgerMenu: FC<IBurgerMenuProps> = ({ items }) => {
  return (
    <section className={cls.section}>
      
    </section>
  )
}

export default BurgerMenu;
