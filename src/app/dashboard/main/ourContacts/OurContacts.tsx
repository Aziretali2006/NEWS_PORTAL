import React from 'react';
import Image from 'next/image';
import { RiMapPinLine } from "react-icons/ri";
import { MdOutlineEmail } from "react-icons/md";

import cls from "./OurContacts.module.scss";

const OurContacts = () => {

  const handleImageClick = () => {
    window.open("https://go.2gis.com/wu7uu", "_blank");
  };

  return (
    <div className={cls.our_contacts}>
      <h2>Наши контакты</h2>
      <div className={cls.content}>
        <div className={cls.content_left}>
          <p>
            Для обращения в наш Фонд просим Вас внимательно ознакомиться с разделом "Обращение"
          </p>
          <b>
            Нажмите на кнопку “Обратиться”, чтобы узнать подробнее об инструкциях.
          </b>
          <button>Обратиться</button>
        </div>
        <div className={cls.content_right}>
          <div className={cls.address}>
            <RiMapPinLine /> 
            <p>720021, Кыргызстан, ул. Ибраимова 96, Бишкек</p>
          </div>
          <div className={cls.email}>
            <MdOutlineEmail />
            <a href="">tirek.org@gmail.com</a>
          </div>
          <div className={cls.icons}>
            <Image
              src={"/icons/instagram.png"}
              width={24}
              height={24}
              alt='instagram.png'
            />
            <Image
              src={"/icons/Facebook_black.png"}
              width={24}
              height={24}
              alt='instagram.png'
            />
            <Image
              src={"/icons/Youtube_black.png"}
              width={24}
              height={24}
              alt='instagram.png'
            />
            <Image
              src={"/icons/twitter.png"}
              width={24}
              height={24}
              alt='instagram.png'
            />
          </div>
          <Image
            src="/image/Asman, бизнес-центр — 2ГИС-1.png"
            alt="Описание картинки"
            width={480}
            height={250}
            onClick={handleImageClick}
            style={{ cursor: 'pointer' , marginTop: "50px"}}
          />
        </div>
      </div>
    </div>
  )
}

export default OurContacts
