import { UserModel } from "../Models/UserModel";
import { LoginModel } from "../Models/LoginModel";

export interface IUserAppService
{
    InsertUser:(user: UserModel)=> Promise<void>;
    UpdateUser:(user: UserModel)=> Promise<void>;
    DeleteUser:(userId: number)=> Promise<void>;
    GetById:(userId: number)=> Promise<UserModel>;
    GetAll:()=> Promise<Array<UserModel>>;
    logar:(login: LoginModel)=> Promise<any>;
}
