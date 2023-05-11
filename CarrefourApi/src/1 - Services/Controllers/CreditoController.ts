import 'reflect-metadata';
import { inject } from "inversify";
import * as express from "express";
import { interfaces,response, controller, httpGet, httpPost, request, requestParam, httpPut, httpDelete } from "inversify-express-utils";
import { ApiPath,ApiOperationGet, SwaggerDefinitionConstant, ApiOperationPost, ApiOperationDelete, ApiOperationPut } from "swagger-express-typescript";
import {BaseController} from '@controllers/Core/BaseController';
import {CreditoModel} from '@models/CreditoModel';
import {ICreditoAppService} from '@iapps/ICreditoAppService';

@ApiPath({
    path: "/credito",
    name: "credito",
    security: { basicAuth: [] },
})
@controller("/credito")
export class CreditoController extends BaseController implements interfaces.Controller
{

    public constructor(
        @inject("CreditoAppService") private  _creditoAppService: ICreditoAppService
    ) {
        super();
    }

    @ApiOperationGet({
        path: "/",
        description: "Obter todos os creditos",
        summary: "Obter todos os credito",
        responses: {
            200: { description: "Success", type: SwaggerDefinitionConstant.Response.Type.ARRAY}
        },
        security: {
            apiKeyHeader: []
        }
    })
    @httpGet("/", BaseController.authenticateJWT)
    public async GetCredito( @request() req: express.Request ,@response() res: express.Response)
     {
        try 
        {
            let result = await this._creditoAppService.GetAll();
            return this.SendOk(req, res, result, "");
        } 
        catch (ex)
        {
            return this.SendError(req, res, ex);
        }
    }

    @ApiOperationGet({
        path: "/{id}",
        description: "Obter credito por Id",
        summary: "Obter credito por Id",
        parameters : {
            path: {
                id: {
                    description : "Credito id",
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
    public async GetCreditoById(  @requestParam("id") id : number,
       @request() req: express.Request,
       @response() res: express.Response) 
    {

        try
        {
            let result = await this._creditoAppService.GetById(id);
            return this.SendOk(req, res, result, "");
         } 
        catch (ex)
        {
            return this.SendError(req, res, ex);
        }
    }

    @ApiOperationPost({
        path: "/",
        description: "Inserir credito",
        summary: "Inserir credito",
        parameters: {
            body: { description: "", required: true, model: "CreditoModel" }
        },
        responses: {
            200: { description: "Success" },
            400: { description: "Parameters fail" }
        }
    })
    @httpPost("/", BaseController.authenticateJWT)
    public async InsertCredito(@request() req: express.Request,@response() res: express.Response) 
    {
        try 
        {
            if(!this.IsValid(req)) return this.SendNotFound(req, res, null, "Dados informados inválidos");
            let creditoModel = req.body as CreditoModel;
            await this._creditoAppService.InsertCredito(creditoModel);
            return this.SendOk(req, res, null, "Registro inserido com sucesso!");
        }
        catch (ex) 
        {
            return this.SendError(req, res, ex);
        }
    }

    @ApiOperationPut({
        path: "/",
        description: "Atualizar credito",
        summary: "Atualizar credito",
        parameters: {
            body: { description: "Update Credito", required: true, model: "CreditoModel" }
        },
        responses: {
            200: { description: "Success" },
            400: { description: "Parameters fail" }
        }
    })
    @httpPut("/", BaseController.authenticateJWT)
    public async UpdateCredito(@request() req: express.Request,@response() res: express.Response) 
    {
           try 
           {
               if(!this.IsValid(req)) return this.SendNotFound(req, res, null, "Dados informados inválidos");
               let creditoModel = req.body as CreditoModel;
               await this._creditoAppService.UpdateCredito(creditoModel)
               return this.SendOk(req, res, null, "Registro atualizado com sucesso!");
           } 
           catch (ex)
           {
               return this.SendError(req, res, ex);
           }
    }

    @ApiOperationDelete({
        path: "/",
        description: "Remover credito",
        summary: "Remover credito",
        parameters: {
            body: { description: "Delete Credito", required: true, model: "CreditoModel" }
        },
        responses: {
            200: { description: "Success" },
            400: { description: "Parameters fail" }
        }
    })
    @httpDelete("/", BaseController.authenticateJWT)
    public async DeleteCredito(@request() req: express.Request,@response() res: express.Response): Promise<any> 
    {
        try 
        {
            if(!this.IsValid(req)) return this.SendNotFound(req, res, null, "Dados informados inválidos");
            let creditoModel = req.body as CreditoModel;
            await this._creditoAppService.DeleteCredito(creditoModel.creditoId);
            return this.SendOk(req,res, null, "Regsitro excluido com sucesso");
        } catch (ex) {
            return this.SendError(req,res, ex);
        }
    }
}
