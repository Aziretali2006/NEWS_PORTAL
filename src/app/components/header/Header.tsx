"use client"

import React from 'react';
import Image from 'next/image';
import Container from '../container/Container';
import ReactFlagsSelect from 'react-flags-select';
import { HeaderList } from '@/app/utils/List';
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

import cls from "./Header.module.scss";
import { useRouter } from 'next/navigation';

const Header = () => {
  const savedSelected = localStorage.getItem('selectedLanguage') || '';
  const [selected, setSelected] = React.useState<string>(savedSelected);
  const [active , setActive] = React.useState<boolean>(false);
  const router = useRouter();

  const handleNaigate = () => {
    router.push("/AdminPart/login")
  }

  React.useEffect(() => {
      localStorage.setItem('selectedLanguage', selected);
  }, [selected]);

  return (
    <header className={`${cls.header} ${active ? cls.active : ''}`}>
      <Container>
        <section className={cls.navbar}>
          <div className={cls.logo_and_language}>
            <Image 
              alt='ENE_balaga_tirek_RU_final' 
              src={"/image/ENE_balaga_tirek_RU.png"} 
              width={184} 
              height={67}
              className={cls.img}
            />
            <ReactFlagsSelect
              className={cls.select}
              selected={selected}
              onSelect={(code) => setSelected(code)}
              countries={["US", "RU", "KG"]}
              customLabels={{ US: "US", RU: "RU", KG:"KG" }}
              placeholder="Select Language"
              selectButtonClassName={cls.flags_button}
            />
          </div>
          <ul className={cls.item}>
            {HeaderList.map(item => (
              <li key={item.id} >
                <a className={window.location.pathname === item.to ? cls.active : ''} href={item.to}>{item.title}</a>
              </li>
            ))}
          </ul>
          <button onClick={handleNaigate} className={cls.btn}>Обратиться</button>
          <div onClick={() => setActive(!active)} className={cls.burger_el}>
            {active ? <IoMdClose size={45}/> : <RxHamburgerMenu size={45}/>}
          </div>
        </section>
      </Container>
    </header>
  )
}

export default Header;
