import 'reflect-metadata';
import { inject } from "inversify";
import * as express from "express";
import { interfaces,response, controller, httpGet, httpPost, request, requestParam, httpPut, httpDelete } from "inversify-express-utils";
import { ApiPath,ApiOperationGet, SwaggerDefinitionConstant, ApiOperationPost, ApiOperationPut, ApiOperationDelete } from "swagger-express-typescript";
import {BaseController} from '@controllers/Core/BaseController';
import {DebitoModel} from '@models/DebitoModel';
import {IDebitoAppService} from '@iapps/IDebitoAppService';

@ApiPath({
    path: "/debito",
    name: "debito",
    security: { basicAuth: [] },
})
@controller("/debito")
export class DebitoController extends BaseController implements interfaces.Controller
{

    public constructor(
        @inject("DebitoAppService") private  _debitoAppService: IDebitoAppService
    ) {
        super();
    }

    @ApiOperationGet({
        path: "/",
        description: "Obter todos os debitos",
        summary: "Obter todos os debitos",
        responses: {
            200: { description: "Success", type: SwaggerDefinitionConstant.Response.Type.ARRAY}
        },
        security: {
            apiKeyHeader: []
        }
    })
    @httpGet("/", BaseController.authenticateJWT)
    public async GetDebito( @request() req: express.Request ,@response() res: express.Response)
     {
        try 
        {
            let result = await this._debitoAppService.GetAll();
            return this.SendOk(req ,res, result, "");
        } 
        catch (ex)
        {
            return this.SendError(req , res, ex);
        }
    }

    @ApiOperationGet({
        path: "/{id}",
        description: "Obter debito por Id",
        summary: "Obter debito por Id",
        parameters : {
            path: {
                id: {
                    description : "Debito id",
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
    public async GetDebitoById(  @requestParam("id") id : number,
       @request() req: express.Request,
       @response() res: express.Response) 
    {

        try
        {
            let result = await this._debitoAppService.GetById(id);
            return this.SendOk(req, res, result, "");
         } 
        catch (ex)
        {
            return this.SendError(req ,res, ex);
        }
    }

    @ApiOperationPost({
        path: "/",
        description: "Inserir debito",
        summary: "Inserir debito",
        parameters: {
            body: { description: "", required: true, model: "DebitoModel" }
        },
        responses: {
            200: { description: "Success" },
            400: { description: "Parameters fail" }
        }
    })
    @httpPost("/", BaseController.authenticateJWT)
    public async InsertDebito(@request() req: express.Request,@response() res: express.Response) 
    {
        try 
        {
            if(!this.IsValid(req)) return this.SendNotFound(req, res, null, "Dados informados inválidos");
            let debitoModel = req.body as DebitoModel;
            await this._debitoAppService.InsertDebito(debitoModel);
            return this.SendOk(req ,res, null, "Registro inserido com sucesso!");
        }
        catch (ex) 
        {
            return this.SendError(req ,res, ex);
        }
    }

    @ApiOperationPut({
        path: "/",
        description: "Atualizar debito",
        summary: "Atualizar debito",
        parameters: {
            body: { description: "Update Debito", required: true, model: "DebitoModel" }
        },
        responses: {
            200: { description: "Success" },
            400: { description: "Parameters fail" }
        }
    })
    @httpPut("/", BaseController.authenticateJWT)
    public async UpdateDebito(@request() req: express.Request,@response() res: express.Response) 
    {
           try 
           {
               if(!this.IsValid(req)) return this.SendNotFound(req, res, null, "Dados informados inválidos");
               let debitoModel = req.body as DebitoModel;
               await this._debitoAppService.UpdateDebito(debitoModel)
               return this.SendOk(req ,res, null, "Registro atualizado com sucesso!");
           } 
           catch (ex)
           {
               return this.SendError(req ,res, ex);
           }
    }

    @ApiOperationDelete({
        path: "/",
        description: "Remover debito",
        summary: "Remover debito",
        parameters: {
            body: { description: "Delete Debito", required: true, model: "DebitoModel" }
        },
        responses: {
            200: { description: "Success" },
            400: { description: "Parameters fail" }
        }
    })
    @httpDelete("/", BaseController.authenticateJWT)
    public async DeleteDebito(@request() req: express.Request,@response() res: express.Response) 
    {
        try 
        {
            if(!this.IsValid(req)) return this.SendNotFound(req, res, null, "Dados informados inválidos");
            let debitoModel = req.body as DebitoModel;
            await this._debitoAppService.DeleteDebito(debitoModel.debitoId);
            return this.SendOk(req , res, null, "Regsitro excluido com sucesso");
        } catch (ex) {
            return this.SendError(req , res, ex);
        }
    }
}
