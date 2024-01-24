import React, { FC } from 'react';
import Image from 'next/image';
import Carousel from 'react-multi-carousel';
import SelectedCard from '../selectedCard/SelectedCard';
import ScrollCard from '@/app/components/scrollCard/ScrollCard';
import { ICardLastNews } from '@/app/interface/LastNewsCardListType';
import { useAppDispatch, useAppSelector } from '@/app/hook/reduxHooks';
import {setProjectId } from '@/app/store/ProjectSlice';
import { CardLastNewsObject } from '@/app/utils/LastNewsCardList';
import 'react-multi-carousel/lib/styles.css';

import cls from "./CardLastNews.module.scss";

export interface ICardProps {
  object: ICardLastNews[]
}

const CardLastNews: FC<ICardProps> = ({object}) => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1440 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const dispatch = useAppDispatch();
  const {selectedId , selectedCategory} = useAppSelector(state => state.ProjectSlice)

  const handleButtonClick = (id: number) => {
    dispatch(setProjectId(id));
  };

  return (
    <section className={cls.card_last_news}>
      <div className={cls.row}>
        <div>
          {selectedId !== null ? (
            <div className={cls.inline_block}>
              <SelectedCard object={CardLastNewsObject}/>
              <ScrollCard object={CardLastNewsObject}/>
            </div>
          ) : (
            // Отображение карусели проектов
            <Carousel responsive={responsive}>
              {object.map((item, index) => (
                <div key={item.id} className={cls.card_block}>
                  <Image 
                    src={item.img}
                    width={420}
                    height={330}
                    alt=''
                    className={cls.image}
                  />
                  <div className={cls.description}>
                    <p>{item.data}</p>
                    <h2>{item.title}</h2>
                    {
                      selectedCategory !== null 
                      && <button onClick={() => handleButtonClick(index)}>Подробнее</button>
                    }
                  </div>
                </div>
              ))}
            </Carousel>
          )}
        </div>
      </div>
    </section>
  )
}

export default CardLastNews;
