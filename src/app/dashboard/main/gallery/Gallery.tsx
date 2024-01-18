import React from 'react';
import Image from 'next/image';

import cls from "./Gallery.module.scss";

const Gallery = () => {
  return (
    <div className={cls.gallery}>
      <h2>Фотогалерея</h2>
      <div className={cls.gallery_content}>
        <div className={cls.left_photos}>
          <Image 
            src={"/image/Rectangle 236.png"}
            width={400}
            height={630}
            alt=''
            className={cls.first_image}
          />
          <Image 
            src={"/image/Rectangle 237.png"}
            width={500}
            height={630}
            alt=''
            className={cls.second_image}
          />
        </div>
        <div className={cls.right_photos}>
          <Image 
            src={"/image/Rectangle 13.png"}
            width={750}
            height={310}
            alt=''
            className={cls.third_image}
          />
          <Image 
            src={"/image/Rectangle 227.png"}
            width={750}
            height={310}
            alt=''
            className={cls.fourth_image}
          />
        </div>
      </div>
    </div>
  )
}

export default Gallery;
