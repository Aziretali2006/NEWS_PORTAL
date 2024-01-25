'use client'

import Image from 'next/image';
import React from 'react';
import cls from "./NewsTopSlider.module.scss";
import CardLastNews from '@/app/dashboard/main/ourProjects/CardLastNews/CardLastNews';
import { CardLastNewsObject } from '@/app/utils/LastNewsCardList';
import SelectedCard from '@/app/dashboard/main/ourProjects/selectedCard/SelectedCard';
import { useAppSelector } from '@/app/hook/reduxHooks';
import ScrollCard from '../scrollCard/ScrollCard';

interface MainTopSliderProps {
  item: Array<{
    id: number;
    img: string;
    text: string;
    title: string;
    data: string;
    name: string;
  }>;
}

const NewsTopSlider: React.FC<MainTopSliderProps> = ({ item }) => {
  const [activeCardId, setActiveCardId] = React.useState<number | null>(1);
  const [cardOrder, setCardOrder] = React.useState(new Map<number, number>());
  const {selectedId} = useAppSelector(state => state.ProjectSlice);

  React.useEffect(() => {
    const order: any = item.map((_, index) => index);
    setCardOrder(order);
  }, [item]);

  const goToSlide = (id: number) => {
    setActiveCardId(activeCardId === id ? null : id);
  };

  return (
    <div className={cls.sliderContainer}>
      {item.map((i) => (
        <div key={i.id} >
          <div className={cls.inline_content}>
            <Image
              src={i.img}
              width={1100}
              height={600}
              alt='main/img'
              className={`${cls.slide} ${i.id === activeCardId ? cls.active : ''}`}
            />
            <div className={`${cls.description} ${i.id === activeCardId ? cls.active : ''}`}>
              <h4>{i.data}</h4>
              <h3>{i.title}</h3>
              <p>{i.text}</p>
              <div className={cls.dotsContainer}>
                {item.map((i) => (
                  <div
                    key={i.id}
                    className={`${cls.dot} ${i.id === activeCardId ? cls.activeDot : ''}`}
                    onClick={() => goToSlide(i.id)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className={cls.inline}>
        <ul>
          <h2>Последние новости</h2>
          {item.map((i) => (
            <div className={cls.item_content}>
              <li
                className={i.id === activeCardId ? cls.active_li : cls.li}
                onClick={() => goToSlide(i.id)}
                key={i.id}
              >
                {i.name}
                <p>{i.data}</p>
              </li>
              <div className={cls.line}/>
            </div>
          ))}
        </ul>
        <div>
          <ScrollCard object={CardLastNewsObject}/>
        </div>
      </div>
    </div>
  );
};

export default NewsTopSlider;