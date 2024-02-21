import React from 'react';
import cls from "./AddGallery.module.scss";
import { FcAbout } from 'react-icons/fc';
import { IFile } from '@/app/dashboard/appeal/page';
import { MdDownload } from 'react-icons/md';
import { IAddPhoto } from '@/app/interface/IAdminType';
import { useAppDispatch } from '@/app/hook/reduxHooks';
import { AddPhoto } from '@/app/store/AdminPhotoSlice';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';

const AddGallery = () => {
  const [selectedFile, setSelectedFile] = React.useState<IFile | null>(null);
  const inputRef = React.useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();
  const router = useRouter();

  const {
    register, 
    handleSubmit
  } = useForm<IAddPhoto>({
    mode: "onBlur"
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile({ file });
    }
  };

  const handleAddGallery = (data: IAddPhoto) => {
    dispatch(AddPhoto(data))
  };

  return (
    <div className={cls.add_gallery}>
      <form onSubmit={handleSubmit(handleAddGallery)}>
        <h2>Фотогалерея</h2>
        <div className={cls.content}>
          <div className={cls.title_content}>
            <h3>Название</h3>
            <input type="text" {...register("data.mainInfo")}/>
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
                {...register("data.photo")}
                type="file"
                ref={inputRef}
                onChange={handleFileChange}
                id="file"
                style={{ display: "none" }}
                />
            </div>
          </div>
          <div className={cls.buttons}>
            <button>Сохранить</button>
          </div>
        </div>
      </form>
      <button className={cls.btn} onClick={() => router.back()}>Назад</button>
    </div>
  )
}

export default AddGallery
