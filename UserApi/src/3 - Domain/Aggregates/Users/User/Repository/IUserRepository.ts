import {User} from '@aggregates/Users/User/User'; 
import { IRepository } from "@irepository/IRepository";

export interface IUserRepository extends IRepository<User>
{
    GetById:(userId: number)=>  Promise<User>;

    logar:(login: string, senha: string)=> Promise<any>;
}