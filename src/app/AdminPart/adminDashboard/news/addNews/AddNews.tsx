import React, { FC } from 'react';
import cls from "./AddNews.module.scss";
import { FcAbout } from "react-icons/fc";
import { IFile } from '@/app/dashboard/appeal/page';
import {MdDownload } from "react-icons/md";
import { IAddNews, IAddProjects } from '@/app/interface/IAdminType';
import { useAppDispatch } from '@/app/hook/reduxHooks';
import { addNews } from '@/app/store/AdminNewsSlice';
import { SubmitHandler, useForm } from 'react-hook-form';
import { addProjects } from '@/app/store/AdminProjectsSlice';


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

  const dispatch = useAppDispatch();

  const handleAddNews = (data: IAddNews & IAddProjects) => {
    if(page === "news") {
      dispatch(addNews(data))
    } else if (page === "projects") {
      dispatch(addProjects(data))
    } else {
      null
    }
  }

  const {
    register, 
    handleSubmit
  } = useForm<IAddProjects & IAddNews>(
    {mode: "onBlur"}
  )

  return (
    <div className={cls.add_news}>
      <h2>{name}</h2>
        <form onSubmit={handleSubmit(handleAddNews)}>
          <div className={cls.content}>
            <div className={cls.title_content}>
              <div className={cls.inline}>
                <h3>Заголовок</h3>
                <FcAbout width={20} height={20} color='#FE0C0C'/>
              </div>
              <input type="text" {...register("mainInfo")}/>
            </div>
            {
              page === "projects" &&
                (
                  <div className={cls.title_content}>
                    <div className={cls.inline}>
                      <h3>Направлеие</h3>
                      <FcAbout width={20} height={20} color='#FE0C0C'/>
                    </div>
                    <input type="text" placeholder='образование' {...register("education")}/>
                  </div>
                )
            }
            <div className={cls.text_content}>
              <div className={cls.inline}>
                <h3>Текст</h3>
                <FcAbout width={20} height={20} color='#FE0C0C'/>
              </div>
              <textarea {...register("text")}/>
            </div>
            <div className={cls.photo_content}>
              <div className={cls.text}>
                <h3>Фотография</h3>
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
                  {...register("photo")}
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
                <h3>Видео</h3>
                <p>Укажите ссылку на видео</p>
              </div>
              <input type='text' {...register("videoUrl")}/>
            </div>
            <div className={cls.buttons}>
              <button>Сохранить</button>
              <button>Назад</button>
            </div>
          </div>
        </form>
      </div>
  )
}

export default AddNews