import React from 'react';
import cls from "./ModalImage.module.scss"

const Modal = ({ onClose, imgSrc }: any) => {
  return (
    <div className={cls.modal} onClick={onClose}>
      <div className={cls.modalContent} onClick={(e) => e.stopPropagation()}>
        <img src={imgSrc} alt='' />
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Modal;