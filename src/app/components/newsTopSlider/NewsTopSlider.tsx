"use client"

import Image from 'next/image';
import React from 'react';
import cls from "./NewsTopSlider.module.scss";

interface MainTopSliderProps {
  item: Array<{
    id: number;
    img: string;
    text: string;
    title: string;
    data:string ;
  }>;
}

const NewsTopSlider: React.FC<MainTopSliderProps> = ({ item }) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const goToSlide = (index: any) => {
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % item.length);
  };

  React.useEffect(() => {
    const intervalId = setInterval(nextSlide, 3000);

    return () => clearInterval(intervalId);
  }, [currentIndex, item]);


  return (
    <div className={cls.sliderContainer}>
      {item.map((i, index) => (
        <div
          key={index}
          className={cls.inline_content}
        >
          <Image
            src={i.img}
            key={index}
            width={1100}
            height={600}
            alt='main/img'
            className={`${cls.slide} ${index === currentIndex ? cls.active : ''}` }
          />
          <div key={index} className={`${cls.description} ${index === currentIndex ? cls.active : ''}`}>
            <h4>{i.data}</h4>
            <h3>{i.title}</h3>
            <p>{i.text}</p>
            <div className={cls.dotsContainer}>
              {item.map((_, index) => (
                <div
                  key={index}
                  className={`${cls.dot} ${index === currentIndex ? cls.activeDot : ''}`}
                  onClick={() => goToSlide(index)}
                />
              ))}
            </div>
          </div>
        </div>
      ))}
      
    </div>
  );
};

export default NewsTopSlider;
