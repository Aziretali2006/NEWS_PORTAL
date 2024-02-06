import React from 'react'
import { RiEdit2Fill } from "react-icons/ri";
import { MdDeleteOutline } from "react-icons/md";

import cls from "./AdminTable.module.scss";

const AdminTable = () => {


  return (
    <div className={cls.adminTable}>
      <table>
        <tr>
          <th>N</th>
          <th>Заголовок</th>
          <th>Текст</th>
          <th>Фотография</th>
          <th>Видео</th>
          <th>Действие</th>
        </tr>
        <tr>
          <td>1</td>
          <td> CОСТОЯЛОСЬ ЕЖЕГОДНОЕ СОБРАНИЕ ОБЩЕСТВЕННОГО БЛАГОТВОРИТЕЛЬНОГО ФОНДА </td>
          <td className={cls.full_name}> 
            Мы помогаем матерям-одиночкам, детям-сиротам и иным уязвимым группам населения по всему Кыргызстану.  Семь приоритетных направлений нашей деятельности  «Отмеченные лауреаты - гордость нашего народа, которые служат маяком для всех людей, вдохновляя их, и в конечном счёте
          </td>
          <td>tirek.jpg</td>
          <td>https://www.youtube.com/watch?v=aXD7h91Ek2A</td>
          <td>
            <div className={cls.icons}>
              <RiEdit2Fill/>
              <MdDeleteOutline/>
            </div>
          </td>
        </tr>
        <tr>
          <td>2</td>
          <td > CОСТОЯЛОСЬ ЕЖЕГОДНОЕ СОБРАНИЕ ОБЩЕСТВЕННОГО БЛАГОТВОРИТЕЛЬНОГО ФОНДА </td>
          <td className={cls.full_name}> 
            Мы помогаем матерям-одиночкам, детям-сиротам и иным уязвимым группам населения по всему Кыргызстану.  Семь приоритетных направлений нашей деятельности  «Отмеченные лауреаты - гордость нашего народа, которые служат маяком для всех людей, вдохновляя их, и в конечном счёте
          </td>
          <td>tirek.jpg</td>
          <td>https://www.youtube.com/watch?v=aXD7h91Ek2A</td>
          <td>
            <div className={cls.icons}>
              <RiEdit2Fill/>
              <MdDeleteOutline/>
            </div>
          </td>
        </tr>
        <tr>
          <td>3</td>
          <td> CОСТОЯЛОСЬ ЕЖЕГОДНОЕ СОБРАНИЕ ОБЩЕСТВЕННОГО БЛАГОТВОРИТЕЛЬНОГО ФОНДА </td>
          <td className={cls.full_name}> 
            Мы помогаем матерям-одиночкам, детям-сиротам и иным уязвимым группам населения по всему Кыргызстану.  Семь приоритетных направлений нашей деятельности  «Отмеченные лауреаты - гордость нашего народа, которые служат маяком для всех людей, вдохновляя их, и в конечном счёте
          </td>
          <td>tirek.jpg</td>
          <td>https://www.youtube.com/watch?v=aXD7h91Ek2A</td>
          <td>
            <div className={cls.icons}>
              <RiEdit2Fill/>
              <MdDeleteOutline/>
            </div>
          </td>
        </tr>
        <tr>
          <td>4</td>
          <td> CОСТОЯЛОСЬ ЕЖЕГОДНОЕ СОБРАНИЕ ОБЩЕСТВЕННОГО БЛАГОТВОРИТЕЛЬНОГО ФОНДА </td>
          <td className={cls.full_name}> 
            Мы помогаем матерям-одиночкам, детям-сиротам и иным уязвимым группам населения по всему Кыргызстану.  Семь приоритетных направлений нашей деятельности  «Отмеченные лауреаты - гордость нашего народа, которые служат маяком для всех людей, вдохновляя их, и в конечном счёте
          </td>
          <td>tirek.jpg</td>
          <td>https://www.youtube.com/watch?v=aXD7h91Ek2A</td>
          <td>
            <div className={cls.icons}>
              <RiEdit2Fill/>
              <MdDeleteOutline/>
            </div>
          </td>
        </tr>
      </table>
    </div>
  )
}

export default AdminTable
