"use client"

import React from 'react';
import cls from "./Category.module.scss"
import { CategoryList } from '@/app/utils/CategoryList';
import Select from 'react-select';
import { ICategoryList } from '@/app/interface/HeaderType';

const options: { value: string; label: string }[] = CategoryList.map((item) => ({
  value: item.title,
  label: item.title,
}));

const Category = () => {
  const [selectedCategory, setSelectedCategory] = React.useState<string | null>(null);
  const [isOpen, setIsOpen] = React.useState<boolean>(false)
  // const [selectedOption, setSelectedOption] = React.useState<string | null>(null);

  const categoryContent: Record<string, JSX.Element> = {
    'Образование': <div><h2>HEllO</h2></div>,
    'Здравоохранение': <div><h2>AZIRETALI</h2></div>,
    'Экология': <div><h2>Sharapov</h2></div>,
    'Культура': <div><h2>Культура</h2></div>,
    'Наука': <div><h2>наука</h2></div>,
    'Правовая защита': <div><h2>Правовая защита</h2></div>,
    'Экономическая благосостояние': <div><h2>Экономическая балогосостояние</h2></div>
  };

  function ChooseCategory(categoryTitle: string) {
    setSelectedCategory((prevSelectedCategory) => {
      setIsOpen(false)
      return prevSelectedCategory === categoryTitle ? null : categoryTitle;
    });
  }

  function ShowAll() {
    setIsOpen(true)
    setSelectedCategory(null)
  }

  return (
    <div className={cls.category}>
      <ul className={cls.category_selected}>
      <Select
        className={cls.select}
        defaultValue={selectedCategory ? { value: selectedCategory, label: selectedCategory } : null}
        onChange={(selectedOptionValue: { value: string; label: string } | null) => {
          setSelectedCategory(selectedOptionValue?.value || null);
        }}
        options={options}
        styles={{
          option: (provided, state) => ({
            ...provided,
            backgroundColor: state.isSelected ? '#14AD02' : provided.backgroundColor,
            color: state.isSelected ? 'white' : provided.color, // Измените цвет текста, если элемент выбран
          }),
        }}
      />
        {isOpen === false &&  CategoryList.map((item) => (
          <li
            className={`${cls.item} ${selectedCategory === item.title && cls.active} ${isOpen && cls.showAll}`}
            key={item.id}
            onClick={() => ChooseCategory(item.title)}
          >
            {item.title}
          </li>
        ))}
      </ul>
      <div className={cls.category_content}>
        {selectedCategory && categoryContent[selectedCategory]}
      </div>
    </div>
  )
}

export default Category;