import 'reflect-metadata';
import { inject } from "inversify";
import * as express from "express";
import { interfaces,response, controller, httpGet, httpPost, request, requestParam, httpDelete, httpPut } from "inversify-express-utils";
import { ApiPath,ApiOperationGet, SwaggerDefinitionConstant, ApiOperationPost, ApiOperationPut, ApiOperationDelete } from "swagger-express-typescript";
import {BaseController} from '@controllers/Core/BaseController';
import {TipoModel} from '@models/TipoModel';
import {ITipoAppService} from '@iapps/ITipoAppService';

@ApiPath({
    path: "/tipo",
    name: "tipo"
})
@controller("/tipo")
export class TipoController extends BaseController implements interfaces.Controller
{

    public constructor(
        @inject("TipoAppService") private  _tipoAppService: ITipoAppService
    ) {
        super();
    }

    @ApiOperationGet({
        path: "/",
        description: "Obter todos os tipos",
        summary: "Obter todos os tipos",
        responses: {
            200: { description: "Success", type: SwaggerDefinitionConstant.Response.Type.ARRAY}
        },
        security: {
            apiKeyHeader: []
        }
    })
    @httpGet("/", BaseController.authenticateJWT)
    public async GetTipo( @request() req: express.Request ,@response() res: express.Response)
     {
        try 
        {
            let result = await this._tipoAppService.GetAll();
            return this.SendOk(req ,res, result, "");
        } 
        catch (ex)
        {
            return this.SendError(req ,res, ex);
        }
    }

    @ApiOperationGet({
        path: "/{id}",
        description: "Obter tipo por Id",
        summary: "Obter tipo por Id",
        parameters : {
            path: {
                id: {
                    description : "Tipo id",
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
    public async GetTipoById(  @requestParam("id") id : number,
       @request() req: express.Request,
       @response() res: express.Response) 
    {

        try
        {
            let result = await this._tipoAppService.GetById(id);
            return this.SendOk(req, res, result, "");
         } 
        catch (ex)
        {
            return this.SendError(req, res, ex);
        }
    }

    @ApiOperationPost({
        path: "/",
        description: "Inserir tipo",
        summary: "Inserir tipo",
        parameters: {
            body: { description: "", required: true, model: "TipoModel" }
        },
        responses: {
            200: { description: "Success" },
            400: { description: "Parameters fail" }
        }
    })
    @httpPost("/", BaseController.authenticateJWT)
    public async InsertTipo(@request() req: express.Request,@response() res: express.Response) 
    {
        try 
        {
            if(!this.IsValid(req)) return this.SendNotFound(req, res, null, "Dados informados inválidos");
            let tipoModel = req.body as TipoModel;
            await this._tipoAppService.InsertTipo(tipoModel);
            return this.SendOk(req, res, null, "Registro inserido com sucesso!");
        }
        catch (ex) 
        {
            return this.SendError(req, res, ex);
        }
    }

    @ApiOperationPut({
        path: "/",
        description: "Atualizar tipo",
        summary: "Atualizar Tipo",
        parameters: {
            body: { description: "Update Tipo", required: true, model: "TipoModel" }
        },
        responses: {
            200: { description: "Success" },
            400: { description: "Parameters fail" }
        }
    })
    @httpPut("/", BaseController.authenticateJWT)
    public async UpdateTipo(@request() req: express.Request,@response() res: express.Response) 
    {
           try 
           {
               if(!this.IsValid(req)) return this.SendNotFound(req, res, null, "Dados informados inválidos");
               let tipoModel = req.body as TipoModel;
               await this._tipoAppService.UpdateTipo(tipoModel)
               return this.SendOk(req, res, null, "Registro atualizado com sucesso!");
           } 
           catch (ex)
           {
               return this.SendError(req, res, ex);
           }
    }

    @ApiOperationDelete({
        path: "/DeleteTipo",
        description: "Deletar tipo",
        summary: "Deletar tipo",
        parameters: {
            body: { description: "Delete Tipo", required: true, model: "TipoModel" }
        },
        responses: {
            200: { description: "Success" },
            400: { description: "Parameters fail" }
        }
    })
    @httpDelete("/", BaseController.authenticateJWT)
    public async DeleteTipo(@request() req: express.Request,@response() res: express.Response) 
    {
        try 
        {
            if(!this.IsValid(req)) return this.SendNotFound(req, res, null, "Dados informados inválidos");
            let tipoModel = req.body as TipoModel;
            await this._tipoAppService.DeleteTipo(tipoModel.tipoId);
            return this.SendOk(req, res, null, "Regsitro excluido com sucesso");
        } catch (ex) {
            return this.SendError(req, res, ex);
        }
    }
}
