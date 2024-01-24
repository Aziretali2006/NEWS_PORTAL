import { IHeaderList } from "../interface/HeaderType";

export const HeaderList: IHeaderList[] = [
  {
    id:1, 
    title: "Главная",
    to:'/'
  },
  {
    id:2, 
    title: "Новости",
    to: "/dashboard/news"
  },
  {
    id:3, 
    title: "Проект",
    to: "/dashboard/projects"
  },
  {
    id:4, 
    title: "Обращение",
    to: "/dashboard/appeal",
  },
  {
    id:5, 
    title: "Фотогалерея",
    to: "/dashboard/photoGallery",
  },
  {
    id:6, 
    title: "Контакты",
    to: "/dashboard/contacts"
  },
]