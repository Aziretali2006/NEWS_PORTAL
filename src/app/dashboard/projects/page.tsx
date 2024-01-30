"use client"

import React, { SetStateAction } from 'react';
import Container from '@/app/components/container/Container';
import Header from '@/app/components/header/Header';
import Category from './category/Category';
import Image from 'next/image';
import Footer from '@/app/components/footer/Footer';
import CardLastNews from '../main/ourProjects/CardLastNews/CardLastNews';
import EducationComponent from '@/app/components/categoryComponents/educationComp/EducationComponent';
import { CardLastNewsObject } from '@/app/utils/LastNewsCardList';
import { useAppSelector } from '@/app/hook/reduxHooks';

import cls from './projects.module.scss';

const Projects = () => {
  const {selectedCategory, selectedId} = useAppSelector(state => state.ProjectSlice);

  const categoryContent: Record<string, JSX.Element> = {
    'Образование': <EducationComponent />,
    'Здравоохранение': <div><h2>AZIRETALI</h2></div>,
    'Экология': <div><h2>Sharapov</h2></div>,
    'Культура': <div><h2>Культура</h2></div>,
    'Наука': <div><h2>наука</h2></div>,
    'Правовая защита': <div><h2>Правовая защита</h2></div>,
    'Экономическая благосостояние': <div><h2>Экономическая балогосостояние</h2></div>
  };

  return (
    <Container>
      <div className={cls.projects}>
        <Header />
        <div>
          <Category categoryContents={categoryContent} customClass='' customMainClass=""/>  
        </div>
        {
          (!selectedCategory && selectedId === null) && (
            <div>
              <div className={cls.projects_content}>
                <div className={cls.left_content}>
                  <h2>Наши проекты</h2>
                  <p>
                    Учебный центр "ТИРЕК" был создан в 2021 году для расширения экономических возможностей женщин в Кыргызской Республике. В настоящее время центр предлагает бесплатное обучение макияжу, маникюру и педикюру, массажу, наращиванию ресниц, парикмахерскому искусству, шугарингу и депиляции.
                  </p>
                </div>
                <Image 
                  src={"/image/Rectangle 7.png"}
                  width={830}
                  height={530}
                  alt=''
                  className={cls.image}
                />
              </div>
            </div>
          )
        }
        <div>
          <CardLastNews object={CardLastNewsObject}/> 
        </div>
        <Footer />
      </div>
    </Container>
  );
};

export default Projects;