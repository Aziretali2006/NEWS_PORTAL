import React, { FC } from 'react';
import Image from 'next/image';
import { ICardProps } from '@/app/dashboard/main/ourProjects/CardLastNews/CardLastNews';
import { useAppDispatch } from '@/app/hook/reduxHooks';
import { setProjectId } from '@/app/store/ProjectSlice';

import cls from "./ScrollCard.module.scss";

const ScrollCard: FC<ICardProps> = ({object}) => {
  const dispatch = useAppDispatch();

  const handleButtonClick = (id: number) => {
    dispatch(setProjectId(id));
  };

  return (
    <div className={cls.card}>
      {
        object.map((item, index) => (
          <div key={item.id} className={cls.card_content}>
            <Image
              src={item.img}
              width={400}
              height={300}
              alt=''
              className={cls.image}
            />
            <div>
              <h2>{item.title}</h2>
              <p>{item.text}</p>
            </div>
            <button onClick={() => handleButtonClick(index)}>Подробнее</button>
          </div>
        ))
      }
    </div>
  )
}

export default ScrollCard;