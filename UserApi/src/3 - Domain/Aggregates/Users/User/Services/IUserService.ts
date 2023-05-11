import { User } from "@aggregates/Users/User/User";

export interface IUserService
{
    InsertUser:(user: User)=> Promise<void>;
    UpdateUser:(user: User)=> Promise<void>;
    DeleteUser:(userId: number)=> Promise<void>;
    GetById:(userId: number)=>  Promise<User>;
    GetAll:()=> Promise<Array<User>>;
    logar:(login: string, senha: string)=> Promise<any>;
}
