
import React, { ReactNode } from 'react';
import cls from "./Container.module.css";

const Container = ({children}: { children: ReactNode }) => 
  <div className={cls.container}>{children}</div>

export default Container;
