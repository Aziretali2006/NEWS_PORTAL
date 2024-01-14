import React from 'react';
import cls from "./FooterElement.module.scss";

export interface iFooterElement {
  title: string,
  first_li: string,
  second_li: string,
  third_li: string
}

const FooterElement = ({title, first_li, second_li, third_li}: iFooterElement) => {
  return (
    <div className={cls.footer_el}>
      <h2>{title}</h2>
      <div className={cls.line}/>
      <ul>
        <li>{first_li}</li>
        <li>{second_li}</li>
        <li>{third_li}</li>
      </ul>
    </div>
  )
}

export default FooterElement
