
import {  injectable } from "inversify";
import { User } from '@aggregates/Users/User/User';
import {IUserRepository} from '@aggregates/Users/User/Repository/IUserRepository';
import {GenericRepository} from '@core/GenericRepository';

@injectable()
export class UserRepository extends GenericRepository<User> implements IUserRepository
{
    constructor()
    {
        super(User);
    }

    public async GetById (id: any): Promise<any>
    {
        return await super.GetByFilter({"userId": id});
    }

    public async logar (login: string, senha: string): Promise<any>
    {
        return await super.GetByFilter({"login": login, "senha": senha});
    }
}

