import { instance } from "../config/config";
import { ILogin, IRegister } from "../interface/IAuthType";
import { RequestPath } from "./RequestPath";


export const POST_REGISTER = (data: IRegister) => instance.post(RequestPath.register, data);

export const GET_USERS = () => instance.get(RequestPath.getUser);

export const POST_LOGIN = (data: ILogin) => instance.post(RequestPath.login , data)