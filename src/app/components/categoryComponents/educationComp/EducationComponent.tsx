import Image from 'next/image';
import React from 'react';
import cls from "./Education.module.scss";

const EducationComponent = () => {
  return (
    <div className={cls.education}>
      <Image 
        src={"/image/Rectangle 7.png"}
        width={1000}
        height={600}
        alt=''
        className={cls.image}
      />
      <div className={cls.education_content}>
        <h2>Помощь в получении образования для детей-сирот</h2>
        <p>
          Со стороны наших спонсоров 20 нуждающимся семьям, которые состоя на учете нашего фонда, была оказана помощь в виде продуктовых пакетов. Выражаем особую благодарность нашим спонсорам за доброту, отзывчивость и неравнодушие!
        </p>
      </div>
    </div>
  )
}

export default EducationComponent;
