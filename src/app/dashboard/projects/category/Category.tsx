"use client"

import React, { FC } from 'react';
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


interface CategoryProps {
  customClass: string;
  categoryContents: Record<string, JSX.Element>;
  customMainClass: string;
}

const Category: FC<CategoryProps> = ({ customClass, categoryContents, customMainClass }) => {
  const dispatch = useAppDispatch();
  const {selectedCategory , anotherPage} = useAppSelector(state => state.ProjectSlice)
  const [isOpen, setIsOpen] = React.useState<boolean>(false)

  const ChooseCategory = (categoryTitle: string) => {
    const newSelectedCategory = selectedCategory === categoryTitle ? null : categoryTitle; // Этот код делает toggle
    dispatch(setCategory(newSelectedCategory));
  };

  return (
    <div className={`${cls.category} ${customMainClass}`}>
      <ul className={`${cls.category_selected} ${customClass}`}>
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
        {(selectedCategory) && categoryContents[selectedCategory]}
      </div>
    </div>
  )
}

export default Category;