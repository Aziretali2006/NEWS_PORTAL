import Image from 'next/image';
import React from 'react';
import cls from "./MainSlider.module.scss";
import classnames from 'classnames';

interface MainTopSliderProps {
  item: Array<{
    id: number;
    img: string;
  }>;
}

const MainTopSlider: React.FC<MainTopSliderProps> = ({ item }) => {
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
      {item.map((item, index) => (
        <div
          key={index}
        >
          <Image
            src={item.img}
            key={index}
            width={800}
            height={725}
            alt='main/img'
            className={`${cls.slide} ${index === currentIndex ? cls.active : ''}` }
          />
        </div>
      ))}
      
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
  );
};

export default MainTopSlider;
