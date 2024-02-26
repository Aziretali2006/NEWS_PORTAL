"use client"

import React from 'react';
import Container from '@/app/components/container/Container';
import Header from '@/app/components/header/Header';
import Footer from '@/app/components/footer/Footer';
import { AppealAttentionList, AppealListObject } from '@/app/utils/AppealList';
import { RiArrowRightSFill } from "react-icons/ri";
import { MdErrorOutline , MdDownload } from "react-icons/md";
import { useForm } from 'react-hook-form';

import cls from "./Appeal.module.scss";
import { IAddInfo } from '@/app/interface/IAdminType';
import { AddInfo } from '@/app/store/ClientAddInfo';
import { useAppDispatch } from '@/app/hook/reduxHooks';

export interface IFile {
  file: File,
}

const Appeal = () => {
  const [selectedFile, setSelectedFile] = React.useState<IFile | null>(null);
  const inputRef = React.useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile({ file });
    }
  };

  const {
    register, 
    handleSubmit, 
  } = useForm<IAddInfo>({
    mode: "onBlur"
  });

  const handleInfo = async (info: IAddInfo) => {
    await dispatch(AddInfo(info));
  }

  return (
    <div>
      <Container>
        <div className={cls.appeal}>
          <Header />
          <div className={cls.appeal_content}>
            <h2>Обращение</h2>
            <div className={cls.inline_content}>
              <div className={cls.appeal_top_content}>
                <h3>Уважаемый заявитель!</h3>
                <p className={cls.first_text}>
                  Обращения в общественный фонд “Эне-балага тирек” принимаются в электронном формате.
                </p>
                <p className={cls.second_text}> 
                  Просим Вас внимательно ознакомиться с правилами оформления электронных обращений в наш фонд для рассмотрения.
                </p>
              </div>
              <div className={cls.appeal_middle_content}>
                <h3>Электронные обращения должны содержать: </h3>
                <ul>
                  {
                    AppealListObject.map(item => (
                      <li>
                        <RiArrowRightSFill />
                        {item.text}
                      </li>
                    ))
                  }
                </ul>
              </div>
              <div className={cls.appeal_last_content}>
                <h3><span className={cls.colored}>Внимание!</span> Обращения не подлежат рассмотрению, если:</h3>
                <ul>
                  {
                    AppealAttentionList.map(item => (
                      <li>
                        <MdErrorOutline />
                        {item.text}
                      </li>
                    ))
                  }
                </ul>
              </div>
            </div>
            <div className={cls.form_content}>
              <form onSubmit={handleSubmit(handleInfo)} className={cls.form}>
                <div className={cls.form_box}>
                  <div className={cls.left_form_content}>
                    <div className={cls.input_container}>
                      <input className={cls.input_field} {...register("username")} type="text" id="username" placeholder=" " />
                      <label className={cls.label} htmlFor="username">ФИО</label>
                    </div>
                    <div className={cls.input_container}>
                      <input className={cls.input_field} {...register("phoneNumber")} type='text' placeholder=''/>
                      <label className={cls.label} htmlFor="username">Номер телефона</label>
                    </div>
                    <div className={cls.input_container} >
                      <input className={cls.input_field} {...register("email")} type='email' placeholder=''/>
                      <label className={cls.label} htmlFor="username">Электронная почта</label>
                    </div>
                  </div>
                  <div className={cls.right_form_content}>
                    <div>
                      <textarea className={cls.textarea} {...register("message")} placeholder='Напишите сообщение'/>
                    </div>
                    <div>
                      <label htmlFor="file">
                        {selectedFile ? (
                          <p className={cls.have_file}>{selectedFile.file.name}</p>
                        ) : (
                          <div className={cls.inline_block}>
                            <MdDownload />
                            <p>Загрузить файл</p>
                          </div>
                        )}
                      </label>
                      <input
                        type="file"
                        ref={inputRef}
                        onChange={handleFileChange}
                        id="file"
                        style={{ display: "none" }}
                        />
                      <button>Отправить</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className={cls.text_content}>
              <p>Электронные обращения могут быть отправлены в общественный фонд “Эне балага тирек” по электронной почте <span><a href="">tirek.inbox@gmail.com.</a></span> </p>
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  )
}

export default Appeal;