import React from 'react';
import Image from 'next/image';
import { DirectionListLeft, DirectionListRight } from '@/app/utils/DirectionList';

import cls from "./DirectionList.module.scss";

const DirectionList = () => {
  return (
    <div>
      <Image 
        src={"/image/ENE_balaga_tirek_tree.png"}
        width={700}
        height={650}
        alt=''
        className={cls.background_img}
      />
      <section className={cls.direction}>
          <h2>Направления деятельности</h2>
          <div className={cls.list}>
            <div>
              {
                DirectionListLeft.map(item => (
                  <div key={item.id} className={cls.direction_content}>
                      <Image
                        src={item.img}
                        width={40}
                        height={35}
                        alt='leaves'
                        className={cls[item.class]}
                      />
                      <div className={cls.theme_text}>
                        <h3>{item.title}</h3>
                        <p>{item.text}</p>
                      </div>
                  </div>
                ))
              }
            </div>
            <div>
              {
                DirectionListRight.map(item => (
                  <div key={item.id} className={cls.direction_content}>
                      <Image
                        src={item.img}
                        width={40}
                        height={35}
                        alt='leaves'
                        className={cls[item.class]}
                      />
                      <div className={cls.theme_text}>
                        <h3>{item.title}</h3>
                        <p>{item.text}</p>
                      </div>
                  </div>
                ))
              }
            </div>
          </div>
        </section>
    </div>
  )
}

export default DirectionList
