import { instance } from "../config/config";
import { IAddNews, IAddPhoto, IAddProjects } from "../interface/IAdminType";
import { ILogin, IRegister } from "../interface/IAuthType";
import { AdminPath, AuthorizationPath, ClientPath } from "./RequestPath";


export const POST_REGISTER = (data: IRegister) => instance.post(AuthorizationPath.register, data);

export const GET_USERS = () => instance.get(AuthorizationPath.getUser);

export const POST_LOGIN = (data: ILogin) => instance.post(AuthorizationPath.login , data);

export const LOG_OUT = () => instance.post(AuthorizationPath.logout);

export const ADD_NEWS = (data: IAddNews) => instance.post(AdminPath.addNews, data);

export const GET_NEWS = () => instance.get(AdminPath.getNews);

export const ADD_PROJECTS = (data: IAddProjects) => instance.post(AdminPath.addProjects , data);

export const ADD_PHOTO = (data: IAddPhoto) => instance.post(AdminPath.addPhoto, data)

export const ADD_INFO = (info) => instance.post(ClientPath.addInfo , info);