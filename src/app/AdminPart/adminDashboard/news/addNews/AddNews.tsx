import React, { FC } from 'react';
import cls from "./AddNews.module.scss";
import { FcAbout } from "react-icons/fc";
import { IFile } from '@/app/dashboard/appeal/page';
import {MdDownload } from "react-icons/md";


interface IProps {
  name: string, 
  page: string | boolean
}

const AddNews: FC<IProps> = ({name , page}) => {

  const [selectedFile, setSelectedFile] = React.useState<IFile | null>(null);
  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile({ file });
    }
  };

  return (
    <div className={cls.add_news}>
      <h2>{name}</h2>
      <div className={cls.content}>
        <div className={cls.title_content}>
          <div className={cls.inline}>
            <h2>Заголовок</h2>
            <FcAbout width={20} height={20} color='#FE0C0C'/>
          </div>
          <input type="text" />
        </div>
        {
          page === "projects" &&
            (
              <div className={cls.title_content}>
                <div className={cls.inline}>
                  <h2>Направлеие</h2>
                  <FcAbout width={20} height={20} color='#FE0C0C'/>
                </div>
                <input type="text" placeholder='образование'/>
              </div>
            )
        }
        <div className={cls.text_content}>
          <div className={cls.inline}>
            <h2>Текст</h2>
            <FcAbout width={20} height={20} color='#FE0C0C'/>
          </div>
          <textarea />
        </div>
        <div className={cls.photo_content}>
          <div className={cls.text}>
            <h2>Фотография</h2>
            <p>можете выбрать несколько фотографий</p>
          </div>
          <div className={cls.file}>
            <label htmlFor="file">
              {selectedFile ? (
                <div className={cls.inline_block}>
                  <div>
                    <MdDownload />
                    <p>Загрузить файл</p>
                  </div>
                  <p className={cls.have_file}>{selectedFile.file.name}</p>
                </div>
              ) : (
                <div className={cls.inline_block}>
                  <div>
                    <MdDownload />
                    <p>Загрузить файл</p>
                  </div>
                  <b>Файл не выбран</b>
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
          </div>
        </div>
        <div className={cls.video_content}>
          <div className={cls.text}>
            <h2>Видео</h2>
            <p>Укажите ссылку на видео</p>
          </div>
          <input type='text'/>
        </div>
        <div className={cls.buttons}>
          <button>Сохранить</button>
          <button>Назад</button>
        </div>
      </div>
    </div>
  )
}

export default AddNews
