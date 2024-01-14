import React from 'react';
import Image from 'next/image';
import FooterElement from './footerElement/FooterElement';

import cls from "./Footer.module.scss";
import Container from '../container/Container';
import BottomFootEl from './bottomFooterEl/BottomFootEl';

const Footer = () => {
  return (
    <footer className={cls.footer}>
      <Container>
        <div className={cls.footer_top}>
          <div className={cls.logo_footer}>
            <Image
              alt='ENE_balaga_tirek_RU_final' 
              src={"/image/ENE_balaga_tirek_RU_final.png"} 
              width={184} 
              height={67}
            />
          </div>
          <section className={cls.footer_content}>
            <div className={cls.footer_el_first}>
              <FooterElement 
                title='Быстрые ссылки'
                first_li='Проекты'
                second_li='Новости'
                third_li='Обращение'
              />
            </div>
            <div>
              <FooterElement 
                  title='Проекты'
                  first_li='Образование'
                  second_li='Здравоохранение'
                  third_li='Правовая защита'
                />
            </div>
            <div>
              <FooterElement 
                  title='Контакты'
                  first_li='720031, Кыргызстан'
                  second_li='ул. Ибраимова 96, Бишкек'
                  third_li='tirek.org@gmail.com '
                />
            </div>
            <div className={cls.subscribe}>
              <h2>Подписаться на материал</h2>
              <div className={cls.line}/>
              <div className={cls.inline_content}>
                <input type="email" placeholder='Электронная почта'/>
                <button>Подписаться</button>
              </div>
            </div>
          </section>
        </div>
      </Container>
      <div className={cls.bottom_line}/>
      <BottomFootEl />
    </footer>
  )
}

export default Footer;