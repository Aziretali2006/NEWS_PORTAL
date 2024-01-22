"use client"

import React, { SetStateAction } from 'react';
import Container from '@/app/components/container/Container';
import Header from '@/app/components/header/Header';
import Category from './category/Category';
import Image from 'next/image';
import Footer from '@/app/components/footer/Footer';
import CardLastNews from '../main/ourProjects/CardLastNews/CardLastNews';
import { CardLastNewsObject } from '@/app/utils/LastNewsCardList';

import cls from './projects.module.scss';
import { useAppSelector } from '@/app/hook/reduxHooks';

const Projects = () => {
  const {selectedCategory, selectedId} = useAppSelector(state => state.ProjectSlice);


  return (
    <Container>
      <div className={cls.projects}>
        <Header />
        <div>
          <Category />  
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