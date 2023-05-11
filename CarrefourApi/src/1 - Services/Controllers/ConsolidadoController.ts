import 'reflect-metadata';
import { inject } from "inversify";
import * as express from "express";
import { interfaces,response, controller, httpGet, httpPost, request, requestParam, httpPut, httpDelete } from "inversify-express-utils";
import { ApiPath,ApiOperationGet, SwaggerDefinitionConstant, ApiOperationPost, ApiOperationDelete, ApiOperationPut } from "swagger-express-typescript";
import {BaseController} from '@controllers/Core/BaseController';
import { IConsolidadoAppService } from '@iapps/IConsoliadoAppService.';

@ApiPath({
    path: "/consolidado",
    name: "consolidado",
    security: { basicAuth: [] },
})
@controller("/consolidado")
export class ConsolidadoController extends BaseController implements interfaces.Controller
{

    public constructor(
        @inject("ConsolidadoAppService") private  _consolidadoAppService: IConsolidadoAppService
    ) {
        super();
    }



    @ApiOperationGet({
        path: "/{id}",
        description: "Obter consolidado por data",
        summary: "Obter consolidado por data",
        parameters : {
            path: {
                id: {
                    description : "Data",
                    type : SwaggerDefinitionConstant.Parameter.Type.STRING,
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
    @httpGet('/:data')// , BaseController.authenticateJWT
    public async GetConsolidadoPorData(  @requestParam("data") data : string,
       @request() req: express.Request,
       @response() res: express.Response) 
    {

        try
        {
            let result = await this._consolidadoAppService.GetByData(data);
            return this.SendOk(req, res, result, "");
         } 
        catch (ex)
        {
            return this.SendError(req, res, ex);
        }
    }

   
}
