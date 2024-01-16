import { ICardLastNews } from '@/app/interface/LastNewsCardListType';
import Image from 'next/image';
import React, { FC } from 'react';
import cls from "../LastNews.module.css";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { FaArrowRightLong } from 'react-icons/fa6';

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
      breakpoint: { max: 3000, min: 1024 },
      items: 3
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
  

  return (
    <section className={cls.card}>
      <div className={cls.row}>
        <Carousel responsive={responsive}>
          {
            object.map(item => (
              <div key={item.id} className={cls.card_block}>
                <Image 
                  src={item.img}
                  width={430}
                  height={330}
                  alt=''
                  className={cls.image}
                />
                <div className={cls.description}>
                  <p>{item.data}</p>
                  <h2>{item.title}</h2>
                  <p>{item.text}</p>
                </div>
                <button>Подробнее</button>
                <div className={cls.icon}>
                  <FaArrowRightLong />
                </div>
              </div>
            ))
          }
          </Carousel>
      </div>
    </section>
  )
}

export default CardLastNews;
