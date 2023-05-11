import "reflect-metadata";
import { Container } from "inversify";
import { UserAppService } from "@apps/UserAppService";
import { IUserAppService } from "@iapps/IUserAppService";
import { UserService } from "@aggregates/Users/User/Services/UserService";
import { IUserService } from "@aggregates/Users/User/Services/IUserService";
import { UserRepository } from "@repository/UserRepository";
import { IUserRepository } from "@aggregates/Users/User/Repository/IUserRepository";




export class BootStrapper
{
    public static RegisterServices(container: Container): void
    {
        /* --------------- Application -----------------------*/
        container.bind<IUserAppService>('UserAppService').to(UserAppService);
 
        /* --------------- Domain -----------------------*/
        container.bind<IUserService>('UserService').to(UserService);
     
        /* --------------- Data -----------------------*/
        container.bind<IUserRepository>('UserRepository').to(UserRepository);
    }


}
