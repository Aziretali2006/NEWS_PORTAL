import React from 'react';
import cls from "./Register.module.scss";
import { FaRegUser } from "react-icons/fa";
import { CiLock } from 'react-icons/ci';

const Login = () => {
  return (
    <div className={cls.login}>
      <form>
        <div className={cls.login_name}>
          <FaRegUser />
          <input type='text' placeholder='Имя пользователя'/>
        </div>
        <div className={cls.login_password}>
          <CiLock />
          <input type='password' placeholder='Пароль'/>
        </div>
        <div className={cls.login_btn}>
          <button>Войти</button>
          <a href="">Забыли пароль?</a>
        </div>
      </form>
    </div>
  )
}

export default Login;
