import Container from '@/app/components/container/Container';
import React from 'react';
import cls from "./Main.module.scss";
import Image from 'next/image';
import MainTopSlider from '@/app/components/mainTopSlider/MainTopSlider';
import { MainTopSliderList } from '@/app/utils/MainTopSliderLIst';
import AboutUs from './aboutUs/AboutUs';

const Main = () => {
  return (
    <main className={cls.main}>
      <Container>
        <section className={cls.main_screen}>
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
        </section>
        <section>
          <AboutUs />
        </section>
      </Container>
    </main>
  )
}

export default Main;
