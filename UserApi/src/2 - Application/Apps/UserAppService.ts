import { injectable, inject } from "inversify";
import { UserModel } from "@models/UserModel";
import {User} from '@aggregates/Users/User/User';
import { IUserAppService } from "@iapps/IUserAppService";
import { IUserService } from "@aggregates/Users/User/Services/IUserService";
import { ApplicationService } from "@apps/Core/ApplicationService";
import { LoginModel } from "@models/LoginModel";

@injectable()
export class UserAppService extends ApplicationService implements IUserAppService
{

    public constructor(
        @inject("UserService")  private _userService:  IUserService
    ) {
        super();
    }
   


    public async InsertUser (user: UserModel): Promise<void>
    {
        await this._userService.InsertUser(user as User);
    }

    public async UpdateUser (user: UserModel): Promise<void>
    {
        await this._userService.UpdateUser(user as User);
    }

    public async DeleteUser (userId: number): Promise<void>
    {
       await this._userService.DeleteUser(userId);
    }

    public async GetById (userId: number): Promise<UserModel> 
    {
        return await this._userService.GetById(userId);
        
    }

    public async GetAll (): Promise<Array<UserModel>>  
    {
        return await this._userService.GetAll();
    }

    public async logar (login: LoginModel): Promise<any>
    {
        return await this._userService.logar(login.login, login.senha);
    }

}
