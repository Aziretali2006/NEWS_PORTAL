"use client"

import React from 'react';
import Select from 'react-select';
import EducationComponent from '@/app/components/categoryComponents/educationComp/EducationComponent';
import { CategoryList } from '@/app/utils/CategoryList';
import { useAppDispatch, useAppSelector } from '@/app/hook/reduxHooks';
import { setCategory } from '@/app/store/ProjectSlice';

import cls from "./Category.module.scss"

const options: { value: string; label: string }[] = CategoryList.map((item) => ({
  value: item.title,
  label: item.title,
}));

const Category = () => {
  const dispatch = useAppDispatch();
  const {selectedCategory} = useAppSelector(state => state.ProjectSlice)
  const [isOpen, setIsOpen] = React.useState<boolean>(false)

  const categoryContent: Record<string, JSX.Element> = {
    'Образование': <EducationComponent />,
    'Здравоохранение': <div><h2>AZIRETALI</h2></div>,
    'Экология': <div><h2>Sharapov</h2></div>,
    'Культура': <div><h2>Культура</h2></div>,
    'Наука': <div><h2>наука</h2></div>,
    'Правовая защита': <div><h2>Правовая защита</h2></div>,
    'Экономическая благосостояние': <div><h2>Экономическая балогосостояние</h2></div>
  };

  const ChooseCategory = (categoryTitle: string) => {
    const newSelectedCategory = selectedCategory === categoryTitle ? null : categoryTitle; // Этот код делает toggle
    dispatch(setCategory(newSelectedCategory));
  };

  return (
    <div className={cls.category}>
      <ul className={cls.category_selected}>
        <Select
          className={cls.select}
          defaultValue={selectedCategory ? { value: selectedCategory, label: selectedCategory } : null}
          onChange={(selectedOptionValue: { value: string; label: string } | null) => {
            dispatch(setCategory(selectedOptionValue?.value || null));
          }}
          options={options}
          styles={{
            option: (provided, state) => ({
              ...provided,
              backgroundColor: state.isSelected ? '#14AD02' : provided.backgroundColor,
              color: state.isSelected ? 'white' : provided.color,
            }),
          }}
        />
        {(isOpen === false) &&  CategoryList.map((item) => (
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