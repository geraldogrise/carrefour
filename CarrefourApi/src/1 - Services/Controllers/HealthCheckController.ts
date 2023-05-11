import 'reflect-metadata';
import * as express from "express";
import { interfaces,response, controller, httpGet, request } from "inversify-express-utils";
import { ApiPath,ApiOperationGet, SwaggerDefinitionConstant } from "swagger-express-typescript";
import {BaseController} from '@controllers/Core/BaseController';

@ApiPath({
    path: "/healthcheck",
    name: "healthcheck"
})
@controller("/healthcheck")
export class HealthCheckController extends BaseController implements interfaces.Controller
{

     public constructor(
    ) {
        super();
    }

    @ApiOperationGet({
        path: "/",
        description: "healthcheck",
        summary: "healthcheck",
        responses: {
            200: { description: "Success", type: SwaggerDefinitionConstant.Response.Type.ARRAY}
        },
        security: {
            apiKeyHeader: []
        }
    })
    @httpGet("/")
    public async ObterHelthCheck( @request() req: express.Request ,@response() res: express.Response)
     {
        const healthcheck = {
            uptime: process.uptime(),
            status: "OK",
            timestamp: Date.now(),
        };
        return this.SendOk(req ,res, healthcheck, "");
        
    }

}
