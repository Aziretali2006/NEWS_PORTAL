"use client"

import React from 'react';
import Container from '@/app/components/container/Container';
import Header from '@/app/components/header/Header';
import { CategoryList } from '@/app/utils/CategoryList';

import cls from './projects.module.scss';
import Category from './category/Category';
import Image from 'next/image';
import Footer from '@/app/components/footer/Footer';

const Projects = () => {

  return (
    <Container>
      <div className={cls.projects}>
        <Header />
        <div>
          <Category />
        </div>
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
            />
          </div>
          <div>

          </div>
        </div>
        <Footer />
      </div>
    </Container>
  );
};

export default Projects;