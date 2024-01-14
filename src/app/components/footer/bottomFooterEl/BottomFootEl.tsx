import React from 'react'
import Container from '../../container/Container';
import cls from "../footerElement/FooterElement.module.scss";
import Image from 'next/image';

const BottomFootEl = () => {
  return (
    <Container>
      <div className={cls.bottom_el}>
        <div className={cls.left_bottom_content}>
          <p>Terms</p>
          <p>Privacy</p>
          <p>Licens</p>
        </div>
        <p>Copyright ©2022 Эне-балага тирек | This web-site is made by Fortylines.io</p>
        <div className={cls.right_bottom_content}>
          <p>Следите за нами</p>
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
        </div>
      </div>
    </Container>
  )
}

export default BottomFootEl
