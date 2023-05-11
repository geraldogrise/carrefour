import * as express from "express";
import { ParamsDictionary } from "express-serve-static-core";
import { injectable } from "inversify";
import { interfaces} from "inversify-express-utils";
import { ParsedQs } from "qs";
import { TokenService } from "../Token/TokenService";

@injectable()
export class CustomAuthProvider implements interfaces.AuthProvider 
{
   
      
    public async  getUser(req: express.Request<ParamsDictionary, any, any, ParsedQs>, res: express.Response<any>, next: express.NextFunction): Promise<interfaces.Principal> {
       
       const tokenService = new TokenService();
       const result =  tokenService.verifyJWT(req);
       const principal = new Principal(result.data);
       return principal;

    }
    
}

class Principal implements interfaces.Principal 
{
    details: any;
    public constructor(details: any) 
    {
        this.details = details;
    }

    isAuthenticated(): Promise<boolean> 
    {
      return this.details.auth;
    }

    isResourceOwner(resourceId: any): Promise<boolean> 
    {
        return Promise.resolve(true);
    }

    isInRole(role: string): Promise<boolean> 
    {
        return Promise.resolve(true);
    }


}