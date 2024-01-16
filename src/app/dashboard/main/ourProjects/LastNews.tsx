import React from 'react';
import CardLastNews from './CardLastNews/CardLastNews';
import { CardLastNewsObject } from '@/app/utils/LastNewsCardList';

import cls from "./LastNews.module.css";
import Image from 'next/image';

const LastNews = () => {

  return (
    <section>
      <div className={cls.lastNews}>
        <h2 className={cls.title}>Последние новости</h2>
        <p className={cls.text}>Читайте последние новости нашего фонда</p>
      </div>
      <div>
        <CardLastNews object={CardLastNewsObject}/>
      </div>
      <Image 
        src={"/image/Ellipse 7.png"}
        width={30}
        height={30} 
        alt=''
        className={cls.icons}
      />
    </section>
  )
}

export default LastNews;
