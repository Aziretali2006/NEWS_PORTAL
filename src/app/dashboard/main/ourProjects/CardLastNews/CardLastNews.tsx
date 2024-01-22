import React, { FC } from 'react';
import Image from 'next/image';
import Carousel from 'react-multi-carousel';
import { ICardLastNews } from '@/app/interface/LastNewsCardListType';
import { FaArrowRightLong } from 'react-icons/fa6';

import 'react-multi-carousel/lib/styles.css';
import cls from "../LastNews.module.css";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAppDispatch, useAppSelector } from '@/app/hook/reduxHooks';
import { clearProjectId, setProjectId } from '@/app/store/ProjectSlice';

interface ICardProps {
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
  const {selectedId} = useAppSelector(state => state.ProjectSlice)

  const handleButtonClick = (id: number) => {
    dispatch(setProjectId(id));
  };

  const handleCloseClick = () => {
    dispatch(clearProjectId());
  };

  return (
    <section className={cls.card}>
      <div className={cls.row}>
        <div>
          {selectedId !== null ? (
            <div className={cls.card_block}>
              {/* Отображение выбранного проекта */}
              <Image 
                src={object[selectedId].img}
                width={420}
                height={330}
                alt=''
                className={cls.image}
              />
              <div className={cls.description}>
                <p>{object[selectedId].data}</p>
                <h2>{object[selectedId].title}</h2>
                <button onClick={handleCloseClick}>Закрыть</button>
              </div>
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
                    <button onClick={() => handleButtonClick(index)}>Подробнее</button>
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
