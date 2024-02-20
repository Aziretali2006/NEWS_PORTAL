import { instance } from "../config/config";
import { IAddNews } from "../interface/IAdminType";
import { ILogin, IRegister } from "../interface/IAuthType";
import { RequestPath } from "./RequestPath";


export const POST_REGISTER = (data: IRegister) => instance.post(RequestPath.register, data);

export const GET_USERS = () => instance.get(RequestPath.getUser);

export const POST_LOGIN = (data: ILogin) => instance.post(RequestPath.login , data);

export const LOG_OUT = () => instance.post(RequestPath.logout);

export const ADD_NEWS = (data: IAddNews) => instance.post(RequestPath.addNews, data);

export const GET_NEWS = () => instance.get(RequestPath.getNews);
