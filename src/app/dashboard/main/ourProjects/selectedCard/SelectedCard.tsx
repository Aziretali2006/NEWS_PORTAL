import React, { FC } from 'react';
import Image from 'next/image';
import { ICardProps } from '../CardLastNews/CardLastNews';
import { useAppDispatch, useAppSelector } from '@/app/hook/reduxHooks';
import { clearProjectId } from '@/app/store/ProjectSlice';
import { MdArrowBack } from "react-icons/md";

import cls from "./SelectedCard.module.scss";

const SelectedCard: FC<ICardProps> = ({object}) => {
  const {selectedId} = useAppSelector(state => state.ProjectSlice);
  const dispatch = useAppDispatch();

  const handleCloseClick = () => {
    dispatch(clearProjectId());
  };

  return (
    <div className={cls.selected_Card}>
      {selectedId !== null && (
          <div className={cls.selected_card_block}>
            <div className={cls.back_button}>
              <MdArrowBack />
              <button onClick={handleCloseClick}>Назад</button>
            </div>
            <h2>{object[selectedId].title}</h2>
            <Image
              src={object[selectedId].img}
              width={420}
              height={330}
              alt=''
              className={cls.selected_image}
            />
            <p>{object[selectedId].text}</p>
          </div>
        )
      }
    </div>
  )
}

export default SelectedCard;
