"use client"

import React from 'react';
import Container from '@/app/components/container/Container';
import Header from '@/app/components/header/Header';
import Image from 'next/image';
import Modal from './modalImage/ModalImage';
import Footer from '@/app/components/footer/Footer';
import { PhotoGalleryList } from '@/app/utils/PhotoGalleryList';

import cls from "./PhotoGallery.module.scss";

const PhotoGalley = () => {
  const [selectedImg, setSelectedImg] = React.useState<string | null>(null);

  const openModal = (imgSrc: string) => {
    setSelectedImg(imgSrc);
  };

  const closeModal = () => {
    setSelectedImg(null);
  };
  return (
    <section>
      <Container>
        <div className={cls.photo_gallery}>
          <Header />
          <h2>Фотогалерея</h2>
          <div className={cls.photo_content}>
            {
              PhotoGalleryList.map(item => (
                <div className={cls.item_photo} onClick={() => openModal(item.img)}>
                  <Image 
                    key={item.id}
                    width={400}
                    height={320}
                    src={item.img}
                    alt=''
                    className={cls.img}
                  />
                </div>
              ))
            }
          </div>
        </div>
        {selectedImg && <Modal onClose={closeModal} imgSrc={selectedImg} />}
      </Container>
      <Footer />
    </section>
  )
}

export default PhotoGalley;