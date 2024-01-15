import React from 'react';
import cls from "./AboutUs.module.scss";
import Image from 'next/image';

const AboutUs = () => {
  return (
    <section className={cls.about_us}>
      <section className={cls.about_us_left_content}>
        <div className={cls.left_top_content}>
          <h2>О нас</h2>
          <p>
            Общественный фонд "Эне балага тирек" (ранее ОФ "Умут булагы") работает под инициативой первой леди Кыргызской Республики Айгуль Жапаровой. 
          </p>
        </div>
        <div className={cls.left_bottom_content}>
          <h2>Миссия фонда</h2>
          <p>
            Основная миссия фонда заключается в оказании всесторонней поддержки матерям и детям Кыргызской Республики.
          </p>
        </div>
      </section>
      <section className={cls.about_us_right_content}>
        <div className={cls.right_content_sentence}>
          <Image 
            src={"/image/Vector.png"}
            alt=''
            width={50}
            height={50}
          />
          <p>
            Мы стремимся в первую очередь помогать детям и матерям.  Улучшать их жизни, защищать и развивать их потенциал. Эне-балага тирек – опора для матери и ребенка. 
          </p>
          <b>А. Жапарова</b>
        </div>
        <div>
          <Image 
            src={"/image/Ellipse 15.png"}
            width={250}
            height={250}
            alt='face/image'
          />
        </div>
      </section>
    </section>
  )
}

export default AboutUs;