import Container from '@/app/components/container/Container';
import Header from '@/app/components/header/Header';
import MainTopSlider from '@/app/components/mainTopSlider/MainTopSlider';
import { NewsSliderListObject } from '@/app/utils/NewsSliderList';
import React from 'react'
import cls from "./news.module.scss";
import NewsTopSlider from '@/app/components/newsTopSlider/NewsTopSlider';

const News = () => {
  return (
    <Container>
      <div className={cls.news}>
        <Header />
        <h2>Новости</h2>
        <div className={cls.slider}>
          <NewsTopSlider item={NewsSliderListObject}/>
        </div>
      </div>
    </Container>
  )
}

export default News;
