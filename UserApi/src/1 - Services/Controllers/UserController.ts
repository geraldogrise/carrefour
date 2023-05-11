import 'reflect-metadata';
import { inject } from "inversify";
import * as express from "express";
import { interfaces,response, controller, httpGet, httpPost, request, requestParam, httpPut, httpDelete } from "inversify-express-utils";
import { ApiPath,ApiOperationGet, SwaggerDefinitionConstant, ApiOperationPost, ApiOperationDelete, ApiOperationPut } from "swagger-express-typescript";
import {BaseController} from '@controllers/Core/BaseController';
import {UserModel} from '@models/UserModel';
import {IUserAppService} from '@iapps/IUserAppService';
import { LoginModel } from '@models/LoginModel';

@ApiPath({
    path: "/user",
    name: "user"
})
@controller("/user")
export class UserController extends BaseController implements interfaces.Controller
{
    public constructor(
        @inject("UserAppService") private  _userAppService: IUserAppService
    ) {
        super();
    }

    @ApiOperationGet({
        path: "/",
        description: "Obter todos os usuários",
        summary: "Obter todos os usuários",
        responses: {
            200: { description: "Success", type: SwaggerDefinitionConstant.Response.Type.ARRAY}
        },
        security: {
            apiKeyHeader: []
        }
    })
    @httpGet("/", BaseController.authenticateJWT)
    public async GetUser( @request() req: express.Request ,@response() res: express.Response): Promise<any>
     {
        try 
        {
            let result = await this._userAppService.GetAll();
            return this.SendOk(req, res, result, "");
        } 
        catch (ex)
        {
            return this.SendError(req, res, ex);
        }
    }

    @ApiOperationGet({
        path: "/{id}",
        description: "Obter User por Id",
        summary: "Obter User por Id",
        parameters : {
            path: {
                id: {
                    description : "User id",
                    type : SwaggerDefinitionConstant.Parameter.Type.NUMBER,
                    required : true
                }
            },
        },
        responses: {
            200: { description: "Success", type: SwaggerDefinitionConstant.Response.Type.OBJECT}
        },
        security: {
            apiKeyHeader: []
        }
    })
    @httpGet('/:id', BaseController.authenticateJWT)
    public async GetUserById(  @requestParam("id") id : number,
       @request() req: express.Request,
       @response() res: express.Response) 
    {

        try
        {
            let result = await this._userAppService.GetById(id);
            return this.SendOk(req, res, result, "");
         } 
        catch (ex)
        {
            return this.SendError(req, res, ex);
        }
    }

    @ApiOperationPost({
        path: "/",
        description: "Inserir User",
        summary: "Inserir User",
        parameters: {
            body: { description: "", required: true, model: "UserModel" }
        },
        responses: {
            200: { description: "Success" },
            400: { description: "Parameters fail" }
        }
    })
    @httpPost("/", BaseController.authenticateJWT)
    public async InsertUser(@request() req: express.Request,@response() res: express.Response) 
    {
        try 
        {
            if(!this.IsValid(req)) return this.SendNotFound(req, res, null, "Dados informados inválidos");
            let UserModel = req.body as UserModel;
            await this._userAppService.InsertUser(UserModel);
            return this.SendOk(req, res, null, "Registro inserido com sucesso!");
        }
        catch (ex) 
        {
            return this.SendError(req, res, ex);
        }
    }

    @ApiOperationPut({
        path: "/",
        description: "Atualizar User",
        summary: "Atualizar User",
        parameters: {
            body: { description: "Update User", required: true, model: "UserModel" }
        },
        responses: {
            200: { description: "Success" },
            400: { description: "Parameters fail" }
        }
    })
    @httpPut("/", BaseController.authenticateJWT)
    public async UpdateUser(@request() req: express.Request,@response() res: express.Response) 
    {
           try 
           {
               if(!this.IsValid(req)) return this.SendNotFound(req, res, null, "Dados informados inválidos");
               let UserModel = req.body as UserModel;
               await this._userAppService.UpdateUser(UserModel)
               return this.SendOk(req, res, null, "Registro atualizado com sucesso!");
           } 
           catch (ex)
           {
               return this.SendError(req, res, ex);
           }
    }

    @ApiOperationDelete({
        path: "/",
        description: "Remover User",
        summary: "Remover User",
        parameters: {
            body: { description: "Delete User", required: true, model: "UserModel" }
        },
        responses: {
            200: { description: "Success" },
            400: { description: "Parameters fail" }
        }
    })
    @httpDelete("/", BaseController.authenticateJWT)
    public async DeleteUser(@request() req: express.Request,@response() res: express.Response): Promise<any> 
    {
        try 
        {
            if(!this.IsValid(req)) return this.SendNotFound(req, res, null, "Dados informados inválidos");
            let UserModel = req.body as UserModel;
            await this._userAppService.DeleteUser(UserModel.userId);
            return this.SendOk(req,res, null, "Regsitro excluido com sucesso");
        } catch (ex) {
            return this.SendError(req,res, ex);
        }
    }

    @ApiOperationPost({
        path: "/signin",
        description: "signin",
        summary: "Signin",
        parameters: {
            body: { description: "", required: true, model: "LoginModel" }
        },
        responses: {
            200: { description: "Success" },
            400: { description: "Parameters fail" }
        }
    })
    @httpPost("/signin")
    public async Logar(@request() req: express.Request,@response() res: express.Response) 
    {
        try 
        {
            if(!this.IsValid(req)) return this.SendNotFound(req, res, null, "Dados informados inválidos");
            let loginModel = req.body as LoginModel;
            let result = await this._userAppService.logar(loginModel);
            return this.SendOk(req, res, result, "Usuário logado com sucesso!");
        }
        catch (ex) 
        {
            return this.SendError(req, res, ex);
        }
    }
}
function Authorize(arg0: { Roles: string[]; }) {
    throw new Error('Function not implemented.');
}

