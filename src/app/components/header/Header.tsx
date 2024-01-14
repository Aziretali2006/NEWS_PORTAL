"use client"

import React from 'react';
import cls from "./Header.module.scss";
import Image from 'next/image';
import ReactFlagsSelect from 'react-flags-select';
import { HeaderList } from '@/app/utils/List';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Container from '../container/Container';
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

const Header = (item: any) => {
  // const router = useRouter();
  const savedSelected = localStorage.getItem('selectedLanguage') || '';
  const [selected, setSelected] = React.useState<string>(savedSelected);
  const [active , setActive] = React.useState<boolean>(false)

  React.useEffect(() => {
    localStorage.setItem('selectedLanguage', selected);
  }, [selected]);

  const classnames: string | string[] = [cls.item ,cls.active]

  return (
    <header className={cls.header}>
      <Container>
        <section className={cls.navbar}>
          <div className={cls.logo_and_language}>
            <Image 
              alt='ENE_balaga_tirek_RU_final' 
              src={"/image/ENE_balaga_tirek_RU_final.png"} 
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
          <div className={active ? Array.isArray(classnames) ? classnames.join(' ') : classnames! : cls.item}>
            {HeaderList.map(item => (
              <Link key={item.id} href={item.to}>
                {item.title}
                {/* <a href="" style={{color: router.pathname === item.to ? "red" : "black"}}></a> */}
              </Link>
            ))}
          </div>
          <button className={cls.btn}>Обратиться</button>
          <div onClick={() => setActive(!active)} className={cls.burger_el}>
            {active ? <IoMdClose size={45}/> : <RxHamburgerMenu size={45}/>}
          </div>
        </section>
      </Container>
    </header>
  )
}

export default Header;
