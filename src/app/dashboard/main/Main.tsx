"use client"

import React from 'react';
import Container from '@/app/components/container/Container';
import Image from 'next/image';
import MainTopSlider from '@/app/components/mainTopSlider/MainTopSlider';
import AboutUs from './aboutUs/AboutUs';
import DirectionList from './directionList/DirectionList';
import LastNews from './ourProjects/LastNews';
import Gallery from './gallery/Gallery';
import { MainTopSliderList } from '@/app/utils/MainTopSliderLIst';

import cls from "./Main.module.scss";
import OurContacts from './ourContacts/OurContacts';

const Main = () => {

  return (
    <main className={cls.main}>
      <Container>
        <div className={cls.main_screen}>
          <div className={cls.main_left_content}>
            <h2>
              Эне 
              <span>
                <Image 
                  src={"/image/ENE_balaga_tirek_RU_final.png"}
                  width={90}
                  height={90}
                  alt='leaves/img'
                />
              </span>
              балага тирек
            </h2>
            <p>Помощь матерям-одиночкам и детям-сиротам  по всему Кыргызстану</p>
            <button>Обратиться</button>
          </div>
          <div className={cls.main_right_content}>
            <MainTopSlider item={MainTopSliderList}/>
          </div>
        </div>
        <div>
          <AboutUs />
        </div>
        <div>
          <DirectionList />
        </div>
        <div>
          <LastNews />
        </div>
        <div>
          <Gallery />
        </div>
        <div className={cls.contacts}>
          <OurContacts />
        </div>
      </Container>
    </main>
  )
}

export default Main;
