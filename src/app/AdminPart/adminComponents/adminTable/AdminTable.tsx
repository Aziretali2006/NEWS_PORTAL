"use client"

import React, { FC } from 'react'
import { setEditableRowIndex, setEditedRow } from '@/app/store/AdminNewsSlice';
import { useAppDispatch, useAppSelector } from '@/app/hook/reduxHooks';
import { RiEdit2Fill } from "react-icons/ri";
import { MdDeleteOutline } from "react-icons/md";
import { AiOutlineCheck } from "react-icons/ai";

import cls from "./AdminTable.module.scss"; 

interface IProps {
  columns: string[];
  rows: string[][];
}

const AdminTable: FC<IProps> = ({columns, rows}) => {
  const {editableRowIndex, editedRow} = useAppSelector(state => state.AdminNewsSlice);
  const dispatch = useAppDispatch();

  const handleEditRow = (rowIndex: number) => {
    dispatch(setEditableRowIndex(rowIndex))
    dispatch(setEditedRow(rows[rowIndex]))
  };

  const handleSave = () => {
    dispatch(setEditableRowIndex(null));
    dispatch(setEditedRow([]));
  };

  const handleInputChange = (value: string, index: number) => {
    const updatedRow = [...editedRow];
    updatedRow[index] = value;
    dispatch(setEditedRow(updatedRow))
  };

  return (
    <div className={cls.adminTable}>
      <table>
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th key={index}>{column}</th>
            ))}
            <th className={cls.actionCell}>Действие</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex} className={cellIndex === 2 ? cls.textCell : ''}>
                  {editableRowIndex === rowIndex ? (
                    <input
                      className={cls.input}
                      type="text"
                      value={editedRow[cellIndex]}
                      onChange={(e) => handleInputChange(e.target.value, cellIndex)}
                    />
                  ) : (
                    cell
                  )}
                </td>
              ))}
              <td className={cls.icons}>
                {editableRowIndex === rowIndex ? (
                  <AiOutlineCheck onClick={handleSave}/>
                ) : (
                  <RiEdit2Fill onClick={() => handleEditRow(rowIndex)} />
                )}
                <MdDeleteOutline />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminTable