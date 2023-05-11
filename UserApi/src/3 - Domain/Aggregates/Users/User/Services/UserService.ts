import { injectable, inject } from "inversify";
const jwt = require('jsonwebtoken');
import {User} from '@aggregates/Users/User/User';
import { IUserService } from "@aggregates/Users/User/Services/IUserService";
import { IUserRepository } from "@aggregates/Users/User/Repository/IUserRepository";

@injectable()
export class UserService implements IUserService
{
 
    public constructor(
        @inject("UserRepository") private _userRepository: IUserRepository
    ) {
    }
  


    public async InsertUser (user: User): Promise<void>
    {
        await this._userRepository.Insert(user as User);
    }

    public async UpdateUser (user: User): Promise<void>
    {
        await this._userRepository.Update(user as User);
    }

    public async DeleteUser (userId: number): Promise<void>
    {
        await this._userRepository.Delete(userId);
    }

    public async GetById (userId: number): Promise<User>
    {
        return  await this._userRepository.GetById(userId);
    }

    public async GetAll (): Promise<Array<User>>
    {
        return await this._userRepository.GetAll();
    }

    public async logar (login: string, senha: string): Promise<any>
    {
        let expiresIn = 3000;
        let user = await this._userRepository.logar(login, senha);
        user.senha = null;
        const token = jwt.sign({ user }, process.env.SECRET || "GRISE", {
            expiresIn: expiresIn 
         });
         const data = 
         {
            token: token,
            expiresIn: expiresIn
         }
         return data;
    }
}

