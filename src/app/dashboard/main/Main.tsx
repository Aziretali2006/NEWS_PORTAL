"use client"

import React from 'react';
import Container from '@/app/components/container/Container';
import Image from 'next/image';
import MainTopSlider from '@/app/components/mainTopSlider/MainTopSlider';
import AboutUs from './aboutUs/AboutUs';
import DirectionList from './directionList/DirectionList';
import LastNews from './ourProjects/LastNews';
import Gallery from './gallery/Gallery';
import OurContacts from './ourContacts/OurContacts';
import Category from '../projects/category/Category';
import CardLastNews from './ourProjects/CardLastNews/CardLastNews';
import { MainTopSliderList } from '@/app/utils/MainTopSliderLIst';
import { CardLastNewsObject } from '@/app/utils/LastNewsCardList';

import cls from "./Main.module.scss";

const Main = () => {

  const categoryContent: Record<string, JSX.Element> = {
    'Образование': <div><CardLastNews object={CardLastNewsObject}/></div>,
    'Здравоохранение': <div><h2>AZIRETALI</h2></div>,
    'Экология': <div><h2>Sharapov</h2></div>,
    'Культура': <div><h2>Культура</h2></div>,
    'Наука': <div><h2>наука</h2></div>,
    'Правовая защита': <div><h2>Правовая защита</h2></div>,
    'Экономическая благосостояние': <div><h2>Экономическая балогосостояние</h2></div>
  };

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
          <Category customMainClass={cls.main_custom} customClass={cls.customClass} categoryContents={categoryContent}/>
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
